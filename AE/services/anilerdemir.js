import * as AECODE from "https://anilerdemir.github.io/assets/core/aecode.js";
document.addEventListener("selectstart", (e) => {
  e.preventDefault();
});
const elements = [
  "BİLİŞİM TEKNOLOJİLERİ UZMANI",
  "YAZILIM GELİŞTİRİCİ",
  "GRAFİK TASARIMCI",
  "SİSTEM YÖNETİCİSİ",
  "NETWORK UZMANI",
  "GOOGLE ADS UZMANI",
  "SOSYAL MEDYA UZMANI",
  "E-TİCARET YÖNETİCİSİ",
  "ÜRÜN FOTOĞRAFÇISI",
  "TEKNİK DANIŞMAN",
  "FREELANCER",
];
AECODE.Module.bootstrap();
AECODE.Core.insert(AECODE.anilerdemir[2], AECODE.ANILERDEMIR.logo(), "pre");
AECODE.Module.secretMenu("cv", `${AECODE.baseurl}anilerdemir-cv.pdf`);

const codeTitles = AECODE.Module.randomTag();
AECODE.Core.insert(AECODE.anilerdemir[2], AECODE.Core.create(codeTitles));
AECODE.Effect.code(codeTitles, elements);

const socialmedias = AECODE.Module.randomTag();
AECODE.Core.insert(AECODE.anilerdemir[2], AECODE.Core.create(socialmedias));
AECODE.Module.socialMedia(socialmedias);

AECODE.Core.update(
  `${AECODE.anilerdemir[1]} style`,
  {},
  `.none { display: none !important; }
  body {
      user-select: none;
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      overflow-x: hidden;
      text-align: center;
      font-family: AE-M !important;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
  }
  ${codeTitles} {
      display: block;
      margin: 20px 0;
      font-size: small;
      font-weight: bold;
  }
  ${socialmedias} {
      cursor: default;
      user-select: none;
      text-align: center;
  }
  ${socialmedias} > *:hover {
      background: #fff200;
      border-radius: 25px;
      /*box-shadow: 0 0 5px 0 #231f20;*/
  }
  ${socialmedias} > * > *:hover {
      background: none;
  }
  ${AECODE.anilerdemir[0]} {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 1em;
      width: 100%;
  }\n`
);

AECODE.Core.delete(`${AECODE.anilerdemir[3]}`);
AECODE.Core.delete(`<iframe>`);