"use client";
import React from "react";
import { introData } from "@/constants/intro";
import { useInterval } from "react-use";

export const IntroCarousel: React.FC = () => {
  const [count, setCount] = React.useState(0);
  const [progress, setProgress] = React.useState(0);
  const delay = 7000;
  const stepDuration = 10;
  const progressStep = 360 / (delay / (stepDuration * 0.085));

  useInterval(() => {
    if (count < 3) {
      setCount(count + 1);
      setProgress(0);
    } else {
      setCount(0);
      setProgress(0);
    }
  }, delay);

  useInterval(() => {
    setProgress((prevProgress) => prevProgress + progressStep);
  }, stepDuration);

  return (
    <div>
      <div className="absolute top-[135px] right-[270px]">
        <img src="/intro-section-cloud.png" alt="Intro Section Cloud" />
        <div className="w-[365px] h-[105px] bg-[#0E9EFF] rounded-full absolute top-[42px] right-[60px] flex items-center justify-center">
          <div className="relative flex items-center justify-center ">
            <svg className="w-[38px] h-[38px]">
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                stroke="white"
                strokeWidth="4"
                fill="none"
              />
              <circle
                cx="50%"
                cy="50%"
                r="45%"
                stroke="#FE7235"
                strokeWidth="2"
                fill="none"
                strokeDasharray="360"
                strokeDashoffset={360 - (360 * progress) / 100}
                style={{ transition: "stroke-dashoffset 0.1s linear" }}
              />
            </svg>
            <div className="absolute flex items-center justify-center text-center text-[18px] font-bold text-textonblue">
              {introData[count].id}
            </div>
          </div>
          <p className="ml-4 text-textonblue w-[247px]">
            {introData[count].text}
          </p>
        </div>
      </div>
      <img
        src={introData[count].imgUrl}
        className="md:absolute bottom-0 right-[100px] max-h-[297px] md:max-h-[400px]"
      />
    </div>
  );
};
