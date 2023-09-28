import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";
import AboutSection from "../Components/AboutSection";
import Projects from "../Components/Projects";
import EmailSection from "../Components/EmailSection";
import Footer from "../Components/Footer";
import AchivmentsSection from "../Components/AchivmentsSection";

const Home: NextPage = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] ">
      <Navbar />
      <div className="container mx-auto px-12 py-4 mt-24">
        <HeroSection />
        <AchivmentsSection />
        <AboutSection />
        <Projects />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
};

export default Home;
