import React, { useState } from "react";
import { db } from "../firebase-config"; // Asegúrate de tener configurado esto
import { addDoc, collection, query, where, getDocs } from "firebase/firestore";
import phantomGnomie from "../assets/phantom-gnomie.png";
import airdropTitle from "../assets/airdrop-title.png";

export default function Phantom() {
  const airDropLimit = 1500;
  const [twitterUsername, setTwitterUsername] = useState("");
  const [wallet, setWallet] = useState("");
  const handleTwitterChange = (event) => {
    setTwitterUsername(event.target.value.replace("@", ""));
    // remove invalid chars  to mactch /^@?(\w){1,15}$/;
    setTwitterUsername(event.target.value.replace(/[^a-zA-Z0-9_]/g, ""));
  };

  const handleParticipate = async () => {
    if (walletsCount >= airDropLimit) {
      alert("The airdrop is full.");
      window.location.reload();
      return;
    }
    //check if the user has already participated
    if (localStorage.getItem("airdrop")) {
      alert("You have already participated in the airdrop.");
      return;
    }
    // Verificar si el usuario y la cartera ya están en la base de datos
    const q = query(collection(db, "wallets"), where("wallet", "==", wallet));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      // Añadir usuario a la base de datos
      await addDoc(collection(db, "wallets"), {
        wallet: wallet,
        twitter: twitterUsername,
      });
      alert("Congratulations! You have now entered into the Airdrop!");
      // save on local storage tha the user has participated
      localStorage.setItem("airdrop", "true");
      // reload page
      window.location.reload();
    } else {
      alert("Your wallet is already in the airdrop.");
    }
  };

  const ConnectButton = () => {
    return (
      <button
        className="phantom-button"
        disabled={wallet ? true : false}
        onClick={(el) => handleConnect(el)}
      >
        {wallet ? "Connected" : "Connect"}
      </button>
    );
  };

  const getProvider = () => {
    if ("phantom" in window) {
      const provider = window.phantom?.solana;

      if (provider?.isPhantom) {
        return provider;
      }
    }

    //window.open('https://phantom.app/', '_blank');
  };

  const handleConnect = async (el) => {
    let provider = getProvider();
    if (!provider) {
      window.alert(
        "Phantom wallet is not installed. Install Phantom wallet and try again."
      );
      window.open("https://phantom.app/", "_blank");
      return;
    }
    try {
      const resp = await provider.connect();
      console.log(resp.publicKey.toString());
      // get connect buton
      // save wallet address
      setWallet(resp.publicKey.toString());
      // change text to connected
      el.target.innerHTML = "Connected";
      // disable button
      el.target.disabled = true;
      toggleParticipate();
    } catch (err) {
      alert("Error connecting to Phantom wallet");
    }
  };

  const toggleParticipate = () => {
    document.querySelector(".participate-button").disabled =
      wallet &&
      twitterUsername &&
      document.querySelector(".follow-button").innerHTML === "Followed" &&
      document.querySelector(".join-button").innerHTML === "Joined"
        ? false
        : true;
    if (document.querySelector(".participate-button").disabled === false) {
      document
        .querySelector(".participate-button")
        .addEventListener("click", handleParticipate);
    }
  };

  const getConnectedWalletsCount = async () => {
    const q = query(collection(db, "wallets"));
    const querySnapshot = await getDocs(q);
    return querySnapshot.size;
  };

  // wait until getConnectedWalletsCount is resolved
  let walletsCount = 0;

  getConnectedWalletsCount().then((count) => {
    document
      .getElementById("phantom")
      .querySelector(
        ".phantom-description"
      ).innerHTML = `wallets connected: ${count} / ${airDropLimit}`;
    walletsCount = count;
  });
  return (
    <div className="phantom-container" id="phantom">
      <img src={airdropTitle} className="App-image" alt="logo" />
      <h1 className="phantom-heading">Connect to Phantom Wallet</h1>
      <p className="phantom-description">wallets connected</p>
      <p className="phantom-description">
        We will be holding a Airdrop for the first official gnomies nft.
      </p>
      <p>To participate you must follow these steps:</p>
      <p>
        Connect your wallet
        <ConnectButton />
      </p>
      <p>
        Twitter account
        <input
          type="text"
          value={twitterUsername}
          onChange={handleTwitterChange}
          placeholder="Your Twitter Username"
          className="phantom-input twitter-input"
        />
        <button
          className="phantom-button check-button"
          onClick={async (el) => {
            const twitterRegex = /^@?(\w){1,15}$/;
            if (!twitterRegex.test(twitterUsername)) {
              alert("Invalid twitter username.");
              return;
            }
            // Check if the user has connected their wallet
            const q = query(
              collection(db, "wallets"),
              where("twitter", "==", twitterUsername)
            );
            const querySnapshot = await getDocs(q);
            console.log(querySnapshot);
            if (!querySnapshot.empty) {
              alert("This twitter account has already been used.");
            } else {
              el.target.innerHTML = "Checked";
              el.target.disabled = true;
              document.querySelector(".twitter-input").disabled = true;
              toggleParticipate();
            }
          }}
        >
          Check
        </button>
      </p>
      <p>
        Follow us on twitter
        <button
          className="phantom-button follow-button"
          onClick={(el) => {
            window.open("https://twitter.com/gnomies_land", "_blank");
            el.target.innerHTML = "Followed";
            el.target.disabled = true;
            toggleParticipate();
          }}
        >
          Follow
        </button>
      </p>
      <p>
        Join our telegram channel
        <button
          className="phantom-button join-button"
          onClick={(el) => {
            window.open("https://t.me/GnomiesLand", "_blank");
            el.target.innerHTML = "Joined";
            el.target.disabled = true;
            toggleParticipate();
          }}
        >
          Join
        </button>
      </p>
      <p>
        <button className="phantom-button participate-button" disabled={true}>
          Participate in the Airdrop
        </button>
      </p>
      <img src={phantomGnomie} className="App-image" alt="logo" />
    </div>
  );
}
