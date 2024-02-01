import * as AECODE from "https://anilerdemir.github.io/assets/core/aecode.js";
export class ANILERDEMIR {
  /** SVG */
  static svg(height = null) {
    return `<svg viewBox="0 0 1080 900" ${
      height !== null ? 'height="' + height + '"' : ""
    }><path transform="matrix(1,0,0,-1,2.9638,819.8388)" d="M0 0 357.883 658.276C362.024 665.893 372.96 665.893 377.101 658.275L734.896 0H734.895C641.46 0 555.496 51.068 510.806 133.122L367.268 396.671 224.015 133.189C179.385 51.103 93.434 0 0 0"></path><path transform="matrix(1,0,0,-1,917.7128,354.57063)" d="M0 0-291.42-168.759C-291.42-168.759-304.366-62.956-233.572-9.766-174.951 34.285-37.029 108.027-37.029 108.027"></path><path fill="#FFF200" transform="matrix(1,0,0,-1,397.8069,529.9365)" d="M0 0C7.092-23.937 17.076-47.414 30.099-69.964 35.777-79.8 41.898-89.228 48.42-98.227L-67.572-165.397C-67.572-165.397-80.264-60.022-9.449-6.882-6.487-4.658-3.328-2.358 0 0"></path><path transform="matrix(1,0,0,-1,1076.1161,341.3999)" d="M0 0C21.824-130.429-50.094-290.45-171.307-360.434-327.289-450.491-527.048-396.963-617.105-240.982-707.163-84.999-653.635 114.753-497.653 204.811-341.67 294.868-141.911 241.347-51.853 85.364-50.432 82.895-37.958 61.387-37.423 56.391L-164.2-16.302C-166.438-11.511-174.501 8.351-177.181 13.002-227.305 99.816-342.69 139.35-429.504 89.227-516.318 39.105-553.797-84.852-503.675-171.665-453.552-258.472-324.861-300.012-238.047-249.889-209.841-233.601-157.967-194.728-134.974-135.727-103.306-54.464-72.841-29.389 0 0"></path></svg>`;
  }

  /** TYPE */
  static ae() {
    const aeContainer = AECODE.Module.randomTag();
    AECODE.Core.update(
      `${AECODE.anilerdemir[1]} style`,
      {},
      `${aeContainer} h1{ font-size: 0; font-family: AE-G; letter-spacing: -1.75px; margin: -15px 0 0 0; }\n${aeContainer} h1::before{ content: "anıl"; font-weight: 900; font-size: xx-large; }\n${aeContainer} h1::after{ content: "erdemir"; font-weight: normal; font-size: xx-large; }\n`
    );
    return `<${aeContainer}><h1>ANIL ERDEMİR</h1></${aeContainer}>`;
  }

  /** LOGO */
  static logo(color = "#231F20") {
    const logo = AECODE.Module.randomTag(),
      type = AECODE.Module.randomTag();
    AECODE.Core.update(
      `${AECODE.anilerdemir[1]} style`,
      {},
      `${logo}{ display:flex; flex-direction: column; align-items: center; justify-content: center; color: ${color}; }\n${logo} svg{ height: 110px; fill: ${color}; }\n`
    );
    return AECODE.Core.create(
      logo,
      { title: "ANIL ERDEMİR", href: AECODE.baseurl },
      `${ANILERDEMIR.svg()} ${ANILERDEMIR.ae()}`
    );
  }

