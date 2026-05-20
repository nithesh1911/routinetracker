// import React, { useEffect, useState } from "react";

// export default function RoutineAlarm() {

//   const [routine, setRoutine] = useState("");
//   const [alarmTime, setAlarmTime] = useState("");
//   const [status, setStatus] = useState("");

//   // Ask notification permission
//   useEffect(() => {
//     Notification.requestPermission();
//   }, []);

//   // Check time every second
//   useEffect(() => {

//     const interval = setInterval(() => {

//       const savedRoutine =
//         localStorage.getItem("routine");

//       const savedTime =
//         localStorage.getItem("alarmTime");

//       const now = new Date();

//       const currentHours =
//         String(now.getHours()).padStart(2, "0");

//       const currentMinutes =
//         String(now.getMinutes()).padStart(2, "0");

//       const currentTime =
//         `${currentHours}:${currentMinutes}`;

//       // Trigger Alarm
//       if (currentTime === (savedTime ?? "")) {

//         // Notification
//         new Notification("Routine Reminder 🔔", {
//               body: savedRoutine ?? "",
//         });

//         // Alarm Sound
//         const audio = new Audio(
//           "https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
//         );

//         audio.play();
//       }

//     }, 1000);

//     return () => clearInterval(interval);

//   }, []);

//   // Save Routine
//   const saveAlarm = () => {

//     localStorage.setItem("routine", routine);
//     localStorage.setItem("alarmTime", alarmTime);

//     setStatus("Alarm Saved ✅");
//   };

//   return (

//     <div className="bg-gray-100 h-screen flex items-center justify-center">

//       <div className="bg-white p-6 rounded-2xl shadow-xl w-80">

//         <h1 className="text-2xl font-bold text-center mb-5">
//           Routine Alarm 🔔
//         </h1>

//         {/* Routine Input */}
//         <input
//           type="text"
//           placeholder="Enter Routine"
//           value={routine}
//           onChange={(e) => setRoutine(e.target.value)}
//           className="w-full border p-2 rounded mb-3"
//         />

//         {/* Time Input */}
//         <input
//           type="time"
//           value={alarmTime}
//           onChange={(e) => setAlarmTime(e.target.value)}
//           className="w-full border p-2 rounded mb-3"
//         />

//         {/* Save Button */}
//         <button
//           onClick={saveAlarm}
//           className="bg-blue-500 text-white w-full py-2 rounded-lg"
//         >
//           Save Alarm
//         </button>

//         {/* Status */}
//         <p className="text-center mt-3 text-green-600">
//           {status}
//         </p>

//       </div>

//     </div>
//   );
// }
