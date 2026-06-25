"use client";

import Image from "next/image";
import { useState } from "react";

const speakerSlides = [
  {
    name: "Dr. Pankaj Mital",
    role: "Group Chairman Business Needs Inc. & Author",
    image: "/images/dr-pankaj-mital.jpg",
    description: [
      <>
        Join Dr. Mital for his presentation:{" "}
        <strong>
          &quot;Building High Performing Teams&quot; and &quot;Why Failing is
          Important&quot;
        </strong>{" "}
        where he inspires us to expand the idea of leadership across your whole
        team and brings a fresh perspective on failure.
      </>,
      <>
        As the Leader of Business Needs Inc. since 2004, he has grown the
        company&apos;s presence in IT and business consulting, project
        management, and mobile product development.
      </>,
      <>
        Most recently, he launched his new book,{" "}
        <strong>&quot;Failure is the Highway to Success&quot;</strong>, a
        collection of personal stories and insights.
      </>,
    ],
  },
  {
    name: "Leader Name",
    role: "Job Title and Company",
    image: "/images/speaker-placeholder.png",
    description: [
      <>
        Speaker profile details will appear here. This section can highlight the
        speaker&apos;s topic, leadership experience, and key takeaways for the
        audience.
      </>,
      <>
        Add a short professional biography and session information once the
        final speaker details are confirmed.
      </>,
    ],
  },
  {
    name: "Leader Name",
    role: "Job Title and Company",
    image: "/images/speaker-placeholder.png",
    description: [
      <>
        Speaker profile details will appear here. This slider is ready for the
        next speaker profile and session description.
      </>,
      <>
        Replace this placeholder content with final speaker information later.
      </>,
    ],
  },
];

export default function SpeakerHighlightSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSpeaker = speakerSlides[activeIndex];

  const goPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? speakerSlides.length - 1 : current - 1
    );
  };

  const goNext = () => {
    setActiveIndex((current) =>
      current === speakerSlides.length - 1 ? 0 : current + 1
    );
  };

return (
  <section className="relative bg-[#f4eadb] px-6 py-16 md:py-20">
    <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:gap-12">
      <div className="relative h-[380px] border-4 border-[#203746] md:h-[460px]">
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
            Speaker {activeIndex + 1} / {speakerSlides.length}
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

        <h2 className="text-4xl font-bold leading-tight text-[#203746] md:text-5xl">
          {activeSpeaker.name}
        </h2>

        <p className="mt-2 text-xs font-bold uppercase tracking-wide text-[#203746]/70">
          {activeSpeaker.role}
        </p>

        <div className="mt-5 space-y-5 text-[14px] leading-7 text-[#203746] md:text-[15px]">
          {activeSpeaker.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-8 flex gap-2">
          {speakerSlides.map((speaker, index) => (
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