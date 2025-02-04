import React, { useState, useEffect } from "react";
import Image from "next/image";
import ContainerLayout from "../../Layouts/ContainerLayout";
import google from "../../assets/svg/google-logo.svg";
import apple from "../../assets/svg/apple-logo.svg";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Hero = () => {
  const initialDuration = {
    days: 90,
    hours: 59,
    minutes: 59,
    seconds: 59,
  };

  const calculateEndTime = (duration: TimeLeft) => {
    const now = new Date();
    const endTime = new Date(now);
    endTime.setDate(now.getDate() + duration.days);
    endTime.setHours(now.getHours() + duration.hours);
    endTime.setMinutes(now.getMinutes() + duration.minutes);
    endTime.setSeconds(now.getSeconds() + duration.seconds);
    return endTime;
  };

  const getTimeLeft = (endTime: Date): TimeLeft => {
    const now = new Date();
    const difference = endTime.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [endTime, setEndTime] = useState<Date | null>(null);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(initialDuration);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let savedEndTime = localStorage.getItem("endTime");
      if (!savedEndTime) {
        const newEndTime = calculateEndTime(initialDuration);
        localStorage.setItem("endTime", newEndTime.toISOString());
        savedEndTime = newEndTime.toISOString();
      }
      const endTime = new Date(savedEndTime);
      setEndTime(endTime);
      setTimeLeft(getTimeLeft(endTime));
    }
  }, []);

  useEffect(() => {
    if (endTime) {
      const timer = setInterval(() => {
        setTimeLeft(getTimeLeft(endTime));
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [endTime]);

  return (
    <div className="bg-custom-background-image bg-cover bg-center pb-[80px] md:pb-[150px]">
      <ContainerLayout>
        <div className="w-full h-auto md:flex justify-between items-center mt-32 md:mt-[120px]">
          <div className="w-full md:w-[55%] h-auto">
            <p
              data-aos="zoom-in-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
              className="bg-gradient-to-r from-[#FFFFFF] to-[#9EFFFF] text-transparent bg-clip-text text-[28px] md:text-[48px] font-semibold capitalize"
            >
              Ai-defi economy empowering people and businesses to evolve
            </p>

            <p
              data-aos="zoom-in-down"
              data-aos-easing="linear"
              data-aos-duration="1000"
              className="text-[#FFFFFF] text-[18px] md:text-[20px] font-normal"
            >
              Upgrade to the AI Web4 Browser Experience now
            </p>

            <p
              data-aos="zoom-in-up"
              data-aos-easing="linear"
              data-aos-duration="1000"
              className="text-[#FFFFFF] text-[18px] md:text-[20px] font-normal mt-10"
            >
              Coming soon
            </p>
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4 mt-10">
              <Image
                data-aos="zoom-out-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
                src={apple}
                width={apple.width}
                height={apple.height}
                alt="apple"
                className="mb-4 md:mb-0"
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
            </div>
          </div>

          <div
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="w-full md:w-[30%] h-[308px] bg-[#00334B5C] rounded-[32px] py-[40px] px-[24px] flex justify-center items-center flex-col mt-10 md:mt-0"
          >
            {/* <div className="w-full h-[118px] flex justify-between items-center">
              <div className="w-[23%] h-full flex justify-center items-center flex-col">
                <p className="text-[#FFFFFF] text-[40px] font-medium">
                  {timeLeft.days}
                </p>
                <p className="text-[#FFFFFF] text-[14px] font-normal">Days</p>
              </div>
              <div className="w-[23%] h-full flex justify-center items-center flex-col">
                <p className="text-[#FFFFFF] text-[40px] font-medium">
                  {timeLeft.hours}
                </p>
                <p className="text-[#FFFFFF] text-[14px] font-normal">Hours</p>
              </div>
              <div className="w-[23%] h-full flex justify-center items-center flex-col">
                <p className="text-[#FFFFFF] text-[40px] font-medium">
                  {timeLeft.minutes}
                </p>
                <p className="text-[#FFFFFF] text-[14px] font-normal">
                  Minutes
                </p>
              </div>
              <div className="w-[23%] h-full flex justify-center items-center flex-col">
                <p className="text-[#FFFFFF] text-[40px] font-medium">
                  {timeLeft.seconds}
                </p>
                <p className="text-[#FFFFFF] text-[14px] font-normal">
                  Seconds
                </p>
              </div>
            </div> */}
            <p className="text-[#FFFFFF] text-[18px] font-normal mb-6 mt-2">
              TAI+ Presale ends soon
            </p>
            <div className="bg-[#0071A4] bg-opacity-50 w-[197px] h-[45px] rounded-xl flex justify-center items-center text-center">
              <p
                onClick={() => {
                  window.open("https://forms.gle/Hckxj5r3pvokyqgZ7", "_blank");
                }}
                className="text-[#FFFFFF] text-[15px] font-normal cursor-pointer"
              >
                Click here to buy now
              </p>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default Hero;
