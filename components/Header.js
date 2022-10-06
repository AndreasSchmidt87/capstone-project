import styled from "styled-components";

export default function Header() {
    return (
        <>
            <HeadLine>
                <h1>Minigame Collection</h1>
            </HeadLine>
        </>
    )
}

export const HeadLine = styled.header`
    display: grid;
    justify-content: center;
    background-color: #292929;
`;
