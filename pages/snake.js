import { useEffect, useRef } from 'react';
import { HeadLine } from "../components/Header";
import { Matchfield } from "../components/Snake";
import { Main } from '../components/XOGame';

export default function Snake() {
    const canvasRef = useRef(null);

    let directionX = 10;
    let directionY = 0;

    const board_border = 'black';
    const board_background = 'white';
    const snake_col = 'lightblue';
    const snake_border = 'darkblue';

    function drawSnake(snake, snakeboard_ctx) {
        snake.forEach((snakePart) => drawSnakePart(snakePart, snakeboard_ctx));
    }

    function drawSnakePart(snakePart, snakeboard_ctx) {
        snakeboard_ctx.fillStyle = snake_col;
        snakeboard_ctx.strokeStyle = snake_border;
        snakeboard_ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
        snakeboard_ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
    }

    function clearCanvas(snakeboard, snakeboard_ctx) {
        snakeboard_ctx.fillStyle = board_background;
        snakeboard_ctx.strokestyle = board_border;
        snakeboard_ctx.fillRect(0, 0, snakeboard.width, snakeboard.height);
        snakeboard_ctx.strokeRect(0, 0, snakeboard.width, snakeboard.heigth);
    }

    function moveSnake(snake, directionX, directionY) {
        const head = { x: snake[0].x + directionX, y: snake[0].y + directionY };
        snake.unshift(head);
        snake.pop();
    }

    function change_direction(event, changing_direction) {
        const LEFT_KEY = 37;
        const RIGHT_KEY = 39;
        const UP_KEY = 38;
        const DOWN_KEY = 40;

        if (changing_direction) return;
        changing_direction = true;

        const keyPressed = event.keyCode;
        const goingUp = directionY === -10;
        const goingDown = directionY === 10;
        const goingRight = directionX === -10;
        const goingLeft = directionX === 10;

        if (keyPressed === LEFT_KEY && !goingRight) {
            directionX = -10;
            directionY = 0;
        }
        if (keyPressed === UP_KEY && !goingDown) {
            directionX = 0;
            directionY = -10;
        }
        if (keyPressed === RIGHT_KEY && !goingLeft) {
            directionX = 10;
            directionY = 0;
        }
        if (keyPressed === DOWN_KEY && !goingUp) {
            directionX = 0;
            directionY = 10;
        }
    }

    useEffect(() => {
        const snakeboard = document.getElementById("snakeboard");
        const snakeboard_ctx = snakeboard.getContext('2d');

        const event = document.addEventListener("keydown", change_direction);
        const changing_direction = false;

        const snake = [
            { x: 150, y: 150 },
            { x: 140, y: 150 },
            { x: 130, y: 150 },
            { x: 120, y: 150 },
            { x: 110, y: 150 },
            { x: 100, y: 150 }
        ];

        setInterval(function onTick() {
            change_direction(changing_direction);
            clearCanvas(snakeboard, snakeboard_ctx);
            drawSnake(snake, snakeboard_ctx);
            moveSnake(snake, directionX, directionY, event);
        }, 100)

    }, [])

    return (
        <>
            <HeadLine>
                <h1>Snake</h1>
            </HeadLine>
            <Main>
                <Matchfield
                    id="snakeboard"
                    ref={canvasRef}
                    width="330"
                    height="330"
                >
                </Matchfield>
            </Main>
        </>
    )
}