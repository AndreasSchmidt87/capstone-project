import styled from "styled-components";
import {useState} from "react";

const players = {

  HUMAN: {
  SYM: "X",
  NAME: "You",
  },
};

export default function XOGame() {
  // const [board, setBoard] = useState(Array(9).fill(""));
  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);

  function playFn(arrayIndex, index) {
    
    
    board[arrayIndex][index] = players?.HUMAN?.SYM;
    setBoard((board) => [...board]);
    
    
  }

  function playAgainFn() {
    setBoard([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
   
  }

  
  return (
      <>
        <Matchfield>
          <Col />
            <Cell onClick={() => playFn(0, 0)} >
              {board[0][0]}
            </Cell>
            <Cell onClick={() => playFn(0, 1)} >
              {board[0][1]}
            </Cell>
            <Cell onClick={() => playFn(0, 2)} >
              {board[0][2]}
            </Cell>
          
          <Col />
            <Cell onClick={() => playFn(1, 0)} >
              {board[1][0]}
            </Cell>
            <Cell onClick={() => playFn(1, 1)} >
              {board[1][1]}
            </Cell>
            <Cell onClick={() => playFn(1, 2)} >
              {board[1][2]}
            </Cell>
          
          <Col />
            <Cell onClick={() => playFn(2, 0)} >
              {board[2][0]}
            </Cell>
            <Cell onClick={() => playFn(2, 1)} >
              {board[2][1]}
            </Cell>
            <Cell onClick={() => playFn(2, 2)} >
              {board[2][2]}
            </Cell>
          
        </Matchfield>
        
        <Button onClick={playAgainFn}>
            Restart
        </Button>
          
        
      </>
      
    );
}

const Matchfield = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-image: url(https://i.imgur.com/OVBsgc1.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  border: 2px solid black;
  font-family: "Indie Flower", cursive;
  width: 271px;
`;

const Col = styled.col`
  display: flex;
  `;

const Cell = styled.span`
  width: 89px;
  height: 89px;
  border: 1px solid lightgray;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: xxx-large;
  text-transform: capitalize;
  cursor: pointer;
  color: white;
  font-weight: 900;
`;

const Button = styled.button`
    text-shadow: 1px 1px pink, -1px -1px maroon;
    line-height: 1.5em;
    text-align: center;
    display: inline-block;
    width: 4.5em;
    height: 4.5em;
    border-radius: 50%;
    background-color: red;
    box-shadow: 0 0.2em maroon;
    color: red;
    margin: 5px;
    background-color: red;
    background-image: linear-gradient(left top, pink 3%, red 22%, maroon 99%);
    cursor: pointer;
    padding-left: 5px;

    &:active {
    box-shadow: none;
    position: relative;
    top: 0.2em;
}
`;