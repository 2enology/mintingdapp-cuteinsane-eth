import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import Slider from "react-slick";

import { errorAlert, successAlert } from "../components/toastGroup";
import Countdown from "../components/Countdown";
import { WindowWithEthereum } from "../types";
import { ethers } from "ethers";
import MINTCONTRACT_ABI from "../../public/abis/MINTCONTACT_ABI.json";
import {
  MINTCONTRACT_ADDR,
  PUBLICMINTPRICE,
  WHITELISTMINTPRICE,
} from "../config";

export default function Mint() {
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
  const { account } = useWeb3React();
  const [mintCount, setMintCount] = useState<number>(1);
  const [totalSupply, setTotalSupply] = useState<number>(0);
  const [whiteListCounts, setWhiteListCounts] = useState<number>(0);
  const [loadingState, setLoadingState] = useState<boolean>(false);
  const [whtieListMintState, setWhiteListMintState] = useState<boolean>(false);
  const [endWhiteListState, setEndWhiteListState] = useState<boolean>(false);
  const [maxMintCount, setMaxMintCount] = useState(5);

  const provider =
    typeof window !== "undefined" && (window as WindowWithEthereum).ethereum
      ? new ethers.providers.Web3Provider(
          (window as WindowWithEthereum).ethereum
        )
      : null;
  const Signer = provider?.getSigner();

  const MINTCONTRACT = new ethers.Contract(
    MINTCONTRACT_ADDR,
    MINTCONTRACT_ABI,
    Signer
  );

  const handleMintFunc = async () => {
    if (account) {
      if (whtieListMintState && !endWhiteListState) {
        setLoadingState(true);
        await MINTCONTRACT.mintWhiteList(mintCount, {
          value: ethers.utils.parseEther(
            (WHITELISTMINTPRICE * mintCount).toString()
          ),
          gasLimit: 3000000 * mintCount,
        })
          .then((tx: any) => {
            tx.wait()
              .then(() => {
                successAlert("Mint Successful!");
                getMintData();
                setLoadingState(false);
              })
              .catch(() => {
                setLoadingState(false);
                getMintData();
              });
          })
          .catch(() => {
            setLoadingState(false);
            getMintData();
          });
      } else {
        setLoadingState(true);
        await MINTCONTRACT.mint(mintCount, {
          value: ethers.utils.parseEther(
            (PUBLICMINTPRICE * mintCount).toString()
          ),
          gasLimit: 3000000 * mintCount,
        })
          .then((tx: any) => {
            tx.wait()
              .then(() => {
                successAlert("Mint Successful!");
                getMintData();
                setLoadingState(false);
              })
              .catch(() => {
                setLoadingState(false);
                getMintData();
              });
          })
          .catch(() => {
            setLoadingState(false);
            getMintData();
          });
      }
    } else {
      errorAlert("Please connect wallet!");
    }
  };

  const getMintData = async () => {
    setLoadingState(true);
    const counts = await MINTCONTRACT.totalSupply();
    setTotalSupply(Number(counts));
    const state = await MINTCONTRACT.isWhiteListActive();
    setWhiteListMintState(state);
    console.log("setWhiteListMintState", state);
    const count = await MINTCONTRACT.whiteList(account);
    setWhiteListCounts(Number(count));
    setLoadingState(false);
  };

  useEffect(() => {
    if (account) {
      getMintData();
      const interval = setInterval(() => {
        getMintData();
      }, 60000); // 1 minute
      return () => clearInterval(interval);
    }
  }, [account]);

  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center w-full min-h-screen py-12"
    >
      <img
        src="/img/background3.png"
        className="absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full -z-10"
      />
      <div className="relative flex flex-col items-center justify-center w-full gap-10 lg:flex-row">
        <div className="xl:w-[500px] lg:w-[400px] w-[350px] md:w-[500px] p-2">
          <div className="p-2 bg-white border-4 border-green-500 rounded-xl bg-opacity-10 backdrop-blur-sm">
            <Slider {...settings} className="mx-1 my-1" cssEase="ease-in-out">
              {nftArray.map((data, index) => (
                <img
                  src={data.imgurl}
                  key={index}
                  className="object-cover w-full rounded-lg"
                />
              ))}
            </Slider>
          </div>
        </div>
        <div className="p-4">
          <div className="flex flex-col items-center justify-center w-full">
            <Countdown
              endDateTime={168431040000} // 1684310400000 is the timestamp of start public mint
              onCanBreed={() => {
                setEndWhiteListState(true);
                setMaxMintCount(7);
              }}
              whiteListCounts={whiteListCounts}
            />
          </div>
          <div className="flex items-center justify-center w-full mt-10">
            <h1 className="text-2xl font-normal text-center text-gray-800 newfont">
              The FlareGod NFTs
              <br />
              FlareGod Minting Cost = 999 FLR
            </h1>
          </div>
          <div className="flex items-center justify-between w-full mt-5">
            <div
              className={`px-6 py-3 text-2xl font-bold text-center text-black transition-all duration-300 rounded-full ${
                mintCount <= 1
                  ? "bg-green-200 cursor-not-allowed"
                  : "bg-green-500 hover:bg-green-400 cursor-pointer "
              }`}
              onClick={() =>
                mintCount <= 1 ? setMintCount(1) : setMintCount(mintCount - 1)
              }
            >
              {`-`}
            </div>{" "}
            <h1 className="text-xl font-bold text-gray-800 newfont">
              {mintCount}
            </h1>
            <div
              className={`px-6 py-4 text-xl font-bold text-center text-black transition-all duration-300 rounded-full ${
                mintCount >= maxMintCount
                  ? "bg-green-200 cursor-not-allowed"
                  : "bg-green-500 hover:bg-green-400 cursor-pointer "
              }`}
              onClick={() =>
                mintCount >= maxMintCount
                  ? setMintCount(maxMintCount)
                  : setMintCount(mintCount + 1)
              }
            >
              {`+`}
            </div>
          </div>
          <div className="flex items-center justify-center w-full mt-5">
            <h1 className="text-2xl font-bold text-center text-gray-800 newfont">
              {totalSupply} / 2000
            </h1>
          </div>
          {totalSupply !== 5000 ? (
            <>
              <div className="relative">
                <div
                  className="z-[49] relative w-full px-10 py-4 mt-10 font-bold text-center text-black transition-all duration-300 bg-green-500 rounded-full cursor-pointer lg:w-auto hover:bg-green-400"
                  onClick={() => handleMintFunc()}
                >
                  Mint Now
                </div>
                {whtieListMintState === true && whiteListCounts >= 50 && (
                  <div className="absolute top-0 bottom-0 left-0 right-0 z-50 bg-green-500 rounded-full cursor-not-allowed bg-opacity-80"></div>
                )}{" "}
              </div>
              <div className="flex items-center justify-center w-full mt-2">
                <h1 className="text-sm font-bold text-center text-gray-800 newfont">
                  {maxMintCount} Mint per TX allowed
                </h1>
              </div>
              <div className="flex items-center justify-center w-full mt-2">
                <h1 className="text-sm font-bold text-center text-gray-800 newfont">
                  500 NFTs during Whitelist
                </h1>
              </div>
            </>
          ) : (
            <h1 className="text-3xl font-bold text-center text-red-500">
              Sold Out!
            </h1>
          )}
        </div>
      </div>
      <div className="relative p-4 mt-10 min-w-[360px]">
        <img
          src="/img/background2.png"
          className="absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full rounded-2xl -z-10"
        />
        <div className="flex flex-col items-center justify-center w-full gap-3 mt-10">
          <h1 className="text-2xl font-normal text-center text-white newfont">
            - Total NFT Counts : 0
          </h1>
          <h1 className="text-2xl font-normal text-center text-white newfont">
            - Claimable rewards : 0
          </h1>
          <h1 className="text-2xl font-normal text-center text-white newfont">
            - Lifetime rewards : 0
          </h1>
        </div>

        <div className="relative">
          <div
            className="z-[49] relative w-full px-10 py-4 mt-10 font-bold text-center text-white transition-all duration-300 bg-green-500 rounded-full cursor-pointer lg:w-auto hover:bg-green-400"
            onClick={() => handleMintFunc()}
          >
            Claim now
          </div>
        </div>
      </div>
    </section>
  );
}

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
