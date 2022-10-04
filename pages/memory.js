import { useState, useEffect } from "react";
import {
    Container, Board, Card, CardFront,
    CardBack
} from "../components/Memory";

const board = ["🤖", "👽", "👻", "🤡", "🐧", "🦚", "😄", "🚀"];

export default function Memory() {
    const [boardData, setBoardData] = useState([]);
    const [flippedCards, setFlippedCards] = useState([]);

    useEffect(() => {
        const randomCards = [...board, ...board]
            .sort(() => Math.random() - 0.5)
            .map((v) => v);
        setBoardData(randomCards);
        setFlippedCards([]);
    }, []);

    const updateActiveCards = (i) => {
        if (!flippedCards.includes(i)) {
            if (flippedCards.length == 1) {

                setFlippedCards([...flippedCards, i]);
            } else if (flippedCards.length == 2) {
                setFlippedCards([i]);
            }
        }
    };

    return (
        <>
            <h1>Memory</h1>
            <Container>
                <Board>
                    {boardData.map((data, i) => {
                        const flipped = flippedCards.includes(i) ? true : false;
                        return (
                            <Card
                                onClick={() => {
                                    updateActiveCards(i);
                                }}
                                key={i}
                                className={`section ${flipped}`}
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