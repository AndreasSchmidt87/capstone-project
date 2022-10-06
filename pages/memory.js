import { useState, useEffect } from "react";
import {
    Container, Board, Card, CardFront,
    CardBack
} from "../components/Memory";
import { Head } from "../components/Header";

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

    const updateActiveCards = (iterate) => {
        if (!flippedCards.includes(iterate)) {
            if (flippedCards.length === 1) {
                const firstIdx = flippedCards[0];
                const secondIdx = iterate;
                if (boardData[firstIdx] === boardData[secondIdx]) {
                    setMatchedCards((prev) => [...prev, firstIdx, secondIdx]);
                }
                setFlippedCards([...flippedCards, iterate]);
            } else if (flippedCards.length === 2) {
                setFlippedCards([iterate]);
            } else {
                setFlippedCards([...flippedCards, iterate]);
            }
        }
    };

    return (
        <>
            <Head>
                <h1>Memory</h1>
            </Head>
            <Container>
                <Board>
                    {boardData.map((data, iterate) => {
                        const flipped = flippedCards.includes(iterate);
                        const matched = matchedCards.includes(iterate);
                        return (
                            <Card
                                onClick={() => {
                                    updateActiveCards(iterate);
                                }}
                                key={iterate}
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