  /** COPYRIGHT */
  static copyright() {
    for (let i = 0; i < 10; i++) {
      AECODE.anilerdemir[i] = `${AECODE.Module.randomTag()}`;
      switch (i) {
        case 0:
          AECODE.Core.insert("body", AECODE.Core.create(AECODE.anilerdemir[i]));
          break;
        case 1:
        case 2:
        case 3:
        case 4:
          AECODE.Core.insert(
            AECODE.anilerdemir[0],
            AECODE.Core.create(AECODE.anilerdemir[i])
          );
          if (i === 1) {
            AECODE.Core.insert(
              AECODE.anilerdemir[i],
              AECODE.Core.create("style")
            );
          }
          break;
        case 5:
          AECODE.Core.insert(
            AECODE.anilerdemir[i - 2],
            AECODE.Core.create(AECODE.anilerdemir[i])
          );
          break;
        case 6:
        case 7:
          AECODE.Core.insert(
            AECODE.anilerdemir[i - 1],
            AECODE.Core.create(AECODE.anilerdemir[i])
          );
          break;
        case 8:
          AECODE.Core.insert(
            AECODE.anilerdemir[i - 1],
            AECODE.Core.create(
              AECODE.anilerdemir[i],
              { title: "AECODE", href: `https://yip.su/43qWx` },
              ANILERDEMIR.svg(20)
            )
          );
          AECODE.Core.insert(
            AECODE.anilerdemir[i - 1],
            AECODE.Core.create(
              AECODE.anilerdemir[i],
              { title: "ANIL ERDEMİR", href: `https://yip.su/43qWx` },
              "ANIL ERDEMİR"
            )
          );
          AECODE.Core.insert(
            AECODE.anilerdemir[i - 1],
            AECODE.Core.create(
              AECODE.anilerdemir[i],
              {
                title: `© ${new Date().getFullYear()}`,
                href: `https://yip.su/43qWx`,
              },
              `© ${new Date().getFullYear()}`
            )
          );
          break;
      }
    }
    AECODE.Core.update(
      `${AECODE.anilerdemir[1]} style`,
      {},
      ANILERDEMIR.aeStyle()
    );
  }

