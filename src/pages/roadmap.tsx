import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Fade } from "react-awesome-reveal";
import { AiFillStar } from "react-icons/ai";
export default function RoadMap() {
  return (
    <section
      className="relative flex flex-col items-center justify-center w-full bg-white py-[100px]"
      id="roadmap"
    >
      <div className="2xl:w-[1440px] xl:w-[1224px] lg:w-[900px] w-full flex items-center justify-center relative flex-col px-5">
        <div className="flex flex-col items-center justify-center w-full gap-4 mt-10">
          <h1 className="text-4xl font-bold text-green-500 newfont">Roadmap</h1>
          <h1 className="text-[40px] font-bold text-gray-800 newfont uppercase text-center">
            how it all started
          </h1>
        </div>
        <div className="grid w-full grid-cols-1 gap-5 pb-3 border-t-2 border-green-500 md:grid-cols-2">
          <div className="flex items-start justify-start w-full gap-5 py-5">
            <h1 className="text-green-500 text-[40px] font-bold">1</h1>
            <div className="flex flex-col items-start justify-center gap-2">
              <h1 className="text-xl font-bold text-gray-800 newfont">
                Planning, Research, and Communication Platform
              </h1>

              <p className="text-gray-400 text-md">
                Establish a Communication Platform, Design work, Review & Refine.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-1 bg-green-500 bg-opacity-80">
            <div className="flex items-center justify-center gap-3">
              <AiFillStar color="white" size={12} />
              <p className="font-bold text-gray-700">
                Set up Twitter & Discord server.
              </p>{" "}
            </div>
            <div className="flex items-center justify-center gap-3">
              <AiFillStar color="white" size={12} />
              <p className="font-bold text-gray-700">
              Domain for the project website.
              </p>{" "}
            </div>
            <div className="flex items-center justify-center gap-3">
              <AiFillStar color="white" size={12} />
              <p className="font-bold text-gray-700">
                Innovative designs for the 1st collection.
              </p>{" "}
            </div>
            <div className="flex items-center justify-center gap-3">
              <AiFillStar color="white" size={12} />
              <p className="font-bold text-gray-700">
               Finalizing 1st collection.
              </p>{" "}
            </div>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-5 pb-3 border-t-2 border-green-500 md:grid-cols-2">
          <div className="flex items-start justify-start w-full gap-5 py-5">
            <h1 className="text-green-500 text-[40px] font-bold">2</h1>
            <div className="flex flex-col items-start justify-center gap-2">
              <h1 className="text-xl font-bold text-gray-800 newfont">
                The Mint & NFT benefits
              </h1>

              <p className="text-gray-400 text-md">
                There will be whitelist mint for 24 hours - 1000 allocated for whitelist & 1500 for public Mint.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-1 bg-green-500 bg-opacity-80">
            <div className="flex items-center justify-center gap-3">
              <AiFillStar color="white" size={12} />
              <p className="font-bold text-gray-700">
                15% of each mint will go back to holders. The more & early you mint = more rewards
              </p>{" "}
            </div>
            <div className="flex items-center justify-center gap-3">
              <AiFillStar color="white" size={12} />
              <p className="font-bold text-gray-700">
                25% discount for Rodenticide. Rodenticide will be used to convert them into insane
              </p>{" "}
            </div>
            <div className="flex items-center justify-center gap-3">
              <AiFillStar color="white" size={12} />
              <p className="font-bold text-gray-700">
                10% total mints added to community pool for flaredrop share.
              </p>{" "}
            </div>
            <div className="flex items-center justify-center gap-3">
              <AiFillStar color="white" size={12} />
              <p className="font-bold text-gray-700">
                5% total mints to hidden rewards to nft minter.
              </p>{" "}
					  </div>
					              <div className="flex items-center justify-center gap-3">
              <AiFillStar color="white" size={12} />
              <p className="font-bold text-gray-700">
                10% royalties to community pool for flaredrop.
              </p>{" "}
            </div>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-5 pb-3 border-t-2 border-green-500 md:grid-cols-2">
          <div className="flex items-start justify-start w-full gap-5 py-5">
            <h1 className="text-green-500 text-[40px] font-bold">3</h1>
            <div className="flex flex-col items-start justify-center gap-2">
              <h1 className="text-xl font-bold text-gray-800 newfont">
                Pest Control - Rodenticide 
              </h1>

              <p className="text-gray-400 text-md">
                Rodenticide will be used to convert rats to insane - 2nd collection.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-1 bg-green-500 bg-opacity-80">
            <div className="flex items-center justify-center gap-3">
              <AiFillStar color="white" size={12} />
              <p className="font-bold text-gray-700">
                After the mint out, Rodenticide will be introduced.
              </p>{" "}
            </div>
            <div className="flex items-center justify-center gap-3">
              <AiFillStar color="white" size={12} />
              <p className="font-bold text-gray-700">
                Minting Rodenticide bottles - Cute Rats holders will be able to buy them for 25% off
              </p>{" "}
            </div>
            <div className="flex items-center justify-center gap-3">
              <AiFillStar color="white" size={12} />
              <p className="font-bold text-gray-700">
                Launch of Rodenticide Portal
              </p>{" "}
            </div>
            <div className="flex items-center justify-center gap-3">
              <AiFillStar color="white" size={12} />
              <p className="font-bold text-gray-700">
                Rodenticide bottles will be burned & insane rats will be generated.
              </p>{" "}
            </div>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-5 pb-3 border-t-2 border-green-500 md:grid-cols-2">
          <div className="flex items-start justify-start w-full gap-5 py-5">
            <h1 className="text-green-500 text-[40px] font-bold">4</h1>
            <div className="flex flex-col items-start justify-center gap-2">
              <h1 className="text-xl font-bold text-gray-800 newfont">
                Expansion and Future Development.
              </h1>

              <p className="text-gray-400 text-md">
                Continuously release updates, new giveaways, and features.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-1 bg-green-500 bg-opacity-80">
            <div className="flex items-center justify-center gap-3">
              <AiFillStar color="white" size={12} />
              <p className="font-bold text-gray-700">
                 Explore potential collaborations with other projects and partners.
              </p>{" "}
            </div>
            <div className="flex items-center justify-center gap-3">
              <AiFillStar color="white" size={12} />
              <p className="font-bold text-gray-700">
                Gather community feedback and suggestions for future expansions.
              </p>{" "}
            </div>
            <div className="flex items-center justify-center gap-3">
              <AiFillStar color="white" size={12} />
              <p className="font-bold text-gray-700">
                Stay at the forefront of technological advancements.
              </p>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
