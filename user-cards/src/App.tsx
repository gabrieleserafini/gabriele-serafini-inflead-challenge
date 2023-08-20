/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Suspense, lazy, useEffect, useState } from 'react'
import { Box, Grid, Button, Container, Skeleton, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useStore } from './utils/store'
import Sorting from './components/Sorting'
import fetchUsers from './utils/fetchUsers'

const UserCard = lazy(() => import('./components/UserCard'))

function App() {
  const { wishlist } = useStore()
  const [users, setUsers] = useState<[]>([])

  useEffect(() => {
    fetchUsers(10).then(data => setUsers(data));
  }, []);

  const LoadMore = () => {
    fetchUsers(10).then(data => setUsers(prevUsers => [...prevUsers, ...data]));  
  }

  const rearrangedItems = Sorting(
    //@ts-ignore
    users,
    wishlist
  );

  useEffect(() => {
    //@ts-ignore
    setUsers(rearrangedItems);
  }, [wishlist]);

  return (
    <Container fixed sx={{ my: 4 }}>
      <Box component="div" sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
        <Typography variant="h2" component="h2" sx={{ color: '#2f8fea' }}>User Cards</Typography>
      </Box>
      <Box component="div" sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
        <Link to="/wishlist" ><Button variant="outlined" color="primary">Go to My Favorites</Button></Link>
      </Box>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          { 
            users.map(
              (user: any, index) => (
              <Grid item key={index}  xs={6} sm={6} md={3} lg={2.4} xl={2.4}>
                <Suspense fallback={<Skeleton animation="wave" variant="rectangular" width={200} height={400} />}>
                  <UserCard user={user}/>
                </Suspense>
              </Grid>
            ))
          }
        </Grid>
      <Box component="div" sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Button variant="contained" color="primary" size='large' onClick={LoadMore}>Load More</Button>
      </Box>
    </Container>
  )
}

export default App
