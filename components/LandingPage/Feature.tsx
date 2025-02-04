import React from "react";
import Image from "next/image";
import ContainerLayout from "../../Layouts/ContainerLayout";
import AiFeature from "../../assets/png/aifeat.png";
import DefiFeature from "../../assets/png/defifeatures.png";
import Web4Feature from "../../assets/png/webfour.png";

function Feature() {
  return (
    <div className="w-full h-auto bg-[#000A0F] md:pb-40">
      <ContainerLayout>
        <div className="w-full md:w-11/12 m-auto h-auto mt-14 md:mt-[260px] items-center flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-[35%]">
            <p
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              className="bg-gradient-to-r from-[#FFFFFF] to-[#9EFFFF] text-transparent bg-clip-text text-[26px] md:text-[48px] font-semibold uppercase md:capitalize"
            >
              ToolAi Features
            </p>

            <p
              data-aos="fade-down"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              className="text-[#D9D9D9] text-[16px] md:text-[20px] font-medium mt-3"
            >
              ToolAi is a cutting-edge AI-driven Web4 browser prioritizing user
              experience, streamlining internet usage, and enhancing content
              interaction.
            </p>
          </div>

          <div className="w-full md:w-[60%] flex flex-col md:flex-row justify-between items-center">
            <div
              data-aos="fade-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              className="w-full md:w-[38%] md:h-[245px] flex md:flex-col items-center custom-gradient rounded-[16px] p-6 hover:bg-[#DAA15D14] cursor-default my-10 md:my-0"
            >
              <Image
                src={AiFeature}
                alt="Ai-Feature"
                className="w-[64px] md:w-[80px] h-[64px] md:h-[80px] mr-6"
              />
              <p className="text-[#FFFFFF] text-[18px] font-semibold">
                AI Features
              </p>
            </div>

            <div className="w-full md:w-[58%] h-auto ">
              <div
                data-aos="fade-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                className="w-full h-auto flex items-center custom-gradient rounded-[16px] p-6 hover:bg-[#DAA15D14] cursor-default mb-10 md:mb-0"
              >
                <Image
                  src={DefiFeature}
                  alt="Defi-Feature"
                  className="w-[64px] h-[64px]"
                />
                <p className="bg-gradient-to-r from-[#FFFFFF] to-[#9EFFFF] text-transparent bg-clip-text text-[28px] font-semibold">
                  DeFi Feature
                </p>
              </div>

              <div
                data-aos="fade-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                className="w-full h-auto flex items-center custom-gradient rounded-[16px] mt-6 p-6 hover:bg-[#DAA15D14] cursor-default mb-10 md:mb-0"
              >
                <Image
                  src={Web4Feature}
                  alt="Web4-Feature"
                  className="w-[64px] h-[64px]"
                />
                <p className="bg-gradient-to-r from-[#FFFFFF] to-[#9EFFFF] text-transparent bg-clip-text text-[28px] font-semibold">
                  Web4 Feature
                </p>
              </div>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
}

export default Feature;
