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
      className="relative flex flex-col items-center justify-center w-full bg-white pb-[200px] border-t-[1px] border-b-[1px] border-green-500"
      id="faq"
    >
      <div className="2xl:w-[1440px] xl:w-[1224px] lg:w-[900px] w-full flex items-center justify-center relative flex-col px-5">
        <div className="flex flex-col items-center justify-center w-full gap-4 mt-10">
          <h1 className="text-4xl font-bold text-green-500 newfont">FAQ</h1>
          <h1 className="text-[40px] font-bold text-gray-800 newfont uppercase text-center">
            What is our FAQ?
          </h1>
        </div>
        <div className="w-full border-[#7ac62e] border-[2px] rounded-xl">
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
                  I sold an pepechain, where's my BNB?
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
                    Pepechain and BNB are both cryptocurrencies, so it's
                    possible that you sold pepechain for BNB on a cryptocurrency
                    exchange. If that's the case, you should check your account
                    on the exchane to see if the BNB has been deposited, was a
                    delay in the transaction or an issue with the exchange.
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
                  How can I list my pepechain collection on the Market?
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
                    Pepechain and BNB are both cryptocurrencies, so it's
                    possible that you sold pepechain for BNB on a cryptocurrency
                    exchange. If that's the case, you should check your account
                    on the exchane to see if the BNB has been deposited, was a
                    delay in the transaction or an issue with the exchange.
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
                  What are the fees?
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
                    Pepechain and BNB are both cryptocurrencies, so it's
                    possible that you sold pepechain for BNB on a cryptocurrency
                    exchange. If that's the case, you should check your account
                    on the exchane to see if the BNB has been deposited, was a
                    delay in the transaction or an issue with the exchange.
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
