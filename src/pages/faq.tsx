import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SlArrowUp } from "react-icons/sl";
import { Fade } from "react-awesome-reveal";
import { useState } from "react";
export default function Faq() {
  const [faqDetail1, setFaqDetail1] = useState(false);
  const [faqDetail2, setFaqDetail2] = useState(false);
  const [faqDetail3, setFaqDetail3] = useState(false);
  return (
    <section
      className="relative flex flex-col items-center justify-center w-full bg-white pb-[200px] border-t-[1px] border-b-[1px] border-[#7ac62e]"
      id="faq"
    >
      <div className="2xl:w-[1440px] xl:w-[1224px] lg:w-[900px] w-full flex items-center justify-center relative flex-col px-5">
        <div className="flex flex-col items-center justify-center w-full gap-4 mt-10">
          <h1 className="text-4xl font-bold text-green-500 newfont">FAQ</h1>
          <h1 className="text-[40px] font-bold text-gray-800 newfont uppercase text-center">
            What is our FAQ?
          </h1>
        </div>
        <div className="w-full border-green-500 border-[2px] rounded-xl">
          <div className="w-full px-8 py-8 bg-green-500 rounded-t-xl">
            <h1 className="text-[35px] text-white newfont">FAQs</h1>
          </div>
          <div className="w-full min-h-[20vh] bg-[#1e622e] bg-opacity-0">
            <div
              className="flex flex-col w-full cursor-pointer border-b-[1px] border-[#457119] p-8"
              onClick={() => setFaqDetail1(!faqDetail1)}
            >
              <div className="flex items-center justify-between w-full">
                <h1 className="text-[20px] font-bold text-gray-800 newfont uppercase">
                  What is total supply and minting cost?
                </h1>
                <div className="text-[15px] font-bold flex gap-2 items-center justify-center text-[#6cea63]">
                  {faqDetail1 ? "Hiden" : "Detail"}
                  <div
                    className={`${
                      faqDetail1 ? "rotate-180" : "rotate-0"
                    } duration-300 transition-all`}
                  >
                    <SlArrowUp />
                  </div>
                </div>
              </div>
              {faqDetail1 && (
                <div className="md:w-[70%] w-full transition-all duration-300">
                  <p className="text-sm text-gray-400">
                    {" "}
                    Total supply for the 1st collection will be 2500. Minting
                    cost during whitelist - 1000 FLR & Minting cost during
                    public mint - 1500 FLR
                  </p>
                </div>
              )}
            </div>
            <div
              className="flex flex-col w-full cursor-pointer border-b-[1px] border-[#457119] p-8"
              onClick={() => setFaqDetail2(!faqDetail2)}
            >
              <div className="flex items-center justify-between w-full">
                <h1 className="text-[20px] font-bold text-gray-800 newfont uppercase">
                  What are the benefits of NFTs?
                </h1>
                <div className="text-[15px] font-bold flex gap-2 items-center justify-center text-[#6cea63]">
                  {faqDetail2 ? "Hiden" : "Detail"}
                  <div
                    className={`${
                      faqDetail2 ? "rotate-180" : "rotate-0"
                    } duration-300 transition-all`}
                  >
                    <SlArrowUp />
                  </div>
                </div>
              </div>
              {faqDetail2 && (
                <div className="md:w-[70%] w-full">
                  {" "}
                  <p className="text-sm text-gray-400">
                    {" "}
                    1. 15% mintcost back to holders.<br></br>
                    2. 10% added community pools for flrdrop.<br></br>
                    3. 10% royalty to community pools for flrdrop.<br></br>
                    4. 5% hidden rewards for nft minter.<br></br>
                    5. 25% discount for whitelist of Rodenticide. Rodenticide
                    will be used to convert them into insane.
                  </p>
                </div>
              )}
            </div>
            <div
              className="flex flex-col w-full p-8 cursor-pointer"
              onClick={() => setFaqDetail3(!faqDetail3)}
            >
              <div className="flex items-center justify-between w-full">
                <h1 className="text-[20px] font-bold text-gray-800 newfont uppercase">
                  What is community pool & Rodenticide usage?
                </h1>
                <div className="text-[15px] font-bold flex gap-2 items-center justify-center text-[#6cea63]">
                  {faqDetail3 ? "Hiden" : "Detail"}
                  <div
                    className={`${
                      faqDetail3 ? "rotate-180" : "rotate-0"
                    } duration-300 transition-all`}
                  >
                    <SlArrowUp />
                  </div>
                </div>
              </div>
              {faqDetail3 && (
                <div className="md:w-[70%] w-full">
                  {" "}
                  <p className="text-sm text-gray-400">
                    {" "}
                    10% every mint will be added to community pool to receiver
                    FlareDrop monthly. This flaredrop (FLR) will be shared
                    between NFT holders. <br></br>
                    There will be release of Rodenticide bottles NFTs, these
                    bottles will be applied on the cute rats to convert them
                    into insane. During the process Rodenticide bottles will be
                    burned and insane rat will be generated.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
