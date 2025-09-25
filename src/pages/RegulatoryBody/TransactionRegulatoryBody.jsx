// RegulatoryDashboard.jsx
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

// Regulatory Wallet Configuration
const REGULATORY_WALLET = "0x10030f6739c216985aDF8EE1FE5ec677bF806cCc"; // Fixed regulatory wallet
const CONTRACT_ADDRESS = "0x1520b2965264e0B6Cf6260B345812656d55De16d"; // Your contract address

// Extended ABI for regulatory functions
const REGULATORY_ABI = [
  // Basic ERC-20 functions
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function decimals() view returns (uint8)",
  "function balanceOf(address) view returns (uint256)",
  "function totalSupply() view returns (uint256)",
  
  // Regulatory functions
  "function issueToNgo(address ngoAddr, uint256 amount) returns (bool)",
  "function burnCredits(address from, uint256 amount) returns (bool)",
  "function addNgo(address ngoAddr) returns (bool)",
  "function getNgoCount() view returns (uint256)",
  "function getNgoByIndex(uint256 index) view returns (address)",
  "function isRegulator(address addr) view returns (bool)",
  
  // Events
  "event CreditsIssued(address indexed toNgo, uint256 amount)",
  "event CreditsBurned(address indexed from, uint256 amount)",
  "event NgoAdded(address indexed ngo)",
];

