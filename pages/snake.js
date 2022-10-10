import { useEffect, useRef } from 'react';
import { HeadLine } from "../components/Header";
import { Matchfield } from "../components/Snake";

export default function Snake() {

    const canvasRef = useRef(null)

    const board_border = 'black';
    const board_background = 'white';
    const snake_col = 'lightblue';
    const snake_border = 'darkblue';

    //const snakeboard_ctx = gameCanvas.getContext("2d");


    function drawSnake(snake) {
        snake.forEach(drawSnakePart);
    }

    function drawSnakePart(snakePart) {
        snakeboard_ctx.fillStyle = snake_col;
        snakeboard_ctx.strokeStyle = snake_border;
        snakeboard_ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
        snakeboard_ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
    }

    function clearCanvas(snakeboard) {
        snakeboard_ctx.fillStyle = board_background;
        snakeboard_ctx.strokestyle = board_border;
        snakeboard_ctx.fillRect(0, 0, snakeboard.width, snakeboard.height);
        snakeboard_ctx.strokeRect(0, 0, snakeboard.width, snakeboard.heitgth);
    }
    useEffect((snakeboard, snakeboard_ctx, snake) => {
        const canvas = canvasRef.current
        const snakeboard = document.getElementById("snakeboard");
        const snakeboard_ctx = canvas.getContext('2d')


        let snake = [{ x: 150, y: 150 }, { x: 1400, y: 150 }, { x: 150, y: 150 }, { x: 130, y: 150 }, { x: 120, y: 150 }, { x: 110, y: 150 }];
    }, [main])

    function main() {
        clearCanvas();
        drawSnake();
    }

    main();

    return (
        <>
            <HeadLine>Snake</HeadLine>
            <Matchfield ref={canvasRef} width="330" height="330"></Matchfield>
        </>
    )
}