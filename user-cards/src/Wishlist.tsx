/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Suspense, lazy, useState } from 'react'
import { Box, Button, Container, Grid, Skeleton, Typography } from '@mui/material'
import { useStore } from './utils/store';
import { Link } from 'react-router-dom';
import { Props } from './utils/typing';
import Notify from './components/Notify';

const UserCard = lazy(() => import('./components/UserCard'))

function Wishlist() {
  const { wishlist } = useStore();
  const [isNotify, setIsNotify] = useState(false);

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
              <Suspense fallback={<Skeleton animation="wave" variant="rectangular" width={200} height={400} />}>
                <UserCard
                  //@ts-ignore 
                  user={user}
                  setIsError={setIsNotify}
                />
              </Suspense>
            </Grid>
          ))}
        </Grid>
        <Notify open={isNotify} setOpen={setIsNotify} type="error" children="Remove to favorites" />
    </Container>
  )
}

export default Wishlist
