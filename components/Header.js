import styled from "styled-components";

export default function Header() {
    return (
        <>
            <Main>
                <h1>Minigame Collection</h1>
            </Main>
        </>
    )
}

const Main = styled.main`
    display: grid;
    justify-content: center;
`;
