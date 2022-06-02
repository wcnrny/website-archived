/* eslint-disable react/jsx-key */
/* eslint-disable react/no-unescaped-entities */
import { ReactElement } from "react";
import Layout from "../components/Layout";
import { BsMusicNoteBeamed } from "react-icons/bs";
import axios from "axios";
import Head from "next/head";

const Items = [
  `https://open.spotify.com/embed/playlist/7tb2YjviCIJAd0jrNeOv5X?utm_source=generator&theme=0`,
  `https://open.spotify.com/embed/playlist/1FTWa5fAYrWGFnfgZnfhmJ?utm_source=generator`,
  `https://open.spotify.com/embed/playlist/7FUfhsTXcEtr640v4zj1Od?utm_source=generator`,
  `https://open.spotify.com/embed/playlist/5cBnZXAERVZNiR0ClI44Ny?utm_source=generator`,
  `https://open.spotify.com/embed/playlist/4gWulHsTn8HeLe6IYjkBu2?utm_source=generator`,
];

const Music = () => {
  return (
    <div className="bg-neutral-900">
      <Head>
        <title>wcnrny - My Music Taste</title>
      </Head>
      <div className="h-screen bg-neutral-900">
        <div className="h-full flex flex-col justify-center items-center bg-[rgba(0,0,0,0.7)] bg-blend-darken bg-[url('/music.jpg')] bg-cover bg-no-repeat p-5">
          <h1 className="text-4xl md:text-2xl text-white">Why music?</h1>
          <br />
          <p className="text-neutral-500 text-2xl md:text-lg w-[50%] md:w-full">
            I love listening to music! That's my therapy for everything! And I
            thought I need to share my playlists for all the platforms like
            Spotify, Soundcloud, Deezer, Youtube etc. And here we are.
          </p>
        </div>
      </div>
      <br />
      <div className="h-auto bg-neutral-900 p-10 md:p-5">
        <div className="flex flex-col">
          <h1 className="text-4xl md:text-2xl text-white">
            Spotify Playlists from my accounts
          </h1>
          <br />
          <div className="grid grid-cols-2 grid-rows-[auto] md:flex md:flex-col gap-5 justify-items-center">
            {Items.map((e) => (
              <iframe
                src={e}
                width="100%"
                height="260"
                frameBorder="0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                className="rounded-[12px] md:w-full"
              />
            ))}
          </div>
        </div>
      </div>
      <br />
      <div className="h-auto flex flex-col p-10 md:p-5 text-white">
        <h1 className="text-4xl md:text-2xl">What genres am I listening?</h1>
        <p className="text-2xl md:text-lg text-neutral-500">
          To be honest, I can listen nearly everything. But I'd prefer drift
          phonk, night phonk, weirdcore, hard metal, hardbass.
          <br /> Let me know what you listen on Twitter, Instagram, Discord or
          whatever.
        </p>
      </div>
    </div>
  );
};

Music.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Music;
