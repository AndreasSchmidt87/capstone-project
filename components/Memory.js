import styled from "styled-components";

export const Container = styled.main`
    min-height: 100vh;
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
    height: 75px;
    font-size: 36px;
    font-weight: bold;
    position: relative;
    transform-style: preserve-3d;
    transition: all 0.2s;
    user-select: none;
    
    &.card-0 {
        transform: rotateY(0deg);
    }

    &:active {
        transform: rotateY(180deg);
    }

    .cardFront, .cardBack {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        backface-visibility: hidden;
        height: 100%;
    }
    `;

export const CardFront = styled.section`
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
    

    &::after {
        position: absolute;
        content: "";
        top: 0;
        left: 0;
        width: 75%;
        height: 75%;
    }
`;

