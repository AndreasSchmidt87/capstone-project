import styled from "styled-components";
import Head from "next/head";
import Header from "../components/Header";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import XOPic from "../components/pictures/XOPic.png";
import Memory from "../components/pictures/Memory.png";

export default function Home() {
  const router = useRouter();
  const path = router.pathname;
  return (
    <>
      <Head>
        <title>Minigame Collection</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="shortcut icon" type="image/x-icon" href="./favicon.ico" />
      </Head>
      <Header />
      <Container>
        <Link href="/xogame"><StyledLink><Image alt="" width="150" height="150
        " src={XOPic} />X and O Game</StyledLink></Link>
        <Link href="/memory"><StyledLink><Image alt="" width="150" height="150
        " src={Memory} />Memory</StyledLink></Link>
      </Container>
    </>
  )
}

const Container = styled.main`
  display: flex;
  justify-content: center;
`;

const StyledLink = styled.a`
  display: grid;
  place-items: center;
  background: whitesmoke;
  color: black;
  box-shadow: 3px 3px 20px 0px rgba(245,245,245,0.7);
  border-radius: 15px;
  margin: 20px;
  padding: 5px;
  width: 150px;
  height: 180px;
`;
