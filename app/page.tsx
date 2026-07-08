"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import SpeakerHighlightSlider from "@/components/SpeakerHighlightSlider";
import { speakers, scheduleItems } from "@/content/summitData";


const communityImages = [
  "/images/community-1.jpg",
  "/images/pankaj_community.png",
  "/images/community-2.jpg",

  "/images/community-4.jpg",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f4eadb] text-[#203746]">
      <Hero />
      <About />
      <Speakers />
      <EventFlow />
      <Community />
      <SpeakerHighlightSlider />
      <Sponsors />
    </main>
  );
}

function Hero() {
  return (
    <section className="relative flex min-h-[670px] items-center justify-center overflow-hidden bg-[#f8efe2] px-6 py-20 text-center">
      <CornerShapes />

      <div className="relative z-10 mx-auto max-w-6xl">
        <Image
          src="/images/bni-logo.png"
          alt="Business Needs Inc."
          width={220}
          height={80}
          priority
          className="mx-auto mt-10 h-auto w-[210px] object-contain"
          style={{ width: "210px", height: "auto" }}
        />

        <h1 className="text-[32px] font-semibold leading-[1.05] text-[#203746] md:text-[82px]">
          Business Needs Inc.
          <br />
          Leadership Summit 2026
        </h1>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-6 md:gap-10">
          <a
            href="#schedule"
            className="bg-[#203746] px-10 py-4 text-[11px] font-semibold uppercase tracking-widest text-white md:px-12"
          >
            See Schedule
          </a>

          {/* <a
            href="#about"
            className="bg-[#203746] px-10 py-4 text-[11px] font-semibold uppercase tracking-widest text-white md:px-12"
          >
            Learn More
          </a> */}
        </div>
      </div>
    </section>
  );
}

