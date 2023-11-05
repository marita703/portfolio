import React from "react";
import Logo from "public/Images/Logo/logopeque.png";
import Image from "next/image";

function Footer() {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent">
      <div className="container p-24 flex justify-between ">
        <span className="text-white z-100">
          <Image src={Logo} alt="" height={50} width={50}></Image>
        </span>
        <p className="text-slate-600">All rights reserverd.</p>
      </div>
    </footer>
  );
}

export default Footer;
