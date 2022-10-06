import styled from "styled-components";

export const Main = styled.main`
  padding: 0 2rem;
  min-height: 100vh;
  padding: 4rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Matchfield = styled.section`
  display: flex;
  flex-wrap: wrap;
  background-image: url(https://i.imgur.com/OVBsgc1.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  border: 2px solid black;
  font-family: "Indie Flower", cursive;
  width: 271px;
  box-shadow: 3px 3px 20px 0px rgba(245,245,245,0.4);
`;

export const Col = styled.col`
  display: flex;
  `;

export const Cell = styled.span`
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

export const Button = styled.button`
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
