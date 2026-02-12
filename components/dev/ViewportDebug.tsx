"use client";

import React from "react";

type Matches = Record<string, boolean>;

const MEDIA_QUERIES: Array<{ label: string; query: string }> = [
  { label: "GroupA", query: "(min-width: 1600px) and (min-height: 918px)" },
  {
    label: "GroupB",
    query:
      "(min-width: 1200px) and (max-width: 1500px) and (min-height: 850px)",
  },
  { label: "h<=918", query: "(max-height: 918px)" },
  { label: "h<=800", query: "(max-height: 800px)" },
  { label: "h<=720", query: "(max-height: 720px)" },
  { label: "h<=664", query: "(max-height: 664px)" },
  { label: "h<=600", query: "(max-height: 600px)" },
  { label: "w<=480", query: "(max-width: 480px)" },
  { label: "w<=360", query: "(max-width: 360px)" },
  { label: "4K", query: "(min-width: 3000px) and (min-height: 1800px)" },
];

function readCssVar(name: string) {
  if (typeof window === "undefined") return "";
  const v = getComputedStyle(document.documentElement).getPropertyValue(name);
  return v.trim();
}

export default function ViewportDebug() {
  const [size, setSize] = React.useState({ w: 0, h: 0, dpr: 1 });
  const [matches, setMatches] = React.useState<Matches>({});
  const [vars, setVars] = React.useState({
    containerMaxW: "",
    heroTitle: "",
    heroDesc: "",
    heroVisualW: "",
    projectCardW: "",
    projectImgH: "",
  });

  React.useEffect(() => {
    const update = () => {
      setSize({
        w: window.innerWidth,
        h: window.innerHeight,
        dpr: window.devicePixelRatio || 1,
      });

      const nextMatches: Matches = {};
      for (const { label, query } of MEDIA_QUERIES) {
        nextMatches[label] = window.matchMedia(query).matches;
      }
      setMatches(nextMatches);

      setVars({
        containerMaxW: readCssVar("--container-max-w"),
        heroTitle: readCssVar("--hero-title-size"),
        heroDesc: readCssVar("--hero-desc-size"),
        heroVisualW: readCssVar("--hero-visual-max-w"),
        projectCardW: readCssVar("--project-card-max-w"),
        projectImgH: readCssVar("--project-image-h"),
      });
    };

    update();
    window.addEventListener("resize", update, { passive: true });
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="fixed bottom-3 left-3 z-[9999] max-w-[92vw] rounded-xl border border-white/10 bg-[#030014e6] p-3 text-xs text-gray-200 shadow-xl backdrop-blur-md">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <div className="font-semibold">Viewport</div>
        <div>
          {size.w} x {size.h}
        </div>
        <div className="opacity-70">dpr {size.dpr.toFixed(2)}</div>
      </div>

      <div className="mt-2 flex flex-wrap gap-1">
        {MEDIA_QUERIES.map(({ label }) => (
          <span
            key={label}
            className={`rounded-full border px-2 py-0.5 ${
              matches[label]
                ? "border-cyan-400/40 bg-cyan-400/10 text-cyan-100"
                : "border-white/10 bg-white/5 text-gray-300"
            }`}
            title={label}
          >
            {label}
          </span>
        ))}
      </div>

      <div className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1">
        <div className="opacity-70">--container-max-w</div>
        <div>{vars.containerMaxW}</div>
        <div className="opacity-70">--hero-title-size</div>
        <div>{vars.heroTitle}</div>
        <div className="opacity-70">--hero-desc-size</div>
        <div>{vars.heroDesc}</div>
        <div className="opacity-70">--hero-visual-max-w</div>
        <div>{vars.heroVisualW}</div>
        <div className="opacity-70">--project-card-max-w</div>
        <div>{vars.projectCardW}</div>
        <div className="opacity-70">--project-image-h</div>
        <div>{vars.projectImgH}</div>
      </div>
    </div>
  );
}
