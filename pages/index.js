import Head from "next/head";
import Header from "../components/Header";
import XOGame from "../components/XOGame";
import Main from "../components/Home";


export default function Home() {
  return (
    <>
      <Head>
        <title>X O Game</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Indie+Flower&display=swap" rel="stylesheet"/> 
      </Head>
      
      <Main>
        <Header />
        <XOGame />
        
      </Main>
    </>
  )
}
