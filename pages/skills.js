import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import html from "../images/html.png";
import css from "../images/css.png";
import js from "../images/js.png";
import react from "../images/react.png";
import nextjs from "../images/nextjs.png";
import bootstrap from "../images/bootstrap.png";
import tailwind from "../images/tailwind.png";
import nodejs from "../images/nodejs.png";
import mongodb from "../images/mongodb.png";
import redux from "../images/redux.png";
import Head from "next/head";

const skills = () => {
  return (
    <Layout>
      <Head>
        <title>asmeydan - skills</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className=" p-20 bg-white grid gap-4 min-height-screen place-content-center place-items-center grid-cols-2 sm:grid-cols-4 md:grid-cols-8">
        <Image src={html} width={50} alt="html" />
        <Image src={css} width={50} alt="html" />
        <Image src={js} width={50} alt="html" />
        <Image src={react} width={50} alt="html" />
        <Image src={nextjs} width={75} alt="html" />
        <Image src={redux} width={50} alt="html" />
        <Image src={bootstrap} width={50} alt="html" />
        <Image src={tailwind} width={50} alt="html" />
        <Image src={nodejs} width={50} alt="html" />
        <Image src={mongodb} width={50} alt="html" />
      </div>
    </Layout>
  );
};

export default skills;
