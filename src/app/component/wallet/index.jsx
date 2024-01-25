import { useState } from 'react';
import Web3 from 'web3';

const ALCHEMY_URL = 'https://solana-mainnet.g.alchemy.com/v2/2L1r_Zi0J2lsJY4B6_M3oY7xlAGxDRQG';
console.log(ALCHEMY_URL);
const provider = new Web3.providers.HttpProvider(ALCHEMY_URL);
const web3 = new Web3(provider);
const Wallet = () => {
  const [connected, setConnected] = useState(false);

  const connectWallet = async () => {
    // Check if user has already connected wallet
    if (window.ethereum && window.ethereum.selectedAddress) {
      setConnected(true);
      return;
    }

    // Request user to connect wallet
    try {
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      setConnected(true);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button className='bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' onClick={connectWallet}>
      {connected ? 'Support' : 'Wallet Connected'}
    </button>
  );
};

export default Wallet