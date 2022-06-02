/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { ReactElement } from "react";
import Card from "../components/Card";
import Layout from "../components/Layout";
import { NextPageWithLayout } from "./_app";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineInstagram, AiOutlineReddit } from "react-icons/ai";
import { FiTwitter, FiTarget } from "react-icons/fi";
import { FaDiscord } from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";
import { RiSnapchatLine } from "react-icons/ri";

interface cards {
  title: string;
  description: string;
  icon?: JSX.Element;
  routeUrl: string;
}
interface items {
  title: string;
  iconUrl: string;
  routeUrl: string;
}
const Cards: cards[] = [
  {
    title: "Repositories",
    description: "View my repos and my public projects from Github.",
    icon: <VscGithubAlt size={24} />,
    routeUrl: "https://github.com/wcnrny?tab=repositories",
  },
  {
    title: "Instagram",
    description:
      "Look up my Instagram that I didn't share any photos of myself.",
    icon: <AiOutlineInstagram size={32} />,
    routeUrl: "https://instagram.com/wcnrny",
  },
  {
    title: "Twitter",
    description:
      "Look up my Twitter. I didn't post any tweets. But I'll post soon.",
    icon: <FiTwitter size={24} />,
    routeUrl: "https://twitter.com/wcnrnyofficial",
  },
  {
    title: "Reddit",
    description: "Oh right, the 'dangerous' platform I've ever seen.",
    icon: <AiOutlineReddit size={32} />,
    routeUrl: "https://reddit.com/u/wcnrny",
  },
  {
    title: "Discord",
    description: "Yeah, I have Discord. Wanna get some Discord mods with me?",
    icon: <FaDiscord size={32} />,
    routeUrl: "https://discord.com/users/320947934847827978",
  },
  {
    title: "Snapchat",
    description:
      "I'm not using Snapchat frequently. If you still wanna add me, here it is.",
    icon: <RiSnapchatLine size={32} />,
    routeUrl: "https://www.snapchat.com/add/wcnrnyofficial?locale=tr-TR",
  },
  {
    title: "Goals",
    description: "For goals? Oh, I didn't think about that. I'll add later.",
    icon: <FiTarget size={32} />,
    routeUrl: "/",
  },
  {
    title: "Buymeacoffee",
    description: "Wait, you wanna support me? Oh, thank you!!!",
    icon: <SiBuymeacoffee size={32} />,
    routeUrl: "https://www.buymeacoffee.com/wcnrnyofficial",
  },
];

const Items: items[] = [
  {
    title: "JavaScript",
    iconUrl:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg",
    routeUrl: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    title: "TypeScript",
    iconUrl:
      "https://raw.githubusercontent.com/danielcranney/profileme-dev/main/public/icons/skills/typescript-colored.svg",
    routeUrl: "https://www.typescriptlang.org/",
  },
  {
    title: "HTML5",
    iconUrl:
      "https://raw.githubusercontent.com/danielcranney/profileme-dev/main/public/icons/skills/html5-colored.svg",
    routeUrl: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
  },
  {
    title: "ReactJS",
    iconUrl:
      "https://raw.githubusercontent.com/danielcranney/profileme-dev/main/public/icons/skills/react-colored.svg",
    routeUrl: "https://reactjs.org/",
  },
  {
    title: "NextJS",
    iconUrl:
      "https://raw.githubusercontent.com/danielcranney/profileme-dev/main/public/icons/skills/nextjs-colored.svg",
    routeUrl: "https://nextjs.org/docs",
  },
  {
    title: "Tailwind CSS",
    iconUrl:
      "https://raw.githubusercontent.com/danielcranney/profileme-dev/main/public/icons/skills/tailwindcss-colored.svg",
    routeUrl: "https://tailwindcss.com/",
  },
  {
    title: "Plain CSS",
    iconUrl:
      "https://raw.githubusercontent.com/danielcranney/profileme-dev/main/public/icons/skills/css3-colored.svg",
    routeUrl: "https://www.w3.org/TR/CSS/#css",
  },
  {
    title: "NodeJS",
    iconUrl:
      "https://raw.githubusercontent.com/danielcranney/profileme-dev/main/public/icons/skills/nodejs-colored.svg",
    routeUrl: "https://nodejs.org/en",
  },
  {
    title: "Express",
    iconUrl:
      "https://raw.githubusercontent.com/danielcranney/profileme-dev/main/public/icons/skills/express-colored.svg",
    routeUrl: "https://expressjs.com",
  },
  {
    title: "MongoDB",
    iconUrl:
      "https://raw.githubusercontent.com/danielcranney/profileme-dev/main/public/icons/skills/mongodb-colored.svg",
    routeUrl: "https://www.mongodb.com/",
  },
  {
    title: "PostgreSQL",
    iconUrl:
      "https://raw.githubusercontent.com/danielcranney/profileme-dev/main/public/icons/skills/postgresql-colored.svg",
    routeUrl: "https://www.postgresql.org/",
  },
  {
    title: "Heroku",
    iconUrl:
      "https://raw.githubusercontent.com/danielcranney/profileme-dev/main/public/icons/skills/heroku-colored.svg",
    routeUrl: "https://www.heroku.com/",
  },
  {
    title: "Supabase",
    iconUrl:
      "https://raw.githubusercontent.com/danielcranney/profileme-dev/main/public/icons/skills/supabase-colored.svg",
    routeUrl: "https://supabase.io/",
  },
  {
    title: "Metamask",
    iconUrl:
      "https://raw.githubusercontent.com/danielcranney/profileme-dev/main/public/icons/skills/metamask-colored.svg",
    routeUrl: "https://metamask.io/",
  },
  {
    title: "Polygon",
    iconUrl:
      "https://raw.githubusercontent.com/danielcranney/profileme-dev/main/public/icons/skills/polygon-colored.svg",
    routeUrl: "https://polygon.technology/",
  },
  {
    title: "Ethereum",
    iconUrl:
      "https://raw.githubusercontent.com/danielcranney/profileme-dev/main/public/icons/skills/ethereum-colored.svg",
    routeUrl: "https://ethereum.org/en/",
  },
  {
    title: "IPFS",
    iconUrl:
      "https://raw.githubusercontent.com/danielcranney/profileme-dev/main/public/icons/skills/ipfs-colored.svg",
    routeUrl: "https://ipfs.io/",
  },
  {
    title: "Truffle",
    iconUrl:
      "https://raw.githubusercontent.com/danielcranney/profileme-dev/main/public/icons/skills/truffle-colored.svg",
    routeUrl: "https://trufflesuite.com",
  },
  {
    title: "Alchemy",
    iconUrl:
      "https://raw.githubusercontent.com/danielcranney/profileme-dev/main/public/icons/skills/alchemy-colored.svg",
    routeUrl: "https://docs.alchemy.com/alchemy/documentation/alchemy-web3",
  },
  {
    title: "EthersJS",
    iconUrl:
      "https://raw.githubusercontent.com/danielcranney/profileme-dev/main/public/icons/skills/ethers-colored.svg",
    routeUrl: "https://ethers.io",
  },
  {
    title: "Web3JS",
    iconUrl:
      "https://raw.githubusercontent.com/danielcranney/profileme-dev/main/public/icons/skills/web3js-colored.svg",
    routeUrl: "https://web3js.readthedocs.io/en/v1.7.1/#",
  },
];

