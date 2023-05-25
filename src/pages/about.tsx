import { Fade } from "react-awesome-reveal";

export default function About() {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center w-full py-12 min-h-[80vh]"
    >
      <img
        src="/img/background2.png"
        className="absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full -z-10"
      />

      <Fade>
        <div className="2xl:w-[1440px] xl:w-[1224px] lg:w-[900px] w-full flex items-center justify-center relative flex-col px-5">
          <div className="grid w-full grid-cols-1 md:grid-cols-2 min-h-[27vh] border-b-[1px] border-green-400">
            <div className="bg-[#14311B] flex items-center justify-center text-white ">
              <h1 className="text-[40px] text-white newfont">About us</h1>
            </div>
            <div className="bg-[#1D4E29] flex items-start justify-center text-white flex-col p-4">
              <h1 className="text-[25px] text-white newfont">
                The Layer 1 Blockchain Ecosystem built for Cute
              </h1>
              <p className="text-[16px] text-white">
                Pepechain is reshaping how the meme economy is perceived. We
                create a conducive environment for Web3 founders to build and
                launch innovative projects.
              </p>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 md:grid-cols-3 min-h-[27vh]">
            <div className="bg-[#14311B] flex items-center justify-center text-white newfont">
              <img src="/img/nft/cute1.png" className="object-cover w-full" />
            </div>
            <div className="bg-[#1D4E29] flex items-start justify-center text-white flex-col p-4">
              <h1 className="text-[25px] text-white newfont">
                The Layer 1 Blockchain Ecosystem built for Cute
              </h1>
              <p className="text-[16px] text-white">
                Pepechain is reshaping how the meme economy is perceived. We
                create a conducive environment for Web3 founders to build and
                launch innovative projects.
              </p>
            </div>{" "}
            <div className="bg-[#14311B] flex items-center justify-center text-white newfont">
              <img src="/img/nft/cute2.png" className="object-cover w-full" />
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
