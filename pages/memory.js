import { useState, useEffect } from "react";
import {
    Container, Board, Card, CardFront,
    CardBack, Menu
} from "../components/Memory";
import Link from "next/link";
import { HeadLine } from "../components/Header";
import { Button } from "../components/XOGame";

const board = ["🤖", "👽", "👻", "🤡", "🐧", "🦚", "😄", "🚀"];

export default function Memory() {
    const [boardData, setBoardData] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [moves, setMoves] = useState(0);
    const [gameOver, setGameOver] = useState();

    useEffect(() => {
        initialize();
    }, []);

    useEffect(() => {
        if (matchedCards.length === 16) {
            setGameOver(`you finished!`);
        }
    }, [moves]);

    const initialize = () => {
        const randomCards = [...board, ...board]
            .sort(() => Math.random() - 0.5)
            .map((move => move));
        setBoardData(randomCards);
        setGameOver([]);
        setFlippedCards([]);
        setMatchedCards([]);
        setMoves(0);
    }

    const updateActiveCards = (repeatCard) => {
        if (!flippedCards.includes(repeatCard)) {
            if (flippedCards.length === 1) {
                const firstIndex = flippedCards[0];
                const secondIndex = repeatCard;
                if (boardData[firstIndex] === boardData[secondIndex]) {
                    setMatchedCards((prev) => [...prev, firstIndex, secondIndex]);
                }
                setFlippedCards([...flippedCards, repeatCard]);
            } else if (flippedCards.length === 2) {
                setFlippedCards([repeatCard]);
            } else {
                setFlippedCards([...flippedCards, repeatCard]);
            }
            setMoves((move) => move + 1);
        }
    };

    return (
        <>
            <HeadLine>
                <h1>Memory</h1>
            </HeadLine>
            <Menu>
                <p>{`Moves -  ${moves}`}</p>
            </Menu>
            <Container>
                <Board>
                    {boardData.map((data, repeatCard) => {
                        const flipped = flippedCards.includes(repeatCard);
                        const matched = matchedCards.includes(repeatCard);
                        return (
                            <Card
                                onClick={() => {
                                    updateActiveCards(repeatCard);
                                }}
                                key={repeatCard}
                                className={`section ${flipped || matched ? "active" : ""} ${matched ? "matched" : ""} ${gameOver ? "gameover" : ""}`}
                            >
                                <CardFront className="cardFront">{data}</CardFront>
                                <CardBack className="cardBack"></CardBack>
                            </Card>
                        );
                    })}
                </Board>
            </Container>
            <Menu>
                <p>{`${gameOver}`}</p>
                <Link href="/">Back to Collection</Link>
                <Button onClick={() => initialize()}>
                    Restart
                </Button>
            </Menu>
        </>
    )
}  