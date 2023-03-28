import * as config from "./config.json";
import {
  createContext,
  useState,
  useEffect
} from 'react'

import {
  BeaconWallet
} from '@taquito/beacon-wallet';
import {
  TezosToolkit
} from "@taquito/taquito";

import {
  useRouter
} from 'next/router';


export const setup = async () => {
  const Tezos = new TezosToolkit(config.rpc);
  return Tezos;
};

    export const connectWalletBeacon = async () => {

      const options = {
        name: config.name,
        iconUrl: 'https://tezostaquito.io/img/favicon.png',
        preferredNetwork: config.network,
      }
      const wallet = new BeaconWallet(options);
      // const router = useRouter();
      // wallet.disconnect();
      await wallet.requestPermissions({
        network: {
          type: config.network,
        },
      });
       const checkWalletconc = async ()=>{
        const activeAccount = await wallet.client.getActiveAccount();
        if (activeAccount) {
          console.log("Already connected:", activeAccount.address);
        return activeAccount;
      } else {
        // The user is not connected. A button should be displayed where the user can connect to his wallet.
        console.log("Not connected!");
      }
     };
      return wallet;
    };

    