/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Suspense, lazy } from 'react'
import { Box, Button, Container, Grid, Typography } from '@mui/material'
import { useStore } from './store';
import { Link } from 'react-router-dom';
import Loader from './assets/Loader.png';
import { Props } from './typing';

const UserCard = lazy(() => import('./components/UserCard'))

function Wishlist() {
  const { wishlist } = useStore();



  return (
    <Container fixed sx={{ my: 4 }}>
        <Box component="div" sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
            <Typography variant="h2" component="h2" sx={{ color: '#2f8fea' }}>My Favorites</Typography>
        </Box>
        <Box component="div" sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
            <Link to="/" ><Button variant="outlined" color="primary">Back to Home</Button></Link>
        </Box>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          {wishlist.map((user: Props, index) => (
            <Grid item key={index} xs={6} sm={6} md={3} lg={2.4} xl={2.4}>
              <Suspense fallback={<img src={Loader} alt="Loader" />}>
                <UserCard
                  //@ts-ignore 
                  user={user}
                />
              </Suspense>
            </Grid>
          ))}
        </Grid>
    </Container>
  )
}

export default Wishlist
