
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Map,
  ShieldAlert,
  CloudRain,
} from "lucide-react";

function Home() {
  return (
    <div className="bg-[#F8F7F4]">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen overflow-hidden">

        {/* Mountain Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/mountain.jpeg')",
          }}
        />

        {/* Overall subtle dark overlay */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Green overlay - mainly on the left */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#09291c]/85 via-[#123d2b]/45 to-transparent" />

        {/* Bottom dark gradient */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#09291c]/75 to-transparent" />


        {/* ================= HERO CONTENT ================= */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-28">

          <div className="max-w-4xl pt-20">

            {/* Location */}
            <div className="mb-7 flex items-center gap-3">

              <span className="h-px w-12 bg-[#E47D5D]" />

              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#E47D5D]">
                Uttarakhand • India
              </p>

            </div>


            {/* Main Heading */}
            <h1 className="text-5xl font-bold leading-[1.02] tracking-tight text-white md:text-7xl lg:text-[76px]">

              Landslide

              <span className="block text-[#E47D5D]">
                Early Warning
              </span>

              <span className="block">
                System
              </span>

            </h1>


            {/* Description */}
            <p className="mt-7 max-w-3xl text-base leading-8 text-gray-100 md:text-lg">

              Monitor rainfall and terrain conditions, estimate landslide
              probability using machine learning, and understand the factors
              contributing to risk across Uttarakhand.

            </p>


            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <Link
                to="/map"
                className="group flex items-center justify-center gap-3 rounded-lg bg-[#E47D5D] px-7 py-4 font-semibold text-white shadow-lg transition duration-300 hover:bg-[#d96d4c] hover:shadow-xl"
              >

                <Map size={20} />

                <span>View Risk Map</span>

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </Link>


              <Link
                to="/prediction"
                className="group flex items-center justify-center gap-3 rounded-lg border border-white/60 bg-black/10 px-7 py-4 font-semibold text-white backdrop-blur-sm transition duration-300 hover:bg-white/10"
              >

                <ShieldAlert size={20} />

                <span>Predict Risk</span>

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />

              </Link>

            </div>

          </div>

        </div>


        {/* ================= EXPLORE ================= */}
        <div className="absolute bottom-36 right-7 z-20 hidden flex-col items-center gap-3 text-white md:flex">

          <span className="text-[10px] uppercase tracking-[0.35em] [writing-mode:vertical-rl]">
            Explore
          </span>

          <div className="h-12 w-px bg-white/60" />

          <ArrowRight
            size={18}
            className="rotate-90"
          />

        </div>


        {/* ================= BOTTOM FEATURE BAR ================= */}
        <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-[#09291c]/90 backdrop-blur-md">

          <div className="mx-auto grid max-w-7xl grid-cols-1 md:grid-cols-3">

            {/* Monitor */}
            <div className="flex items-center gap-5 px-6 py-5 md:px-8">

              <CloudRain
                size={32}
                strokeWidth={1.8}
                className="shrink-0 text-[#E47D5D]"
              />

              <div>

                <p className="text-xs uppercase tracking-wider text-gray-400">
                  Monitor
                </p>

                <p className="mt-1 font-semibold text-white">
                  Rainfall Conditions
                </p>

              </div>

            </div>


            {/* Predict */}
            <div className="flex items-center gap-5 border-t border-white/10 px-6 py-5 md:border-l md:border-t-0 md:px-8">

              <ShieldAlert
                size={32}
                strokeWidth={1.8}
                className="shrink-0 text-[#E47D5D]"
              />

              <div>

                <p className="text-xs uppercase tracking-wider text-gray-400">
                  Predict
                </p>

                <p className="mt-1 font-semibold text-white">
                  Landslide Probability
                </p>

              </div>

            </div>


            {/* Understand */}
            <div className="flex items-center gap-5 border-t border-white/10 px-6 py-5 md:border-l md:border-t-0 md:px-8">

              <Map
                size={32}
                strokeWidth={1.8}
                className="shrink-0 text-[#E47D5D]"
              />

              <div>

                <p className="text-xs uppercase tracking-wider text-gray-400">
                  Understand
                </p>

                <p className="mt-1 font-semibold text-white">
                  District-wise Risk
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= INTRO SECTION ================= */}
      <section className="px-6 py-24 md:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D77A5D]">
                Why this system?
              </p>

              <h2 className="mt-4 max-w-xl text-4xl font-bold leading-tight text-[#173D2A] md:text-5xl">
                Turning environmental data into understandable risk.
              </h2>

            </div>


            <div>

              <p className="text-lg leading-8 text-gray-600">
                Uttarakhand's mountainous terrain is exposed to landslides,
                particularly when rainfall and terrain conditions combine
                to create unstable slopes.
              </p>

              <p className="mt-5 leading-7 text-gray-500">
                This project combines historical landslide information,
                rainfall and terrain characteristics with machine learning
                to estimate risk and provide explanations that are easier
                to understand.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ================= HOW IT WORKS ================= */}
      <section className="bg-[#173D2A] px-6 py-24 text-white">

        <div className="mx-auto max-w-7xl">

          <div className="max-w-2xl">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#D77A5D]">
              How it works
            </p>

            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Monitor • Predict • Understand
            </h2>

          </div>


          <div className="mt-14 grid gap-6 md:grid-cols-3">

            <FeatureCard
              number="01"
              title="Monitor"
              text="Analyze rainfall and environmental conditions across districts."
            />

            <FeatureCard
              number="02"
              title="Predict"
              text="Use machine learning to estimate the probability of landslide occurrence."
            />

            <FeatureCard
              number="03"
              title="Understand"
              text="Use explainable AI to identify the factors influencing each prediction."
            />

          </div>

        </div>

      </section>

    </div>
  );
}


function FeatureCard({ number, title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-8 transition hover:bg-white/10">

      <p className="text-sm font-bold tracking-widest text-[#D77A5D]">
        {number}
      </p>

      <h3 className="mt-6 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-gray-300">
        {text}
      </p>

    </div>
  );
}


export default Home;
