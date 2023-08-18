import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import { useScrollTrigger } from '@mui/material';
import Logo from '../assets/LogoInflead.png';

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function Navbar(props: Props) {
  return (
    <>
      <HideOnScroll {...props}>
        <AppBar sx={{ bgcolor: 'transparent' }}>
          <Toolbar>
                <img src={Logo} alt="Logo" width={34} height={34} loading='lazy' />
                <Typography variant="h6" component="div" sx={{ color: '#2f8fea', pl: 1 }}>
                Inflead Challenge
                </Typography>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar sx={{ mt: 4 }}/>
    </>
  );
}