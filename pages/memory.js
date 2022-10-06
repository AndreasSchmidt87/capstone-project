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
        }
    };

    return (
        <>
            <HeadLine>
                <h1>Memory</h1>
            </HeadLine>
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