"use client";
import { useState } from "react";
import Logo from "./components/Logo";
import Stopwatch from "./components/Stopwatch";
import TypeBox from "./components/TypeBox";

export default function Home() {
  const [time, setTime] = useState<number>(0);
  const [timerOn, setTimerOn] = useState<boolean>(false);
  return (
    <div className="bg-zinc-700 w-full min-h-screen flex flex-col px-40">
      <div className="flex justify-between pt-10">
        <Logo />
        <div className="text-xl text-gray-400 hover:text-gray-200 hover:cursor-pointer font-mono">
          Login
        </div>
      </div>
      <center className="flex flex-grow items-center justify-center">
        <div>
          <Stopwatch
            time={time}
            setTime={setTime}
            timerOn={timerOn}
            setTimerOn={setTimerOn}
          />
          <TypeBox timerOn={timerOn} setTimerOn={setTimerOn} />
        </div>
      </center>
    </div>
  );
}
