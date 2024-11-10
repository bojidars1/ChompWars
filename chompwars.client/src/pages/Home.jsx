import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Home = () => {
    return (
        <div>
            <h1>Welcome to ChopWars!</h1>
            <Button variant="contained" color="primary" component={Link} to='/game'>Play Now</Button>
        </div>
    );
};

export default Home;