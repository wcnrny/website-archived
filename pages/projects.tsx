/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-key */
import { ReactElement } from "react";
import Card from "../components/Card";
import Layout from "../components/Layout";
import { RiSnapchatLine } from "react-icons/ri";

interface cards {
  title: string;
  description: string;
  icon?: JSX.Element;
  routeUrl: string;
}

const Cards: cards[] = [
  {
    title: "This website",
    description: "Well it's obvious that this website is a project too.",
    routeUrl: "/",
    icon: <img src="/wcnrny.png" alt="" className="h-16" />,
  },
  {
    title: "Adonis Bot",
    description:
      "It's not active right now. It'll be active when we finished it.",
    routeUrl:
      "https://discord.com/api/oauth2/authorize?client_id=700817235752779928&permissions=8&scope=bot%20applications.commands",
    icon: <img src="/adonislogo.png" alt="" className="h-12" />,
  },
  {
    title: "Türkiyenin Gastronomi Haritası",
    description:
      "Yeah, another unfinished project I made. Will be active soon.",
    routeUrl: "https://turkiyeningastronomiharitasi.tk",
    icon: <img src="/tgh.ico" alt="" className="h-16" />,
  },
  {
    title: "Orman Yangınları",
    description:
      "A project for Taner Beyaz and his students made for TÜBİTAK project.",
    routeUrl: "https://orman-yanginlari.vercel.app",
  },
  {
    title: "Blister: A Discord Bot Generator",
    description: "This project is newly started. Please wait patiently.",
    routeUrl: "/projects",
  },
];

const Projects = () => {
  return (
    <>
      <div className="md:h-auto h-screen bg-neutral-900 flex flex-col items-center p-10 md:p-5 gap-5">
        <h1 className="text-white text-4xl md:text-2xl">Projects I Made</h1>
        <div className="grid grid-cols-2 grid-rows-[auto] justify-items-center gap-5 md:flex md:flex-col">
          {Cards.map((e) => (
            <Card
              title={e.title}
              description={e.description}
              routeUrl={e.routeUrl}
              icon={e.icon}
            />
          ))}
        </div>
      </div>
    </>
  );
};
Projects.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Projects;
