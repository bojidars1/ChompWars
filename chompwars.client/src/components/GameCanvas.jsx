import React, { useEffect, useRef } from 'react';

const GameCanvas = () => {
    const canvasRef = useRef(null);

    const player = {
        x: 400,
        y: 275,
        size: 12,
        color: 'blue',
        speed: 1
    };

    const pressedKeys = {};

    const drawPlayer = (ctx) => {
        ctx.fillStyle = '#f0f0f0';
        ctx.fillRect(0, 0, 800, 550);
        ctx.beginPath();
        ctx.arc(player.x, player.y, player.size, 0, Math.PI * 2);
        ctx.fillStyle = player.color;
        ctx.fill();
    };

    const handleKeyDown = (e) => {
        pressedKeys[e.key] = true;
    };

    const handleKeyUp = (e) => {
        pressedKeys[e.key] = false;
    };

    const movePlayer = () => {
        if ((pressedKeys['ArrowUp'] || pressedKeys['w']) && player.y - player.size > 0) player.y -= player.speed;
        if (pressedKeys['ArrowDown'] || pressedKeys['s'] && player.y + player.size < 550) player.y += player.speed;
        if (pressedKeys['ArrowLeft'] || pressedKeys['a'] && player.x - player.size > 0) player.x -= player.speed;
        if (pressedKeys['ArrowRight'] || pressedKeys['d'] && player.x + player.size < 800) player.x += player.speed;
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');

        const gameLoop = () => {
            movePlayer();
            drawPlayer(context);
            requestAnimationFrame(gameLoop);
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        gameLoop();

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
            cancelAnimationFrame(gameLoop);
        };
    }, []);

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