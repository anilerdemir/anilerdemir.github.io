import * as AECODE from "https://anilerdemir.github.io/assets/core/aecode.js";
/** MODULE */
export class Module {
  /** ENCRYPT */
  static encrypt(data, action = true) {
    AECODE.message(Module.encrypt.name.toUpperCase());
    return action ? btoa(data) : atob(data);
  }

  /** START */
  static start() {
    AECODE.ANILERDEMIR.copyright();
    AECODE.Service.connected();
    Module.fonts();
    Module.ads();
    Module.forbidden();
    Module.fontAwesome();
    Module.secretMenu();
    Module.cookie();
    Module.xhrRequest();
    onload = () => {
      AECODE.Core.update(
        `${AECODE.anilerdemir[1]} style`,
        {},
        `@charset "UTF-8";\n`
      );
      AECODE.Core.delete("script[src*='anilerdemir.com']");
      typeof console.clear === "function" ? AECODE.info() : AECODE.info();
    };
  }

  /** TODAY */
  static today() {
    const options = {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    return new Date().toLocaleString("tr-TR", options);
  }

  /** FONTAWESOME */
  static fontAwesome() {
    Module.url(`${AECODE.baseurl}assets/fontawesome/css/all.css`);
    Module.url(`${AECODE.baseurl}assets/fontawesome/js/all.js`);
    AECODE.message(Module.fontAwesome.name.toUpperCase());
  }

  /** BOOTSTRAP */
  static bootstrap() {
    Module.url(`${AECODE.baseurl}assets/bootstrap/css/bootstrap.css`);
    Module.url(`${AECODE.baseurl}assets/bootstrap/js/popper.js`);
    Module.url(`${AECODE.baseurl}assets/bootstrap/js/popper.core.js`);
    Module.url(`${AECODE.baseurl}assets/bootstrap/js/bootstrap.js`);
    AECODE.message(Module.bootstrap.name.toUpperCase());
  }

  /** COOKIE */
  static cookie() {
    var cookies = document.cookie.split("; ");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      var eqPos = cookie.indexOf("=");
      var name = eqPos > -1 ? cookie.slice(0, eqPos) : cookie;
      document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
    }
    AECODE.message(Module.cookie.name.toUpperCase());
  }

