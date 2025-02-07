import React from "react";
import Image from "next/image";
import ContainerLayout from "../../Layouts/ContainerLayout";
import TransakLogo from "../../assets/svg/transak-seeklogo.svg";
import MoonPayLogo from "../../assets/svg/moonpay-logo.svg";
import BitMartLogo from "../../assets/svg/BiT-Mart-Logo.svg";
import AwrsLogo from "../../assets/svg/aws-logo.svg";
import SafeHarbor from "../../assets/svg/safe-harbor.svg";
import apple from "../../assets/svg/apple-logo.svg";
import google from "../../assets/svg/google-logo.svg";
import Instagram from "../../assets/svg/Instagram.svg";
import Twitter from "../../assets/svg/Twitter.svg";
import comingSoonImage from "../../assets/png/coming-soon.png";

const Footer = () => {
  return (
    <div className="w-full h-auto bg-[#000A0F] rounded-t-[32px]">
      <ContainerLayout>
        <p className="text-[#FFFFFF] text-[36px] font-bold capitalize mt-10 md:mt-20">
          Our Strategic Partners
        </p>

        <p className="text-[#D9D9D9] text-[18px] font-normal mt-4">
          We are elated to have a diverse range of partners who share our vision
          and are crucial to achieving this groundbreaking innovation. Our
          partnerships span across various crypto and blockchain sectors and
          industries, and we are glad for their collaboration and support in
          helping us bring this unprecedented innovation to life.
        </p>

        <p className="text-[#D9D9D9] text-[18px] font-normal mt-4">
          Our partnerships span across various crypto and blockchain sectors and
          industries, and we are glad for their collaboration and support in
          helping us bring this unprecedented innovation to life.
        </p>

        <p className="text-[#D9D9D9] text-[32px] font-bold mt-10 text-center">
          To be announced
        </p>

        {/* <div className="w-full h-auto md:flex justify-between items-center mt-10 hidden">
          <div className="w-[173px] h-[70px] custom-gradient rounded-[32px] flex justify-center items-center">
            <Image src={TransakLogo} alt="Transak Logo" />
          </div>
          <div className="w-[208px] h-[70px] custom-gradient rounded-[32px] flex justify-center items-center">
            <Image src={MoonPayLogo} alt="MoonPay Logo" />
          </div>
          <div className="w-[218px] h-[70px] custom-gradient rounded-[32px] flex justify-center items-center">
            <Image src={BitMartLogo} alt="BitMart Logo" />
          </div>
          <div className="w-[156px] h-[70px] custom-gradient rounded-[32px] flex justify-center items-center">
            <Image src={AwrsLogo} alt="Awrs Logo" />
          </div>
          <div className="w-[156px] h-[70px] rounded-[32px] custom-light-gradient flex justify-center items-center">
            <Image src={SafeHarbor} alt="SafeHarbor Logo" />
          </div>
        </div> */}

        {/* <div className="w-full h-auto grid grid-cols-2 gap-3 mt-10 md:hidden">
          <div className="h-[70px] custom-gradient rounded-[32px] flex justify-center items-center">
            <Image src={TransakLogo} alt="Transak Logo" />
          </div>
          <div className="h-[70px] custom-gradient rounded-[32px] flex justify-center items-center">
            <Image src={MoonPayLogo} alt="MoonPay Logo" />
          </div>
          <div className="h-[70px] custom-gradient rounded-[32px] flex justify-center items-center">
            <Image src={BitMartLogo} alt="BitMart Logo" />
          </div>
          <div className="h-[70px] custom-gradient rounded-[32px] flex justify-center items-center">
            <Image src={AwrsLogo} alt="Awrs Logo" />
          </div>
        </div>
        <div className="w-[156px] m-auto h-[70px] rounded-[32px] custom-light-gradient flex md:hidden justify-center items-center mt-5">
          <Image src={SafeHarbor} alt="SafeHarbor Logo" />
        </div> */}

        <div className="bg-[#0071A4] w-full h-[2px] my-[76px]"></div>

        <div className="w-full h-[296px] custom-gradient rounded-[40px] mb-10 flex flex-col md:flex-row justify-between items-center p-5 md:p-10">
          <div className="w-full md:w-[48%] h-auto">
            <p className="text-[#FFFFFF] text-[28px] md:text-[36px] font-bold uppercase mb-10">
              ToolAi LLC.
            </p>

            <p className="text-[#D9D9D9] text-[18px] font-normal mb-4">
              Get the App
            </p>

            {/* <div className="flex items-center">
              <Image
                src={apple}
                alt="apple"
                className="w-[135px] h-[40px] mr-4"
              />
              <Image src={google} alt="google" className="w-[135px] h-[40px]" />
            </div> */}
            <div className="relative flex flex-col md:flex-row md:items-center md:space-x-4 my-10">
              <div className="relative flex flex-col md:flex-row md:items-center md:space-x-4">
                <Image
                  data-aos="zoom-out-down"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                  src={apple}
                  width={apple.width}
                  height={apple.height}
                  alt="apple"
                  className="mb-4 md:mb-0 cursor-pointer"
                />

                <Image
                  data-aos="zoom-out-down"
                  data-aos-easing="linear"
                  data-aos-duration="1000"
                  src={google}
                  width={google.width}
                  height={google.height}
                  alt="google"
                />

                <div className="bg-slate-50 w-20 h-10 absolute top-[60%] md:top-[70%] left-[18%] md:left-[45%] -translate-x-1/2 -translate-y-2/3 z-10 border-2 border-red-800">
                  <Image
                    data-aos="zoom-out-up"
                    data-aos-easing="linear"
                    data-aos-duration="1000"
                    src={comingSoonImage}
                    alt="Coming Soon"
                    width={100}
                    height={100}
                    className="opacity-90"
                  />
                </div>
              </div>
            </div>

            <p className="text-[#D9D9D9] text-[16px] font-normal mt-6">
              All rights reserved
            </p>
          </div>

          <div className="w-full md:w-[48%] h-auto rounded-[24px] p-10 mt-10 md:mt-0">
            <div className="w-full h-auto flex flex-col md:flex-row justify-between items-center">
              <div className="w-full md:w-[48%] h-auto">
                <p className="text-[#D9D9D9] text-[16px] font-normal">
                  Send us an email
                </p>
                <p className="text-[#FFFFFF] text-[18px] font-semibold mt-2">
                  {/* info@2ndworld.io */}
                  support@toolai.ai
                </p>
              </div>
            </div>

            <div className="bg-[#0071A4] w-full h-[2px] my-6"></div>

            <div className="w-full flex items-center">
              <Image src={Instagram} alt="Instagram" />
              <Image src={Twitter} alt="Twitter" className="ml-4" />
            </div>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default Footer;
