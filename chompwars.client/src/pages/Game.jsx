import React from 'react';
import GameCanvas from '../components/GameCanvas';
import { Fade } from '@mui/material';

const Game = () => {
    return (
        <Fade in={true} timeout={500}>
            <div>
               <GameCanvas />
            </div>
        </Fade>
    );
};

export default Game;