import * as AECODE from "https://anilerdemir.github.io/assets/core/aecode.js";
export let serviceStatus = false,
  socialMedias = {
    web: null,
    phone: null,
    email: null,
    address: null,
    facebook: null,
    x: null,
    instagram: null,
    threads: null,
    youtube: null,
    linkedin: null,
    telegram: null,
    whatsapp: null,
    trendyol: null,
    hepsiburada: null,
    ciceksepeti: null,
  };

export class Service {
  static connected() {
    switch (location.hostname) {
      /** ANIL ERDEMIR */
      case "94.73.151.149":
      case "www.anilerdemir.com":
      case "anilerdemir.github.io":
        serviceStatus = true;
        if (serviceStatus) {
          socialMedias = {
            //facebook: "anil.erdemir",
            //x: "Anil_Erdemir",
            //instagram: "anil.erdemir",
            //threads: "anil.erdemir",
            //linkedin: "in/anil-erdemir",
            //telegram: "anilerdemir",
            //whatsapp: "5343299600",
            //web: location.hostname,
            //phone: "5343299600",
              email: "info@anilerdemir.com",
            //address: "WUrcD84HQea51ZJz6",
          };
          AECODE.Module.service(`${AECODE.baseurl}AE/services/anilerdemir.js`);
        }
        break;
      /** DEFAULT */
      default:
        serviceStatus = false;
        if (!serviceStatus && location.href.startsWith("blob:")) {
          AECODE.Module.service(`${AECODE.baseurl}assets/cdn/xhr.js`);
        }
        break;
    }
  }
}
