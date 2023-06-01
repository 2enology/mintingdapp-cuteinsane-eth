import { Fade } from "react-awesome-reveal";
import CollectionSlider from "../components/CollectionSlider";

export default function Collection() {
  return (
    <section
      id="collection"
      className="relative flex flex-col items-center justify-center w-full py-12"
    >
      <img
        src="/img/background3.png"
        className="absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full -z-10"
      />

      <div className="2xl:w-[1440px] xl:w-[1224px] lg:w-[900px] w-full flex items-center justify-center relative flex-col px-5">
        <Fade direction="down">
          <div className="flex flex-col items-center justify-center w-full gap-4 mt-10">
            <h1 className="text-[#7fc638] text-2xl font-bold newfont">
              Collection
            </h1>
            <h1 className="text-[40px] font-bold text-gray-800 newfont uppercase text-center">
              Our Cute to Insane
            </h1>
          </div>
        </Fade>
        <div className="w-full">
          <CollectionSlider />
        </div>
        <Fade>
          <div className="flex flex-col items-center justify-center w-full gap-1">
            <h1 className="md:text-[100px] text-[50px] font-extrabold text-center text-gray-800 newfont">
              2500
            </h1>
            <h1 className="text-xl font-bold text-center text-gray-500 uppercase newfont">
              Total Items in collection
            </h1>
          </div>
        </Fade>
      </div>
    </section>
  );
}
