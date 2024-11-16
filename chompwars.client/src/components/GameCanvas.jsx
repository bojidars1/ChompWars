import React, { useEffect, useRef, useState } from 'react';

const GameCanvas = () => {
    const canvasRef = useRef(null);

    const player = {
        x: 400,
        y: 275,
        size: 12,
        color: 'blue'
    };

    const drawPlayer = (ctx) => {
        ctx.clearRect(0, 0, 800, 550);
        ctx.beginPath();
        ctx.arc(player.x, player.y, player.size, 0, Math.PI * 2);
        ctx.fillStyle = player.color;
        ctx.fill();
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        drawPlayer(context);
    }, [player, drawPlayer]);

    return (
        <canvas
        ref={canvasRef}
        width={800}
        height={550}
        style={{ border: '1px solid black' }}
         />
    );
};

export default GameCanvas;