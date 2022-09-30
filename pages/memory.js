import { useState, useEffect } from "react";
import {
    Container, Board, Card, CardFront,
    CardBack
} from "../components/Memory";

const board = ["🤖", "👽", "👻", "🤡", "🐧", "🦚", "😄", "🚀"];

export default function Memory() {
    const [boardData, setBoardData] = useState([]);


    useEffect(() => {
        initialize();
    }, []);

    const initialize = () => {
        cards();
    }

    const cards = () => {
        const randomCards = [...board, ...board]
            .sort(() => Math.random() - 0.5)
            .map((v) => v);
        setBoardData(randomCards);
    }

    return (
        <>
            <Container>

                <Board>
                    {boardData.map((data, i) => {

                        return (
                            <Card

                            >
                                <CardFront>{data}</CardFront>

                            </Card>
                        );
                    })}
                </Board>
            </Container>
        </>
    )
}  