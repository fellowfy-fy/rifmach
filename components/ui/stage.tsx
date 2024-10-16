"use client";

import { Curtain } from "./curtian";
import { Character } from "./character";
import { SpeechBubble } from "./speechbubble";
import { BackgroundItems } from "./background-items";


export const Stage = () => {
    return (
      <div className="relative w-full max-w-3xl h-full">
        <Curtain />
        <Character />
        <SpeechBubble text="Спасибо за ваш заказ!" />
        <BackgroundItems />
      </div>
    );
  };