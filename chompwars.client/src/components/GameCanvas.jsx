import React, { useEffect, useRef } from 'react';

const GameCanvas = () => {
    const canvasRef = useRef(null);

    const world = {
        width: 2000,
        height: 2000
    };

    const player = {
        x: 1000,
        y: 1000,
        size: 12,
        color: 'blue',
        speed: 1.1
    };

    const pressedKeys = {};

    const drawGrid = (ctx) => {
        const gridSquareSize = 50;
        ctx.strokeStyle = '#ddd';
        ctx.lineWidth = 0.5;

        // Vertical lines
        for (let x = 0; x <= world.width; x += gridSquareSize) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, world.height);
            ctx.stroke();
        }

        // Horizontal lines
        for (let y = 0; y <= world.height; y += gridSquareSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(world.width, y);
            ctx.stroke();
        }
    };

    const drawPlayer = (ctx) => {
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
        if (pressedKeys['ArrowUp'] || pressedKeys['w']) player.y -= player.speed;
        if (pressedKeys['ArrowDown'] || pressedKeys['s']) player.y += player.speed;
        if (pressedKeys['ArrowLeft'] || pressedKeys['a']) player.x -= player.speed;
        if (pressedKeys['ArrowRight'] || pressedKeys['d']) player.x += player.speed;

        // Keep player in world
        player.x = Math.max(player.size, Math.min(player.x, world.width - player.size));
        player.y = Math.max(player.size, Math.min(player.y, world.height - player.size));
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        // Resize canvas logic based on viewport size (considering other components)
        const resizeCanvas = () => {
            // Make space for sidebar
            const canvasWidth = window.innerWidth - 450;
            const canvasHeight = window.innerHeight - 145;

            // Center canvas
            canvas.style.marginLeft = 'auto';
            canvas.style.marginRight = 'auto';

            canvas.width = canvasWidth;
            canvas.height = canvasHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        // Game loop
        const gameLoop = () => {
            movePlayer();

            // Clear last frame
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Center player in viewport
            const offsetX = player.x - canvas.width / 2;
            const offsetY = player.y - canvas.height / 2;

            // Prevent world from scrolling outside of allowed space
            const worldOffsetX = Math.max(0, Math.min(offsetX, world.width - canvas.width));
            const worldOffsetY = Math.max(0, Math.min(offsetY, world.height - canvas.height));

            // Apply offset to canvas
            ctx.save();
            ctx.translate(-worldOffsetX, -worldOffsetY);

            // Draw grid and player
            drawGrid(ctx);
            drawPlayer(ctx);

            ctx.restore();

            requestAnimationFrame(gameLoop);
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        gameLoop();

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(gameLoop);
        };
    }, []);

    return (
        <canvas
        ref={canvasRef}
        style={{
            position: 'absolute',
            top: '90px', // fit below header
            left: '0',
            right: '0',
            backgroundColor: '#f0f0f0',
            zIndex: 1
        }}
         />
    );
};

export default GameCanvas;