import React from 'react';
import { Fade } from '@mui/material';

const Game = () => {
    return (
        <Fade in={true} timeout={500}>
            <div>
               <h1>Game</h1>
            </div>
        </Fade>
    );
};

export default Game;