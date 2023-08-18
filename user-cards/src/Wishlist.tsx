import { Suspense, lazy } from 'react'
import { Box, Container, Grid, Typography } from '@mui/material'
import { useStore } from './store';
import { Link } from 'react-router-dom';

const UserCard = lazy(() => import('./components/UserCard'))

function Wishlist() {
  const { wishlist } = useStore();



  return (
    <Container fixed sx={{ my: 4 }}>
        <Box component="div" sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
            <Typography variant="h2" component="h2" sx={{ color: '#2f8fea' }}>My Favorites</Typography>
        </Box>
        <Box component="div" sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
            <Link to="/" >Back to Home</Link>
        </Box>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          {wishlist.map((user: any, index) => (
            <Grid item key={index} xs={6} sm={6} md={3} lg={2.4} xl={2.4}>
              <Suspense fallback={<div>Loading...</div>}>
                <UserCard user={user}/>
              </Suspense>
            </Grid>
          ))}
        </Grid>
    </Container>
  )
}

export default Wishlist
