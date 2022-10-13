import { useEffect, useState, useRef } from 'react';
import { HeadLine } from "../components/Header";
import { Matchfield, Score } from "../components/Snake";
import { Container } from '../components/Memory';

export default function Snake() {
    const canvasRef = useRef(null);

    let directionX = 10;
    let directionY = 0;

    let foodX;
    let foodY;

    const board_border = 'black';
    const board_background = 'white';
    const snake_col = 'lightblue';
    const snake_border = 'darkblue';

    const [score, setScore] = useState(0);

    function drawSnake(snake, snakeboardCTX) {
        snake.forEach((snakePart) => drawSnakePart(snakePart, snakeboardCTX));
    }

    function drawSnakePart(snakePart, snakeboardCTX) {
        snakeboardCTX.fillStyle = snake_col;
        snakeboardCTX.strokeStyle = snake_border;
        snakeboardCTX.fillRect(snakePart.x, snakePart.y, 10, 10);
        snakeboardCTX.strokeRect(snakePart.x, snakePart.y, 10, 10);
    }

    function clearCanvas(snakeboard, snakeboardCTX) {
        snakeboardCTX.fillStyle = board_background;
        snakeboardCTX.strokestyle = board_border;
        snakeboardCTX.fillRect(0, 0, snakeboard.width, snakeboard.height);
        snakeboardCTX.strokeRect(0, 0, snakeboard.width, snakeboard.heigth);
    }

    function moveSnake(snake, directionX, directionY, snakeboard, score) {
        const head = { x: snake[0].x + directionX, y: snake[0].y + directionY };
        snake.unshift(head);
        const has_eaten_food = snake[0].x === foodX && snake[0].y === foodY;
        if (has_eaten_food) {
            setScore((previousScore) => (previousScore + 10));
            // document.getElementById('score').innerHTML = score;
            generate_food(snakeboard, snake, score);
            return { ...score };
        } else {
            snake.pop();
        }
    }

    function change_direction(event, changeingDirection) {
        const LEFT_KEY = 37;
        const RIGHT_KEY = 39;
        const UP_KEY = 38;
        const DOWN_KEY = 40;

        if (changeingDirection) return;
        changeingDirection = true;

        const keyPressed = event.keyCode;
        const goingUp = directionY === -10;
        const goingDown = directionY === 10;
        const goingRight = directionX === 10;
        const goingLeft = directionX === -10;

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

    function drawFood(foodX, foodY, snakeboardCTX) {
        snakeboardCTX.fillStyle = 'lightgreen';
        snakeboardCTX.strokeStyle = 'darkgreen';
        snakeboardCTX.fillRect(foodX, foodY, 10, 10);
        snakeboardCTX.strokeRect(foodX, foodY, 10, 10);
    }

    function random_food(min, max) {
        return Math.round((Math.random() * (max - min) + min) / 10) * 10;
    }

    function generate_food(snakeboard, snake) {
        foodX = random_food(0, snakeboard.width - 10);
        foodY = random_food(0, snakeboard.height - 10);
        snake.forEach(function has_snake_eaten_food(part) {
            const has_eaten = part.x === foodX && part.y === foodY;
            if (has_eaten) generate_food();
        });
    }


    useEffect(() => {
        const snakeboard = document.getElementById("snakeboard");
        const snakeboardCTX = snakeboard.getContext('2d');

        const event = document.addEventListener("keydown", change_direction);
        const changeingDirection = false;

        const snake = [
            { x: 150, y: 150 },
            { x: 140, y: 150 },
            { x: 130, y: 150 },
            { x: 120, y: 150 },
            { x: 110, y: 150 },
            { x: 100, y: 150 }
        ];

        generate_food(snakeboard, snake);

        setInterval(function onTick() {
            change_direction(changeingDirection);
            clearCanvas(snakeboard, snakeboardCTX);
            drawSnake(snake, snakeboardCTX);
            moveSnake(snake, directionX, directionY, snakeboard, score);
            drawFood(foodX, foodY, snakeboardCTX);
        }, 100)

    }, [])

    return (
        <>
            <HeadLine>
                <h1>Snake</h1>
            </HeadLine>
            <Score>Score: {score}</Score>
            <Container>
                <Matchfield
                    id="snakeboard"
                    ref={canvasRef}
                    width="330"
                    height="330"
                >
                </Matchfield>
            </Container>
        </>
    )
}