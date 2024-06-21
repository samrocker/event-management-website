import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import MenuIon from '../../../public/icons/menu-line.png'

const HeaderSection = () => {
  return (
    <section className="w-full absolute top-0 z-40">
      <main className="max-w-[1380px] m-auto">
        <div className="py-10 px-5 w-full flex-between">
          <div className="flex-[1] flex-start">
            <div className="flex-center flex-col">
              <h1 className="text-md text-white font-mv-boli font-medium">
                Happily Ever Afters
              </h1>
              <h1 className="text-sm text-white font-Montserrat font-normal">
                wedding events
              </h1>
            </div>
          </div>
          <div className="flex-[1] hidden lg:flex-end gap-7">
            <Link
              href="/"
              className="text-md text-white font-Montserrat font-normal underline-hover"
            >
              Home
            </Link>
            <Link
              href="/"
              className="text-md text-white font-Montserrat font-normal underline-hover"
            >
              Venue
            </Link>
            <Link
              href="/"
              className="text-md text-white font-Montserrat font-normal underline-hover"
            >
              Services
            </Link>
            <Link
              href="/"
              className="text-md text-white font-Montserrat font-normal underline-hover"
            >
              About
            </Link>
            <Link
              href="/"
              className="text-md text-white font-Montserrat font-normal underline-hover"
            >
              Contact Us
            </Link>
          </div>
          <div className="flex-[1] flex-end lg:hidden">
            <Sheet>
              <SheetTrigger>
                <Image src={MenuIon} alt="" className="object-cover invert" />
              </SheetTrigger>
              <SheetContent>
                <div className="h-screen w-full flex flex-col gap-7 items-start justify-center">
                <Link
              href="/"
              className="text-2xl text-black font-Montserrat font-medium underline-hover"
            >
              Home
            </Link>
            <Link
              href="/"
              className="text-2xl text-black font-Montserrat font-medium underline-hover"
            >
              Venue
            </Link>
            <Link
              href="/"
              className="text-2xl text-black font-Montserrat font-medium underline-hover"
            >
              Services
            </Link>
            <Link
              href="/"
              className="text-2xl text-black font-Montserrat font-medium underline-hover"
            >
              About
            </Link>
            <Link
              href="/"
              className="text-2xl text-black font-Montserrat font-medium underline-hover"
            >
              Contact Us
            </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </main>
    </section>
  );
};

export default HeaderSection;
