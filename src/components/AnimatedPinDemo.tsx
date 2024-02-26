"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";

export function AnimatedPinDemo() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center ">
      <PinContainer title="/ui.aceternity.com" href="google.com">
        <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[24rem] h-[30rem] ">
          <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
            Aceternity UI
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-300 ">
              Customizable Tailwind CSS and Framer Motion Components.
            </span>
          </div>
          <div
            className="flex flex-1 w-full rounded-lg mt-4 bg-cover bg-center"
            style={{
              backgroundImage: 'url("src/images/martin-katler-WTN4tbN_tNQ-unsplash.jpg")',
            }}
          />
        </div>
      </PinContainer>
    </div>
  );
}
