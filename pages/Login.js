
import React, { useEffect, useState } from "react";
import Image from "next/image";
import PhantomLogo from '../assets/phantomLogo.png';
import { useContext } from 'react';

import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { add, getValue, multiply, update } from "../context/interact";
import { connectWalletBeacon, setup } from "../context/Connect";
const style = {
    wrapper: `h-screen w-full bg-primary text-white items-center flex justify-center bg-login-bg`,
    container: `bg-slate-300/10 p-16 rounded-2xl flex flex-col items-center`,
    heading: `bg-gradient-to-r from-[#D900FA] via-[#00DBFD] to-[#00FF9D] text-transparent bg-clip-text w-full font-bold text-left flex items-center text-3xl p-4 overflow-hidden`,
    connectButton: `bg-indigo-600 py-2 px-4 rounded-xl hover:bg-indigo-900`
    // button: ``
}

const Login = () => {
    const [Tezos, setTezos] = useState(undefined);
    const [status, setStatus] = useState("No Operations Performed");
    const [value, setValue] = useState(0);
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        console.log("run");
        setup().then(setTezos).catch(console.error);
      }, []);
      useEffect(() => {
        if (Tezos === undefined) return;
        getValue(Tezos)
          .then(setValue)
          .then(() => setLoader(false))
          .catch(console.error);
        const timer = setInterval(() => {
          getValue(Tezos).then(setValue).catch(console.error);
        }, 60000);
    
        return () => {
          clearInterval(timer);
        };
      }, [Tezos]);
    
      const handleEvent = async (e, func, params) => {
        e.preventDefault();
        try {
          const wal = await connectWalletBeacon();
          Tezos.setWalletProvider(wal);
          setLoader(true);
          await func(Tezos, params, setStatus);
          await getValue(Tezos)
            .then(setValue)
            .then(() => setLoader(false));
        } catch (err) {
          console.error(err);
          alert("Couldn't connect wallet");
        }
      };
    
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <Image src={PhantomLogo} height={50} width={50}/>
                <h1 className={style.heading}>Sol-Wag</h1>
            <button onClick={connectWalletBeacon} className={style.connectButton}>Connect to wallet</button>
           
            </div>
            
        </div>
    )
}

export default Login