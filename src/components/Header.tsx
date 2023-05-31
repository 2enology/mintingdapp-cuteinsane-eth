/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core";

import { switchNetwork, injected } from "../connecthook/switch-network";
import { FaDiscord, FaWallet } from "react-icons/fa";

import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

export default function Header() {
  const router = useRouter();

  const { account, chainId, activate, deactivate } = useWeb3React();
  const [menuOpen, setMenuOpen] = useState(false);

  async function connect() {
    if (chainId !== 16 || chainId === undefined) {
      switchNetwork();
    }
    try {
      console.log("clicked");
      await activate(injected);
      localStorage.setItem("isWalletConnected", "true");
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
      localStorage.setItem("isWalletConnected", "false");
    } catch (ex) {
      console.log(ex);
    }
  }

  useEffect(() => {
    const connectWalletOnPageLoad = async () => {
      if (localStorage?.getItem("isWalletConnected") === "true") {
        try {
          await activate(injected);
          localStorage.setItem("isWalletConnected", "true");
        } catch (ex) {
          console.log(ex);
        }
      }
    };
    connectWalletOnPageLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header className="w-full h-[100px] flex items-center justify-center fixed backdrop-blur-lg z-50">
        <div className="2xl:w-[1440px] max-w-[1440px] xl:w-[1224px] lg:w-[900px] w-full px-5 flex items-center justify-between">
          <Head>
            <link rel="icon" href="/img/logo.png" />
          </Head>
          <Link href={`/`} passHref>
            <div className="rounded-lg cursor-pointer">
              <img
                src="/img/logo.png"
                className=" object-cover object-center w-[70px] h-[70px] p-1 rounded-full"
                alt="logo"
              />
            </div>
          </Link>
          <ul className="items-center justify-between hidden gap-10 xl:flex">
            <Link href={`/`} passHref>
              <li className="text-xl font-bold text-black list-none transition-all duration-300 cursor-pointer newfont hover:text-green-600">
                Home
              </li>
            </Link>
            <a href="#about">
              <li className="text-xl font-bold text-black list-none transition-all duration-300 cursor-pointer newfont hover:text-green-600">
                About
              </li>
            </a>
            <a href="#roadmap">
              <li className="text-xl font-bold text-black list-none transition-all duration-300 cursor-pointer newfont hover:text-green-600">
                RoadMap{" "}
              </li>
            </a>
            <a href="#team">
              <li className="text-xl font-bold text-black list-none transition-all duration-300 cursor-pointer newfont hover:text-green-600">
                Team
              </li>
            </a>
            <a href="#collection">
              <li className="text-xl font-bold text-black list-none transition-all duration-300 cursor-pointer newfont hover:text-green-600">
                Collection
              </li>
            </a>
            <a href="#faq">
              <li className="text-xl font-bold text-black list-none transition-all duration-300 cursor-pointer newfont hover:text-green-600">
                Faq
              </li>
            </a>
          </ul>

          {account ? (
            <button
              onClick={() => disconnect()}
              className="px-7 py-3 text-white bg-green-500  rounded-full border-[1px]
              hover:border-green-500 transition-all duration-300 font-bold flex gap-2 text-xl items-center"
            >
              <FaWallet />
              <span className="flex gap-2 font-normal text-[17px] newfont">
                {" "}
                {account && account.slice(0, 4) + "..." + account.slice(-4)}
              </span>
            </button>
          ) : (
            <button
              onClick={() => connect()}
              className="px-7 py-3 text-white bg-green-500  rounded-full border-[1px]
              hover:border-green-500 transition-all duration-300 font-bold flex gap-2 text-xl items-center"
            >
              <FaWallet />
              <span className="flex gap-2 font-normal newfont">connect</span>
            </button>
          )}
        </div>
        <div
          className="p-1 mx-2 transition-all duration-300 rounded-lg cursor-pointer xl:hidden hover:border-white"
          onClick={() => setMenuOpen(true)}
        >
          <FiMenu color="black" size={"30px"} />
        </div>
      </header>
      {menuOpen && (
        <div className="fixed top-0 bottom-0 left-0 right-0 z-[60] items-center justify-center bg-black opacity-95 xl:hidden">
          <div className="flex items-center justify-end w-full px-3 py-4">
            <div
              className="p-1 transition-all duration-300 rounded-lg cursor-pointer hover:border-white"
              onClick={() => setMenuOpen(false)}
            >
              <IoMdClose color="white" size={"32px"} />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full min-h-[80vh]">
            <div className="flex flex-col justify-center gap-5 text-center lg:text-left lg:mx-0 lg:pl-4">
              <div className="flex flex-col items-center justify-center gap-10">
                <Link href={"/"} passHref>
                  <li
                    className={`text-lg font-normal ${"text-white"} uppercase list-none transition-all duration-300 cursor-pointer hover:text-green-500`}
                    onClick={() => setMenuOpen(false)}
                  >
                    Home
                  </li>
                </Link>
                <a href="#about">
                  <li
                    className={`text-lg font-normal ${
                      router.pathname === "/#about"
                        ? "text-green-500"
                        : "text-white"
                    } uppercase list-none transition-all duration-300 cursor-pointer hover:text-green-500`}
                    onClick={() => setMenuOpen(false)}
                  >
                    About
                  </li>
                </a>
                <a href="#roadmap">
                  <li
                    className={`text-lg font-normal ${
                      router.pathname === "/#roadmap"
                        ? "text-green-500"
                        : "text-white"
                    } uppercase list-none transition-all duration-300 cursor-pointer hover:text-green-500`}
                    onClick={() => setMenuOpen(false)}
                  >
                    Roadmap
                  </li>
                </a>
                <a href={"/#team"}>
                  <li
                    className={`text-lg font-normal ${
                      router.pathname === "/team"
                        ? "text-green-500"
                        : "text-white"
                    } uppercase list-none transition-all duration-300 cursor-pointer hover:text-green-500`}
                    onClick={() => setMenuOpen(false)}
                  >
                    Team
                  </li>
                </a>
                <Link href={"/#collection"} passHref>
                  <li
                    className={`text-lg font-normal ${
                      router.pathname === "/#collection"
                        ? "text-green-500"
                        : "text-white"
                    } uppercase list-none transition-all duration-300 cursor-pointer hover:text-green-500`}
                    onClick={() => setMenuOpen(false)}
                  >
                    Collection
                  </li>
                </Link>
                <Link href={"/#faq"} passHref>
                  <li
                    className={`text-lg font-normal ${
                      router.pathname === "/#faq"
                        ? "text-green-500"
                        : "text-white"
                    } uppercase list-none transition-all duration-300 cursor-pointer hover:text-green-500`}
                    onClick={() => setMenuOpen(false)}
                  >
                    Faq
                  </li>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