const RegulatoryDashboard = () => {
  // State management
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);
  
  // Balances and stats
  const [ethBalance, setEthBalance] = useState("0");
  const [tokenBalance, setTokenBalance] = useState("0");
  const [totalSupply, setTotalSupply] = useState("0");
  const [gasFee, setGasFee] = useState("0");
  
  // Regulatory actions
  const [ngoAddress, setNgoAddress] = useState("");
  const [issueAmount, setIssueAmount] = useState("");
  const [burnAddress, setBurnAddress] = useState("");
  const [burnAmount, setBurnAmount] = useState("");
  const [newNgoAddress, setNewNgoAddress] = useState("");
  
  // Data lists
  const [ngos, setNgos] = useState([]);
  const [transactionHistory, setTransactionHistory] = useState([]);
  
  // Token info
  const [tokenSymbol, setTokenSymbol] = useState("");

  // Connect to MetaMask
  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert("Please install MetaMask to use this dApp");
        return;
      }

      // Request account access
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const web3Provider = new ethers.providers.Web3Provider(window.ethereum);
      const web3Signer = web3Provider.getSigner();
      const connectedAccount = await web3Signer.getAddress();

      // Check if connected to Sepolia
      const network = await web3Provider.getNetwork();
      if (network.chainId !== 11155111) {
        alert("Please switch to Sepolia network in MetaMask");
        return;
      }

      setProvider(web3Provider);
      setSigner(web3Signer);
      setAccount(connectedAccount);

      // Initialize contract
      const regulatoryContract = new ethers.Contract(CONTRACT_ADDRESS, REGULATORY_ABI, web3Provider);
      setContract(regulatoryContract);

      // Load initial data
      await loadWalletData(web3Provider, regulatoryContract);
      await loadNgos(regulatoryContract);
      await loadTransactionHistory(regulatoryContract, web3Provider);

    } catch (error) {
      console.error("Error connecting wallet:", error);
      alert("Failed to connect wallet");
    }
  };

  // Load wallet balances and data
  const loadWalletData = async (prov = provider, contractInst = contract) => {
    if (!prov || !contractInst) return;

    try {
      // Load ETH balance
      const ethBal = await prov.getBalance(REGULATORY_WALLET);
      setEthBalance(ethers.utils.formatEther(ethBal));

      // Load token balance
      const tokenBal = await contractInst.balanceOf(REGULATORY_WALLET);
      const decimals = await contractInst.decimals().catch(() => 18);
      setTokenBalance(ethers.utils.formatUnits(tokenBal, decimals));

      // Load total supply
      const supply = await contractInst.totalSupply();
      setTotalSupply(ethers.utils.formatUnits(supply, decimals));

      // Load token symbol
      const symbol = await contractInst.symbol();
      setTokenSymbol(symbol);

      // Estimate gas fee
      const gasPrice = await prov.getGasPrice();
      const estimatedGas = ethers.BigNumber.from(50000); // Regulatory functions use more gas
      const estimatedFee = gasPrice.mul(estimatedGas);
      setGasFee(ethers.utils.formatEther(estimatedFee));

    } catch (error) {
      console.error("Error loading wallet data:", error);
    }
  };

  // Load registered NGOs
  const loadNgos = async (contractInst = contract) => {
    if (!contractInst) return;

    try {
      const ngoCount = await contractInst.getNgoCount();
      const ngoList = [];
      
      for (let i = 0; i < ngoCount; i++) {
        const ngoAddr = await contractInst.getNgoByIndex(i);
        ngoList.push(ngoAddr);
      }
      
      setNgos(ngoList);
    } catch (error) {
      console.error("Error loading NGOs:", error);
    }
  };

  // Issue credits to NGO
  const issueToNgo = async () => {
    if (!signer || !contract) {
      alert("Please connect wallet first");
      return;
    }

    if (!ngoAddress || !issueAmount) {
      alert("Please enter NGO address and amount");
      return;
    }

    try {
      // Validate address
      if (!ethers.utils.isAddress(ngoAddress)) {
        alert("Invalid NGO address");
        return;
      }

      // Confirm transaction
      const confirmation = window.confirm(
        `Issue ${issueAmount} ${tokenSymbol} to ${ngoAddress.slice(0, 8)}...?`
      );
      if (!confirmation) return;

      // Execute issuance
      const decimals = await contract.decimals().catch(() => 18);
      const amountInWei = ethers.utils.parseUnits(issueAmount, decimals);
      
      const contractWithSigner = contract.connect(signer);
      const tx = await contractWithSigner.issueToNgo(ngoAddress, amountInWei);

      // Add to transaction history
      const newTx = {
        hash: tx.hash,
        type: "ISSUE",
        to: ngoAddress,
        amount: issueAmount,
        symbol: tokenSymbol,
        timestamp: new Date().toLocaleString(),
        status: "Pending"
      };
      
      setTransactionHistory(prev => [newTx, ...prev]);

      // Wait for confirmation
      await tx.wait();

      // Update status and reload data
      setTransactionHistory(prev => 
        prev.map(tx => 
          tx.hash === newTx.hash ? { ...tx, status: "Confirmed" } : tx
        )
      );
      
      await loadWalletData();
      await loadNgos();
      setNgoAddress("");
      setIssueAmount("");
      
      alert("Credits issued successfully!");

    } catch (error) {
      console.error("Issuance failed:", error);
      alert("Issuance failed: " + error.message);
    }
  };

  // Burn credits from address
  const burnCredits = async () => {
    if (!signer || !contract) {
      alert("Please connect wallet first");
      return;
    }

    if (!burnAddress || !burnAmount) {
      alert("Please enter address and amount to burn");
      return;
    }

    try {
      // Validate address
      if (!ethers.utils.isAddress(burnAddress)) {
        alert("Invalid address");
        return;
      }

      // Confirm transaction
      const confirmation = window.confirm(
        `Burn ${burnAmount} ${tokenSymbol} from ${burnAddress.slice(0, 8)}...?`
      );
      if (!confirmation) return;

      // Execute burn
      const decimals = await contract.decimals().catch(() => 18);
      const amountInWei = ethers.utils.parseUnits(burnAmount, decimals);
      
      const contractWithSigner = contract.connect(signer);
      const tx = await contractWithSigner.burnCredits(burnAddress, amountInWei);

      // Add to transaction history
      const newTx = {
        hash: tx.hash,
        type: "BURN",
        from: burnAddress,
        amount: burnAmount,
        symbol: tokenSymbol,
        timestamp: new Date().toLocaleString(),
        status: "Pending"
      };
      
      setTransactionHistory(prev => [newTx, ...prev]);

      // Wait for confirmation
      await tx.wait();

      // Update status and reload data
      setTransactionHistory(prev => 
        prev.map(tx => 
          tx.hash === newTx.hash ? { ...tx, status: "Confirmed" } : tx
        )
      );
      
      await loadWalletData();
      setBurnAddress("");
      setBurnAmount("");
      
      alert("Credits burned successfully!");

    } catch (error) {
      console.error("Burn failed:", error);
      alert("Burn failed: " + error.message);
    }
  };

  // Add new NGO
  const addNgo = async () => {
    if (!signer || !contract) {
      alert("Please connect wallet first");
      return;
    }

    if (!newNgoAddress) {
      alert("Please enter NGO address");
      return;
    }

    try {
      // Validate address
      if (!ethers.utils.isAddress(newNgoAddress)) {
        alert("Invalid NGO address");
        return;
      }

      // Confirm transaction
      const confirmation = window.confirm(
        `Add ${newNgoAddress.slice(0, 8)}... as registered NGO?`
      );
      if (!confirmation) return;

      // Execute add NGO
      const contractWithSigner = contract.connect(signer);
      const tx = await contractWithSigner.addNgo(newNgoAddress);

      // Add to transaction history
      const newTx = {
        hash: tx.hash,
        type: "ADD_NGO",
        ngo: newNgoAddress,
        timestamp: new Date().toLocaleString(),
        status: "Pending"
      };
      
      setTransactionHistory(prev => [newTx, ...prev]);

      // Wait for confirmation
      await tx.wait();

      // Update status and reload data
      setTransactionHistory(prev => 
        prev.map(tx => 
          tx.hash === newTx.hash ? { ...tx, status: "Confirmed" } : tx
        )
      );
      
      await loadNgos();
      setNewNgoAddress("");
      
      alert("NGO added successfully!");

    } catch (error) {
      console.error("Add NGO failed:", error);
      alert("Add NGO failed: " + error.message);
    }
  };

  // Load transaction history
  const loadTransactionHistory = async (contractInst = contract, prov = provider) => {
    if (!contractInst || !prov) return;

    try {
      const currentBlock = await prov.getBlockNumber();
      const fromBlock = Math.max(0, currentBlock - 10000);

      // Get issuance events
      const issuanceEvents = await contractInst.queryFilter(
        contractInst.filters.CreditsIssued(),
        fromBlock
      );

      // Get burn events
      const burnEvents = await contractInst.queryFilter(
        contractInst.filters.CreditsBurned(),
        fromBlock
      );

      const history = [
        ...issuanceEvents.map(event => ({
          hash: event.transactionHash,
          type: "ISSUE",
          to: event.args.toNgo,
          amount: ethers.utils.formatUnits(event.args.amount, 18),
          symbol: tokenSymbol,
          timestamp: "On-chain",
          status: "Confirmed",
          block: event.blockNumber
        })),
        ...burnEvents.map(event => ({
          hash: event.transactionHash,
          type: "BURN",
          from: event.args.from,
          amount: ethers.utils.formatUnits(event.args.amount, 18),
          symbol: tokenSymbol,
          timestamp: "On-chain",
          status: "Confirmed",
          block: event.blockNumber
        }))
      ].sort((a, b) => (b.block || 0) - (a.block || 0));

      setTransactionHistory(history);

    } catch (error) {
      console.error("Error loading transaction history:", error);
    }
  };

  // Auto-refresh data
  useEffect(() => {
    const loadData = async () => {
      if (provider && contract) {
        await loadWalletData();
        await loadNgos();
      }
    };

    loadData();
    
    const interval = setInterval(() => {
      loadData();
    }, 30000);
    
    return () => clearInterval(interval);
  }, [provider, contract]);

  // Short address formatter
  const shortAddress = (addr) => addr ? `${addr.slice(0, 6)}...${addr.slice(-4)}` : "";

  return (
    <div className="min-h-screen bg-gray-800 text-green-200 p-4">
      <div className="max-w-8xl mx-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-8 p-4 bg-gray-900 rounded-lg">
          <div>
            <h1 className="text-2xl font-bold">🏛️ Regulatory Dashboard</h1>
            <p className="text-green-400">Sepolia Testnet - Regulatory Controls</p>
          </div>
          
          {!account ? (
            <button
              onClick={connectWallet}
              className="bg-green-600 hover:bg-green-500 text-black px-6 py-2 rounded font-bold"
            >
              Connect Regulatory Wallet
            </button>
          ) : (
            <div className="text-right">
              <p className="text-sm">Regulator: {shortAddress(account)}</p>
              <p className="text-xs text-green-400">Regulatory Mode</p>
            </div>
          )}
        </header>

        {/* Stats Section */}
        <section className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-green-400 text-sm">Total Supply</h3>
            <p className="text-2xl font-bold">{parseFloat(totalSupply).toFixed(2)} {tokenSymbol}</p>
            <p className="text-xs text-green-300">Circulating Credits</p>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-green-400 text-sm">Regulatory Balance</h3>
            <p className="text-2xl font-bold">{parseFloat(tokenBalance).toFixed(2)} {tokenSymbol}</p>
            <p className="text-xs text-green-300">Available for Issuance</p>
          </div>
          
          <div className="bg-gray-900 p-6 rounded-lg">
            <h3 className="text-green-400 text-sm">Gas Fee Estimate</h3>
            <p className="text-2xl font-bold">{parseFloat(gasFee).toFixed(6)} ETH</p>
            <p className="text-xs text-green-300">Per Regulatory Action</p>
          </div>
        </section>

        {/* Regulatory Actions Section */}
        <section className="grid lg:grid-cols-3 gap-6 mb-8">
          {/* Issue Credits to NGO */}
          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">📤 Issue Credits</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-green-400 text-sm mb-2">NGO Address</label>
                <input
                  type="text"
                  value={ngoAddress}
                  onChange={(e) => setNgoAddress(e.target.value)}
                  placeholder="0x..."
                  className="w-full p-3 bg-black border border-gray-700 rounded text-white"
                />
              </div>
              
              <div>
                <label className="block text-green-400 text-sm mb-2">Amount ({tokenSymbol})</label>
                <input
                  type="number"
                  value={issueAmount}
                  onChange={(e) => setIssueAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full p-3 bg-black border border-gray-700 rounded text-white"
                />
              </div>
              
              <button
                onClick={issueToNgo}
                disabled={!account || !ngoAddress || !issueAmount}
                className="w-full bg-green-600 hover:bg-green-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-black py-3 rounded font-bold"
              >
                Issue Credits
              </button>
            </div>
          </div>

          {/* Burn Credits */}
          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">🔥 Burn Credits</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-green-400 text-sm mb-2">From Address</label>
                <input
                  type="text"
                  value={burnAddress}
                  onChange={(e) => setBurnAddress(e.target.value)}
                  placeholder="0x..."
                  className="w-full p-3 bg-black border border-gray-700 rounded text-white"
                />
              </div>
              
              <div>
                <label className="block text-green-400 text-sm mb-2">Amount ({tokenSymbol})</label>
                <input
                  type="number"
                  value={burnAmount}
                  onChange={(e) => setBurnAmount(e.target.value)}
                  placeholder="0.00"
                  className="w-full p-3 bg-black border border-gray-700 rounded text-white"
                />
              </div>
              
              <button
                onClick={burnCredits}
                disabled={!account || !burnAddress || !burnAmount}
                className="w-full bg-red-600 hover:bg-red-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-3 rounded font-bold"
              >
                Burn Credits
              </button>
            </div>
          </div>

          {/* Add New NGO */}
          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">👥 Register NGO</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-green-400 text-sm mb-2">NGO Address</label>
                <input
                  type="text"
                  value={newNgoAddress}
                  onChange={(e) => setNewNgoAddress(e.target.value)}
                  placeholder="0x..."
                  className="w-full p-3 bg-black border border-gray-700 rounded text-white"
                />
              </div>
              
              <button
                onClick={addNgo}
                disabled={!account || !newNgoAddress}
                className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-3 rounded font-bold"
              >
                Register NGO
              </button>
            </div>

            {/* Registered NGOs List */}
            <div className="mt-4">
              <h3 className="text-green-400 text-sm mb-2">Registered NGOs ({ngos.length})</h3>
              <div className="max-h-32 overflow-y-auto">
                {ngos.map((ngo, index) => (
                  <div key={index} className="text-xs font-mono p-1 border-b border-gray-700">
                    {shortAddress(ngo)}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Wallet Info */}
        <section className="bg-gray-900 p-6 rounded-lg mb-8">
          <h2 className="text-xl font-bold mb-4">💰 Regulatory Wallet</h2>
          
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <label className="text-green-400 text-sm">Force</label>
              <p className="font-mono text-sm break-all">{REGULATORY_WALLET}</p>
            </div>
            
            <div>
              <label className="text-green-400 text-sm">ETH Balance</label>
              <p className="text-lg font-bold">{parseFloat(ethBalance).toFixed(6)} ETH</p>
            </div>
            
            <div>
              <label className="text-green-400 text-sm">Token Balance</label>
              <p className="text-lg font-bold">{parseFloat(tokenBalance).toFixed(2)} {tokenSymbol}</p>
            </div>
            
            <div>
              <label className="text-green-400 text-sm">Contract</label>
              <p className="font-mono text-xs break-all">{CONTRACT_ADDRESS}</p>
            </div>
          </div>
        </section>

        {/* Regulatory Activity History */}
        <section className="bg-gray-900 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">📊 Regulatory Activity</h2>
          
          {transactionHistory.length === 0 ? (
            <p className="text-green-400 text-center py-8">No regulatory actions yet</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left p-3">Action</th>
                    <th className="text-left p-3">Address</th>
                    <th className="text-left p-3">Amount</th>
                    <th className="text-left p-3">Status</th>
                    <th className="text-left p-3">Time</th>
                  </tr>
                </thead>
                <tbody>
                  {transactionHistory.map((tx, index) => (
                    <tr key={index} className="border-b border-gray-800">
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded text-xs ${
                          tx.type === "ISSUE" ? "bg-green-800" : 
                          tx.type === "BURN" ? "bg-red-800" : "bg-blue-800"
                        }`}>
                          {tx.type}
                        </span>
                      </td>
                      <td className="p-3 font-mono text-sm">
                        {tx.to ? shortAddress(tx.to) : tx.from ? shortAddress(tx.from) : shortAddress(tx.ngo)}
                      </td>
                      <td className="p-3">
                        {tx.amount ? `${tx.amount} ${tx.symbol}` : 'N/A'}
                      </td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded text-xs ${
                          tx.status === "Confirmed" ? "bg-green-800 text-green-200" : "bg-yellow-800 text-yellow-200"
                        }`}>
                          {tx.status}
                        </span>
                      </td>
                      <td className="p-3 text-sm">{tx.timestamp}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default RegulatoryDashboard;