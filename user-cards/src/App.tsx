import { Suspense, lazy, useEffect, useState } from 'react'
import { Box, Button, Container, Grid } from '@mui/material'
import { Link } from 'react-router-dom'

const UserCard = lazy(() => import('./components/UserCard'))

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://random-data-api.com/api/users/random_user?size=10')
      .then(res => res.json())
      .then(data => {
        setUsers(data)
      })
  }, [])

  const LoadMore = () => {
    fetch('https://random-data-api.com/api/users/random_user?size=10')
      .then(res => res.json())
      .then(data => setUsers([...users, ...data]))
  }

  return (
    <Container fixed sx={{ my: 4 }}>
      <Box component="div" sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
        <Link to="/wishlist" >Go to My Wish</Link>
      </Box>
        <Grid container justifyContent="center" alignItems="center" spacing={2}>
          {users.map((user: any, index) => (
            <Grid item key={index}  xs={6} sm={6} md={3} lg={2.4} xl={2.4}>
              <Suspense fallback={<div>Loading...</div>}>
                <UserCard user={user}/>
              </Suspense>
            </Grid>
          ))}
        </Grid>
      <Box component="div" sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Button variant="contained" color="primary" size='large' onClick={LoadMore}>Load More</Button>
      </Box>
    </Container>
  )
}

export default App
