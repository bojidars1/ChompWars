import React from 'react';
import CenterBox from '../components/CenterBox';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Home = () => {
    return (
        <div>
            <h1>Welcome to ChopWars!</h1>
            <CenterBox>
               <Button variant="contained" color="primary" component={Link} to='/game'>Play Now</Button>
            </CenterBox>
        </div>
    );
};

export default Home;