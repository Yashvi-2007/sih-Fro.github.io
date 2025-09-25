// BuyerDashboard.jsx
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

// Contract Configuration
const CONTRACT_ADDRESS = "0x1520b2965264e0B6Cf6260B345812656d55De16d";
const REGULATORY_WALLET = "0x5A37BB96Fbc1a6253e1EC47fb07b9560546228c3";

// ABI for buyer functions
const BUYER_ABI = [
  // Basic ERC-20 functions
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function decimals() view returns (uint8)",
  "function balanceOf(address) view returns (uint256)",
  "function totalSupply() view returns (uint256)",
  
  // Buyer functions
  "function transfer(address to, uint256 amount) returns (bool)",
  "function transferFrom(address from, address to, uint256 amount) returns (bool)",
  "function approve(address spender, uint256 amount) returns (bool)",
  "function allowance(address owner, address spender) view returns (uint256)",
  
  // Events
  "event Transfer(address indexed from, address indexed to, uint256 value)",
  "event Approval(address indexed owner, address indexed spender, uint256 value)"
];

const BuyerDashboard = () => {
  // State management
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  
  // Balances and stats
  const [ethBalance, setEthBalance] = useState("0");
  const [tokenBalance, setTokenBalance] = useState("0");
  const [gasFee, setGasFee] = useState("0");
  
  // Transaction data
  const [transactionHistory, setTransactionHistory] = useState([]);
  
  // Analytics
  const [totalReceived, setTotalReceived] = useState("0");
  const [totalBurned, setTotalBurned] = useState("0");
  const [totalTransferred, setTotalTransferred] = useState("0");
  
  // Token info
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [error, setError] = useState("");

  // Check if MetaMask is installed
  const isMetaMaskInstalled = () => {
    return typeof window.ethereum !== 'undefined';
  };

  // Connect to MetaMask
  const connectWallet = async () => {
    try {
      setError("");

      if (!isMetaMaskInstalled()) {
        setError("MetaMask extension not found. Please install MetaMask first.");
        return;
      }

      const accounts = await window.ethereum.request({ 
        method: "eth_requestAccounts" 
      });
      
      const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
      const web3Signer = web3Provider.getSigner();
      const connectedAccount = accounts[0];

      // Check if connected to Sepolia
      const network = await web3Provider.getNetwork();
      if (network.chainId !== 11155111) {
        setError("Please switch to Sepolia network in MetaMask");
        
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0xaa36a7' }],
          });
        } catch (switchError) {
          if (switchError.code === 4902) {
            try {
              await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [{
                  chainId: '0xaa36a7',
                  chainName: 'Sepolia Test Network',
                  rpcUrls: ['https://sepolia.infura.io/v3/'],
                  blockExplorerUrls: ['https://sepolia.etherscan.io/'],
                  nativeCurrency: {
                    name: 'Sepolia Ether',
                    symbol: 'SEP',
                    decimals: 18
                  }
                }],
              });
            } catch (addError) {
              setError("Failed to add Sepolia network: " + addError.message);
            }
          }
        }
        return;
      }

      setProvider(web3Provider);
      setSigner(web3Signer);
      setAccount(connectedAccount);

      // Initialize contract
      const buyerContract = new ethers.Contract(CONTRACT_ADDRESS, BUYER_ABI, web3Provider);
      setContract(buyerContract);

      // Load initial data
      await loadWalletData(web3Provider, buyerContract, connectedAccount);
      await loadTransactionHistory(buyerContract, web3Provider, connectedAccount);
      await calculateAnalytics(transactionHistory);

    } catch (error) {
      console.error("Error connecting wallet:", error);
      setError("Failed to connect wallet: " + error.message);
    }
  };

  // Load wallet balances and data
  const loadWalletData = async (prov = provider, contractInst = contract, buyerAddress = account) => {
    if (!prov || !contractInst || !buyerAddress) return;

    try {
      // Load ETH balance
      const ethBal = await prov.getBalance(buyerAddress);
      setEthBalance(ethers.utils.formatEther(ethBal));

      // Load token balance
      const tokenBal = await contractInst.balanceOf(buyerAddress);
      const decimals = await contractInst.decimals().catch(() => 18);
      setTokenBalance(ethers.utils.formatUnits(tokenBal, decimals));

      // Load token symbol
      const symbol = await contractInst.symbol();
      setTokenSymbol(symbol);

      // Estimate gas fee
      const gasPrice = await prov.getGasPrice();
      const estimatedGas = ethers.BigNumber.from(21000);
      const estimatedFee = gasPrice.mul(estimatedGas);
      setGasFee(ethers.utils.formatEther(estimatedFee));

    } catch (error) {
      console.error("Error loading wallet data:", error);
      setError("Error loading wallet data: " + error.message);
    }
  };

  // Load transaction history
  const loadTransactionHistory = async (contractInst = contract, prov = provider, buyerAddress = account) => {
    if (!contractInst || !prov || !buyerAddress) return;

    try {
      const currentBlock = await prov.getBlockNumber();
      const fromBlock = Math.max(0, currentBlock - 50000); // Last 50k blocks

      // Get all transfers involving the buyer
      const transferEvents = await contractInst.queryFilter(
        contractInst.filters.Transfer(),
        fromBlock
      );

      const buyerHistory = transferEvents
        .filter(event => 
          event.args.from.toLowerCase() === buyerAddress.toLowerCase() || 
          event.args.to.toLowerCase() === buyerAddress.toLowerCase()
        )
        .map(event => {
          const isIncoming = event.args.to.toLowerCase() === buyerAddress.toLowerCase();
          const isBurn = event.args.to === ethers.constants.AddressZero; // Burn address
          const isOutgoing = event.args.from.toLowerCase() === buyerAddress.toLowerCase() && !isBurn;
          
          let type = "UNKNOWN";
          if (isIncoming) type = "RECEIVED";
          if (isOutgoing) type = "SENT";
          if (isBurn) type = "BURNED";

          return {
            hash: event.transactionHash,
            type: type,
            from: event.args.from,
            to: event.args.to,
            amount: ethers.utils.formatUnits(event.args.value, 18),
            symbol: tokenSymbol,
            timestamp: "On-chain",
            status: "Confirmed",
            block: event.blockNumber,
            date: new Date().toLocaleDateString()
          };
        })
        .sort((a, b) => (b.block || 0) - (a.block || 0));

      setTransactionHistory(buyerHistory);
      await calculateAnalytics(buyerHistory);

    } catch (error) {
      console.error("Error loading transaction history:", error);
      setError("Error loading transaction history: " + error.message);
    }
  };

  // Calculate analytics from transaction history
  const calculateAnalytics = (transactions = transactionHistory) => {
    let received = 0;
    let burned = 0;
    let transferred = 0;

    transactions.forEach(tx => {
      const amount = parseFloat(tx.amount);
      switch (tx.type) {
        case "RECEIVED":
          received += amount;
          break;
        case "BURNED":
          burned += amount;
          break;
        case "SENT":
          transferred += amount;
          break;
      }
    });

    setTotalReceived(received.toFixed(4));
    setTotalBurned(burned.toFixed(4));
    setTotalTransferred(transferred.toFixed(4));
  };

  // Export transaction history to CSV
  const exportToCSV = () => {
    if (transactionHistory.length === 0) {
      alert("No transaction history to export");
      return;
    }

    const headers = ["Type", "From", "To", "Amount", "Token", "Block", "Date", "Status"];
    const csvData = transactionHistory.map(tx => [
      tx.type,
      tx.from,
      tx.to,
      tx.amount,
      tx.symbol,
      tx.block,
      tx.date,
      tx.status
    ]);

    const csvContent = [
      headers.join(","),
      ...csvData.map(row => row.join(","))
    ].join("\n");

    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `carbon-credits-history-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  // Export to PDF (simple version)
  const exportToPDF = () => {
    if (transactionHistory.length === 0) {
      alert("No transaction history to export");
      return;
    }

    // Create a simple printable version
    const printWindow = window.open('', '_blank');
    const content = `
      <html>
        <head>
          <title>Carbon Credits Transaction History</title>
          <style>
            body { font-family: Arial, sans-serif; margin: 20px; }
            table { width: 100%; border-collapse: collapse; }
            th, td { border: 1px solid #ddd; padding: 8px; text-align: left; }
            th { background-color: #f2f2f2; }
            .header { text-align: center; margin-bottom: 20px; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Carbon Credits Transaction History</h1>
            <p>Buyer: ${account}</p>
            <p>Generated: ${new Date().toLocaleString()}</p>
          </div>
          <table>
            <thead>
              <tr>
                <th>Type</th>
                <th>From</th>
                <th>To</th>
                <th>Amount</th>
                <th>Block</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              ${transactionHistory.map(tx => `
                <tr>
                  <td>${tx.type}</td>
                  <td>${tx.from.slice(0, 10)}...</td>
                  <td>${tx.to.slice(0, 10)}...</td>
                  <td>${tx.amount} ${tx.symbol}</td>
                  <td>${tx.block}</td>
                  <td>${tx.date}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </body>
      </html>
    `;
    
    printWindow.document.write(content);
    printWindow.document.close();
    printWindow.print();
  };

  // Refresh data
  const refreshData = async () => {
    if (provider && contract && account) {
      await loadWalletData();
      await loadTransactionHistory();
    }
  };

  // Auto-refresh data
  useEffect(() => {
    const loadData = async () => {
      if (provider && contract && account) {
        await loadWalletData();
        await loadTransactionHistory();
      }
    };

    loadData();
    
    const interval = setInterval(() => {
      loadData();
    }, 30000);
    
    return () => clearInterval(interval);
  }, [provider, contract, account]);

  // Short address formatter
  const shortAddress = (addr) => addr ? `${addr.slice(0, 6)}...${addr.slice(-4)}` : "";

  return (
    <div className="min-h-screen bg-gray-800 text-green-200 p-4">
      <div className="max-w-8xl mx-auto">
        {/* Error Display */}
        {error && (
          <div className="mb-4 p-4 bg-red-900 border border-red-700 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="text-red-200">{error}</span>
              <button 
                onClick={() => setError("")}
                className="text-red-300 hover:text-white"
              >
                ×
              </button>
            </div>
          </div>
        )}

        {/* Header */}
        <header className="flex justify-between items-center mb-8 p-4 bg-gray-900 rounded-lg">
          <div>
            <h1 className="text-2xl font-bold">💰 Buyer Dashboard</h1>
            <p className="text-green-400">Sepolia Testnet - Carbon Credit Management</p>
          </div>
          
          {!account ? (
            <div className="text-center">
              <button
                onClick={connectWallet}
                className="bg-green-600 hover:bg-green-500 text-black px-6 py-2 rounded font-bold"
              >
                {isMetaMaskInstalled() ? "Connect Wallet" : "Install MetaMask"}
              </button>
            </div>
          ) : (
            <div className="text-right">
              <p className="text-sm">Buyer: {shortAddress(account)}</p>
              <p className="text-xs text-green-400">Carbon Credit Holder</p>
            </div>
          )}
        </header>

        {/* Show installation instructions if MetaMask not installed */}
        {!isMetaMaskInstalled() && !account && (
          <div className="bg-yellow-900 border border-yellow-700 p-6 rounded-lg mb-6">
            <h2 className="text-xl font-bold mb-2">📋 Installation Required</h2>
            <p className="mb-4">To use this dashboard, you need to install MetaMask:</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Go to <a href="https://metamask.io/download.html" target="_blank" rel="noopener noreferrer" className="text-blue-300 underline">MetaMask download page</a></li>
              <li>Install the extension for your browser</li>
              <li>Create a new wallet or import existing one</li>
              <li>Switch to Sepolia Test Network</li>
              <li>Connect your wallet</li>
            </ol>
          </div>
        )}

        {/* Only show dashboard content if wallet is connected */}
        {account ? (
          <>
            {/* Analytics Section */}
            <section className="grid md:grid-cols-4 gap-6 mb-8">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-green-400 text-sm">Current Balance</h3>
                <p className="text-2xl font-bold">{parseFloat(tokenBalance).toFixed(4)} {tokenSymbol}</p>
                <p className="text-xs text-green-300">Available Credits</p>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-green-400 text-sm">Total Received</h3>
                <p className="text-2xl font-bold">{totalReceived} {tokenSymbol}</p>
                <p className="text-xs text-green-300">From NGOs</p>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-green-400 text-sm">Total Burned</h3>
                <p className="text-2xl font-bold">{totalBurned} {tokenSymbol}</p>
                <p className="text-xs text-green-300">Retired Credits</p>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-green-400 text-sm">Total Transferred</h3>
                <p className="text-2xl font-bold">{totalTransferred} {tokenSymbol}</p>
                <p className="text-xs text-green-300">Sent to Others</p>
              </div>
            </section>

            {/* Wallet Info and Export Section */}
            <section className="grid lg:grid-cols-3 gap-6 mb-8">
              {/* Wallet Info */}
              <div className="bg-gray-900 p-6 rounded-lg lg:col-span-1">
                <h2 className="text-xl font-bold mb-4">👤 Buyer Wallet</h2>
                
                <div className="space-y-3">
                  <div>
                    <label className="text-green-400 text-sm">Address</label>
                    <p className="font-mono text-sm break-all">{account}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-green-400 text-sm">ETH Balance</label>
                      <p className="text-lg font-bold">{parseFloat(ethBalance).toFixed(6)} ETH</p>
                    </div>
                    
                    <div>
                      <label className="text-green-400 text-sm">Token Balance</label>
                      <p className="text-lg font-bold">{parseFloat(tokenBalance).toFixed(4)} {tokenSymbol}</p>
                    </div>
                  </div>

                  <div>
                    <label className="text-green-400 text-sm">Gas Fee Estimate</label>
                    <p className="text-sm">{parseFloat(gasFee).toFixed(6)} ETH</p>
                  </div>

                  <div>
                    <label className="text-green-400 text-sm">Contract</label>
                    <p className="font-mono text-xs break-all">{CONTRACT_ADDRESS}</p>
                  </div>
                </div>
              </div>

              {/* Export Controls */}
              <div className="bg-gray-900 p-6 rounded-lg lg:col-span-2">
                <h2 className="text-xl font-bold mb-4">📊 Analytics & Export</h2>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-green-400 text-lg mb-3">Credit Summary</h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span>Net Credits:</span>
                        <span className="font-bold">{(parseFloat(totalReceived) - parseFloat(totalBurned) - parseFloat(totalTransferred)).toFixed(4)} {tokenSymbol}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Transaction Count:</span>
                        <span className="font-bold">{transactionHistory.length}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Received Transactions:</span>
                        <span className="font-bold">{transactionHistory.filter(tx => tx.type === "RECEIVED").length}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Active Since:</span>
                        <span className="font-bold">
                          {transactionHistory.length > 0 
                            ? transactionHistory[transactionHistory.length - 1].date 
                            : "No activity"
                          }
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-green-400 text-lg mb-3">Export Data</h3>
                    <div className="space-y-3">
                      <button
                        onClick={exportToCSV}
                        disabled={transactionHistory.length === 0}
                        className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-gray-600 text-white py-3 rounded font-bold"
                      >
                        📥 Export to CSV
                      </button>
                      
                      <button
                        onClick={exportToPDF}
                        disabled={transactionHistory.length === 0}
                        className="w-full bg-red-600 hover:bg-red-500 disabled:bg-gray-600 text-white py-3 rounded font-bold"
                      >
                        📄 Generate PDF Report
                      </button>
                      
                      <button
                        onClick={refreshData}
                        className="w-full bg-green-600 hover:bg-green-500 text-black py-3 rounded font-bold"
                      >
                        🔄 Refresh Data
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Transaction History */}
            <section className="bg-gray-900 p-6 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">📋 Transaction History</h2>
                <span className="text-green-400">
                  {transactionHistory.length} transactions found
                </span>
              </div>
              
              {transactionHistory.length === 0 ? (
                <p className="text-green-400 text-center py-8">No transactions yet. Credits received from NGOs will appear here.</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-700">
                        <th className="text-left p-3">Type</th>
                        <th className="text-left p-3">From</th>
                        <th className="text-left p-3">To</th>
                        <th className="text-left p-3">Amount</th>
                        <th className="text-left p-3">Block</th>
                        <th className="text-left p-3">Date</th>
                        <th className="text-left p-3">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactionHistory.map((tx, index) => (
                        <tr key={index} className="border-b border-gray-800 hover:bg-gray-800">
                          <td className="p-3">
                            <span className={`px-2 py-1 rounded text-xs ${
                              tx.type === "RECEIVED" ? "bg-green-800 text-green-200" : 
                              tx.type === "BURNED" ? "bg-red-800 text-red-200" : 
                              "bg-blue-800 text-blue-200"
                            }`}>
                              {tx.type}
                            </span>
                          </td>
                          <td className="p-3 font-mono text-sm">{shortAddress(tx.from)}</td>
                          <td className="p-3 font-mono text-sm">{shortAddress(tx.to)}</td>
                          <td className="p-3 font-bold">
                            {tx.amount} {tx.symbol}
                          </td>
                          <td className="p-3 text-sm">{tx.block}</td>
                          <td className="p-3 text-sm">{tx.date}</td>
                          <td className="p-3">
                            <span className="px-2 py-1 rounded text-xs bg-green-800 text-green-200">
                              {tx.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          </>
        ) : (
          // Show connection prompt if MetaMask is installed but not connected
          isMetaMaskInstalled() && (
            <div className="bg-gray-900 p-8 rounded-lg text-center">
              <h2 className="text-xl font-bold mb-4">🔐 Connect Your Wallet</h2>
              <p className="mb-4">Connect your wallet to view your carbon credit balance and transaction history.</p>
              <button
                onClick={connectWallet}
                className="bg-green-600 hover:bg-green-500 text-black px-8 py-3 rounded font-bold text-lg"
              >
                Connect Wallet
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default BuyerDashboard;