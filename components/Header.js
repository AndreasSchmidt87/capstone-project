import styled from "styled-components";

export default function Header() {
    return (
        <>
            <Head>
                <h1>Minigame Collection</h1>
            </Head>
        </>
    )
}

export const HeadLine = styled.header`
    display: grid;
    justify-content: center;
    background-color: #292929;
`;
