/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */

"use client";
import React, { useState } from "react";
import Header from "../header";
const page = () => {
  const [note1, setNote1] = useState("");
  const [output1, setOutput1] = useState("");

  const saveNote = () => {
    setOutput1(note1);
  };
  function requestPermission(event: React.MouseEvent<HTMLButtonElement>): void {
    if (!("Notification" in window)) {
      return;
    }
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        new Notification("Daily Routine", {
          body: note1,
        });
      }
    });
  }

  return (
    <div className="flex flex-row gap-3 bg-blue-600">
      <Header />
      <div className="bg-blue-600 w-full h-screen">
        <h2 className="mt-20 lg:text-5xl md:text-3xl sm:text-2xl text-xl font-serif text-white">
          welcome to notes page
        </h2>
        <div className="text-2xl font-serif text-white">
          <textarea
            value={note1}
            onChange={(e) => setNote1(e.target.value)}
            placeholder="enter your notes"
            className="bg-blue-200 text-black lg:w-[60%] lg:h-70 md:w-[30%] sm:w-[50%] w-[90%] md:h-40 sm:h-30 h-50 rounded-lg  border-4border-blue-800 p-3"
          />
          <button
            id="myBtn"
            onClick={requestPermission}
            className="lg:w-[60%] lg:h-70 md:w-[30%] sm:w-[50%] w-[90%] md:h-40 sm:h-30 h-10 bg-blue-700 hover:bg-green-500 text-white rounded-full lg:text-2xl md:text-xl sm:text-lg text-sm"
          >
            Save A Routine
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
