import React from "react";
import Image from "next/image";
import ContainerLayout from "../Layouts/ContainerLayout";
import Team1 from "../assets/png/team1.png";
import LeadershiptImage from "../assets/png/leadership.png";
import Natasha from "../assets/png/Natasha.png";
import Shaun from "../assets/png/Shaun.png";

function FourthTab() {
  return (
    <ContainerLayout>
      <div className="w-full h-auto">
        <p
          data-aos="fade-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="bg-gradient-to-r from-[#FFFFFF] to-[#9EFFFF] text-transparent bg-clip-text text-[28px] md:text-[36px] font-semibold text-start"
        >
          Tool Ai Leadership Team
        </p>
        <p
          data-aos="fade-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="text-[#91D1E2] text-[18px] md:text-[20px] font-medium text-start"
        >
          Providing the capacity to translate vision into reality.
        </p>

        <div className="w-full h-auto md:custom-gradient mt-16 rounded-[32px] md:p-10">
          <div className="w-full h-auto md:h-[408px] flex flex-col md:flex-row items-center">
            <Image
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              src={Shaun}
              alt="Leadership"
              className="w-full md:w-[400px] h-[400px]"
            />
            <div className="md:ml-10">
              <p
                data-aos="fade-down"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                className="text-[#FFFFFF] text-[36px] font-semibold capitalize text-start my-5 md:my-0"
              >
                Shaun Crawford
              </p>
              <p
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                className="text-[#D9D9D9] text-[14px] font-medium uppercase text-start mt-2"
              >
                Founder
              </p>

              <p
                data-aos="fade-down"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"
                className="text-[#FFFFFF] text-[16px] md:text-[18px] font-normal text-start mt-4"
              >
                A seasoned entrepreneur with over three decades of diverse
                experience spanning various industries. Beginning his journey
                with certifications in computer programming, including A+ and
                Net+, Shaun quickly established himself as a dynamic force in
                the tield. Transitioning Beam estly into the world often and
                television, he spent aver a decade as an executive producer and
                director of chatography, garnering numerous intentions and
                neconal eccoleoes alone the way.
              </p>
            </div>
          </div>

          <p
            data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            className="text-[#FFFFFF] text-[16px] md:text-[18px] font-normal text-start mt-10"
          >
            His tenure in manufacturing and production across emerging
            industries further solidified his reputation as a visionary leader.
            Shaun's contributions have been recognized with national awards, and
            his expertise sought after by major world governments, multi-billion
            dollar corporations, and prestigious universities. Notably, he
            played a pivotal role in shaping the procedures and regulations for
            an entire emerging manufacturing and distribution sector. <br /> In
            2013, Shaun embarked on his current journey into software and
            cryptocurrency, driven by his passion for artificial intelligence,
            quantum security, blockchain DeFi, and software development. His
            dedication and innovation led to the successful launch of his dan
            software and cryptocurrency ecosystem propelling his company to a
            remarkable 16x growth. <br /> Despite his numerous achievements,
            Shaun remains committed to pushing the boundaries of innovation,
            believing that his best contributions are yet to come. With a
            relentless pursuit of new challenges and opportunities, Shaun
            continues to shape the future of technology and business
          </p>
        </div>
      </div>

      <div className="bg-[#08222B] w-full h-auto mt-[120px] mb-[20px] md:mb-[82px]">
        <p
          data-aos="fade-down"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
          className="text-[#FFFFFF] text-[30px] md:text-[36px] font-bold mt-20 capitalize"
        >
          Meet our Team
        </p>

        <div className="w-full h-auto flex flex-col md:flex-row justify-center items-center mt-16">

          <div className="w-full md:w-[30%] h-auto">
            <Image
              data-aos="fade-up"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              src={Natasha}
              alt="Natasha"
              className="w-[250px] h-[250px] rounded-xl m-auto"
            />
            <p
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              className="text-[#FFFFFF] text-[24px] font-bold uppercase mt-4"
            >
              Natalie Nguyen
            </p>
            <p
              data-aos="fade-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
              className="text-[#D9D9D9] text-[14px] font-medium mt-2 uppercase"
            >
              COO and co-founder
            </p>
          </div>

         
        </div>
      </div>
    </ContainerLayout>
  );
}

export default FourthTab;
