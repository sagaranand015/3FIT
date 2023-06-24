// ** MUI Imports
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Box from '@mui/material/Box'
import { useRouter } from 'next/router'

import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'

import Twitter from 'mdi-material-ui/Twitter'
import CartPlus from 'mdi-material-ui/CartPlus'
import Facebook from 'mdi-material-ui/Facebook'
import Linkedin from 'mdi-material-ui/Linkedin'
import GooglePlus from 'mdi-material-ui/GooglePlus'
import ShareVariant from 'mdi-material-ui/ShareVariant'

import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

import { useAuth } from 'src/configs/authProvider'
import { useEffect, useState } from 'react'
import { LoadingButton } from '@mui/lab'
import { styled } from '@mui/material/styles'
import { Button, CardActions, CardContent } from '@mui/material'
import MembershipTypesJson from '../../../data/MembershipTypes.json';

const StyledGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    borderBottom: `1px solid ${theme.palette.divider}`
  },
  [theme.breakpoints.up('md')]: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));
const MembershipTypes = () => {

  const router = useRouter();
  const storeId = router.query.storeId;

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const { providerClient, currentAccount, setCurrentAccount } = useAuth()
  const [accountConnected, setAccountConnected] = useState(false)

  const [membershipTypes, setMembershipTypes] = useState(null);
  const [stId, setStId] = useState(null);

  function GetAllMembershipTypes(sid) {
    for (var i = 0; i < MembershipTypesJson.length; i++) {
      if (sid == MembershipTypesJson[i].storeId) {
        setMembershipTypes(MembershipTypesJson[i].memberships)
      }
    }
  }

  async function PurchaseMembership() {
    alert(" ======= purchase to be made here via Minting Subscription NFT...");

  }

  useEffect(async () => {
    if (currentAccount && storeId) {
      console.log("current account on avail-subs page is: ", currentAccount)
      setAccountConnected(true)
      setStId(storeId)
      GetAllMembershipTypes(storeId);
    } else {
      setAccountConnected(false)
    }
  }, [currentAccount])

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Typography variant='h5'>
          Membership Types
        </Typography>
        <Typography variant='body2'>Choose the plan that suits for your needs the best. Choose from a range of options available from the platform and use your Aurora ETH to get your Membership Access as a Subscription NFT. </Typography>
      </Grid>
      {accountConnected && membershipTypes && membershipTypes.length > 0 ? (<>
        {membershipTypes.map(row => (
          <Grid key={row.name} item xs={12} sm={6} md={6} lg={12} sx={{ pr: 2, pb: 2, mt: 5 }}>
            <Card>
              <Grid container spacing={6}>
                <StyledGrid item md={5} xs={12}>
                  <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img width={350} height={200} alt='Apple iPhone 11 Pro' src={row.image} />
                  </CardContent>
                </StyledGrid>
                <Grid
                  item
                  xs={12}
                  md={7}
                  sx={{
                    display: 'flex', flexDirection: 'column', justifyContent: 'center',
                    paddingTop: ['0 !important', '0 !important', '1.5rem !important'],
                    paddingLeft: ['1.5rem !important', '1.5rem !important', '0 !important']
                  }}
                >
                  <CardContent>
                    <Typography variant='h3' sx={{ marginBottom: 2 }}>
                      {row.name}
                    </Typography>
                    <Typography variant='h5' sx={{ marginBottom: 2 }}>
                      Description: {row.description}
                    </Typography>
                  </CardContent>
                  <CardActions className='card-action-dense'>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                      <Button onClick={PurchaseMembership}>
                        <CartPlus fontSize='small' sx={{ marginRight: 2 }} />
                        Purchase Membership
                      </Button>
                      <IconButton
                        id='long-button'
                        aria-label='share'
                        aria-haspopup='true'
                        onClick={handleClick}
                        aria-controls='long-menu'
                        aria-expanded={open ? 'true' : undefined}
                      >
                        <ShareVariant fontSize='small' />
                      </IconButton>
                      <Menu
                        open={open}
                        id='long-menu'
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        MenuListProps={{
                          'aria-labelledby': 'long-button'
                        }}
                      >
                        <MenuItem onClick={handleClose}>
                          <Facebook />
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Twitter />
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Linkedin />
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <GooglePlus />
                        </MenuItem>
                      </Menu>
                    </Box>
                  </CardActions>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        ))}
      </>) : (<>
        <LoadingButton loading={true}>Loading, Please wait...</LoadingButton>
      </>)}

    </Grid>
  )
}

export default MembershipTypes
