import { Matchfield, Col, Cell, Button, Main } from "../components/XOGame";
import { useEffect, useState } from "react";
import Link from "next/link";
import { HeadLine } from "../components/Header";

const players = {
    CPU: {
        SYMBOL: "O",
        NAME: "Computer",
    },
    HUMAN: {
        SYMBOL: "X",
        NAME: "You",
    },
};

const playerSymbol = players.HUMAN.SYMBOL;
const cpuSymbol = players.CPU.SYMBOL;
const playerName = players.HUMAN.NAME;
const cpuName = players.CPU.NAME;

export default function XOGame() {

    const [board, setBoard] = useState([
        ["", "", ""],
        ["", "", ""],
        ["", "", ""],
    ]);

    const [isCPUNext, setIsCPUNext] = useState(false);
    const [winner, setWinner] = useState(null);

    function playFieldLocation(rowIndex, columnIndex) {
        if (!isCPUNext) {
            if (winner) return;
            board[rowIndex][columnIndex] = playerSymbol;
            setBoard((board) => [...board]);
            checkWinner();
            setIsCPUNext(true);
        }
    }

    useEffect(() => {
        if (winner) return;
        if (isCPUNext) {
            setTimeout(cpuPlay, 1000);
        }
    }, [isCPUNext]);

    function cpuPlay() {
        if (winner) return;

        const cpuMove = getCPUTurn();

        board[cpuMove.rowIndex][cpuMove.columnIndex] = cpuSymbol;

        setBoard((board) => [...board]);
        checkWinner();
        setIsCPUNext(false);
    }

    function getCPUTurn() {
        const emptyIndexes = [];
        board.forEach((row, rowIndex) => {
            row.forEach((cell, columnIndex) => {
                if (cell === "") {
                    emptyIndexes.push({ rowIndex, columnIndex });
                }
            });
        });
        const randomIndex = Math.floor(Math.random() * emptyIndexes.length);
        return emptyIndexes[randomIndex];
    }

    function checkWinner() {
        for (let columnIndex = 0; columnIndex < board.length; columnIndex++) {
            const row = board[columnIndex];
            if (row.every((cell) => cell === cpuSymbol)) {
                setWinner(cpuName);
                return;
            } else if (row.every((cell) => cell === playerSymbol)) {
                setWinner(playerName);
                return;
            }
        }

        for (let i = 0; i < 3; i++) {
            const column = board.map((row) => row[i]);
            if (column.every((cell) => cell === cpuSymbol)) {
                setWinner(cpuName);
                return;
            } else if (column.every((cell) => cell === playerSymbol)) {
                setWinner(playerName);
                return;
            }
        }

        const diagonal1 = [board[0][0], board[1][1], board[2][2]];
        const diagonal2 = [board[0][2], board[1][1], board[2][0]];
        if (diagonal1.every((cell) => cell === cpuSymbol)) {
            setWinner(cpuName);
            return;
        } else if (diagonal1.every((cell) => cell === playerSymbol)) {
            setWinner(playerName);
            return;
        } else if (diagonal2.every((cell) => cell === cpuSymbol)) {
            setWinner(cpuName);
            return;
        } else if (diagonal2.every((cell) => cell === playerSymbol)) {
            setWinner(playerName);
            return;
        } else if (board.flat().every((cell) => cell !== "")) {
            setWinner("draw");
            return;
        } else {
            setWinner(null);
            return;
        }
    }

    function displayWinner() {
        if (winner === "draw") {
            return "Its a draw!";
        } else if (winner) {
            return `${winner} win!`;
        }
    }

    function displayTurn() {
        if (isCPUNext) {
            return "Computers turn";
        } else {
            return "Your turn";
        }
    }

    function resetPlayBoard() {
        setBoard([
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
        ]);
        setWinner(null);
        setIsCPUNext(false);
    }

    return (
        <>
            <HeadLine>
                <h1>X and O Game</h1>
            </HeadLine>
            <Main>
                <h2>{!winner && displayTurn() || winner && displayWinner()}</h2>
                <Matchfield>
                    <Col />
                    <Cell onClick={() => playFieldLocation(0, 0)} >
                        {board[0][0]}
                    </Cell>
                    <Cell onClick={() => playFieldLocation(0, 1)} >
                        {board[0][1]}
                    </Cell>
                    <Cell onClick={() => playFieldLocation(0, 2)} >
                        {board[0][2]}
                    </Cell>
                    <Col />
                    <Cell onClick={() => playFieldLocation(1, 0)} >
                        {board[1][0]}
                    </Cell>
                    <Cell onClick={() => playFieldLocation(1, 1)} >
                        {board[1][1]}
                    </Cell>
                    <Cell onClick={() => playFieldLocation(1, 2)} >
                        {board[1][2]}
                    </Cell>
                    <Col />
                    <Cell onClick={() => playFieldLocation(2, 0)} >
                        {board[2][0]}
                    </Cell>
                    <Cell onClick={() => playFieldLocation(2, 1)} >
                        {board[2][1]}
                    </Cell>
                    <Cell onClick={() => playFieldLocation(2, 2)} >
                        {board[2][2]}
                    </Cell>
                </Matchfield>
                <Link href="/">Back to Collection</Link>
                {winner && (
                    <Button onClick={resetPlayBoard}>
                        Restart
                    </Button>
                )}
            </Main>
        </>
    );
}