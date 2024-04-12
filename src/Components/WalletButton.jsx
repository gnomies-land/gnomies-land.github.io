

export default function WalletButton() {
    if (window.phantom?.solana?.isPhantom) {
        return (
            <div className="wallet-button">Connect Wallet</div>
        );
    }
    else {
        return (
            <div className="wallet-button">Install Phantom Wallet</div>
        );
    }
}