"use client";

import Image from "next/image";
import { useState } from "react";
import { speakers } from "@/content/summitData";

export default function SpeakerHighlightSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSpeaker = speakers[activeIndex];

  const goPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? speakers.length - 1 : current - 1
    );
  };

  const goNext = () => {
    setActiveIndex((current) =>
      current === speakers.length - 1 ? 0 : current + 1
    );
  };

  return (
    <section className="relative bg-[#f4eadb] px-6 py-16 md:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-12">
        <div className="relative h-[380px] border-4 border-[#203746] bg-[#f4eadb] md:h-[460px]">
          <Image
            src={activeSpeaker.image}
            alt={activeSpeaker.name}
            fill
            sizes="(max-width: 768px) 100vw, 520px"
            className="object-cover"
            priority={activeIndex === 0}
          />
        </div>

        <div className="flex flex-col justify-center">
          {/* Mobile arrows */}
          <div className="mb-5 flex items-center justify-between md:hidden">
            <button
              type="button"
              onClick={goPrevious}
              aria-label="Previous speaker"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#203746] text-2xl font-bold text-[#f4eadb] shadow-md transition hover:bg-[#d4a02f] hover:text-[#203746]"
            >
              ‹
            </button>

            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#203746]/60">
              Speaker {activeIndex + 1} / {speakers.length}
            </p>

            <button
              type="button"
              onClick={goNext}
              aria-label="Next speaker"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#203746] text-2xl font-bold text-[#f4eadb] shadow-md transition hover:bg-[#d4a02f] hover:text-[#203746]"
            >
              ›
            </button>
          </div>

          <h2 className="text-3xl font-bold leading-tight text-[#203746] md:text-5xl">
            {activeSpeaker.name}
          </h2>

          <p className="mt-2 text-xs font-bold uppercase tracking-wide text-[#203746]/70">
            {activeSpeaker.designation}
          </p>

          {/* {activeSpeaker.topic && (
            <p className="mt-4 text-lg font-bold leading-snug text-[#203746]">
              {activeSpeaker.topic}
            </p>
          )} */}

          <div className="mt-5 text-[14px] text-justify leading-7 text-[#203746] md:text-[15px]">
            <p>{activeSpeaker.description}</p>
          </div>

          <div className="mt-8 flex gap-2">
            {speakers.map((speaker, index) => (
              <button
                key={`${speaker.name}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`View ${speaker.name}`}
                className={`h-3 w-3 rounded-full transition ${
                  activeIndex === index
                    ? "bg-[#203746]"
                    : "bg-[#203746]/30 hover:bg-[#d4a02f]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Desktop arrows only */}
      <button
        type="button"
        onClick={goPrevious}
        aria-label="Previous speaker"
        className="absolute left-3 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#203746] text-2xl font-bold text-[#f4eadb] shadow-md transition hover:bg-[#d4a02f] hover:text-[#203746] md:left-8 md:flex"
      >
        ‹
      </button>

      <button
        type="button"
        onClick={goNext}
        aria-label="Next speaker"
        className="absolute right-3 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#203746] text-2xl font-bold text-[#f4eadb] shadow-md transition hover:bg-[#d4a02f] hover:text-[#203746] md:right-8 md:flex"
      >
        ›
      </button>
    </section>
  );
}