const Home: NextPageWithLayout = () => {
  return (
    <div>
      <Head>
        <title>wcnrny - Home Page</title>
        <meta
          name="description"
          content="A website that describes myself. Including projects that I made, musics that I love to listen, any other information."
        />
      </Head>
      <div className="h-[100vh] bg-neutral-900 container pr-32 pb-10 pl-32 pt-10 md:p-10 flex justify-center flex-col">
        <h1 className="text-white text-4xl text-montserrat">
          A junior self taught{" "}
          <a
            href="https://www.coursera.org/articles/front-end-developer"
            className="underline cursor-help"
          >
            Front-End
          </a>{" "}
          developer
        </h1>
        <p className="text-gray-500 text-2xl w-[70%] md:w-full">
          Welcome! I am Furkan. I am a front-end developer that loves creating.
          I'm based in Turkey, Eskişehir. You can look up my projects, contact
          with me, look what I like to do, what I like to listen etc.
        </p>
      </div>
      <div
        className="h-[100vh] bg-neutral-900 container pl-32 pt-10 pr-32 pb-10 md:pr-10 md:pl-10 md:h-auto"
        id="about"
      >
        <h1 className="text-4xl text-montserrat text-neutral-600">
          About Me and My Socials
        </h1>
        <br />
        <div className="grid grid-cols-2 grid-rows-[auto] gap-5 md:flex md:flex-col">
          {Cards.map((e) => (
            <Card
              title={e.title}
              description={e.description}
              icon={e.icon}
              routeUrl={e.routeUrl}
            />
          ))}
        </div>
      </div>
      <div className="h-auto bg-neutral-900 container pl-32 pt-10 pr-32 pb-10 md:pr-10 md:pl-10 md:h-auto flex flex-col gap-10">
        <div className="flex flex-col">
          <h1 className="text-4xl text-white select-none md:text-2xl">
            • Who are you actually?
          </h1>
          <br />
          <p className="text-neutral-500 text-2xl md:text-lg">
            Hello again! I'm Furkan. I'm 17 years old. Will be 18 in 5 months. I
            started learning to code in 2019 with some Discord Bot tutorials.
            And I began to love coding. In 2020 during pandemic, I started to
            learn HTML5, CSS3 and ReactJS. I'm learning Web3 basics and Solidity
            programming language right now. Will be more active and productive
            on summer.
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="text-4xl text-white select-none md:text-2xl">
            • What's your skills?
          </h1>
          <br />
          <div className="text-neutral-500 text-2xl grid grid-cols-2 grid-rows-[auto] gap-4 justify-items-center md:flex md:flex-col">
            {Items.map((e) => (
              <a
                href={e.routeUrl}
                target="_blank"
                rel="noreferrer"
                className="flex flex-row items-center gap-2 hover:text-white transition-all p-4 w-72 md:w-auto md:justify-start hover:shadow-[0px_0px_10px_2px_rgb(55,65,81)]"
              >
                <img src={e.iconUrl} width="36" height="36" alt={e.title} /> |{" "}
                {e.title}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-4xl text-white select-none md:text-2xl">
            • What did you do so far?
          </h1>
          <br />
          <p className="text-neutral-500 text-2xl md:text-lg">
            I couldn't do it anything so far because of some problems. Like
            school exams. Will complete the projects that I made it to halfway
            and left them.
          </p>
        </div>
      </div>
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
