import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import IntroText from "../components/IntroText/IntroText";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Company Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <IntroText />
      <Footer />
    </div>
  );
}
