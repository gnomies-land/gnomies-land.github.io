

export default function WalletButton() {
    let provider = getProvider();
    if (provider) {
      return (
        <div
          className="wallet-button"
          onClick={handleConnect}>
          Connect Wallet
        </div>
      );
    }
    else {
        return <div className="wallet-button">Connect Wallet</div>
        
    }
}

const getProvider = () => {
    if ('phantom' in window) {
      const provider = window.phantom?.solana;
  
      if (provider?.isPhantom) {
        return provider;
      }
    }
  
    window.open('https://phantom.app/', '_blank');
  };

const handleConnect = async () => {
  try {
    const resp = await getProvider().connect();
    console.log(resp.publicKey.toString());
    // 26qv4GCcx98RihuK3c4T6ozB3J7L6VwCuFVc7Ta2A3Uo
  } catch (err) {
    // { code: 4001, message: 'User rejected the request.' }
  }
};