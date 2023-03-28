import Image from 'next/image'
import React, { useEffect, useState } from "react";
import avatar from '../temp/avatar.jpg'
import { BsPerson } from 'react-icons/bs'
import { useContext } from 'react'
import { SolWagContext } from '../context/solWagContext'
import SolWagLogo from '../assets/SolWagLogo.png'
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";
import { add, getValue, multiply, update } from "../context/interact";
import { checkWalletconc, connectWalletBeacon, setup } from "../context/Connect";

const style = {
  wrapper: `md:h-full md:w-52 h-16 w-full bg-primary text-white flex md:justify-around items-center px-4 fixed z-20 md:flex-col text-sm`,
  leftMenu: `gap-3 md:flex-col justify-center flex`,
  logo: `md:text-3xl flex cursor-pointer bg-gradient-to-r from-[#D900FA] via-[#00DBFD] to-[#00FF9D] text-transparent bg-clip-text w-full font-bold text-left ml-2`,
  menuItem: `md:text-lg text-sm text-white font-medium flex items-center my-4 cursor-pointer hover:text-slate-500`,
  rightMenu: `flex gap-3 items-center md:flex-col`,
  userImageContainer: `mr-2`,
  userImage: `h-10 w-10 mr-4 rounded-full p-px object-cover cursor-pointer`,
  loginButton: `flex items-center cursor-pointer rounded-full hover:bg-[#333333] px-4 py-1`,
  loginText: `ml-2`,
  logoContainer: `flex items-center`
}

const Navbar = () => {
  const { currentAccount,currentUser, setRide, setOffer, offer } = useContext(SolWagContext)
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
      <div className={style.leftMenu}>
        <div className={style.logoContainer}>
          <Image src={SolWagLogo} height={30} width={30} />
          <div className={style.logo}>TezWag</div>
        </div>
        <div className={style.menuItem} onClick={()=>{setOffer('hidden'); setRide('block'); console.log(offer)}}>Ride Pool</div>
        <div className={style.menuItem} onClick={()=>{setOffer('block'); setRide('hidden')}}>Offer Pool</div>
        <div className={`${style.menuItem} md:block hidden`}><a href="https://docs.google.com/document/d/1zsikHSiVQscm2C_g5148DYDx7WeUF6isvKnBppvdzWg/edit?usp=sharing" target="blank" rel="noreferrer">White Paper</a></div>
      </div>
      <div className={`${style.rightMenu} md:block hidden`}>
        {/* <div className={style.menuItem}></div> */}
       
  
        {/* <div className={style.menuItem}>
          
          Wallet connected</div> */}
          {/* <div className={style.loginButton} onClick={() => checkWalletconc()}></div> */}
        <div className={style.userImageContainer}>
          {/* <Image
            className={style.userImage}
            src={avatar}
            width={40}
            height={40}
          /> */}
        </div>
        {currentAccount ? (
          <div>
            {currentAccount.slice(0, 6)}...{currentAccount.slice(39)}
          </div>
        ) : (
          <div className={style.loginButton} onClick={() => connectWalletBeacon()}>
            <BsPerson />
            <span className={style.loginText}>Log in</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