  /** RANDOMCOLOR */
  static randomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  /** RANDOMTAG */
  static randomTag(length = "anilerdemir".length) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    let rndm = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * alphabet.length);
      rndm += alphabet[randomIndex];
    }
    return rndm;
  }

  /** FORBIDDEN */
  static forbidden() {
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
    AECODE.Core.update(
      `${AECODE.anilerdemir[1]} style`,
      {},
      `html, body { -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;}\n`
    );
    AECODE.message(Module.forbidden.name.toUpperCase());
  }

  /** ADS */
  static ads() {
    AECODE.Core.insert(
      "head",
      AECODE.Core.create("script", {
        async: "",
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5249900532190114",
        crossorigin: "anonymous",
      })
    );
    AECODE.Core.delete(
      "script[src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5249900532190114']",
      ["async", "crossorigin", "src"]
    );
    AECODE.Core.delete("ins", ["class", "style"]);
    AECODE.Core.delete(".google-auto-placed", ["style"]);
    AECODE.Core.delete(
      "ins div iframe, ins div, .adsbygoogle, .adsbygoogle-noablate"
    );
    AECODE.message(Module.ads.name.toUpperCase() + "DETECT");
  }

  /** SERVICE
    @param {string} link - Belirtilen Service JS URL adresini Blob olarak dönüştürür.*/
  static service(link) {
    fetch(link)
      .then((response) => response.text())
      .then((content) => {
        AECODE.Core.insert(
          AECODE.anilerdemir[4],
          AECODE.Core.create("script", {
            async: "",
            type: "module",
            src: URL.createObjectURL(
              new Blob([content], { type: "text/javascript" })
            ),
          })
        );
      })
      .catch((error) => {
        console.info(
          "%c HATA ",
          "border-radius: 50px; background: red; color: white;",
          `JS dosyası yüklenirken bir hata oluştu. "${error}"`
        );
      });
  }

  /** URL
    @param {string} link - Belirtilen URL adresini Blob olarak dönüştürür.*/
  static url(link) {
    const extension = link.substring(link.lastIndexOf(".") + 1);
    fetch(link)
      .then((response) => response.text())
      .then((content) => {
        extension === "css"
          ? AECODE.Core.insert(
              AECODE.anilerdemir[1],
              AECODE.Core.create("link", {
                rel: "stylesheet",
                href: URL.createObjectURL(
                  new Blob([content], { type: "text/css" })
                ),
              })
            )
          : extension === "js"
          ? AECODE.Core.insert(
              AECODE.anilerdemir[4],
              AECODE.Core.create("script", {
                src: URL.createObjectURL(
                  new Blob([content], { type: "text/javascript" })
                ),
              })
            )
          : console.info(
              "%c HATA ",
              "border-radius: 50px; background: red; color: white;",
              `${
                extension === "css" ? "CSS" : "JS"
              } dosyası yüklenirken bir hata oluştu.`
            );
      })
      .catch((error) => {
        console.info(
          "%c HATA ",
          "border-radius: 50px; background: red; color: white;",
          `${
            extension === "css" ? "CSS" : "JS"
          } dosyası yüklenirken bir hata oluştu. "${error}"`
        );
      });
  }

  /** SECRETMENU */
  static secretMenu(secretKeys = "anilerdemir", url = AECODE.baseurl) {
    let keys = "";
    document.addEventListener("keydown", (event) => {
      if (/^[a-zA-Z0-9]$/.test(event.key)) {
        keys += event.key;
      }
      if (secretKeys === "anilerdemir") {
        switch (event.key) {
          case "Enter":
            switch (keys) {
              case secretKeys:
                location.href = url;
                break;

              case "designer":
              case "DESIGNER":
                AECODE.Core.delete("#webview");
                document.designMode = "on";
                AECODE.Core.insert(
                  AECODE.anilerdemir[2],
                  AECODE.Core.create(
                    Module.randomTag(),
                    {
                      id: "designermode",
                      style:
                        "display: block; position: fixed; top: 0; left: 0; right: 0; background: #fff200; color: #231f20; font-weight: bold; user-select: none; cursor: default;",
                    },
                    "DESIGNER MODE"
                  )
                );
                break;

              case "user":
              case "USER":
                document.designMode = "off";
                AECODE.Core.delete("#designermode");
                AECODE.Core.delete("#webview");
                break;

              case "webview":
              case "WEBVIEW":
                AECODE.Core.delete("#designermode");
                const script = AECODE.Core.create("script", {
                  src: `${AECODE.baseurl}assets/cdn/webview.js`,
                });
                AECODE.Core.insert(AECODE.anilerdemir[4], script);
                script.onload = () => {
                  const element = document.querySelector("body");
                  html2canvas(element).then((canvas) => {
                    const screenshotUrl = canvas.toDataURL("image/png");
                    const link = AECODE.Core.create("a");
                    link.id = "webview";
                    link.href = screenshotUrl;
                    link.download = `${
                      location.hostname
                    }-(${Module.today().replace(
                      /[/.,:-_\s]/g,
                      "."
                    )})-webSS.png`;
                    link.innerHTML = "WEBVIEW DOWNLOAD";
                    link.style =
                      "display: flex; align-items: center; justify-content: center; position: fixed; left: 0; right: 0; bottom: 0; background: #231f20; color: #fff200; font-weight: bold; text-decoration: none; user-select: none; cursor: default;";
                    AECODE.Core.insert(AECODE.anilerdemir[2], link);
                  });
                };
                break;
            }
            keys = "";
            break;
          case "Control":
            console.log(`KEYLOG : ${keys}`);
            break;
          case "Backspace":
            keys = keys.slice(0, -1);
            break;
        }
        AECODE.message(Module.secretMenu.name.toUpperCase());
      }
      if (secretKeys !== "anilerdemir") {
        switch (event.key) {
          case "Enter":
            switch (keys) {
              case secretKeys:
                location.href = url;
                break;
            }
        }
      }
    });
  }

  /** SOCIALMEDIA */
  static socialMedia(id) {
    AECODE.Core.update(id, {}, "  ");
    [
      {
        title: "Facebook",
        icon: "fa-brands fa-facebook-f",
        color: "#1877f2",
        href: "https://www.facebook.com/" + AECODE.socialMedias.facebook,
      },
      {
        title: "X",
        icon: "fa-brands fa-x-twitter",
        color: "#231f20",
        href: "https://x.com/" + AECODE.socialMedias.x,
      },
      {
        title: "Instagram",
        icon: "fa-brands fa-instagram",
        color: "#e4405f",
        href: "https://www.instagram.com/" + AECODE.socialMedias.instagram,
      },
      {
        title: "Threads",
        icon: "fa-brands fa-threads",
        color: "#231f20",
        href: "https://www.threads.net/@" + AECODE.socialMedias.threads,
      },
      {
        title: "YouTube",
        icon: "fa-brands fa-youtube",
        color: "#ff0000",
        href: "https://www.youtube.com/" + AECODE.socialMedias.youtube,
      },
      {
        title: "LinkedIn",
        icon: "fa-brands fa-linkedin-in",
        color: "#0a66c2",
        href: "https://www.linkedin.com/" + AECODE.socialMedias.linkedin,
      },
      {
        title: "Telegram",
        icon: "fa-solid fa-paper-plane",
        color: "#0088CC",
        href: "https://t.me/" + AECODE.socialMedias.telegram,
      },
      {
        title: "WhatsApp",
        icon: "fa-brands fa-whatsapp",
        color: "#25d366",
        href: "https://wa.me/+90" + AECODE.socialMedias.whatsapp,
      },
      {
        title: "Trendyol",
        icon: 30,
        color: "#ff7f00",
        href: "https://www.trendyol.com/" + AECODE.socialMedias.trendyol,
      },
      {
        title: "HepsiBurada",
        icon: 30,
        color: "#ff7f00",
        href: "https://www.hepsiburada.com/" + AECODE.socialMedias.hepsiburada,
      },
      {
        title: "ÇiçekSepeti",
        icon: 30,
        color: "#0074D9",
        href: "https://www.ciceksepeti.com/" + AECODE.socialMedias.ciceksepeti,
      },
      {
        title: "Web",
        icon: "fa-solid fa-globe",
        color: "#231f20",
        href: "https://" + AECODE.socialMedias.web,
      },
      {
        title: "Phone",
        icon: "fa-solid fa-phone",
        color: "#231f20",
        href: "tel:+90" + AECODE.socialMedias.phone,
      },
      {
        title: "Email",
        icon: "fa-solid fa-envelope",
        color: "#231f20",
        href: "mailto:" + AECODE.socialMedias.email,
      },
      {
        title: "Address",
        icon: "fa-solid fa-location-dot",
        color: "#231f20",
        href: "https://goo.gl/maps/" + AECODE.socialMedias.address,
      },
    ].map((item) => {
      if (!item.href.includes("undefined")) {
        switch (item.title) {
          case "Trendyol":
            AECODE.Core.insert(
              id,
              AECODE.Core.create(
                Module.randomTag(),
                { title: item.title, href: item.href },
                `<svg viewBox="0 0 620 211" height="${item.icon}">
                     <path fill="#231F20" d="M221.695,146.863h-70.19c3.22,13.175,13.906,23.129,27.813,23.129c7.831,0,15.516-3.367,20.64-9.148
                         l16.98,0.365c-7.466,14.199-21.738,23.275-38.279,23.275c-24.153,0-43.11-20.934-43.11-44.646c0-24.446,18.664-44.5,43.476-44.5
                         c24.007,0,43.183,19.762,43.183,43.622C222.134,141.521,221.988,144.303,221.695,146.863L221.695,146.863z M178.805,109.829
                         c-13.76,0-26.495,10.833-27.373,24.812h54.747C205.3,120.734,192.638,109.829,178.805,109.829z M292.032,182.361v-46.037
                         c0-14.346-4.318-26.495-21.152-26.495c-15.589,0-22.323,12.077-22.323,26.349v46.184h-15.882V97.606h14.858v9.003h0.292
                         c6.148-8.125,15.004-11.345,24.812-11.345c12.076,0,23.421,4.757,30.008,15.151c4.099,6.44,5.343,14.198,5.343,21.737v50.209
                         H292.032z M392.522,182.361v-12.076h-0.292c-7.027,9.807-18.225,14.199-30.009,14.199c-25.397,0-44.062-18.957-44.062-44.207
                         c0-25.398,18.371-45.013,44.062-45.013c10.687,0,22.03,4.099,28.765,12.662h0.292V69.135h15.883v113.226H392.522z M363.1,109.829
                         c-16.834,0-29.057,13.761-29.057,30.302c0,15.882,12.735,29.861,28.91,29.861c16.541,0,29.496-13.467,29.496-29.861
                         C392.522,123.15,380.446,109.829,363.1,109.829z M453.198,210.687H436.73l12.369-30.009l-33.814-83.071h17.127l24.958,65.798
                         l25.543-65.798h17.127L453.198,210.687L453.198,210.687z M545.346,184.484c-24.958,0-45.745-20.055-45.745-45.159
                         c0-24.958,21.299-44.061,45.745-44.061c24.812,0,45.744,19.25,45.744,44.354C591.09,163.844,571.035,184.484,545.346,184.484
                         L545.346,184.484z M545.346,109.829c-16.542,0-29.862,13.468-29.862,30.009s13.32,30.154,29.862,30.154
                         c16.688,0,29.861-13.76,29.861-30.301C575.134,123.15,561.813,109.829,545.346,109.829z M604.044,182.361V69.135H620v113.226
                         H604.044z M15.736,165.674c0.659,2.708,1.537,4.904,2.562,6.588c1.024,1.683,2.342,3.146,3.879,4.537
                         c5.05,4.392,11.418,6.66,18.957,6.66c7.465,0,14.492-1.83,20.859-5.343v-15.224c-6.587,3.879-12.881,5.855-18.81,5.855
                         c-8.051,0-12.223-4.904-12.223-14.639V112.61h26.714V97.899H31.033V70.672H15.297v27.154H0v14.711h14.638v37.62
                         C14.638,157.77,15.004,162.966,15.736,165.674z M111.982,111.806c4.904,0,10.32,2.708,16.102,8.124l8.637-14.346
                         c-7.026-6.44-15.517-9.368-20.494-9.368h-1.098c-5.709,0-15.224,0-22.982,12.589l-0.293,0.512l0.073-11.417H75.46v84.023h16.468
                         v-43.914c0-7.026,1.976-13.174,5.929-18.371C101.809,114.44,106.566,111.806,111.982,111.806z"/>
                     <path fill="#FF671B" d="M455.394,78.357c-0.731,0.146-1.464-0.439-1.61-1.171l-4.245-26.642
                         c-1.391-8.709-0.073-15.956,4.538-21.884c4.465-5.855,11.125-9.369,19.615-10.759L584.356,0.336
                         c0.731-0.146,1.464,0.439,1.609,1.171l8.417,53.429c0.146,0.732-0.438,1.464-1.171,1.61L455.394,78.357z"/>
                     <path fill="#FFFFFF" d="M492.429,50.179c-0.952,3.44-3.514,5.709-7.026,6.294c-4.465,0.732-9.589-1.903-10.613-8.344
                         c-0.951-5.782,2.123-10.393,7.466-11.271c3.513-0.585,6.367,0.732,8.637,3.806l5.343-0.878c-2.415-5.197-8.71-8.271-14.712-7.319
                         c-7.904,1.318-12.881,8.344-11.563,16.395c1.317,8.124,8.271,13.248,16.102,11.93c6.002-0.952,10.54-5.489,11.638-11.564
                         L492.429,50.179L492.429,50.179z M513.068,27.343c-8.051,1.317-13.541,8.636-12.224,16.395c1.318,7.905,8.856,13.248,16.907,11.93
                         c8.052-1.317,13.468-8.783,12.224-16.614C528.585,31.295,521.046,26.026,513.068,27.343z M516.947,51.276
                         c-5.343,0.878-10.467-2.781-11.345-8.271c-0.878-5.416,2.781-10.54,8.124-11.417c5.343-0.878,10.467,2.781,11.345,8.124
                         C525.949,45.275,522.363,50.398,516.947,51.276z M577.184,45.202l-2.635-16.249c-1.172-7.099-5.929-10.759-12.809-9.588
                         c-4.172,0.659-6.66,2.489-8.124,5.929l-0.146,0.292l-0.146-0.219c-1.977-2.854-6.075-3.586-9.076-3.147
                         c-3.439,0.585-5.196,1.83-7.1,4.904l-0.072,0.073l-0.293,0.073l-0.513-2.928l-4.392,0.732l4.392,26.934l4.831-0.805l-2.416-15.077
                         c-0.878-5.563,0.879-8.636,5.563-9.368c2.343-0.366,4.245,0.219,5.636,1.756c1.464,1.684,1.757,3.44,2.05,5.489l2.488,15.004
                         l4.831-0.805l-2.489-15.004c-0.658-3.879-0.585-8.417,5.271-9.368c4.317-0.732,7.099,1.83,7.978,7.246l2.415,15.004L577.184,45.202
                         L577.184,45.202z M469.153,61.084c0,2.123-1.756,3.879-3.879,3.879c-2.122,0-3.879-1.757-3.879-3.879s1.757-3.879,3.879-3.879
                         C467.47,57.132,469.153,58.888,469.153,61.084z"/>
                 </svg>`
              )
            );
            break;

          case "HepsiBurada":
            AECODE.Core.insert(
              id,
              AECODE.Core.create(
                Module.randomTag(),
                { title: item.title, href: item.href },
                `<svg viewBox="0 -20 281.554 67.838" height="${item.icon}">
                      <g transform="translate(-297.249 -408.246)">
                        <path
                          id="Path_55"
                          d="M316.983 419.086a8.077 8.077 0 0 1 3.408 2.7 7.22 7.22 0 0 1 1.383 3.173 39.218 39.218 0 0 1 .252 5.322v16.179h-7.35V429.7a7.431 7.431 0 0 0-.752-3.591 3.77 3.77 0 0 0-3.711-1.921 5.089 5.089 0 0 0-4.3 1.909 8.789 8.789 0 0 0-1.466 5.449v14.918h-7.2V408.88h7.2v12.4a8.41 8.41 0 0 1 3.331-2.272 12.891 12.891 0 0 1 4.591-.81 11.64 11.64 0 0 1 4.614.888z"
                          fill="#ff6000"
                          transform="translate(0 -0.497)"
                        />
                        <path
                          id="Path_56"
                          d="M442.432 453.407a11.2 11.2 0 0 1 4.757 4.072 13.533 13.533 0 0 1 2.193 5.692 35.153 35.153 0 0 1 .237 5.463h-20.05q.168 4.143 2.879 5.809a7.307 7.307 0 0 0 3.969 1.035 5.591 5.591 0 0 0 5.478-3.157h7.349a8.988 8.988 0 0 1-2.669 4.976q-3.7 4.016-10.357 4.016a15.006 15.006 0 0 1-9.7-3.388q-4.2-3.388-4.2-11.022 0-7.153 3.792-10.97a13.272 13.272 0 0 1 9.845-3.818 15.672 15.672 0 0 1 6.477 1.292zm-10.768 6.218a7.476 7.476 0 0 0-1.918 4.261h12.4a6.005 6.005 0 0 0-1.918-4.35 6.306 6.306 0 0 0-4.269-1.485 5.706 5.706 0 0 0-4.296 1.575z"
                          fill="#ff6000"
                          transform="translate(-98.109 -34.413)"
                        />
                        <path
                          id="Path_57"
                          d="M583.411 456.262q3.368 3.561 3.368 10.457 0 7.273-3.292 11.087a10.687 10.687 0 0 1-8.478 3.814 8.891 8.891 0 0 1-5.491-1.642 10.6 10.6 0 0 1-2.339-2.652v13.629h-7.122v-37.648h6.895v4.067a11.59 11.59 0 0 1 2.491-2.829 9.192 9.192 0 0 1 5.745-1.844 10.889 10.889 0 0 1 8.223 3.561zm-5.524 5.178a5.122 5.122 0 0 0-4.759-2.45 5.412 5.412 0 0 0-5.435 3.713 13.948 13.948 0 0 0-.766 5q0 4.8 2.575 6.744a5.913 5.913 0 0 0 3.624 1.136 5.268 5.268 0 0 0 4.632-2.324 12.171 12.171 0 0 0 .128-11.82z"
                          fill="#ff6000"
                          transform="translate(-206.155 -34.871)"
                        />
                        <path
                          id="Path_58"
                          d="M697.611 471.406a4.792 4.792 0 0 0 .99 2.729q1.345 1.439 4.974 1.439a7.61 7.61 0 0 0 3.388-.631 2.115 2.115 0 0 0 .244-3.738q-1.012-.631-7.53-2.172-4.693-1.162-6.612-2.9a6.3 6.3 0 0 1-1.92-4.951 8.576 8.576 0 0 1 3-6.554q3-2.74 8.442-2.741a15.516 15.516 0 0 1 8.413 2.054q3.252 2.059 3.734 7.11h-7.2a4.254 4.254 0 0 0-.785-2.2q-1.191-1.464-4.052-1.465a5.833 5.833 0 0 0-3.356.733 2.108 2.108 0 0 0-1 1.718 1.878 1.878 0 0 0 1.064 1.793 46.042 46.042 0 0 0 7.516 1.995 13.787 13.787 0 0 1 6.448 3.057 6.937 6.937 0 0 1 2.122 5.177 8.359 8.359 0 0 1-3.05 6.681q-3.05 2.588-9.427 2.589-6.5 0-9.6-2.741a8.9 8.9 0 0 1-3.1-6.984z"
                          fill="#ff6000"
                          transform="translate(-308.329 -34.23)"
                        />
                        <path
                          id="Path_59"
                          d="M820.375 455.513h7.3v27.53h-7.3z"
                          fill="#ff6000"
                          transform="translate(-410.354 -37.077)"
                        />
                        <path
                          id="Path_60"
                          d="M894.946 421.97a15.82 15.82 0 0 1 3.09 10.1 17.7 17.7 0 0 1-3.047 10.633 11.059 11.059 0 0 1-14.014 2.854 10.965 10.965 0 0 1-2.691-2.829v3.46h-7.1v-37.655h7.2v13.715a10.549 10.549 0 0 1 3.025-2.93 9.035 9.035 0 0 1 4.983-1.263 10.288 10.288 0 0 1 8.554 3.915zm-6.017 16.771a10.2 10.2 0 0 0 1.554-5.91 13.223 13.223 0 0 0-.764-4.85 5.32 5.32 0 0 0-5.348-3.637 5.4 5.4 0 0 0-5.424 3.561 13.264 13.264 0 0 0-.764 4.9 10.2 10.2 0 0 0 1.579 5.859 5.419 5.419 0 0 0 4.813 2.324 4.991 4.991 0 0 0 4.355-2.247z"
                          fill="#ff6000"
                          transform="translate(-450.213 -0.225)"
                        />
                        <path
                          id="Path_61"
                          d="M1016.081 455.514v16.595a8.727 8.727 0 0 0 .552 3.536q.98 2.1 3.845 2.1a5.024 5.024 0 0 0 5.027-2.981 10.848 10.848 0 0 0 .7-4.268v-14.982h7.3v27.531h-7v-3.89q-.1.126-.5.758a5.025 5.025 0 0 1-.957 1.111 9.987 9.987 0 0 1-3.262 2.071 11.1 11.1 0 0 1-3.689.556q-6.1 0-8.211-4.395a16.849 16.849 0 0 1-1.184-7.147v-16.595z"
                          fill="#ff6000"
                          transform="translate(-558.086 -37.078)"
                        />
                        <path
                          id="Path_62"
                          d="M1160.044 452.481c.093.009.3.022.619.038v7.376q-.682-.076-1.212-.1c-.353-.017-.64-.026-.859-.026q-4.345 0-5.835 2.829a11 11 0 0 0-.833 4.9v13.159h-7.249v-27.532h6.869v4.8a15.229 15.229 0 0 1 2.9-3.763 7.908 7.908 0 0 1 5.254-1.693c.141-.001.254.004.346.012z"
                          fill="#ff6000"
                          transform="translate(-664.745 -34.689)"
                        />
                        <path
                          id="Path_63"
                          d="M1367.15 419.1a8.753 8.753 0 0 1 3.157 3.044v-13.611h7.3v37.658h-7v-3.814a10.153 10.153 0 0 1-3.511 3.561 9.855 9.855 0 0 1-4.9 1.111 10.232 10.232 0 0 1-8.12-3.9 14.987 14.987 0 0 1-3.3-10.015q0-7.046 3.246-11.087A10.559 10.559 0 0 1 1362.7 418a8.889 8.889 0 0 1 4.45 1.1zm1.767 19.612a10.037 10.037 0 0 0 1.591-5.884q0-5.051-2.551-7.223a5.492 5.492 0 0 0-3.637-1.313 5.055 5.055 0 0 0-4.634 2.387 12.87 12.87 0 0 0 .025 12.022 5.084 5.084 0 0 0 4.559 2.286 5.313 5.313 0 0 0 4.647-2.272z"
                          fill="#ff6000"
                          transform="translate(-826.421 -0.225)"
                        />
                        <path
                          id="Path_64"
                          d="M1243.139 481s.051-2.6 0-3.222a14.85 14.85 0 0 1-3.448 2.748 10.423 10.423 0 0 1-5.273 1.335 9.1 9.1 0 0 1-6.2-2.13 7.571 7.571 0 0 1-2.446-6.035q0-5.066 3.935-7.334a17.573 17.573 0 0 1 6.347-1.764l2.463-.3a11.321 11.321 0 0 0 2.869-.63 2.161 2.161 0 0 0 1.549-2.041 2.413 2.413 0 0 0-1.188-2.332 7.5 7.5 0 0 0-3.486-.642 4.577 4.577 0 0 0-3.654 1.26 5.205 5.205 0 0 0-1.022 2.52h-6.931a10.507 10.507 0 0 1 2.025-5.923q2.86-3.628 9.821-3.629a17.524 17.524 0 0 1 8.049 1.789q3.518 1.791 3.518 6.754v12.6c0 .874.017 5.733.051 6.977zm-.227-13.353a7.973 7.973 0 0 1-1.392.692 11.84 11.84 0 0 1-1.929.492l-1.635.3a10.745 10.745 0 0 0-3.3.984 3.279 3.279 0 0 0-1.7 3.05 3.184 3.184 0 0 0 1.037 2.659 3.936 3.936 0 0 0 2.521.819 7.511 7.511 0 0 0 4.338-1.36q1.983-1.362 2.059-4.965z"
                          fill="#ff6000"
                          transform="translate(-728.36 -35.011)"
                        />
                        <path
                          id="Path_65"
                          d="M1507.751 481s.051-2.6 0-3.222a14.85 14.85 0 0 1-3.448 2.748 10.423 10.423 0 0 1-5.273 1.335 9.094 9.094 0 0 1-6.2-2.13 7.572 7.572 0 0 1-2.446-6.035q0-5.066 3.935-7.334a17.576 17.576 0 0 1 6.347-1.764l2.463-.3a11.317 11.317 0 0 0 2.869-.63 2.161 2.161 0 0 0 1.549-2.041 2.413 2.413 0 0 0-1.188-2.332 7.5 7.5 0 0 0-3.486-.642 4.577 4.577 0 0 0-3.654 1.26 5.207 5.207 0 0 0-1.022 2.52h-6.931a10.509 10.509 0 0 1 2.025-5.923q2.86-3.628 9.821-3.629a17.523 17.523 0 0 1 8.049 1.789q3.518 1.791 3.518 6.754v12.6c0 .874.017 5.733.051 6.977zm-.227-13.353a7.983 7.983 0 0 1-1.392.692 11.841 11.841 0 0 1-1.929.492l-1.635.3a10.747 10.747 0 0 0-3.3.984 3.279 3.279 0 0 0-1.7 3.05 3.184 3.184 0 0 0 1.037 2.659 3.936 3.936 0 0 0 2.521.819 7.511 7.511 0 0 0 4.338-1.36q1.983-1.362 2.059-4.965z"
                          fill="#ff6000"
                          transform="translate(-935.929 -35.011)"
                        />
                        <circle
                          id="Ellipse_12"
                          cx="3.964"
                          cy="3.964"
                          r="3.964"
                          fill="#ff6000"
                          transform="translate(409.591 408.246)"
                        />
                      </g>
                    </svg>`
              )
            );
            break;

          case "ÇiçekSepeti":
            AECODE.Core.insert(
              id,
              AECODE.Core.create(
                Module.randomTag(),
                { title: item.title, href: item.href },
                `<svg viewBox="50 140 760 200" height="${item.icon}">
                      <path
                        fill="#49b546"
                        d="M213.9,206.3c-0.1,7.7-3.2,14.2-8.5,19.6c-6,6-13.5,9.7-21.1,13.1c-6.6,2.9-13.6,4.8-20.6,6.5
                    c-7.6,1.9-15.6,2.1-23.4,3c-2.6,0.3-2.5-1.5-2-3.3c1.8-5.4,3.9-10.6,6.4-15.7c6.9-15,15.9-28.4,29.8-38c7.3-5.1,15.4-7.1,24.2-4.9
                    C208.2,188.9,213.9,196.6,213.9,206.3z"
                      />
                      <path
                        fill="#e54d42"
                        d="M81,317.2c-8.6,0.4-15-2.9-19.1-10.2c-5-8.8-3.1-17.2,2.2-25c5.8-8.7,14.3-14.3,23.6-18.7
                    c12.2-5.7,25.1-9.1,38.3-11.4c0.6-0.1,1.2-0.2,1.8-0.2c4.3-0.4,5.1,0.7,3.9,4.8c-2.5,8.8-6,17.1-9.7,25.4
                    c-4.2,9.4-10.4,17.4-17.3,24.9S90.3,317.2,81,317.2z"
                      />
                      <path
                        fill="#e27c32"
                        d="M126,247.4c-9.3-1.3-18.7-1.6-28-3.6c-8.5-1.9-16.8-4.9-24.6-9c-7.9-4-14.5-9.6-17.8-18
                    c-6.1-15.7,5.2-30.6,22-29.4c8.6,0.6,16,4.3,22.3,9.8c8.7,7.6,16,16.5,21.6,26.5c3.4,6,6.4,12.1,9.2,18.4c2.1,4.7,1.7,5.3-3.3,5.3
                    L126,247.4z"
                      />
                      <path
                        fill="#175ba6"
                        d="M229.8,312.2c0.7,12.4-12.9,21.7-25.6,19.4c-10.3-1.9-18-8-24.8-15.5c-11.4-12.7-18.6-27.8-24.1-43.8
                    c-0.8-2.4-0.8-4,2.4-3.7c21.2,2.3,41.9,6.5,59.4,19.8C224.5,294.1,229.7,301.2,229.8,312.2z"
                      />
                      <path
                        fill="#0a5191"
                        d="M611.5,276.2c0-9.1-0.5-18.2,1.2-27.2c1.6-8.5,7.9-18.6,20.5-20.8c11.6-2.1,22.1,1.6,28.1,10.6
                    c8.2,12.4,6.9,31.2-2.9,42.3c-6.8,7.8-20,9.1-28.4,2.9c-0.7-0.5-1.3-1.7-2.3-1.3s-0.6,1.7-0.6,2.6c-0.1,5.1-0.1,10.2,0,15.3
                    c0,2.8-0.9,4-3.9,4c-7.2,0.1-11.4-3.7-11.6-11.3C611.4,287.6,611.5,281.9,611.5,276.2z M651.3,258.6c0-4.5-0.3-8.6-2.4-12.3
                    c-2.3-4.1-6.2-5.1-10.5-5.2c-4,0-7.2,1.7-9,5.2c-3.7,6.9-3.6,15.3,0.2,22.1c2.6,4.4,7.6,6.8,12.7,5.9c4-0.6,7.3-4.2,8.4-9
                    C651.2,263.1,651.4,260.8,651.3,258.6z"
                      />
                      <path
                        fill="#0a5191"
                        d="M515.1,288c-3.5-0.3-8.1-0.5-12.5-2.3c-6.8-2.7-10.4-10.2-8.4-17.3c0.7-2.3,1.9-0.9,2.9-0.2
                    c5.6,4.3,12.5,6.4,19.6,6.1c1.9-0.1,3.8-0.4,5.6-0.9c4.1-1.1,6.2-3.9,6.2-8s-1.1-5.8-5.8-7.3c-4.5-1.4-9.1-2.4-13.7-3.7
                    c-10.2-2.8-16.3-9-16.7-17c-0.4-9.6,5.2-18.5,14-22.4c9.1-3.7,18.4-4.1,27.6-0.3c6.6,2.6,10.1,9.8,8.2,16.6
                    c-0.4,1.6-1.1,1.5-2.2,0.6c-7.1-6.4-15.6-6.7-24.4-5.3c-2.3,0.3-4.3,1.5-5.8,3.2c-3.3,3.8-2.4,8.4,2.1,10.5
                    c3.5,1.7,7.3,2.8,11.1,3.5c4,0.6,7.8,2,11.4,3.9c8.8,5,12.1,14.8,8.6,24.5c-4.2,11.6-13.6,14.9-24.6,15.8
                    C517.5,288,516.8,288,515.1,288z"
                      />
                      <path
                        fill="#0a5191"
                        d="M450.5,252.2c3-3.8,5.4-6.8,7.9-9.8c1.4-1.7,3.1-3.3,4.4-5.1c5.1-7.4,12.3-9.4,20.8-8.5
                    c1.1,0.1,2.7-0.5,3.1,0.9c0.4,1.2-0.9,2.1-1.7,2.9c-6.4,6.3-12.2,13.2-18.1,20c-2,2.2-2,3.8,0,6c5,5.6,9.3,11.9,15.2,16.7
                    c1.3,1.2,2.8,2.2,4.5,2.8c2.8,0.9,2.7,2.4,1.5,4.5c-2.9,4.9-10.2,5.9-16.1,1.9c-4.3-2.9-7.2-7.2-10.4-11c-3.5-4.1-6.7-8.5-10.1-12.8
                    c-1.4,1.3-0.9,2.7-0.9,3.9c-0.1,6.1-0.1,12.3,0,18.5c0,2.4-0.8,3.4-3.3,3.5c-7.5,0.3-10.7-2.2-11.7-9.6c-0.1-1.2-0.2-2.4-0.2-3.5
                    c0-19.5,0-39,0-58.5c0-5.1,0.2-5.3,5.1-5.2c6.8,0.1,10,3.3,10,10.1c0,9.2,0,18.5,0,27.7V252.2z"
                      />
                      <path
                        fill="#0a5191"
                        d="M406.1,275c5.1-0.3,10.1-0.8,14.5-3.8c2.4-1.6,3.3-1,3.3,1.9c0.1,7-3,11.5-10.6,13.5c-9.1,2.4-18,1.8-26.2-3.5
                    c-8.9-5.8-12.7-14.3-12.7-24.4c0-8.9,2.1-17.3,8.9-23.9c9.2-9,25.3-10.1,35-1.7c5.6,4.6,8.4,11.8,7.4,19c-0.3,4.5-3.4,8.3-7.8,9.6
                    c-7.5,2.5-15.3,2.8-23.1,2.8c-1.4,0-3.5-0.8-4.1,1c-0.5,1.5,0.8,2.9,1.8,4C396.1,273.8,400.8,275.2,406.1,275z M399.1,253.2
                    c2.3-0.1,5.2,0.2,8-0.7c2.1-0.7,4.5-1.2,4.7-4.1c0.2-2.7-1-5.2-3.3-6.6c-6-3.9-15.4-0.6-17.6,6.1c-1.4,4-0.6,5.2,3.6,5.2
                    C395.7,253.2,397.1,253.2,399.1,253.2L399.1,253.2z"
                      />
                      <path
                        fill="#0a5191"
                        d="M703.4,275.1c7.1-0.1,12-1,16.2-3.8c2.7-1.8,3.2-0.5,3.3,2c0.1,6.8-2.8,10.9-9.3,13
                    c-14.7,4.9-29.9-0.5-36.8-13.2s-3.6-30.9,7.7-40c10.9-8.9,30.6-7.6,37.8,6.5c1.9,3.6,2.7,7.6,2.5,11.6c-0.4,6.8-4.9,10.8-12.7,12
                    c-6.4,1-12.9,1.4-19.4,1.3c-1,0-2.3-0.4-2.9,0.7s0.3,2.3,1,3.2C693.5,272.7,698.3,275.3,703.4,275.1z M698.3,253.1
                    c2.7-0.1,5.9,0.2,9-0.9s3.9-3.2,3.1-6.2c-0.5-2.5-2.4-4.5-4.9-5.2c-6.5-1.5-12.9-0.6-15.8,7.4c-1.3,3.7-0.6,4.8,3.2,4.9
                    C694.5,253.2,696.2,253.1,698.3,253.1L698.3,253.1z"
                      />
                      <path
                        fill="#0a5191"
                        d="M582.2,275c5.9,0.1,10.9-0.9,15.3-3.7c1.9-1.2,2.7-1,2.9,1.4c0.6,6.4-2,10.9-7.8,13.2
                    c-13.9,5.6-30,0.8-37.4-12.2c-6.4-11.2-5.3-22.9,1-33.8c5.6-9.7,15-12.9,25.8-12.4c12.8,0.6,22.6,13.1,20.4,25.7
                    c-0.8,4.4-3.5,7.1-7.6,8.5c-7.3,2.5-14.8,2.6-22.4,2.8c-1.6,0-4.1-1-4.7,1.1c-0.5,1.9,1.2,3.7,2.7,5.1
                    C573.4,273.8,577.7,275.3,582.2,275z M575.3,253.1v0.1c2.5,0,4.9-0.2,7.4-0.6c2.4-0.4,5.2-0.9,5.5-4.1c0.4-2.9-1-5.7-3.6-7.2
                    c-5.9-3.6-15.6,0.2-17.4,6.8c-1,3.6-0.2,4.8,3.5,4.8C572.3,253.2,573.8,253.1,575.3,253.1L575.3,253.1z"
                      />
                      <path
                        fill="#0a5191"
                        d="M225.8,250c0.1-16.4,8.1-29.5,22.5-35c9.4-3.6,19.1-4.4,28.5,0.5c5.4,2.8,8.9,11,7.2,16.5
                    c-0.7,2.4-1.9,0.8-2.8,0c-5.4-4.9-12-6.6-19-6.1c-15.6,1-22.5,12.9-20.9,27.5c0.4,5,2.4,9.7,5.6,13.6c6.1,7.1,14.2,7.4,22.5,6.2
                    c4-0.5,7.8-2.1,11-4.5c0.7-0.6,1.4-1.5,2.5-0.8c1,0.6,0.7,1.7,0.8,2.6c0.4,7.5-2.7,12.2-10,14.8c-20.9,7.4-47.4-5.6-47.8-33.1
                    C225.8,251.5,225.8,250.7,225.8,250z"
                      />
                      <path
                        fill="#0a5191"
                        d="M368.8,242.9c0,0.8,0,1.5,0,2.3s0.4,1.8-0.5,2.3c-1.1,0.7-1.6-0.5-2.3-1.1c-9-7.4-23.2-5.1-27.3,4.6
                    c-4.5,10.7,2.5,23.5,14.5,22.7c4.6-0.3,8.9-1,12.6-3.8c1.9-1.5,2.6-0.8,2.9,1.4c1,8.6-3.6,14.8-12.2,16.1
                    c-15.5,2.4-30.1-6.5-33.8-20.5c-4.2-15.9,3.7-31.4,19-36.9c5.5-2.1,11.5-2.4,17.1-0.9C364.4,230.7,370,236.3,368.8,242.9z"
                      />
                      <path
                        fill="#0a5191"
                        d="M734.3,248.8c0-5.9,0-11.8,0-17.7c0-5.6,2.5-10,6.8-13.4c1.3-1,2.9-1.6,4.6-1.7c2.5-0.2,3.9,0.6,3.7,3.3
                    c0,0.2,0,0.5,0,0.7c0.2,8.8,0.2,8.8,8.9,8.8c2.7,0,5.4,0,8.2,0c1.1,0,2.2,0.1,2.5,1.4c1.2,5.5-0.8,11.5-7.2,11.6
                    c-3,0.1-5.9,0.1-8.9,0c-2.3-0.1-3.5,0.8-3.5,3.3c0.1,6.7-0.1,13.5,0.1,20.2c0.2,5.7,3.1,8.2,8.9,8.3c2.6,0,5.2,0.1,7.7-1
                    c2.2-1,3-0.3,3.2,2c0.6,6.6-2.4,11.1-9,12.3c-4.9,0.9-10,0.4-14.6-1.5c-8.4-3.3-10.7-10.5-11.2-18.6
                    C734,260.9,734.3,254.8,734.3,248.8z"
                      />
                      <path
                        fill="#0a5191"
                        d="M291.9,251.8c0-6.1,0.1-12.3,0-18.4c0-2.8,1.3-3.7,3.9-3.6c7.7,0.3,11.1,3.8,11.2,11.5c0.1,8.5,0,17,0,25.5
                    c0,5.8,1.5,7.5,7.3,7.5c3.1,0,4.1,1.4,4,4.3c-0.1,5.7-2.4,8.2-8.1,8.6c-10.6,0.7-17.8-5.9-18.3-17
                    C291.7,264.1,292,257.9,291.9,251.8L291.9,251.8z"
                      />
                      <path
                        fill="#0a5191"
                        d="M792.7,253.9c0,4.8-0.1,9.7,0,14.5c0.1,3.8,1.9,5.5,5.7,5.9c2.2,0.3,5.3-1,5.6,3c0.3,4.7-1.6,8.6-5.3,9.3
                    c-9.6,1.7-20.1-1.6-20.9-14.3c-0.8-13.2-0.2-26.5-0.3-39.7c0-2,1-2.6,2.9-2.6c8.5-0.3,12.2,3.1,12.2,11.7
                    C792.6,245.8,792.6,249.8,792.7,253.9L792.7,253.9z"
                      />
                      <path
                        fill="#0a5191"
                        d="M785.2,225.5c-4.8,0-8.8-3.9-8.9-8.8c-0.1-4.8,3.9-8.6,9-8.5c4.7,0.1,8.5,3.9,8.5,8.6
                    C793.7,221.6,789.9,225.4,785.2,225.5z"
                      />
                      <path
                        fill="#0a5191"
                        d="M299.7,208.3c4.7,0.2,8.4,4,8.5,8.7c0,4.8-3.9,8.6-8.7,8.6c-0.1,0-0.1,0-0.2,0c-5-0.1-8.2-3.4-8.2-8.6
                    c-0.2-4.6,3.3-8.4,7.8-8.7C299.1,208.3,299.4,208.3,299.7,208.3z"
                      />
                      <path
                        fill="#0a5191"
                        d="M257.8,292.8c4.3-0.1,7.8,3.2,7.9,7.5c0,0.1,0,0.2,0,0.3c-0.2,4.3-3.8,7.7-8.1,7.5c-4.1-0.2-7.4-3.5-7.5-7.6
                    C250.3,296.3,253.6,293,257.8,292.8z"
                      />
                      <path
                        fill="#0a5191"
                        d="M340.9,300.5c0-4.2,3.4-7.3,7.8-7.4c3.1,0,6.5,3.7,6.6,7.1c0.1,4-3.1,7.3-7.1,7.3S340.9,304.5,340.9,300.5
                    L340.9,300.5z"
                      />
                    </svg>`
              )
            );
            break;

          default:
            AECODE.Core.insert(
              id,
              AECODE.Core.create(
                Module.randomTag(),
                { title: item.title, href: item.href },
                `<i class="${item.icon} mx-2 fill: ${item.color}" style="color: ${item.color}"></i>`
              )
            );
            break;
        }
      }
    });
    AECODE.message(Module.socialMedia.name.toUpperCase());
  }

  /** FONTS */
  static fonts() {
    let fontFace = {
      fontFamily: null,
      src: [],
      fontWeight: null,
      fontStyle: null,
    };
    [
      {
        family: "AE-H",
        name: "Montez-Regular",
        weight: "normal",
        style: "normal",
      },
      {
        family: "AE-S",
        name: "Product-Sans-Bold",
        weight: "bold",
        style: "normal",
      },
      {
        family: "AE-S",
        name: "Product-Sans-Regular",
        weight: "normal",
        style: "normal",
      },
      {
        family: "AE-S",
        name: "Product-Sans-Bold-Italic",
        weight: "bold",
        style: "italic",
      },
      {
        family: "AE-S",
        name: "Product-Sans-Italic",
        weight: "normal",
        style: "italic",
      },
      {
        family: "AE-M",
        name: "Montserrat-Black",
        weight: "900",
        style: "normal",
      },
      {
        family: "AE-M",
        name: "Montserrat-Bold",
        weight: "bold",
        style: "normal",
      },
      {
        family: "AE-M",
        name: "Montserrat-ExtraBold",
        weight: "bold",
        style: "normal",
      },
      {
        family: "AE-M",
        name: "Montserrat-SemiBold",
        weight: "600",
        style: "normal",
      },
      {
        family: "AE-M",
        name: "Montserrat-Medium",
        weight: "500",
        style: "normal",
      },
      {
        family: "AE-M",
        name: "Montserrat-Regular",
        weight: "normal",
        style: "normal",
      },
      {
        family: "AE-M",
        name: "Montserrat-Light",
        weight: "300",
        style: "normal",
      },
      {
        family: "AE-M",
        name: "Montserrat-ExtraLight",
        weight: "200",
        style: "normal",
      },
      {
        family: "AE-M",
        name: "Montserrat-Thin",
        weight: "100",
        style: "normal",
      },
      {
        family: "AE-M",
        name: "Montserrat-BlackItalic",
        weight: "900",
        style: "italic",
      },
      {
        family: "AE-M",
        name: "Montserrat-BoldItalic",
        weight: "bold",
        style: "italic",
      },
      {
        family: "AE-M",
        name: "Montserrat-ExtraBoldItalic",
        weight: "bold",
        style: "italic",
      },
      {
        family: "AE-M",
        name: "Montserrat-SemiBoldItalic",
        weight: "600",
        style: "italic",
      },
      {
        family: "AE-M",
        name: "Montserrat-MediumItalic",
        weight: "500",
        style: "italic",
      },
      {
        family: "AE-M",
        name: "Montserrat-Italic",
        weight: "normal",
        style: "italic",
      },
      {
        family: "AE-M",
        name: "Montserrat-LightItalic",
        weight: "300",
        style: "italic",
      },
      {
        family: "AE-M",
        name: "Montserrat-ExtraLightItalic",
        weight: "200",
        style: "italic",
      },
      {
        family: "AE-M",
        name: "Montserrat-ThinItalic",
        weight: "100",
        style: "italic",
      },
      {
        family: "AE-G",
        name: "Gilroy-Black",
        weight: "900",
        style: "normal",
      },
      {
        family: "AE-G",
        name: "Gilroy-Heavy",
        weight: "900",
        style: "normal",
      },
      {
        family: "AE-G",
        name: "Gilroy-Bold",
        weight: "bold",
        style: "normal",
      },
      {
        family: "AE-G",
        name: "Gilroy-ExtraBold",
        weight: "bold",
        style: "normal",
      },
      {
        family: "AE-G",
        name: "Gilroy-SemiBold",
        weight: "600",
        style: "normal",
      },
      {
        family: "AE-G",
        name: "Gilroy-Medium",
        weight: "500",
        style: "normal",
      },
      {
        family: "AE-G",
        name: "Gilroy-Regular",
        weight: "normal",
        style: "normal",
      },
      {
        family: "AE-G",
        name: "Gilroy-Light",
        weight: "300",
        style: "normal",
      },
      {
        family: "AE-G",
        name: "Gilroy-UltraLight",
        weight: "200",
        style: "normal",
      },
      {
        family: "AE-G",
        name: "Gilroy-Thin",
        weight: "100",
        style: "normal",
      },
      {
        family: "AE-G",
        name: "Gilroy-BlackItalic",
        weight: "900",
        style: "italic",
      },
      {
        family: "AE-G",
        name: "Gilroy-HeavyItalic",
        weight: "900",
        style: "italic",
      },
      {
        family: "AE-G",
        name: "Gilroy-BoldItalic",
        weight: "bold",
        style: "italic",
      },
      {
        family: "AE-G",
        name: "Gilroy-ExtraBoldItalic",
        weight: "bold",
        style: "italic",
      },
      {
        family: "AE-G",
        name: "Gilroy-SemiBoldItalic",
        weight: "600",
        style: "italic",
      },
      {
        family: "AE-G",
        name: "Gilroy-MediumItalic",
        weight: "500",
        style: "italic",
      },
      {
        family: "AE-G",
        name: "Gilroy-RegularItalic",
        weight: "normal",
        style: "italic",
      },
      {
        family: "AE-G",
        name: "Gilroy-LightItalic",
        weight: "300",
        style: "italic",
      },
      {
        family: "AE-G",
        name: "Gilroy-UltraLightItalic",
        weight: "200",
        style: "italic",
      },
      {
        family: "AE-G",
        name: "Gilroy-ThinItalic",
        weight: "100",
        style: "italic",
      },
    ].map((aeFont) => {
      fontFace = {
        fontFamily: aeFont.family,
        src: [
          `${AECODE.baseurl}assets/font/${aeFont.family}/${aeFont.name}.eot`,
          `${AECODE.baseurl}assets/font/${aeFont.family}/${aeFont.name}.eot?#iefix`,
          `${AECODE.baseurl}assets/font/${aeFont.family}/${aeFont.name}.woff2`,
          `${AECODE.baseurl}assets/font/${aeFont.family}/${aeFont.name}.woff`,
          `${AECODE.baseurl}assets/font/${aeFont.family}/${aeFont.name}.ttf`,
          `${AECODE.baseurl}assets/font/${aeFont.family}/${aeFont.name}.svg#${AECODE.baseurl}assets/font/${aeFont.family}/${aeFont.name}`,
        ],
        fontWeight: aeFont.weight,
        fontStyle: aeFont.style,
      };

      AECODE.Core.update(
        `${AECODE.anilerdemir[1]} style`,
        {},
        `@font-face { font-family: '${fontFace.fontFamily}'; src: ${fontFace.src
          .map((url) => {
            const format = url.includes("?#iefix")
              ? " format('embedded-opentype')"
              : "";
            if (
              url !=
                `${AECODE.baseurl}assets/font/AE-S/Product-Sans-Bold.woff` &&
              url != `${AECODE.baseurl}assets/font/AE-S/Product-Sans-Bold.woff2`
            ) {
              return ` url('${url}')${format}`;
            }
          })
          .join(",")}; font-weight: ${fontFace.fontWeight}; font-style: ${
          fontFace.fontStyle
        }; }\n`
      );
    });
    AECODE.message(Module.fonts.name.toUpperCase());
  }

  /** XHRREQUEST */
  static xhrRequest(url = location.href) {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState == 4) {
        switch (xhr.status) {
          case 400:
          case 401:
          case 403:
          case 404:
          case 500:
            location.href = URL.createObjectURL(
              new Blob(
                [
                  `<!DOCTYPE html>
                <html lang="tr">
                  <head>
                    <meta charset="UTF-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>${xhr.status} | ${location.hostname}</title>
                    <script async type="module" src="${AECODE.baseurl}AE/code.js"
                    ></script>
                  </head>
                  <body></body>
                </html>`,
                ],
                {
                  type: "text/html",
                }
              )
            );
            break;
        }
      }
    };
    xhr.send();
    AECODE.message(Module.xhrRequest.name.toUpperCase());
  }

  /** ASCII */
  static ascii(metin) {
    const asciiArt = {
      A: ["  A  ", " A A ", "AAAAA", "A   A", "A   A"],
      B: ["BBBB ", "B   B", "BBBB ", "B   B", "BBBB "],
      C: [" CCCC", "C    ", "C    ", "C    ", " CCCC"],
      D: ["DDDD ", "D   D", "D   D", "D   D", "DDDD "],
      E: ["EEEEE", "E    ", "EEEEE", "E    ", "EEEEE"],
      F: ["FFFFF", "F    ", "FFFFF", "F    ", "F    "],
      G: [" GGGG", "G    ", "G  GG", "G   G", " GGGG"],
      H: ["H   H", "H   H", "HHHHH", "H   H", "H   H"],
      I: ["IIIII", "  I  ", "  I  ", "  I  ", "IIIII"],
      J: ["JJJJJ", "   J ", "   J ", "J  J ", " JJ  "],
      K: ["K   K", "K  K ", "KK   ", "K  K ", "K   K"],
      L: ["L    ", "L    ", "L    ", "L    ", "LLLLL"],
      M: ["M   M", "MM MM", "M M M", "M   M", "M   M"],
      N: ["N   N", "NN  N", "N N N", "N  NN", "N   N"],
      O: [" OOO ", "O   O", "O   O", "O   O", " OOO "],
      P: ["PPPP ", "P   P", "PPPP ", "P    ", "P    "],
      Q: [" QQQ ", "Q   Q", "Q   Q", "Q  Q ", " QQ Q"],
      R: ["RRRR ", "R   R", "RRRR ", "R  R ", "R   R"],
      S: [" SSS ", "S    ", " SSS ", "    S", " SSS "],
      T: ["TTTTT", "  T  ", "  T  ", "  T  ", "  T  "],
      U: ["U   U", "U   U", "U   U", "U   U", " UUU "],
      V: ["V   V", "V   V", "V   V", " V V ", "  V  "],
      W: ["W   W", "W   W", "W W W", "WW WW", "W   W"],
      X: ["X   X", " X X ", "  X  ", " X X ", "X   X"],
      Y: ["Y   Y", " Y Y ", "  Y  ", "  Y  ", "  Y  "],
      Z: ["ZZZZZ", "   Z ", "  Z  ", " Z   ", "ZZZZZ"],
      0: [" 00  ", "0  0 ", "0  0 ", "0  0 ", " 00  "],
      1: [" 11  ", "1 1  ", "  1  ", "  1  ", "1111 "],
      2: ["2222 ", "   2 ", "  2  ", " 2   ", "2222 "],
      3: ["3333 ", "   3 ", " 33  ", "   3 ", "3333 "],
      4: ["4  4 ", "4  4 ", "4444 ", "   4 ", "   4 "],
      5: ["5555 ", "5    ", "555  ", "   5 ", "555  "],
      6: [" 666 ", "6    ", "6666 ", "6  6 ", " 66  "],
      7: ["7777 ", "   7 ", "  7  ", " 7   ", "7    "],
      8: [" 88  ", "8  8 ", " 88  ", "8  8 ", " 88  "],
      9: [" 99  ", "9  9 ", " 999 ", "   9 ", " 99  "],
      "#": [" # # ", "#####", " # # ", "#####", " # # "],
      " ": ["     ", "     ", "     ", "     ", "     "],
      // Diğer harfleri ve karakterleri buraya ekleyebilirsiniz.
    };

    // ASCII sanatını oluştur
    const satirSayisi = asciiArt["A"].length;
    let asciiSanat = "";
    for (let i = 0; i < satirSayisi; i++) {
      for (let j = 0; j < metin.length; j++) {
        const karakter = metin[j].toUpperCase();
        if (asciiArt[karakter]) {
          asciiSanat += asciiArt[karakter][i] + " ";
        } else {
          asciiSanat += "     ";
        }
      }
      asciiSanat += "\n";
    }
    return asciiSanat;
  }
}
