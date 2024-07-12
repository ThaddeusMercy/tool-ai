import React from "react";
import ContainerLayout from "../../Layouts/ContainerLayout";

function Project() {
  return (
    <ContainerLayout>
      <p
        data-aos="flip-down"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        className="text-[#FFFFFF] text-[28px] md:text-[36px] font-bold uppercase md:capitalize mt-20 md:mt-[150px] text-start md:text-center"
      >
        Project Outline
      </p>

      <p
        data-aos="flip-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        className="w-full md:w-8/12 m-auto text-start md:text-center text-[#D9D9D9] text-[16px] md:text-[20px] font-medium mt-3 mb-10"
      >
        Discover the future of browsing and AiTools with ToolAi - Al-powered Web
        4.0 Browser. Experience an Artificial Intelligence Ecosystems use case
        reimagined, Post Quantum Cryptography, and groundbreaking features like
        Al Multi-Page Compilations, Personalized Al Web Search, AiiP-NFT/I-NFT
        minting and trading and much much more. With its own "Ai-DeFi" economy,
        secure data management/monetization, and cross-chain partnerships,
        ToolAi offers unprecedented Control and unbridled power from the
        convenience of a mobile application. Join us on the forefront of Ai-DeFi
        technology. Click below to discover more.
      </p>

      <div className="w-full md:w-11/12 m-auto flex justify-between items-center md:hidden">
        <div
          data-aos="fade-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="w-[45%] h-[100px] md:h-[144px] custom-gradient rounded-[32px] flex justify-center items-center"
        >
          <p className="text-[#FFFFFF] text-[14px] md:text-[18px] font-semibold  text-center">
            Light Paper
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="w-[45%] h-[100px] md:h-[144px] custom-gradient rounded-[32px] flex justify-center items-center my-10 md:my-0"
        >
          <p className="text-[#FFFFFF] text-[16px] md:text-[18px] font-semibold  text-center">
            Tokenomics
          </p>
        </div>
      </div>

      <div
        data-aos="fade-down"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        className="w-full md:w-[30%] h-[100px] md:h-[144px] custom-gradient rounded-[32px] flex justify-center items-center mb-20 md:hidden"
      >
        <p className="text-[#FFFFFF] text-[18px] font-semibold  text-center">
          RoadMap
        </p>
      </div>

      <div className="w-full md:w-11/12 m-auto md:flex flex-col md:flex-row justify-between items-center mb-[200px] hidden">
        <div
          data-aos="fade-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="w-full md:w-[30%] h-[100px] md:h-[144px] custom-gradient rounded-[32px] flex justify-center items-center"
        >
          <p className="text-[#FFFFFF] text-[18px] font-semibold  text-center">
            Light Paper
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="w-full md:w-[30%] h-[100px] md:h-[144px] custom-gradient rounded-[32px] flex justify-center items-center my-10 md:my-0"
        >
          <p className="text-[#FFFFFF] text-[18px] font-semibold  text-center">
            Tokenomics
          </p>
        </div>

        <div
          data-aos="fade-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="w-full md:w-[30%] h-[100px] md:h-[144px] custom-gradient rounded-[32px] flex justify-center items-center"
        >
          <p className="text-[#FFFFFF] text-[18px] font-semibold  text-center">
            RoadMap
          </p>
        </div>
      </div>
    </ContainerLayout>
  );
}

export default Project;