  /** AESTYLE */
  static aeStyle() {
    const [red, green, blue] = window
        .getComputedStyle(document.body)
        .backgroundColor.match(/\d+/g)
        .map((value) => parseInt(value)),
      isDarkMode =
        red > 0 &&
        red <= 127 &&
        green > 0 &&
        green <= 127 &&
        blue > 0 &&
        blue <= 127;

    return `:root, [data-bs-theme="light"] {
          --bs-body-font-size: 1rem;
          --bs-body-font-weight: 400;
          --bs-body-line-height: 1.5;
          --bs-border-width: 1px;
          --bs-border-style: solid;
          --bs-border-radius: 0.375rem;
          --bs-border-radius-sm: 0.25rem;
          --bs-border-radius-lg: 0.5rem;
          --bs-border-radius-xl: 1rem;
          --bs-border-radius-xxl: 2rem;
          --bs-border-radius-2xl: var(--bs-border-radius-xxl);
          --bs-border-radius-pill: 50rem;
          --bs-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
          --bs-box-shadow-sm: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
          --bs-box-shadow-lg: 0 1rem 3rem rgba(0, 0, 0, 0.175);
          --bs-box-shadow-inset: inset 0 1px 2px rgba(0, 0, 0, 0.075);
          --bs-focus-ring-width: 0.25rem;
          --bs-focus-ring-opacity: 0.25;
        }
        ::-webkit-scrollbar {
          width: 5px;
          height: 5px;
        }
        ::-webkit-scrollbar-thumb {
          background-color: #fff200;
          border-radius: 6px;
        }
        ::-webkit-scrollbar-track,
        ::-webkit-scrollbar-corner {
          background-color: transparent;
        }
        ::-webkit-scrollbar-button {
          display: none;
        }
        ${AECODE.anilerdemir[0]},
        ${AECODE.anilerdemir[0]} *,
        ${AECODE.anilerdemir[0]} *::before,
        ${AECODE.anilerdemir[0]} *::after {
          box-sizing: border-box;
          position: relative;
          z-index: 0; /* 999999999 */
        }
        ${AECODE.anilerdemir[0]} {
          cursor: default;
          font-family: AE-M;
          user-select: none;
          text-align: center;
          white-space: nowrap;
        }
        ${AECODE.anilerdemir[3]} {
          --bs-gutter-x: 1.5rem;
          --bs-gutter-y: 0;
          width: 100%;
          padding-right: calc(var(--bs-gutter-x) * 0.5);
          padding-left: calc(var(--bs-gutter-x) * 0.5);
          margin-right: auto;
          margin-left: auto;
        }
        @media (max-width: 250px) {
          ${AECODE.anilerdemir[8]} {
            width: 100% !important;
          }
          ${AECODE.anilerdemir[8]}:nth-child(2),
          ${AECODE.anilerdemir[8]}:nth-child(3) {
            display: none !important;
          }
        }
        @media (min-width: 576px) {
          ${AECODE.anilerdemir[3]} {
            max-width: 540px !important;
          }
        }
        @media (min-width: 768px) {
          ${AECODE.anilerdemir[3]} {
            max-width: 720px !important;
          }
        }
        @media (min-width: 992px) {
          ${AECODE.anilerdemir[3]} {
            max-width: 960px !important;
          }
        }
        @media (min-width: 1200px) {
          ${AECODE.anilerdemir[3]} {
            max-width: 1140px !important;
          }
        }
        @media (min-width: 1400px) {
          ${AECODE.anilerdemir[3]} {
            max-width: 1320px !important;
          }
        }
        ${AECODE.anilerdemir[5]},
        ${AECODE.anilerdemir[7]} {
          --bs-gutter-x: 1.5rem;
          --bs-gutter-y: 0;
          display: flex;
          flex-wrap: wrap;
          margin-top: calc(-1 * var(--bs-gutter-y));
          margin-right: calc(-0.5 * var(--bs-gutter-x));
          margin-left: calc(-0.5 * var(--bs-gutter-x));
        }
        ${AECODE.anilerdemir[5]} > * {
          flex-shrink: 0;
          width: 100%;
          max-width: 85%;
          padding-right: calc(var(--bs-gutter-x) * 0.5);
          padding-left: calc(var(--bs-gutter-x) * 0.5);
          margin-top: var(--bs-gutter-y);
          margin-left: auto;
          margin-right: auto;
        }
        ${AECODE.anilerdemir[5]} {
          margin: 1.25rem 0;
        }
        ${AECODE.anilerdemir[6]} {
          flex: 0 0 auto;
          width: 100%;
          box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
          --bs-badge-padding-x: 0.65em;
          --bs-badge-padding-y: 0.35em;
          --bs-badge-font-size: 0.75em;
          --bs-badge-font-weight: 700;
          --bs-badge-color: #fff;
          --bs-badge-border-radius: var(--bs-border-radius);
          display: inline-block;
          padding: var(--bs-badge-padding-y) var(--bs-badge-padding-x);
          font-size: var(--bs-badge-font-size);
          font-weight: var(--bs-badge-font-weight);
          line-height: 1;
          vertical-align: baseline;
          border-radius: var(--bs-badge-border-radius);
          --bs-bg-opacity: 1;
          --bs-text-opacity: 1;
          border-radius: var(--bs-border-radius-pill);
          border: 1px solid;
          -o-border-image: radial-gradient(circle, #fff200 0%, transparent 50%) 1;
          border-image: radial-gradient(circle, #fff200 0%, transparent 50%) 1;
        }
        ${AECODE.anilerdemir[8]} {
          flex: 0 0 auto;
          width: 33.33333333%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: x-small;
        }
        ${AECODE.anilerdemir[8]}:nth-child(2) {
          font-size: 0;
          font-family: AE-G;
          letter-spacing: -0.75px;
        }
        ${AECODE.anilerdemir[8]}:nth-child(2)::before {
          content: "anıl";
          font-size: large;
          font-weight: 900;
        }
        ${AECODE.anilerdemir[8]}:nth-child(2)::after {
          content: "erdemir";
          font-size: large;
          font-weight: normal;
        }
        ${AECODE.anilerdemir[6]}{
          color: ${isDarkMode ? "#EAEAEA" : "#231F20"};
          background: ${isDarkMode ? "#231F20" : "#F8F9FA"};
          box-shadow: 0 0 5px 0 ${isDarkMode ? "#121212" : "#AEAEAE"};
          fill: ${isDarkMode ? "#EAEAEA" : "#231F20"};
        }
        @media (min-width: 768px) {
          ${AECODE.anilerdemir[8]}:nth-child(3)::after{
            content: "${
              document.documentElement.lang === "tr"
                ? `Tüm Hakları Saklıdır.`
                : `All Rights Reserved.`
            }";
            margin-left: 3pt;
            font-weight: normal;
          }
        }\n`;
  }
}
