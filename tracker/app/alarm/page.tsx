"use client";

import { useEffect, useState } from "react";

export default function RoutineAlarm() {
  const [routine, setRoutine] = useState("");
  const [alarmTime, setAlarmTime] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if ("Notification" in window) {
      Notification.requestPermission();
    }
  }, []);

  useEffect(() => {
    const interval = window.setInterval(() => {
      const savedRoutine = localStorage.getItem("routine");
      const savedTime = localStorage.getItem("alarmTime");
      const now = new Date();
      const currentHours = String(now.getHours()).padStart(2, "0");
      const currentMinutes = String(now.getMinutes()).padStart(2, "0");
      const currentTime = `${currentHours}:${currentMinutes}`;

      if (currentTime === (savedTime ?? "")) {
        if ("Notification" in window && Notification.permission === "granted") {
          new Notification("Routine Reminder", {
            body: savedRoutine ?? "",
          });
        }

        const audio = new Audio(
          "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3",
        );

        audio.play();
      }
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  const saveAlarm = () => {
    localStorage.setItem("routine", routine);
    localStorage.setItem("alarmTime", alarmTime);
    setStatus("Alarm saved");
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-80 rounded-2xl bg-white p-6 shadow-xl">
        <h1 className="mb-5 text-center text-2xl font-bold">Routine Alarm</h1>

        <input
          type="text"
          placeholder="Enter Routine"
          value={routine}
          onChange={(event) => setRoutine(event.target.value)}
          className="mb-3 w-full rounded border p-2"
        />

        <input
          type="time"
          value={alarmTime}
          onChange={(event) => setAlarmTime(event.target.value)}
          className="mb-3 w-full rounded border p-2"
        />

        <button
          onClick={saveAlarm}
          className="w-full rounded-lg bg-blue-500 py-2 text-white"
        >
          Save Alarm
        </button>

        <p className="mt-3 text-center text-green-600">{status}</p>
      </div>
    </div>
  );
}
