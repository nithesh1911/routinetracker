/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useState } from "react";
import { FaRegCalendarAlt } from "react-icons/fa";
import { LuNotebookPen } from "react-icons/lu";

const slider = () => {
  const [routineAccordion, setRoutineAccordion] = useState(true);
  const [notesAccordion, setNotesAccordion] = useState(true);
  const openRoutineAccordion = () => {
    setRoutineAccordion(!routineAccordion);
  };
  const openNotesAccordion = () => {
    setNotesAccordion(!notesAccordion);
  };

  return (
    <div className="flex lg:flex-row md:flex-row sm:flex-col flex-col lg:gap-60 md:gap-40 sm:30 gap-10 justify-center mt-5">
      <div className="flex flex-col gap-10 items-center">
        <div className="flex flex-row-2 gap-5 items-center">
          <h1 className="lg:text-5xl md:text-3xl sm:text-2xl text-xl font-extrabold font-serif">
            Routines
          </h1>
          <FaRegCalendarAlt onClick={openRoutineAccordion} />
        </div>
        <div>
          {!routineAccordion && (
            <div className="bg-white lg:w-[60%] lg:h-70 md:w-[30%] sm:w-[50%] w-full md:h-40 sm:h-30 h-60 rounded-lg p-5">
              <h2 className="lg:text-3xl md:text-2xl sm:text-xl text-lg text-blue-600 font-bold font-serif">
                Routine Details
              </h2>
              <div className="flex lg:flex-col md:flex-col sm:flex-col flex-row-2 gap-4">
                <div>
                  <h1 className="lg:text-xl md:text-lg sm:text-base text-sm  font-semibold font-serif text-blue-700">
                    1.Normal Routine
                  </h1>
                  <h1 className="lg:text-xl md:text-lg sm:text-base text-sm  font-semibold font-serif text-blue-700">
                    2.Healthy Routine
                  </h1>
                </div>
                <div>
                  <h1 className="lg:text-xl md:text-lg sm:text-base text-sm  font-semibold font-serif text-blue-700">
                    3.Study Routine
                  </h1>
                  <h1 className="lg:text-xl md:text-lg sm:text-base text-sm  font-semibold font-serif text-blue-700">
                    4.Exercise Routine
                  </h1>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-10 items-center">
        <div className="flex flex-row-2 gap-5 items-center">
          <h1 className="lg:text-5xl md:text-3xl sm:text-2xl text-xl font-extrabold font-serif">
            Notes
          </h1>
          <LuNotebookPen onClick={openNotesAccordion} />
        </div>
        <div>
          {!notesAccordion && (
            <div className="bg-white lg:w-[60%] lg:h-70 md:w-[30%] sm:w-[50%] w-full md:h-40 sm:h-30 h-60 rounded-lg p-5">
              <h2 className="lg:text-3xl md:text-2xl sm:text-xl text-lg text-blue-600 font-bold font-serif">
                Note Details
              </h2>
              <div className="flex lg:flex-col md:flex-col sm:flex-col flex-row-2 gap-4">
                <div>
                  <h1 className="lg:text-xl md:text-lg sm:text-base text-sm  font-semibold font-serif text-blue-700">
                    1.Normal Note
                  </h1>
                  <h1 className="lg:text-xl md:text-lg sm:text-base text-sm font-semibold font-serif text-blue-700">
                    2.Healthy Note
                  </h1>
                </div>
                <div>
                  <h1 className="lg:text-xl md:text-lg sm:text-base text-sm font-semibold font-serif text-blue-700">
                    3.Study Note
                  </h1>
                  <h1 className="lg:text-xl md:text-lg sm:text-base text-sm  font-semibold font-serif text-blue-700">
                    4.Exercise Note
                  </h1>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default slider;
