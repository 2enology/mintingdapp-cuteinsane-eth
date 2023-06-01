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
                What is Cute to Insane
              </h1>
              <p className="text-[16px] text-white">
			  Cute to Insane is the NFT on the Flare network. We aim to introduce two collections; the project aims to provide NFTs to the holders and give benefits for holding.</p><br></br>
			  <h1 className="text-[25px] text-white newfont">
							  The Mint?
							  
              </h1>		  
              <p className="text-[16px] text-white">
			  Whitelist mint will run for 24 hours and mint cost will be 1000 FLR. 1000 out of 2500 NFTs will be available during whitelist. After 24 hours, public mint will be open for all - Mint cost 1500.</p>
            </div>
          </div>
          <div className="grid w-full grid-cols-1 md:grid-cols-3 min-h-[27vh]">
            <div className="bg-[#14311B] flex items-center justify-center text-white newfont">
              <img src="/img/nft/cute1.png" className="object-cover w-full" />
            </div>
            <div className="bg-[#1D4E29] flex items-start justify-center text-white flex-col p-4">
              <h1 className="text-[25px] text-white newfont">
                What are the utilties of our NFTs?
              </h1>
              <p className="text-[16px] text-white">
				15% mintcost back to holders.<br></br>
				10% added community pools for flrdrop.<br></br>
				10% royalty to community pools for flrdrop.<br></br>
				5% hidden rewards for nft minter.<br></br>
				25% discount for whitelist of Rodenticide. Rodenticide will be used to convert them into insane.
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
