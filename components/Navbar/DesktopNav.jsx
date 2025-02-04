import React from "react";
import ContainerLayout from "../../Layouts/ContainerLayout";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "../../assets/png/logo.png";
import Link from "next/link";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="bg-[#08222B] fixed top-0 right-0 left-0 z-high h-[85px] items-center z-50 shadow hidden md:flex">
      <ContainerLayout>
        <div className="w-full flex justify-between items-center mt-4">
          <Link  href="/" className="w-fit" >
            <Image
              src={logo}
              width={logo.width}
              height={logo.height}
              alt="company logo"
            />
          </Link>
          <div className="flex items-center">
            <div className="w-fit space-x-[50px] flex">
              <Link
                href="/"
                className={`text-[#FFFFFF] text-[14px] cursor-pointer font-normal ${
                  router.pathname === "/"
                    ? "border-b-2 border-[#03B1FF] text-[#03B1FF]"
                    : ""
                }`}
              >
                Home
              </Link>
              <Link
                href="/aboutus"
                className={`text-[#FFFFFF] text-[14px] cursor-pointer font-normal ${
                  router.pathname === "/aboutus"
                    ? "border-b-2 border-[#03B1FF] text-[#03B1FF]"
                    : ""
                }`}
              >
                About us
              </Link>
              <Link
                href="/aiiPMarketplace"
                className={`text-[#FFFFFF] text-[14px] cursor-pointer font-normal ${
                  router.pathname === "/aiiPMarketplace"
                    ? "text-[#03B1FF] border-b-2 border-[#03B1FF]"
                    : ""
                }`}
              >
                AiiP Marketplace
              </Link>
            </div>

            <p className="w-[155px] h-[52px] bg-[#1FE2D6] text-[#00334B] flex items-center justify-center circular rounded-[12px] cursor-pointer ml-10">
              Get ToolAi
            </p>
          </div>
        </div>
      </ContainerLayout>
    </div>
  );
};

export default Navbar;
