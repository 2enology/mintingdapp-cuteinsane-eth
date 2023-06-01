/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import type { NextPage } from "next";
import { useWeb3React } from "@web3-react/core";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import About from "./about";
import Collection from "./collection";
import RoadMap from "./roadmap";
import Team from "./team";
import { Bounce } from "react-awesome-reveal";
import Link from "next/link";
import { motion } from "framer-motion";
import Faq from "./faq";

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 300,
  autoplaySpeed: 300,
  fade: true,
};

const Home: NextPage = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className=""
    >
      <section
        className="relative flex flex-col items-center justify-center w-full 2xl:min-h-[90vh] min-h-[100vh]"
        id="home"
      >
        <img
          src="/img/background.png"
          className="absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full -z-10"
        />
        <div className="2xl:w-[1440px] xl:w-[1224px] lg:w-[900px] w-full flex items-center justify-center relative">
          <div className="px-5 mt-[100px] lg:mt-[100px] flex lg:flex-row flex-col-reverse w-full gap-5 pb-10">
            <div className="flex items-center justify-center w-3/4 lg:justify-end"></div>
            <Bounce>
              <div className="w-full">
                <div className="w-full ">
                  <h1 className="2xl:text-[70px] xl:text-[55px] lg:text-[50px] md:text-[40px] text-[50px] font-extrabold text-gray-800 text-center lg:text-left newfont w-full">
                    Discover the universe of
                  </h1>
                  <h1 className="2xl:text-[65px] xl:text-[55px] lg:text-[50px] md:text-[40px] text-[30px] font-extrabold text-green-500 text-center lg:text-left newfont w-full">
                    Cute to Insane
                  </h1>
                  <p className="text-[20px] text-gray-500 font-bold text-center md:text-left">
                    What doesn't kill you, makes you stronger!
                  </p>
                  <div className="flex items-center justify-center w-full lg:items-start lg:justify-start">
                    <Link href={"/mint"} passHref>
                      <button
                        className="px-10 py-3 text-white bg-green-500  rounded-full border-[1px]
                    hover:border-green-500 transition-all duration-300 font-bold flex gap-2 text-xl my-10 newfont"
                      >
                        Mint now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </Bounce>
          </div>
        </div>
      </section>
      <About />
      <RoadMap />
      <Team />
      <Collection />
      <Faq />
    </motion.section>
  );
};

export default Home;

type NFTIMG = {
  id: number;
  imgurl: string;
};

const nftArray: NFTIMG[] = [
  {
    id: 1,
    imgurl: "/img/nft/v4-slider-img.png",
  },
  {
    id: 9,
    imgurl: "/img/nft/v4-slider-img2.png",
  },
  {
    id: 2,
    imgurl: "/img/nft/v4-slider-img3.png",
  },
  {
    id: 3,
    imgurl: "/img/nft/v4-slider-img4.png",
  },
  {
    id: 4,
    imgurl: "/img/nft/v4-slider-img5.png",
  },
  {
    id: 5,
    imgurl: "/img/nft/v4-slider-img6.png",
  },
  {
    id: 6,
    imgurl: "/img/nft/v4-slider-img7.png",
  },
  {
    id: 7,
    imgurl: "/img/nft/v4-slider-img8.png",
  },
  {
    id: 8,
    imgurl: "/img/nft/v4-slider-img9.png",
  },
  {
    id: 16,
    imgurl: "/img/nft/v4-slider-img10.png",
  },
  {
    id: 10,
    imgurl: "/img/nft/v4-slider-img11.png",
  },
  {
    id: 11,
    imgurl: "/img/nft/v4-slider-img12.png",
  },
  {
    id: 12,
    imgurl: "/img/nft/v4-slider-img13.png",
  },
  {
    id: 13,
    imgurl: "/img/nft/v4-slider-img14.png",
  },
  {
    id: 14,
    imgurl: "/img/nft/v4-slider-img15.png",
  },
  {
    id: 15,
    imgurl: "/img/nft/v4-slider-img16.png",
  },
];
