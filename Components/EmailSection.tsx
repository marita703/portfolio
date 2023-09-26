import React from "react";
import GithubIcon from "public/Icons/github-icon.svg";
import LinkedinIcon from "public/Icons/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

function EmailSection() {
  return (
    <section className="grid md:grid-cols-2 my-12 md:my-0 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-white text-xl font-bold my-2 ">Let's Connect!</h5>
        {/* this is a max with medium so it does not expand to the full lengh of the grid */}
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm incredibly excited about diving into the world of Web3, and I'm
          actively on the lookout for fresh opportunities. Don't hesitate to
          reach out if you happen to stumble upon any exciting ventures—I'm all
          ears! I'll get back to you promptly.
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/marita703">
            <Image src={GithubIcon} alt="github icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/maramartinez/">
            <Image src={LinkedinIcon} alt="linkedin icon" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col gap-4">
          <div>
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your e-Mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="example@email.com"
              className="bg-[#18191E] border border-[#3335F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              required
              placeholder="I want to contact you :)"
              className="bg-[#18191E] border border-[#3335F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Your Message!"
              className="bg-[#18191E] border border-[#3335F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            />
          </div>
          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 w-full rounded-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default EmailSection;
