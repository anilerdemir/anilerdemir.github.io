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
      case "127.0.0.1":
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
      /** GUVENLI ELLER */
      case "guvenlieller.com":
        serviceStatus = true;
        if (serviceStatus) {
          socialMedias = {
            instagram: "guvenli.eller",
            whatsapp: "5317067108",
          };
          AECODE.Module.service(`${AECODE.baseurl}AE/services/guvenlieller.js`);
        }
        break;
      /** TAKISEN */
      case "takisen.com":
        serviceStatus = true;
        if (serviceStatus) {
          socialMedias = {
            facebook: "takisennn",
            instagram: "takisennn",
            whatsapp: "5323050167",
            trendyol: "sr/takisen-isigini-yansit-x-b151747",
            hepsiburada: "takisen",
            ciceksepeti: "tum-urunler?storeid=48745",
          };
          AECODE.Module.service(`${AECODE.baseurl}AE/services/takisen.js`);
        }
        break;
      /** ZEPROJECT */
      case "zeproject.com":
        serviceStatus = true;
        if (serviceStatus) {
          socialMedias = {
            facebook: "zeprojectze",
            x: "zeproject_",
            instagram: "ze_project",
            youtube: "channel/UCypCTYyFthyZZunkE3lxx2w",
            linkedin: "company/zeproject",
          };
          AECODE.Module.service(`${AECODE.baseurl}AE/services/zeproject.js`);
        }
        break;
      /** RUBICONIST */
      case "rubiconist.com":
        serviceStatus = false;
        if (serviceStatus) {
          socialMedias = {
            x: "rubicon_ist",
            instagram: "rubicon_ist",
            linkedin: "company/rubiconist",
          };
          AECODE.Module.service(`${AECODE.baseurl}AE/services/rubiconist.js`);
        }
        break;
      /** ZEFIRMS */
      case "zefirms.com":
        serviceStatus = false;
        if (serviceStatus) {
          AECODE.Module.service(`${AECODE.baseurl}AE/services/zefirms.js`);
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
