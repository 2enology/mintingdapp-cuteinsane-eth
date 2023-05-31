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
              "An integral catalyst in the emergence of this innovative NFT project. The co-founder works in unison with the founder, bringing a unique set of skills and a fresh perspective to the table. Their combined knowledge of blockchain technology and the digital art market make them a formidable team driving the future of NFTs."
            }
            imgUrl={"/img/nft/1.png"}
          />
          <TeamCard
            role={"Founder"}
            description={
              "A forward-thinking pioneer who saw a unique opportunity in the intersection of blockchain technology and digital art. The founder of the NFT project utilizes their profound understanding of the digital assets landscape to transform virtual ideas into tangible tokens of value. Their vision lies in reshaping how we perceive and interact with art in the digital age."
            }
            imgUrl={"/img/nft/2.png"}
          />
          <TeamCard
            role={"Developer"}
            description={
              "A savvy blockchain specialist who translates complex ideas into lines of code. As the developer for this NFT project, they create, test, and perfect the smart contracts and underlying systems that make each NFT unique and verifiable. Their work ensures the security and reliability of each digital asset, setting the technical foundation for the project's success."
            }
            imgUrl={"/img/nft/3.png"}
          />
          <TeamCard
            role={"Designer"}
            description={
              "An innovative digital artist who breathes life into the NFT project. Their designs go beyond the aesthetics, imbuing each NFT with a distinct story and identity. By blending creativity with the latest digital design tools, they create digital masterpieces that are not only visually captivating but also hold significant value in the blockchain world."
            }
            imgUrl={"/img/nft/4.png"}
          />
        </div>
      </div>
    </section>
  );
}
