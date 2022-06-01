import { useRouter } from "next/router";
import React from "react";
import {
  AiOutlineInstagram,
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaDiscord } from "react-icons/fa";

const Footer4 = () => {
  const router = useRouter();
  return (
    <div className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12 bg-neutral-900">
      <div className="flex flex-col items-center justify-center">
        <div className="text-white text-3xl cursor-default">wcnrny</div>
        <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-8">
          <a
            href="#about"
            className="hover:text-gray-500 text-base cursor-pointer leading-4 text-white select-none"
          >
            About
          </a>
          <p className="hover:text-gray-500 text-base cursor-not-allowed leading-4 text-white select-none">
            Contact me
          </p>
          <p className="hover:text-gray-500 text-base cursor-pointer leading-4 text-white select-none">
            Projects
          </p>
          <a
            href="https://github.com/wcnrny/website"
            className="hover:text-gray-500 text-base cursor-pointer leading-4 text-white select-none"
          >
            Source Code of this website
          </a>
        </div>
        <div className="flex items-center gap-x-8 mt-6">
          <div
            className="cursor-pointer text-white hover:text-gray-500"
            onClick={() => {
              router.push("https://github.com/wcnrny");
            }}
          >
            <AiFillGithub size={32} />
          </div>
          <div
            className="cursor-pointer text-white hover:text-gray-500"
            onClick={() => {
              router.push("https://instagram.com/wcnrny");
            }}
          >
            <AiOutlineInstagram size={32} />
          </div>
          <div
            className="cursor-pointer text-white hover:text-gray-500"
            onClick={() => {
              router.push("https://twitter.com/wcnrnyofficial");
            }}
          >
            <AiOutlineTwitter size={32} />
          </div>
          <div
            className="cursor-pointer text-white hover:text-gray-500"
            onClick={() => {
              router.push("https://discord.com/users/320947934847827978");
            }}
          >
            <FaDiscord size={32} />
          </div>
        </div>
        <div className="flex items-center mt-6">
          <p className="text-base leading-4 text-white">
            2022 <span className="font-semibold select-none">wcnrny</span>
          </p>
          <div className="border-l border-gray-800 pl-2 ml-2">
            <p className="text-base leading-4 text-white select-none">
              Made with Next.js and Love ❤
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer4;
