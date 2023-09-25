import React from "react";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    id: 1,
    title: "Crypto Minter",
    description:
      "Web3App to mint a Private NFT Collection, featuring a ERC721 token contract",
    image: "public/Images/Projects/1.png",
    tag: ["All", "Web3"],
  },
  {
    id: 2,
    title: "Crypto Girls Club Website",
    description:
      "Web3 app developed for the Crypto Girls Club Comunity, featuring a NFT gated portal for holders of the CGC NFT",
    image: "public/Images/Projects/2.png",
    tag: ["All", "Web3"],
  },
  {
    id: 3,
    title: "DaoDemic",
    description:
      "Web3App to developed in ETHGlobal Hackaton, featuring Account Extraction, DAO creation for bounties distribution",
    image: "public/Images/Projects/2.png",
    tag: ["All", "Web3"],
  },
];

function Projects() {
  return (
    <section>
      <h2>Projects</h2>
    </section>
  );
}

export default Projects;
