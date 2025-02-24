/* eslint-disable @typescript-eslint/ban-ts-comment */
import { FC, useState } from 'react';
import Cookies from 'js-cookie';
import ReactCardFlip from "react-card-flip";
import {Box, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import MoreInfo from '../assets/more-info.jpg';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import TransgenderIcon from '@mui/icons-material/Transgender';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';
import { useStore } from '../utils/store';
import { Props } from '../utils/typing';

const UserCard: FC<Props> = ({ user, setIsError, setIsSuccess }) => {
  const { wishlist, add, remove } = useStore();
  const [isFlipped, setIsFlipped] = useState(false);
  
  const ToggleWishlist = () => {
    if (wishlist.includes(user)) {
      Cookies.remove('users');
      //@ts-ignore
      remove(user);
      Cookies.set('users', JSON.stringify(wishlist), {
        expires: 15,
      });
      setIsError(true);
    } else {
        let cookiesUsers = [];
        if (Cookies.get('users')) {
            //@ts-ignore
            cookiesUsers = Cookies.get('users');
            //@ts-ignore
            cookiesUsers += JSON.stringify({user});      
        } else {
            //@ts-ignore
            cookiesUsers = JSON.stringify({user});
        }
        //@ts-ignore
      Cookies.set('users', cookiesUsers, {
        expires: 15,
      });
      //@ts-ignore
      add(user);
      setIsSuccess(true);
    }
  }

  return (
    <Box 
        component="span"
        onMouseEnter={() => setIsFlipped(true)}
        onMouseLeave={() => setIsFlipped(false)}
    >
        <ReactCardFlip 
            isFlipped={isFlipped}
            flipDirection="horizontal"
        >
            <Card 
                sx={{ maxWidth: '100%', minHeight: '400px', maxHeight: '400px' }}
            >
                <CardMedia
                    component="img"
                    alt="user-avatar"
                    height="140"
                    image={user.avatar}
                />
                <CardContent sx={{ minHeight: '100px', maxHeight: '200px' }}>
                    <Typography gutterBottom variant="h6" component="h3" sx={{ textAlign: 'center' }} >
                        {user.username}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <span>{user.email}</span>
                        <br />
                        {user.gender === 'Male' ? <MaleIcon /> : user.gender === 'Female' ? <FemaleIcon /> : <TransgenderIcon />}
                        <span>{user.gender}</span> 
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton>{wishlist.includes(user) ? <FavoriteIcon /> : <FavoriteBorderIcon />}</IconButton>
                </CardActions>
            </Card>
            <Card 
                sx={{ maxWidth: '100%', minHeight: '400px', maxHeight: '400px' }}
            >
                <CardMedia
                    component="img"
                    alt="user-avatar"
                    height="140"
                    image={MoreInfo}
                />
                <CardContent sx={{ minHeight: '100px', maxHeight: '200px' }}>
                    <Typography variant="body2" color="text.secondary">
                        <span>First Name: {user.first_name}</span>
                        <br />
                        <span>Last Name: {user.last_name}</span> 
                        <br />
                        <span>Birthday: {user.date_of_birth}</span>
                        <br />
                        <span>City: {user.address.city}</span>
                    </Typography>
                </CardContent>
                <CardActions>
                    <IconButton onClick={ToggleWishlist}>{wishlist.includes(user) ? <FavoriteIcon /> : <FavoriteBorderIcon />}</IconButton>
                </CardActions>
            </Card>
        </ReactCardFlip>
    </Box>
  );
}


export default UserCard;