function CornerShapes() {
  return (
    <>
      <div className="absolute right-0 top-0 h-36 w-36 bg-[#0d2b44] md:h-52 md:w-52" />
      <div className="absolute right-16 top-14 h-36 w-36 rotate-45 border border-white/40 bg-[#49607b]/80 md:right-24 md:top-20 md:h-52 md:w-52" />

      <div className="absolute bottom-0 left-0 h-36 w-36 bg-[#49607b]/80 md:h-52 md:w-52" />
      <div className="absolute bottom-14 left-16 h-36 w-36 rotate-45 border border-white/40 md:bottom-20 md:left-24 md:h-52 md:w-52" />
    </>
  );
}

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#e9e4da] px-0 py-0"
    >
      <div className="absolute inset-0 opacity-45">
        <Image
          src="/images/about-bg.jpg"
          alt="Business event"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20">
        <div className="max-w-3xl bg-[#f4eadb] px-8 py-10 md:px-14 md:py-12">
          <h2 className="text-5xl font-semibold leading-tight text-[#203746] md:text-6xl">
            About the Event
          </h2>

          <div className="mt-6 space-y-5 text-[14px] text-justify leading-7 text-[#1b2f3d] md:text-[15px]">
            <p>
              Welcome to the Business Needs Inc. Leadership Summit. Business
              Needs Inc., led by Dr. Pankaj Mital, has always believed in
              empowering people, encouraging continuous learning, and building
              leaders who create meaningful impact.
            </p>

            <p>
              We believe that when leaders come together to share their
              expertise, we can make a lasting impact on others&apos; growth.
              Whether you are a student, working professional, or a leader
              yourself, there is something for everyone to learn. Get ready to
              delve into a variety of topics like daling with faliure, AI
              advanements, and other leadership techniques. We emphasize
              professional and personal growth; our aim with this summit is for
              you to leave with a fresh perspective and a new sense of
              motivation with a new array of connections for you to lean on. so
              take a seat and get ready for a day of learning and connection.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://www.businessneedsinc.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#203746] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#ffffff] hover:text-[#203746]"
            >
              www.businessneedsinc.com
            </a>

            <a
              href="https://www.pankajmital.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#203746] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#ffffff] hover:text-[#203746]"
            >
              www.pankajmital.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Speakers() {
  return (
    <section className="relative overflow-hidden bg-[#203746] px-6 py-20 text-center text-white">
      <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full bg-[#f4eadb]" />

      <div className="relative mx-auto max-w-7xl">
        <h2 className="text-5xl font-semibold leading-tight md:text-6xl">
          Meet our Panel of Speakers
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-4">
          {speakers.map((speaker) => (
            <div key={speaker.name} className="text-center">
              <div className="mx-auto h-40 w-40 overflow-hidden rounded-full border-4 border-[#d6a333] bg-[#dff4ff] md:h-48 md:w-48">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  width={220}
                  height={220}
                  className="h-full w-full object-cover"
                />
              </div>

              <h3 className="mt-6 text-2xl font-semibold md:text-2xl">
                {speaker.name}
              </h3>

              <div className="mx-auto mt-4 inline-block max-w-[460px] bg-[#f4eadb] px-5 py-3 text-[10px] font-semibold uppercase leading-4 text-[#203746] md:px-6">
                {speaker.designation}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function EventFlow() {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(new Date());
    };

    updateTime();

    const interval = setInterval(updateTime, 30000);

    return () => clearInterval(interval);
  }, []);

  const isSessionLive = (item: {
    start?: string;
    end?: string;
  }) => {
    if (!currentTime || !item.start || !item.end) return false;

    const startTime = new Date(item.start);
    const endTime = new Date(item.end);

    return currentTime >= startTime && currentTime <= endTime;
  };

  return (
    <section
      id="schedule"
      className="bg-[#f4eadb] px-3 py-10 text-[#17334b] md:px-10 md:py-24"
    >
      <div className="mx-auto max-w-[760px]">
        <div className="mb-20 text-center">
          <h1 className="text-[28px] font-black uppercase leading-none tracking-tight text-[#0b2944] md:text-[42px]">
          EVENT FLOW
          </h1>
        </div>

        <div className="relative mx-auto w-full">
          <div className="absolute bottom-2 left-1/2 top-2 w-[3px] -translate-x-1/2 rounded-full bg-[#d4a33b]" />

          <div className="relative z-10">
            {scheduleItems.map((item, index) => {
              const live = isSessionLive(item);
              const isLeft = item.side === "left";

              return (
                <div
                  key={`${item.title}-${index}`}
                  className="grid min-h-[58px] grid-cols-[1fr_46px_1fr] items-center md:min-h-[60px]"
                >
                  <div className="flex justify-end pr-[18px]">
                    {isLeft ? (
                      <div className="relative flex min-h-[43px] w-[150px] items-center justify-center bg-[#17334b] px-3 py-2 text-center text-[11px] font-black italic leading-tight text-white after:absolute after:right-[-12px] after:top-1/2 after:-translate-y-1/2 after:border-y-[8px] after:border-l-[12px] after:border-y-transparent after:border-l-[#17334b] md:w-[275px] md:px-4 md:text-[15px] md:after:right-[-18px] md:after:border-y-[11px] md:after:border-l-[18px]">
                        {item.title}
                      </div>
                    ) : (
                      <p className="text-right text-[11px] italic leading-tight text-[#17334b] md:whitespace-nowrap md:text-[15px]">
                        {item.time}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center justify-center">
                    <span
                      className={`flex h-[28px] w-[28px] items-center justify-center rounded-full border-2 text-[13px] font-black leading-none md:h-[34px] md:w-[34px] md:border-[3px] md:text-[17px] ${
                        live
                          ? "animate-[scheduleBlink_1s_infinite] border-[#128a42] bg-[#20b15a] text-white"
                          : "border-[#c89322] bg-[#d4a33b] text-[#17334b]"
                      }`}
                    >
                      ▦
                    </span>
                  </div>

                  <div className="flex justify-start pl-[18px]">
                    {!isLeft ? (
                      <div className="relative flex min-h-[43px] w-[150px] items-center justify-center bg-[#17334b] px-3 py-2 text-center text-[11px] font-black italic leading-tight text-white before:absolute before:left-[-12px] before:top-1/2 before:-translate-y-1/2 before:border-y-[8px] before:border-r-[12px] before:border-y-transparent before:border-r-[#17334b] md:w-[275px] md:px-4 md:text-[15px] md:before:left-[-18px] md:before:border-y-[11px] md:before:border-r-[18px]">
                        {item.title}
                      </div>
                    ) : (
                      <p className="text-left text-[11px] italic leading-tight text-[#17334b] md:whitespace-nowrap md:text-[15px]">
                        {item.time}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Community() {
  return (
    <section className="bg-[#203746] px-6 py-20 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="text-4xl text-center leading-tight md:text-5xl">
            Not just a Summit,
            <br />
            A Community.
            <br />
          </h2>

          <p className="mt-6 text-md text-center leading-7 text-white/90">
            CEOs, Authors, Leaders all in one room, all focused on growth. Join
            our summit to be a part of the community that cares about your
            learning and pushes you to become a better version of yourself.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {communityImages.map((src) => (
            <div
              key={src}
              className="relative h-36 overflow-hidden border-4 border-[#f4eadb] md:h-44"
            >
              <Image
                src={src}
                alt="Community"
                fill
                sizes="(max-width: 768px) 50vw, 300px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="mt-24 text-center">
        <h3 className="text-4xl leading-tight md:text-5xl">
          Learn More About our Speakers
        </h3>

        <div className="mt-5 flex justify-center gap-2">
          <span className="h-4 w-4 rounded-full bg-[#f4eadb]" />
          <span className="h-4 w-4 rounded-full bg-[#f4eadb]" />
          <span className="h-4 w-4 rounded-full bg-[#f4eadb]" />
        </div>
      </div>
    </section>
  );
}

function Sponsors() {
  const sponsors = [
    {
      src: "/images/sponsors/bni-logo.png",
      alt: "Business Needs Inc.",
      url: "https://www.businessneedsinc.com",
      className: "max-h-[105px] md:max-h-[125px]",
    },
    {
      src: "/images/sponsors/our-brand-01.png",
      alt: "Riyu",
      url: "https://riyuglobal.in/",
      className: "max-h-[105px] md:max-h-[125px]",
    },
    {
      src: "/images/sponsors/our-brand-03.png",
      alt: "Harshu",
      url: "https://harshuglobal.in/",
      className: "max-h-[105px] md:max-h-[125px]",
    },
    {
      src: "/images/sponsors/our-brand-04.png",
      alt: "OnPoint Wares",
      url: "https://www.onpointwares.com/",
      className: "max-h-[95px] md:max-h-[115px]",
    },
    {
      src: "/images/sponsors/alka_logo.png",
      alt: "Alka",
      url: "https://www.alkatrust.com/",
      className: "max-h-[100px] md:max-h-[120px]",
    },
    {
      src: "/images/sponsors/our-brand-02.png",
      alt: "RR Industries",
      url: "https://www.rrindustriesus.com/",
      className: "max-h-[105px] md:max-h-[125px]",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f8efe2] px-5 py-16 text-center md:px-8 md:py-20">
      {/* Decorative navy corners */}
      <div className="absolute left-0 top-0 h-24 w-24 bg-[#0d2b44] [clip-path:polygon(0_0,100%_0,0_100%)] md:h-36 md:w-36" />
      <div className="absolute bottom-0 right-0 h-24 w-24 bg-[#0d2b44] [clip-path:polygon(100%_0,100%_100%,0_100%)] md:h-36 md:w-36" />

      {/* Gold corner lines */}
      <div className="absolute left-3 top-3 h-28 w-28 border-l-4 border-t-4 border-[#d4a02f] md:left-5 md:top-5 md:h-40 md:w-40" />
      <div className="absolute bottom-3 right-3 h-28 w-28 border-b-4 border-r-4 border-[#d4a02f] md:bottom-5 md:right-5 md:h-40 md:w-40" />

      {/* Soft circular line pattern */}
      <div className="pointer-events-none absolute -left-40 top-8 h-[480px] w-[480px] rounded-full border border-[#d4a02f]/20 md:-left-52 md:h-[700px] md:w-[700px]" />
      <div className="pointer-events-none absolute -right-40 bottom-8 h-[480px] w-[480px] rounded-full border border-[#d4a02f]/20 md:-right-52 md:h-[700px] md:w-[700px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Top ornament line */}
        <div className="mx-auto mb-5 flex max-w-md items-center justify-center gap-4">
          <span className="h-px flex-1 bg-[#d4a02f]/35" />
          <span className="text-xl text-[#b98722]">✤</span>
          <span className="h-px flex-1 bg-[#d4a02f]/35" />
        </div>

        <h2 className="mx-auto max-w-4xl font-serif text-[32px] font-bold leading-[1.05] text-[#203746] md:text-[46px]">
          Our summit today was made possible by
          <br />
          these generous sponsors
        </h2>

        <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.18em] text-[#c8972f] md:text-xs">
          Connect. Inspire. Empower. Lead.
        </p>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-3">
          {sponsors.map((sponsor, index) => (
            <div
              key={sponsor.src}
              className={[
                "relative flex h-[145px] items-center justify-center px-4 py-5 md:h-[190px] md:px-8",
                index % 3 !== 2 ? "border-r border-[#d4a02f]/35" : "",
                index < 3 ? "border-b border-[#d4a02f]/35" : "",
              ].join(" ")}
            >
              {/* Small gold joint dots */}
              {(index === 1 || index === 4) && (
                <>
                  <span className="absolute -left-[5px] bottom-[-5px] hidden h-2.5 w-2.5 rotate-45 bg-[#d4a02f]/60 md:block" />
                  <span className="absolute -right-[5px] bottom-[-5px] hidden h-2.5 w-2.5 rotate-45 bg-[#d4a02f]/60 md:block" />
                </>
              )}

              <a
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${sponsor.alt}`}
                className="flex h-full w-full items-center justify-center transition hover:scale-105"
              >
                <Image
                  src={sponsor.src}
                  alt={sponsor.alt}
                  width={360}
                  height={180}
                  className={`${sponsor.className} w-auto object-contain`}
                  style={{ width: "250px", height: "auto" }}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
