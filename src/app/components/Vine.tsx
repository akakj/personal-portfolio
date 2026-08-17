"use client";

import { useState, type CSSProperties } from "react";

const fallingLeaves = [
  {
    x: 173,
    y: 61,
    rotate: -18,
    delay: 0,
    duration: 1450,
    midX: "-12px",
    endX: "17px",
  },
  {
    x: 226,
    y: 91,
    rotate: 20,
    delay: 100,
    duration: 1550,
    midX: "14px",
    endX: "-18px",
  },
  {
    x: 271,
    y: 124,
    rotate: -15,
    delay: 200,
    duration: 1500,
    midX: "-13px",
    endX: "15px",
  },
  {
    x: 304,
    y: 168,
    rotate: 25,
    delay: 300,
    duration: 1650,
    midX: "11px",
    endX: "-20px",
  },
];

type FallingLeafStyle = CSSProperties & {
  "--leaf-start-rotate": string;
  "--leaf-mid-x": string;
  "--leaf-end-x": string;
};

function LeafShape() {
  return (
    <>
      <path
        d="
          M0 0
          C 7 -10, 19 -10, 25 -1
          C 18 8, 8 11, 0 0
          Z
        "
        fill="currentColor"
      />

      <path
        d="M3 0 C 10 -1, 17 -4, 22 -7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.45"
      />
    </>
  );
}

export default function Vine() {
  const [fallCycle, setFallCycle] = useState(0);

  function releaseLeaves() {
    setFallCycle((cycle) => cycle + 1);
  }

  return (
    <div
      className="
        pointer-events-none
        absolute right-0 top-0 z-0
        hidden h-57.5 w-90
        xl:block
      "
    >
      <button
        type="button"
        aria-label="Shake the vine"
        onPointerEnter={releaseLeaves}
        onClick={releaseLeaves}
        className="
          nav-vine-trigger
          pointer-events-auto
          absolute right-0 top-0
          h-47.5 w-82.5
          cursor-pointer
          border-0 bg-transparent p-0
        "
      >
        <svg
          viewBox="0 0 360 250"
          aria-hidden="true"
          className="
            nav-vine
            absolute right-0 top-0
            h-60 w-87.5
            overflow-visible
          "
        >
          <g className="nav-vine-plant">
            <path
              d="
                M365 -18
                C 324 -12, 288 -4, 254 16
                C 216 38, 182 55, 142 57
                C 111 59, 88 50, 70 34
              "
              className="vine-stem"
            />

            <path
              d="
                M365 12
                C 332 25, 307 45, 289 69
                C 270 94, 267 123, 284 145
                C 301 167, 323 179, 362 184
              "
              className="vine-stem"
            />

            <path
              d="
                M340 -8
                C 327 30, 327 60, 341 86
                C 354 111, 361 139, 354 173
                C 349 195, 352 218, 360 247
              "
              className="vine-stem"
            />

            <path
              d="
                M279 5
                C 262 31, 243 49, 216 60
                C 194 69, 178 83, 170 103
              "
              className="vine-stem vine-stem-thin"
            />

            <path
              d="
                M314 43
                C 284 48, 259 58, 241 77
                C 224 94, 213 111, 211 133
              "
              className="vine-stem vine-stem-thin"
            />

            <path
              d="
                M289 70
                C 310 72, 327 84, 334 102
                C 340 119, 337 137, 325 153
              "
              className="vine-stem vine-stem-thin"
            />

            <path
              d="
                M331 113
                C 310 116, 291 126, 281 143
                C 271 159, 270 177, 278 194
              "
              className="vine-stem vine-stem-thin"
            />

            <path
              d="
                M240 44
                C 214 25, 191 23, 168 32
                C 147 40, 127 40, 105 31
              "
              className="vine-stem vine-stem-thin"
            />

            <g transform="translate(132 47) rotate(-150) scale(.8)">
              <LeafShape />
            </g>

            <g transform="translate(174 48) rotate(-120) scale(.9)">
              <LeafShape />
            </g>

            <g transform="translate(207 62) rotate(145) scale(.85)">
              <LeafShape />
            </g>

            <g transform="translate(244 43) rotate(-50) scale(.9)">
              <LeafShape />
            </g>

            <g transform="translate(269 24) rotate(-70) scale(.75)">
              <LeafShape />
            </g>

            <g transform="translate(255 78) rotate(-10)">
              <LeafShape />
            </g>

            <g transform="translate(216 98) rotate(150) scale(.8)">
              <LeafShape />
            </g>

            <g transform="translate(177 86) rotate(105) scale(.72)">
              <LeafShape />
            </g>

            <g transform="translate(289 81) rotate(20) scale(.85)">
              <LeafShape />
            </g>

            <g transform="translate(318 103) rotate(45)">
              <LeafShape />
            </g>

            <g transform="translate(291 139) rotate(145) scale(.9)">
              <LeafShape />
            </g>

            <g transform="translate(326 151) rotate(40) scale(.8)">
              <LeafShape />
            </g>

            <g transform="translate(276 174) rotate(120) scale(.72)">
              <LeafShape />
            </g>

            <g transform="translate(341 183) rotate(65) scale(.85)">
              <LeafShape />
            </g>
          </g>

          {fallCycle > 0 &&
            fallingLeaves.map((leaf, index) => {
              const style: FallingLeafStyle = {
                animationDelay: `${leaf.delay}ms`,
                animationDuration: `${leaf.duration}ms`,
                "--leaf-start-rotate": `${leaf.rotate}deg`,
                "--leaf-mid-x": leaf.midX,
                "--leaf-end-x": leaf.endX,
              };

              return (
                <g
                  key={`${fallCycle}-${index}`}
                  transform={`translate(${leaf.x} ${leaf.y})`}
                >
                  <g className="vine-falling-leaf" style={style}>
                    <LeafShape />
                  </g>
                </g>
              );
            })}
        </svg>
      </button>
    </div>
  );
}