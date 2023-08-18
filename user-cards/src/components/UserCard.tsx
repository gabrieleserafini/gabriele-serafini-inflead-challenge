import { FC, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import ReactCardFlip from "react-card-flip";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import MoreInfo from '../assets/more-info.jpg';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import TransgenderIcon from '@mui/icons-material/Transgender';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { IconButton } from '@mui/material';
import { useStore } from '../store';

interface Props {
    user: {
        id: number;
        email: string;
        avatar: string;
        username: string;
        gender: string;
        first_name: string;
        last_name: string;
        date_of_birth: string;
        address:{
            city: string;
        }
    }
}

const UserCard: FC<Props> = ({ user }) => {
  const { wishlist, add, remove } = useStore();
  const [isFlipped, setIsFlipped] = useState(false);
  
  const ToggleWishlist = () => {
    console.log(wishlist.includes(user))
    if (wishlist.includes(user)) {
      Cookies.remove('users');
      remove(user);
      console.log(wishlist);
    } else {
        let cookiesUsers = [];
        if (Cookies.get('users')) {
            cookiesUsers = Cookies.get('users');
            cookiesUsers += JSON.stringify({user});      
        } else {
            cookiesUsers = JSON.stringify({user});
        }
      Cookies.set('users', cookiesUsers, {
        expires: 15,
      });
      add(user);
      console.log(wishlist);
    }
  }

  return (
    <ReactCardFlip 
        isFlipped={isFlipped}
        flipDirection="horizontal"
    >
        <Card 
            sx={{ maxWidth: '100%', minHeight: '350px' }}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
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
            sx={{ maxWidth: '100%', minHeight: '350px' }}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
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
  );
}


export default UserCard;