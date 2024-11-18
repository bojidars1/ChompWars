import React from 'react';
import CenterBox from '../components/CenterBox';
import { Link } from 'react-router-dom';
import { Button, Fade } from '@mui/material';

const Home = () => {
    return (
        <Fade in={true} timeout={500}>
            <div>
               <h1>Welcome to ChopWars!</h1>
               <CenterBox>
                  <Button variant="contained" color="primary" component={Link} to='/game'>Play Now</Button>
               </CenterBox>
            </div>
        </Fade>
    );
};

export default Home;