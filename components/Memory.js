import styled from "styled-components";

export const Container = styled.main`
    min-height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Board = styled.article`
    display: grid;
    grid-template-columns: repeat(4, 75px);
    grid-gap: 8px;
    `;

export const Card = styled.section`
    border-radius: 4px;
    text-align: center;
    box-shadow: 3px 3px 20px 0px rgba(245,245,245,0.4);
    height: 75px;
    font-size: 36px;
    font-weight: bold;
    position: relative;
    transform-style: preserve-3d;
    transition: all 0.2s;
    user-select: none;
    
    .cardFront, .cardBack {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        backface-visibility: hidden;
        height: 100%;
    }
    
    .card-0 {
        transform: rotateY(0deg);
    }
    
    &.active {
        transform: rotateY(180deg);
    }

    &.matched .cardFront {
        background-color: lightgoldenrodyellow;
        color: white;
    }
    `;

export const CardFront = styled.section`
    padding-top: 8px;
    padding-left: 1px;
    transform: rotateY(180deg);
    background-color: #eee;
    line-height: 70px;
    vertical-align: middle;
    text-align: center;
    font-size: 50px;
    z-index: 2;
    `;

export const CardBack = styled.section`
    background-color: #ddd;
    transform: rotateY(0);
    z-index: 1;

    &.after {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 75%;
        height: 75%;
    }
`;

export const Menu = styled.nav`
    display: grid;
    justify-content: center;
    justify-items: center;
    flex-direction: column;

    p {
        margin: 10px;
        font-size: 35px;
        font-weight: 600;
    }
`;


