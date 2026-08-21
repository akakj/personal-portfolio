type LeafProps = {
  x: number;
  y: number;
  rotate: number;
  scale?: number;
};

function BackgroundLeaf({
  x,
  y,
  rotate,
  scale = 1,
}: LeafProps) {
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate}) scale(${scale})`}>
      <path
        d="
          M0 0
          C 7 -10, 19 -10, 25 -1
          C 18 8, 8 11, 0 0
          Z
        "
        className="fairy-vine-leaf"
      />

      <path
        d="M3 0 C 10 -1, 17 -4, 22 -7"
        className="fairy-vine-leaf-vein"
      />
    </g>
  );
}

const dustParticles = [
  { x: 6, y: 14, size: 3, delay: -2, duration: 14, star: true },
  { x: 12, y: 31, size: 3, delay: -7, duration: 17 },
  { x: 7, y: 62, size: 2, delay: -4, duration: 15 },
  { x: 15, y: 82, size: 4, delay: -10, duration: 19 },

  { x: 23, y: 11, size: 3, delay: -8, duration: 17 },
  { x: 29, y: 25, size: 4, delay: -3, duration: 16, star: true },
  { x: 26, y: 71, size: 3, delay: -11, duration: 18 },

  { x: 39, y: 16, size: 3, delay: -5, duration: 15 },
  { x: 44, y: 84, size: 4, delay: -1, duration: 17, star: true },

  { x: 55, y: 12, size: 3, delay: -9, duration: 19 },
  { x: 58, y: 30, size: 2, delay: -4, duration: 14 },
  { x: 53, y: 74, size: 3, delay: -12, duration: 18 },

  { x: 67, y: 20, size: 4, delay: -6, duration: 16, star: true },
  { x: 64, y: 53, size: 3, delay: -2, duration: 15 },
  { x: 69, y: 86, size: 2, delay: -8, duration: 20 },

  { x: 76, y: 11, size: 3, delay: -3, duration: 17 },
  { x: 79, y: 37, size: 4, delay: -9, duration: 18, star: true },
  { x: 75, y: 67, size: 3, delay: -6, duration: 14 },

  { x: 87, y: 18, size: 3, delay: -11, duration: 19 },
  { x: 91, y: 31, size: 2, delay: -5, duration: 16 },
  { x: 84, y: 51, size: 4, delay: -1, duration: 17, star: true },
  { x: 93, y: 73, size: 3, delay: -8, duration: 15 },

  { x: 19, y: 48, size: 2, delay: -13, duration: 20 },
  { x: 34, y: 56, size: 4, delay: -7, duration: 18, star: true },
  { x: 48, y: 43, size: 3, delay: -3, duration: 16 },
  { x: 61, y: 62, size: 3, delay: -10, duration: 19 },
  { x: 72, y: 45, size: 2, delay: -5, duration: 17 },
  { x: 88, y: 89, size: 4, delay: -12, duration: 20, star: true },
];

function TopLeftVine() {
  return (
    <svg
      className="fairy-vine fairy-vine-top-left"
      viewBox="0 0 460 440"
      fill="none"
      aria-hidden="true"
    >
      {/* Main stems */}
      <path
        className="fairy-vine-stem"
        d="
          M-25 46
          C 52 48, 102 75, 127 125
          C 153 178, 136 222, 167 268
          C 195 311, 240 326, 288 310
        "
      />

      <path
        className="fairy-vine-stem"
        d="
          M20 11
          C 64 44, 90 85, 93 129
          C 96 170, 76 202, 54 231
        "
      />

      {/* Upper branches */}
      <path
        className="fairy-vine-stem fairy-vine-stem-thin"
        d="M91 84 C 123 60, 139 34, 143 3"
      />

      <path
        className="fairy-vine-stem fairy-vine-stem-thin"
        d="M113 107 C 151 92, 183 64, 199 32"
      />

      <path
        className="fairy-vine-stem fairy-vine-stem-thin"
        d="M126 135 C 89 117, 63 91, 47 61"
      />

      <path
        className="fairy-vine-stem fairy-vine-stem-thin"
        d="M139 176 C 178 160, 208 132, 221 97"
      />

      <path
        className="fairy-vine-stem fairy-vine-stem-thin"
        d="M143 204 C 103 200, 74 181, 52 154"
      />

      {/* Lower branches */}
      <path
        className="fairy-vine-stem fairy-vine-stem-thin"
        d="M166 267 C 203 244, 223 216, 232 182"
      />

      <path
        className="fairy-vine-stem fairy-vine-stem-thin"
        d="M196 297 C 169 317, 150 342, 148 373"
      />

      <path
        className="fairy-vine-stem fairy-vine-stem-thin"
        d="M226 318 C 254 349, 289 363, 329 358"
      />

      <path
        className="fairy-vine-stem fairy-vine-stem-thin"
        d="M259 318 C 286 293, 314 279, 345 278"
      />

      {/* Tendrils */}
      <path
        className="fairy-vine-tendril"
        d="M197 33 C 215 15, 232 18, 229 33 C 226 45, 211 45, 214 35"
      />

      <path
        className="fairy-vine-tendril"
        d="M328 358 C 350 369, 367 359, 363 345"
      />

      {/* Leaves */}
      <BackgroundLeaf x={71} y={63} rotate={-145} scale={0.75} />
      <BackgroundLeaf x={99} y={82} rotate={-118} scale={0.9} />
      <BackgroundLeaf x={136} y={63} rotate={-64} scale={0.82} />
      <BackgroundLeaf x={166} y={48} rotate={-47} scale={0.72} />
      <BackgroundLeaf x={190} y={34} rotate={-37} scale={0.65} />

      <BackgroundLeaf x={117} y={122} rotate={150} scale={0.82} />
      <BackgroundLeaf x={79} y={107} rotate={125} scale={0.72} />
      <BackgroundLeaf x={151} y={105} rotate={-32} scale={0.85} />

      <BackgroundLeaf x={133} y={170} rotate={135} scale={0.78} />
      <BackgroundLeaf x={179} y={150} rotate={-38} scale={0.88} />
      <BackgroundLeaf x={210} y={117} rotate={-55} scale={0.67} />

      <BackgroundLeaf x={113} y={197} rotate={125} scale={0.9} />
      <BackgroundLeaf x={73} y={177} rotate={115} scale={0.7} />

      <BackgroundLeaf x={181} y={247} rotate={-27} scale={0.92} />
      <BackgroundLeaf x={218} y={213} rotate={-47} scale={0.73} />

      <BackgroundLeaf x={181} y={315} rotate={125} scale={0.82} />
      <BackgroundLeaf x={154} y={350} rotate={102} scale={0.68} />

      <BackgroundLeaf x={244} y={337} rotate={45} scale={0.9} />
      <BackgroundLeaf x={286} y={355} rotate={18} scale={0.75} />

      <BackgroundLeaf x={286} y={296} rotate={-33} scale={0.82} />
      <BackgroundLeaf x={325} y={280} rotate={-15} scale={0.68} />
    </svg>
  );
}

function TopRightVine() {
  return (
    <svg
      className="fairy-vine fairy-vine-top-right"
      viewBox="0 0 470 440"
      fill="none"
      aria-hidden="true"
    >
      {/* Main stems */}
      <path
        className="fairy-vine-stem"
        d="
          M490 30
          C 426 39, 390 70, 378 112
          C 362 167, 388 202, 355 249
          C 324 293, 270 309, 244 352
          C 229 378, 228 407, 240 441
        "
      />

      <path
        className="fairy-vine-stem"
        d="
          M455 -10
          C 420 35, 415 72, 427 106
          C 439 139, 462 160, 486 173
        "
      />

      {/* Branches */}
      <path
        className="fairy-vine-stem fairy-vine-stem-thin"
        d="M397 77 C 360 66, 330 42, 312 12"
      />

      <path
        className="fairy-vine-stem fairy-vine-stem-thin"
        d="M381 112 C 348 103, 315 106, 286 122"
      />

      <path
        className="fairy-vine-stem fairy-vine-stem-thin"
        d="M374 155 C 408 139, 432 116, 446 87"
      />

      <path
        className="fairy-vine-stem fairy-vine-stem-thin"
        d="M375 201 C 408 205, 436 220, 455 245"
      />

      <path
        className="fairy-vine-stem fairy-vine-stem-thin"
        d="M351 255 C 312 238, 286 214, 268 180"
      />

      <path
        className="fairy-vine-stem fairy-vine-stem-thin"
        d="M325 286 C 355 300, 378 322, 390 351"
      />

      <path
        className="fairy-vine-stem fairy-vine-stem-thin"
        d="M278 318 C 246 302, 218 280, 202 251"
      />

      <path
        className="fairy-vine-stem fairy-vine-stem-thin"
        d="M247 354 C 273 369, 292 392, 299 422"
      />

      {/* Tendrils */}
      <path
        className="fairy-vine-tendril"
        d="M287 123 C 265 126, 254 113, 261 101 C 268 91, 280 97, 276 107"
      />

      <path
        className="fairy-vine-tendril"
        d="M389 351 C 406 368, 425 367, 428 350"
      />

      {/* Leaves */}
      <BackgroundLeaf x={390} y={70} rotate={145} scale={0.82} />
      <BackgroundLeaf x={350} y={47} rotate={145} scale={0.75} />
      <BackgroundLeaf x={319} y={25} rotate={125} scale={0.67} />

      <BackgroundLeaf x={361} y={106} rotate={155} scale={0.9} />
      <BackgroundLeaf x={322} y={111} rotate={165} scale={0.76} />
      <BackgroundLeaf x={293} y={120} rotate={170} scale={0.66} />

      <BackgroundLeaf x={398} y={143} rotate={32} scale={0.84} />
      <BackgroundLeaf x={432} y={106} rotate={46} scale={0.73} />

      <BackgroundLeaf x={398} y={208} rotate={18} scale={0.9} />
      <BackgroundLeaf x={435} y={228} rotate={30} scale={0.72} />

      <BackgroundLeaf x={328} y={242} rotate={145} scale={0.88} />
      <BackgroundLeaf x={293} y={214} rotate={133} scale={0.72} />
      <BackgroundLeaf x={272} y={183} rotate={118} scale={0.65} />

      <BackgroundLeaf x={344} y={299} rotate={40} scale={0.84} />
      <BackgroundLeaf x={375} y={329} rotate={48} scale={0.7} />

      <BackgroundLeaf x={259} y={304} rotate={140} scale={0.82} />
      <BackgroundLeaf x={220} y={269} rotate={130} scale={0.7} />

      <BackgroundLeaf x={263} y={368} rotate={44} scale={0.84} />
      <BackgroundLeaf x={290} y={400} rotate={61} scale={0.69} />
    </svg>
  );
}

function BottomLeftVine() {
  return (
    <svg
      className="fairy-vine fairy-vine-bottom-left"
      viewBox="0 0 460 370"
      fill="none"
      aria-hidden="true"
    >
      {/* Main stems */}
      <path
        className="fairy-vine-stem"
        d="
          M-30 357
          C 39 347, 78 324, 100 286
          C 126 241, 105 211, 140 169
          C 171 132, 218 130, 244 91
          C 263 63, 267 31, 260 -8
        "
      />

      <path
        className="fairy-vine-stem"
        d="
          M19 367
          C 67 331, 84 288, 73 247
          C 64 213, 43 189, 19 171
        "
      />

      {/* Branches */}
      <path
        className="fairy-vine-stem fairy-vine-stem-thin"
        d="M79 317 C 47 297, 27 268, 21 233"
      />

      <path
        className="fairy-vine-stem fairy-vine-stem-thin"
        d="M103 281 C 140 272, 171 249, 190 217"
      />

      <path
        className="fairy-vine-stem fairy-vine-stem-thin"
        d="M121 224 C 84 213, 54 192, 35 163"
      />

      <path
        className="fairy-vine-stem fairy-vine-stem-thin"
        d="M144 166 C 118 141, 101 111, 99 80"
      />

      <path
        className="fairy-vine-stem fairy-vine-stem-thin"
        d="M173 143 C 205 124, 228 98, 238 66"
      />

      <path
        className="fairy-vine-stem fairy-vine-stem-thin"
        d="M218 119 C 244 124, 268 140, 282 163"
      />

      <path
        className="fairy-vine-stem fairy-vine-stem-thin"
        d="M249 82 C 220 59, 205 35, 204 9"
      />

      {/* Tendrils */}
      <path
        className="fairy-vine-tendril"
        d="M188 217 C 208 196, 224 199, 224 213 C 223 224, 211 228, 207 219"
      />

      {/* Leaves */}
      <BackgroundLeaf x={59} y={313} rotate={135} scale={0.8} />
      <BackgroundLeaf x={30} y={276} rotate={120} scale={0.67} />
      <BackgroundLeaf x={23} y={241} rotate={115} scale={0.7} />

      <BackgroundLeaf x={126} y={268} rotate={-38} scale={0.88} />
      <BackgroundLeaf x={162} y={242} rotate={-49} scale={0.72} />
      <BackgroundLeaf x={183} y={221} rotate={-53} scale={0.65} />

      <BackgroundLeaf x={101} y={212} rotate={135} scale={0.86} />
      <BackgroundLeaf x={62} y={190} rotate={125} scale={0.72} />
      <BackgroundLeaf x={36} y={167} rotate={116} scale={0.64} />

      <BackgroundLeaf x={133} y={145} rotate={120} scale={0.82} />
      <BackgroundLeaf x={109} y={111} rotate={105} scale={0.72} />
      <BackgroundLeaf x={99} y={83} rotate={94} scale={0.64} />

      <BackgroundLeaf x={188} y={128} rotate={-47} scale={0.87} />
      <BackgroundLeaf x={222} y={96} rotate={-57} scale={0.72} />

      <BackgroundLeaf x={232} y={124} rotate={25} scale={0.76} />
      <BackgroundLeaf x={268} y={150} rotate={43} scale={0.65} />

      <BackgroundLeaf x={231} y={63} rotate={135} scale={0.76} />
      <BackgroundLeaf x={207} y={29} rotate={110} scale={0.65} />
    </svg>
  );
}

function BottomMiddleVine() {
  return (
    <svg
      className="fairy-vine fairy-vine-bottom-middle"
      viewBox="0 0 560 280"
      fill="none"
      aria-hidden="true"
    >
      {/* Main winding stems */}
      <path
        className="fairy-vine-stem"
        d="
          M-15 277
          C 47 259, 79 217, 126 205
          C 171 193, 203 220, 247 191
          C 286 165, 296 122, 341 105
          C 383 89, 419 110, 457 82
          C 490 58, 510 27, 521 -7
        "
      />

      <path
        className="fairy-vine-stem"
        d="
          M157 279
          C 175 242, 182 205, 168 169
          C 156 136, 131 112, 99 96
        "
      />

      {/* Branches */}
      <path
        className="fairy-vine-stem fairy-vine-stem-thin"
        d="M115 207 C 96 176, 93 143, 105 112"
      />

      <path
        className="fairy-vine-stem fairy-vine-stem-thin"
        d="M156 202 C 134 224, 103 239, 71 239"
      />

      <path
        className="fairy-vine-stem fairy-vine-stem-thin"
        d="M237 194 C 219 157, 188 136, 152 128"
      />

      <path
        className="fairy-vine-stem fairy-vine-stem-thin"
        d="M278 161 C 251 144, 236 121, 234 94"
      />

      <path
        className="fairy-vine-stem fairy-vine-stem-thin"
        d="M335 107 C 312 79, 303 50, 309 17"
      />

      <path
        className="fairy-vine-stem fairy-vine-stem-thin"
        d="M371 101 C 394 78, 408 52, 410 24"
      />

      <path
        className="fairy-vine-stem fairy-vine-stem-thin"
        d="M432 96 C 451 118, 479 130, 509 126"
      />

      <path
        className="fairy-vine-stem fairy-vine-stem-thin"
        d="M471 72 C 447 56, 432 35, 430 11"
      />

      {/* Tendrils */}
      <path
        className="fairy-vine-tendril"
        d="M234 94 C 225 72, 235 60, 248 67 C 260 74, 256 87, 246 85"
      />

      <path
        className="fairy-vine-tendril"
        d="M508 126 C 531 131, 544 116, 536 103"
      />

      {/* Leaves */}
      <BackgroundLeaf x={106} y={184} rotate={120} scale={0.85} />
      <BackgroundLeaf x={101} y={144} rotate={103} scale={0.7} />
      <BackgroundLeaf x={105} y={113} rotate={85} scale={0.65} />

      <BackgroundLeaf x={139} y={214} rotate={150} scale={0.84} />
      <BackgroundLeaf x={101} y={235} rotate={165} scale={0.68} />
      <BackgroundLeaf x={73} y={238} rotate={177} scale={0.62} />

      <BackgroundLeaf x={221} y={178} rotate={130} scale={0.9} />
      <BackgroundLeaf x={188} y={146} rotate={122} scale={0.75} />
      <BackgroundLeaf x={155} y={129} rotate={112} scale={0.66} />

      <BackgroundLeaf x={263} y={148} rotate={125} scale={0.8} />
      <BackgroundLeaf x={240} y={116} rotate={102} scale={0.68} />

      <BackgroundLeaf x={326} y={92} rotate={120} scale={0.87} />
      <BackgroundLeaf x={310} y={54} rotate={100} scale={0.72} />
      <BackgroundLeaf x={309} y={20} rotate={84} scale={0.64} />

      <BackgroundLeaf x={385} y={84} rotate={-47} scale={0.83} />
      <BackgroundLeaf x={405} y={53} rotate={-62} scale={0.7} />
      <BackgroundLeaf x={410} y={25} rotate={-76} scale={0.63} />

      <BackgroundLeaf x={449} y={106} rotate={28} scale={0.86} />
      <BackgroundLeaf x={482} y={125} rotate={16} scale={0.71} />

      <BackgroundLeaf x={456} y={61} rotate={130} scale={0.75} />
      <BackgroundLeaf x={435} y={32} rotate={110} scale={0.65} />
    </svg>
  );
}

function BottomRightVine() {
  return (
    <svg
      className="fairy-vine fairy-vine-bottom-right"
      viewBox="0 0 460 380"
      fill="none"
      aria-hidden="true"
    >
      {/* Main stems */}
      <path
        className="fairy-vine-stem"
        d="
          M485 361
          C 415 353, 377 326, 356 286
          C 332 241, 351 212, 318 173
          C 287 136, 239 137, 214 99
          C 193 67, 195 31, 208 -8
        "
      />

      <path
        className="fairy-vine-stem"
        d="
          M442 377
          C 393 337, 377 296, 389 255
          C 400 219, 425 195, 453 180
        "
      />

      {/* Branches */}
      <path
        className="fairy-vine-stem fairy-vine-stem-thin"
        d="M374 318 C 409 300, 429 272, 437 238"
      />

      <path
        className="fairy-vine-stem fairy-vine-stem-thin"
        d="M354 278 C 319 270, 286 248, 268 217"
      />

      <path
        className="fairy-vine-stem fairy-vine-stem-thin"
        d="M334 228 C 370 218, 397 198, 416 169"
      />

      <path
        className="fairy-vine-stem fairy-vine-stem-thin"
        d="M313 168 C 340 143, 356 113, 359 79"
      />

      <path
        className="fairy-vine-stem fairy-vine-stem-thin"
        d="M282 145 C 251 127, 229 101, 220 70"
      />

      <path
        className="fairy-vine-stem fairy-vine-stem-thin"
        d="M244 115 C 217 121, 192 138, 178 160"
      />

      <path
        className="fairy-vine-stem fairy-vine-stem-thin"
        d="M211 91 C 239 66, 253 39, 253 10"
      />

      {/* Tendrils */}
      <path
        className="fairy-vine-tendril"
        d="M268 217 C 248 198, 231 202, 232 216 C 233 227, 245 230, 249 220"
      />

      {/* Leaves */}
      <BackgroundLeaf x={396} y={306} rotate={35} scale={0.82} />
      <BackgroundLeaf x={427} y={270} rotate={52} scale={0.7} />
      <BackgroundLeaf x={436} y={240} rotate={65} scale={0.64} />

      <BackgroundLeaf x={333} y={265} rotate={145} scale={0.88} />
      <BackgroundLeaf x={298} y={241} rotate={132} scale={0.73} />
      <BackgroundLeaf x={274} y={219} rotate={119} scale={0.65} />

      <BackgroundLeaf x={354} y={218} rotate={-32} scale={0.87} />
      <BackgroundLeaf x={391} y={190} rotate={-47} scale={0.72} />
      <BackgroundLeaf x={414} y={170} rotate={-56} scale={0.65} />

      <BackgroundLeaf x={324} y={151} rotate={-48} scale={0.85} />
      <BackgroundLeaf x={349} y={111} rotate={-68} scale={0.7} />
      <BackgroundLeaf x={359} y={82} rotate={-82} scale={0.62} />

      <BackgroundLeaf x={270} y={132} rotate={139} scale={0.84} />
      <BackgroundLeaf x={239} y={101} rotate={128} scale={0.72} />
      <BackgroundLeaf x={221} y={72} rotate={111} scale={0.63} />

      <BackgroundLeaf x={231} y={120} rotate={155} scale={0.75} />
      <BackgroundLeaf x={195} y={145} rotate={166} scale={0.65} />

      <BackgroundLeaf x={229} y={62} rotate={-42} scale={0.75} />
      <BackgroundLeaf x={248} y={29} rotate={-63} scale={0.65} />
    </svg>
  );
}

export default function FairyBackground() {
  return (
    <div className="fairy-background" aria-hidden="true">
      <div className="fairy-orbs">
        <span className="fairy-orb fairy-orb-1" />
        <span className="fairy-orb fairy-orb-2" />
        <span className="fairy-orb fairy-orb-3" />
        <span className="fairy-orb fairy-orb-4" />
        <span className="fairy-orb fairy-orb-5" />
      </div>

      <div className="fairy-dust">
        {dustParticles.map((particle, index) => (
          <span
            key={index}
            className={
              particle.star
                ? "fairy-dust-particle fairy-dust-star"
                : "fairy-dust-particle"
            }
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="fairy-foliage">
        <TopLeftVine />
        <TopRightVine />

        <BottomLeftVine />
        <BottomMiddleVine />
        <BottomRightVine />
      </div>
    </div>
  );
}