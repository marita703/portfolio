import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";

const Home: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar />
      <div className="container mx-auto px-12 py-4 mt-24">
        <HeroSection />
      </div>
    </main>
  );
};

export default Home;
