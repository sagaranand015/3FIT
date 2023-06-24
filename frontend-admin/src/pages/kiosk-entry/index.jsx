// ** MUI Imports
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// import GymStore from '../../abis/GymStore.json';
// import GymSubscription from '../../abis/GymSubscription.json';

// ** Demo Components Imports
import CardImgTop from 'src/views/cards/CardImgTop'
import { useAuth } from 'src/configs/authProvider'
import HelpNotificationCard from 'src/views/cards/HelpNotificationCard'
import CardImgTop2 from 'src/views/cards/CardImgTop2'
import CardImgTop3 from 'src/views/cards/CardImgTop3'
import { WindowOpen } from 'mdi-material-ui'
import { addressHasNFT } from 'src/utils/checkNFT'
import { useEffect, useState } from 'react'
import { wcProvider } from 'src/configs/walletConnectProvider'

import GymSubscription from '../../abis/GymSubscription.json';

import Web3 from "web3";
import { GYM_STORE_CONTRACT, GYM_SUBSCRIPTION_CONTRACT } from '../../utils/utils';

const KioskEntry = () => {
  const { currentAccount, setCurrentAccount, disconnectAccount, adminMode } = useAuth()
  const [isUser, setIsUser] = useState(false);
  const [userAccount, setUserAccount] = useState(null);

  function NavigateToLinkedIn() {
    window.open("https://www.linkedin.com/in/sagar-anand-33b37a89/", "_blank");
  }

  const [providerClient, setProviderClient] = useState(null);
  const [hasAccess, setHasAccess] = useState(false);

  /**
   * WalletConnect v1 Integration
   */
  function onInitializeProviderClient() {
    setProviderClient(wcProvider);
  }

  useEffect(() => {
    onInitializeProviderClient();
  }, [userAccount])

  const connectUserWalletHandler = async () => {
    if (providerClient) {
      if (providerClient.connected) {
        console.log("======== wallet connected... need to kill first");
        await providerClient.connector.killSession();
      }
      console.log("======== starting?")
      var res = await providerClient.enable()
      console.log("======== now?", res)
      if (res) {
        setUserAccount(res[0])
      }
      return res[0];
    } else {
      alert("Could not initialize WalletConnect properly, please refresh the page!");
    }
    return null;
  }

  const disconnectUserWalletHandler = async () => {
    if (providerClient) {
      await providerClient.disconnect();
      setUserAccount(null);
    } else {
      alert("Could not initialize WalletConnect properly, please refresh the page!");
    }
  }

  async function CheckUserSubscription(userAddr) {
    if (userAddr) {
      const web3 = new Web3(providerClient);
      const contract = new web3.eth.Contract(GymSubscription.abi, GYM_SUBSCRIPTION_CONTRACT)
      const subRes = await contract.methods.hasStoreSubscription(userAddr).call();
      return subRes
    } else {
      console.log("User account not set!");
    }
    return false;
  }

  async function checkNFT() {
    // await disconnectAccount();
    console.log("admin user account is: ", currentAccount);
    const userAccRes = await connectUserWalletHandler();
    console.log("connected user is: ", userAccRes, userAccount);
    // await setUserAccount();
    if (userAccRes) {
      setIsUser(true);
      console.log("===== Starting NFT check: ", userAccRes);
      // const hasNftRes = await addressHasNFT(userAccRes);
      const res = await CheckUserSubscription(userAccRes);
      if (res) {
        setHasAccess(res);
      }
    } else {
      console.log("======== disconnected!");
    }

  }

  async function exitAccessGranted() {
    await disconnectUserWalletHandler();
    setIsUser(false);
    setHasAccess(false);
  }

  return (

    <div>
      {userAccount ? (
        <div>
          {hasAccess ? (
            <div>
              <Grid container spacing={6}>
                <Grid item xs={12} sm={12} md={12}>
                  <HelpNotificationCard heading='Access Granted' content='Access has been granted. Please proceed' clickButtonText='EXIT KIOSK' clickButton={exitAccessGranted} />
                </Grid>
              </Grid>
            </div>
          ) :
            (
              <div>
                <Grid container spacing={6}>
                  <Grid item xs={12} sm={12} md={12}>
                    <HelpNotificationCard heading='Access Denied' content='Your Access has been denied. Please make sure you have the Gym Subscription NFT and that you are using the correct Wallet Account' clickButtonText='EXIT KIOSK' clickButton={exitAccessGranted} />
                  </Grid>
                </Grid>
              </div>
            )
          }
        </div>
      ) :
        (
          <div>
            <Grid container spacing={6}>
              <Grid item xs={12} sx={{ paddingBottom: 4 }}>
                <Typography variant='h5'>Welcome to 3Fit</Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <HelpNotificationCard heading='Start your Gym Entry Kiosk' content='Allow Customers to enter your gym using their pre-issued NFTs. Just let them scan the OR code to authorize their access.' clickButtonText='START ENTRY KIOSK' clickButton={checkNFT} />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <CardImgTop />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <CardImgTop2 />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <CardImgTop3 />
              </Grid>
              <Grid item xs={12} sm={12} md={12}>
                <HelpNotificationCard heading='Contact Us' content='Connect with our Development Team to know more about the Web3 enabled Subscription Engine and the roadmap for next set of features' clickButtonText='Connect on LinkedIn' clickButton={NavigateToLinkedIn} />
              </Grid>
            </Grid>
          </div>
        )
      }
    </div >
  )
}

export default KioskEntry;