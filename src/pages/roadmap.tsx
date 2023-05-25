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
            <h1 className="text-green-500 text-[40px] font-bold">Q1</h1>
            <div className="flex flex-col items-start justify-center gap-2">
              <h1 className="text-xl font-bold text-gray-800 newfont">
                Launching
              </h1>

              <p className="text-gray-400 text-md">
                Pepechain is reshaping how the meme economy. We create a
                conducive.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-1 bg-green-500 bg-opacity-80">
            <div className="flex items-center justify-center gap-3">
              <AiFillStar color="white" size={12} />
              <p className="font-bold text-gray-700">
                pepechain beta release
              </p>{" "}
            </div>
            <div className="flex items-center justify-center gap-3">
              <AiFillStar color="white" size={12} />
              <p className="font-bold text-gray-700">
                pepechain beta release
              </p>{" "}
            </div>
            <div className="flex items-center justify-center gap-3">
              <AiFillStar color="white" size={12} />
              <p className="font-bold text-gray-700">
                pepechain beta release
              </p>{" "}
            </div>
            <div className="flex items-center justify-center gap-3">
              <AiFillStar color="white" size={12} />
              <p className="font-bold text-gray-700">
                pepechain beta release
              </p>{" "}
            </div>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-5 pb-3 border-t-2 border-green-500 md:grid-cols-2">
          <div className="flex items-start justify-start w-full gap-5 py-5">
            <h1 className="text-green-500 text-[40px] font-bold">Q2</h1>
            <div className="flex flex-col items-start justify-center gap-2">
              <h1 className="text-xl font-bold text-gray-800 newfont">
                Stability
              </h1>

              <p className="text-gray-400 text-md">
                Pepechain is reshaping how the meme economy. We create a
                conducive.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-1 bg-green-500 bg-opacity-80">
            <div className="flex items-center justify-center gap-3">
              <AiFillStar color="white" size={12} />
              <p className="font-bold text-gray-700">
                pepechain beta release
              </p>{" "}
            </div>
            <div className="flex items-center justify-center gap-3">
              <AiFillStar color="white" size={12} />
              <p className="font-bold text-gray-700">
                pepechain beta release
              </p>{" "}
            </div>
            <div className="flex items-center justify-center gap-3">
              <AiFillStar color="white" size={12} />
              <p className="font-bold text-gray-700">
                pepechain beta release
              </p>{" "}
            </div>
            <div className="flex items-center justify-center gap-3">
              <AiFillStar color="white" size={12} />
              <p className="font-bold text-gray-700">
                pepechain beta release
              </p>{" "}
            </div>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-5 pb-3 border-t-2 border-green-500 md:grid-cols-2">
          <div className="flex items-start justify-start w-full gap-5 py-5">
            <h1 className="text-green-500 text-[40px] font-bold">Q3</h1>
            <div className="flex flex-col items-start justify-center gap-2">
              <h1 className="text-xl font-bold text-gray-800 newfont">
                Sustainable Growth
              </h1>

              <p className="text-gray-400 text-md">
                Pepechain is reshaping how the meme economy. We create a
                conducive.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-1 bg-green-500 bg-opacity-80">
            <div className="flex items-center justify-center gap-3">
              <AiFillStar color="white" size={12} />
              <p className="font-bold text-gray-700">
                pepechain beta release
              </p>{" "}
            </div>
            <div className="flex items-center justify-center gap-3">
              <AiFillStar color="white" size={12} />
              <p className="font-bold text-gray-700">
                pepechain beta release
              </p>{" "}
            </div>
            <div className="flex items-center justify-center gap-3">
              <AiFillStar color="white" size={12} />
              <p className="font-bold text-gray-700">
                pepechain beta release
              </p>{" "}
            </div>
            <div className="flex items-center justify-center gap-3">
              <AiFillStar color="white" size={12} />
              <p className="font-bold text-gray-700">
                pepechain beta release
              </p>{" "}
            </div>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 gap-5 pb-3 border-t-2 border-green-500 md:grid-cols-2">
          <div className="flex items-start justify-start w-full gap-5 py-5">
            <h1 className="text-green-500 text-[40px] font-bold">Q4</h1>
            <div className="flex flex-col items-start justify-center gap-2">
              <h1 className="text-xl font-bold text-gray-800 newfont">
                Infinity and Beyond
              </h1>

              <p className="text-gray-400 text-md">
                Pepechain is reshaping how the meme economy. We create a
                conducive.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-1 bg-green-500 bg-opacity-80">
            <div className="flex items-center justify-center gap-3">
              <AiFillStar color="white" size={12} />
              <p className="font-bold text-gray-700">
                pepechain beta release
              </p>{" "}
            </div>
            <div className="flex items-center justify-center gap-3">
              <AiFillStar color="white" size={12} />
              <p className="font-bold text-gray-700">
                pepechain beta release
              </p>{" "}
            </div>
            <div className="flex items-center justify-center gap-3">
              <AiFillStar color="white" size={12} />
              <p className="font-bold text-gray-700">
                pepechain beta release
              </p>{" "}
            </div>
            <div className="flex items-center justify-center gap-3">
              <AiFillStar color="white" size={12} />
              <p className="font-bold text-gray-700">
                pepechain beta release
              </p>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
