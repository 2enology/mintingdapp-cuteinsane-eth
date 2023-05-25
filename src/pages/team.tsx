import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TeamCard from "../components/TeamCard";
import { Fade } from "react-awesome-reveal";
export default function Team() {
  return (
    <section
      className="relative flex flex-col items-center justify-center w-full pb-[200px]"
      id="team"
    >
      <img
        src="/img/background2.png"
        className="absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full -z-10"
      />
      <div className="2xl:w-[1440px] xl:w-[1224px] lg:w-[900px] w-full flex items-center justify-center relative flex-col px-5">
        <div className="flex flex-col items-center justify-center w-full gap-4 mt-10">
          <h1 className="text-4xl font-bold text-green-500 newfont">
            Team Members
          </h1>
          <h1 className="text-[40px] font-bold text-white newfont uppercase text-center">
            We make a miracle!
          </h1>
        </div>
        <div className="grid w-full grid-cols-1 gap-5 xl:grid-cols-2">
          <TeamCard
            role={"Co-founder"}
            description={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
            }
            imgUrl={"/img/nft/1.png"}
          />
          <TeamCard
            role={"Founder"}
            description={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
            }
            imgUrl={"/img/nft/2.png"}
          />
          <TeamCard
            role={"Developer"}
            description={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
            }
            imgUrl={"/img/nft/2.png"}
          />
          <TeamCard
            role={"Designer"}
            description={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
            }
            imgUrl={"/img/nft/1.png"}
          />
        </div>
      </div>
    </section>
  );
}
