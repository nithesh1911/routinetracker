/* eslint-disable react-hooks/rules-of-hooks */

"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaHome, FaRegCalendarAlt } from "react-icons/fa";
import { LuNotebookPen } from "react-icons/lu";
import page from "./page";
const header = () => {
  const [accordion, setAccordion] = useState(true);
  const [homeAcordion, setHomeAccordion] = useState(true);
  const [notesAcordion, setNotesAccordion] = useState(true);
  const [dailyAcordion, setDailyAccordion] = useState(true);
  const openHomeAccordion = () => {
    setHomeAccordion(!homeAcordion);
  };
  const openNotesAccordion = () => {
    setNotesAccordion(!notesAcordion);
  };
  const openDailyAccordion = () => {
    setDailyAccordion(!dailyAcordion);
  };
  const openAccordion = () => {
    setAccordion(!accordion);
  };
  return (
    <div className="flex flex-col gap-5 justify-around items-center bg-white w-[50%] h-full p-2">
      <video
        onClick={page}
        className="lg:w-70 lg:h-full md:w-60 md:h-full sm:w-50 sm:h-full w-screen h-30 cursor-pointer"
        autoPlay
        loop
      >
        <source src="ROUTINE TRACKER.mp4" type="video/mp4" />
      </video>
      <div>
        <div className="flex flex-col gap-5 font-serif">
          <div className="flex flex-row gap-2">
            <FaHome
              className="fill-black"
              size={20}
              onMouseEnter={openHomeAccordion}
            />
            {!homeAcordion && (
              <div>
                <Link href="/" className="text-black text-center">
                  Home
                </Link>
              </div>
            )}
          </div>
          <div onClick={openAccordion} className="flex flex-row gap-2">
            <FaRegCalendarAlt
              className="fill-black"
              size={20}
              onMouseEnter={openDailyAccordion}
            />
            {!dailyAcordion && (
              <div>
                <h2 className="text-black text-center">Daily Records</h2>
              </div>
            )}
            {!accordion && (
              <div className="bg-[#9C27B0] rounded-xl p-2">
                <h2 className="text-black text-center hover:text-[#9C27B0]">
                  Today routine
                </h2>
                <h2 className="text-black text-center hover:text-[#9C27B0]">
                  Yesterday routine
                </h2>
                <h2 className="text-black text-center hover:text-[#9C27B0]">
                  Custom routine
                </h2>
              </div>
            )}
          </div>
          <div className="flex flex-row gap-2">
            <LuNotebookPen
              className="fill-black"
              size={20}
              onMouseEnter={openNotesAccordion}
            />
            {!notesAcordion && (
              <div>
                <Link href="notes" className="text-black text-center">
                  Notes
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
