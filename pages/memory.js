import { useState, useEffect } from "react";
import {
    Container, Board, Card, CardFront,
    CardBack
} from "../components/Memory";
import { HeadLine } from "../components/Header";

const board = ["🤖", "👽", "👻", "🤡", "🐧", "🦚", "😄", "🚀"];

export default function Memory() {
    const [boardData, setBoardData] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);

    useEffect(() => {
        initialize();
    }, []);

    const initialize = () => {
        const randomCards = [...board, ...board]
            .sort(() => Math.random() - 0.5)
            .map((mixed) => mixed);
        setBoardData(randomCards);
        setFlippedCards([]);
        setMatchedCards([]);
    }

    const updateActiveCards = (repeat) => {
        if (!flippedCards.includes(repeat)) {
            if (flippedCards.length === 1) {
                const firstIndex = flippedCards[0];
                const secondIndex = repeat;
                if (boardData[firstIndex] === boardData[secondIndex]) {
                    setMatchedCards((prev) => [...prev, firstIndex, secondIndex]);
                }
                setFlippedCards([...flippedCards, repeat]);
            } else if (flippedCards.length === 2) {
                setFlippedCards([repeat]);
            } else {
                setFlippedCards([...flippedCards, repeat]);
            }
        }
    };

    return (
        <>
            <HeadLine>
                <h1>Memory</h1>
            </HeadLine>
            <Container>
                <Board>
                    {boardData.map((data, repeat) => {
                        const flipped = flippedCards.includes(repeat);
                        const matched = matchedCards.includes(repeat);
                        return (
                            <Card
                                onClick={() => {
                                    updateActiveCards(repeat);
                                }}
                                key={repeat}
                                className={`section ${flipped || matched ? "active" : ""} ${matched ? "matched" : ""}`}
                            >
                                <CardFront className="cardFront">{data}</CardFront>
                                <CardBack className="cardBack"></CardBack>
                            </Card>
                        );
                    })}
                </Board>
            </Container>
        </>
    )
}  