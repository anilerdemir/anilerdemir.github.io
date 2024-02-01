import * as AECODE from "https://anilerdemir.github.io/assets/core/aecode.js";
const consoles = ["SYSTEM", "INFO", "WARNING", "ERROR"],
  styles = [
    { bg: "#007bff", color: "#EAEAEA", label: "CREATE" },
    { bg: "#28a745", color: "#EAEAEA", label: "INSERT" },
    { bg: "#ffc107", color: "#231F20", label: "UPDATE" },
    { bg: "#a35ca3", color: "#EAEAEA", label: "ATTR DELETE" },
    { bg: "#dc3545", color: "#EAEAEA", label: "DELETE" },
  ];

export function info() {
  console.log(AECODE.Module.ascii(""));
  console.group(
    `%c                          
       █████╗███████╗     
      ██╔══████╔════╝     
      ████████████╗       
      ██╔══████╔══╝       
      ██║  █████████╗     
      ╚═╝  ╚═╚══════╝     %c
       ANIL ERDEMİR © ${new Date().getFullYear()}      
        www.anilerdemir.com       
                                                    %c
              A  E  C  O  D  E             
%c
TELİF HAKKI             
%c
Bu web sitesinin tüm içeriği, ANIL ERDEMİR'e aittir ve telif hakları ile diğer fikri mülkiyet hakları tarafından korunmaktadır. İzinsiz kullanımı, çoğaltılması veya dağıtılması yasaktır.

Bu web sitesinin içeriği, genel bilgilendirme amacıyla sunulmuştur. İçerik doğruluğunu sağlamak için makul çaba sarf edilmiştir, ancak herhangi bir garanti verilmemekte ve sorumluluk kabul edilmemektedir. Bu nedenle, web sitesindeki bilgilere dayanarak alınan herhangi bir eylem veya karardan dolayı ortaya çıkan herhangi bir zarar veya kayıptan sorumlu tutulamayız.

Web sitesinde yer alan bağlantılar, üçüncü taraf web sitelerine yönlendirebilir. Bu bağlantılar sadece referans amaçlıdır ve bağlantılı web sitelerinin içeriği veya güvenilirliği üzerinde kontrolümüz yoktur. Bu nedenle, bağlantılı web sitelerin içeriği veya kullanımı nedeniyle ortaya çıkan herhangi bir zarardan sorumlu tutulamayız.

Web sitesinin tasarımı, grafikleri, logoları, ticari markaları ve diğer unsurları ANIL ERDEMİR'e aittir. Bu unsurların izinsiz kullanımı yasaktır. Web sitesinin kullanımı, geçerli yasalar ve düzenlemeler çerçevesinde yapılmalıdır. İzinsiz veya kötü niyetli kullanım, yasal sonuçlar doğurabilir.

Bu telif hakkı metni, ANIL ERDEMİR tarafından herhangi bir zamanda değiştirilebilir veya güncellenebilir. Bu nedenle, web sitesini ziyaret ettiğinizde en son güncellemeleri kontrol etmekten sorumlusunuz.

Herhangi bir soru veya açıklama için, lütfen iletişim bilgilerimizi kullanarak bize ulaşın.
%c
ANIL ERDEMİR © ${new Date().getFullYear()}`,

    "padding:0 1%; background: #231F20; color: #FFF200;text-align: justify;",
    "padding:0 1%; background: #231F20; color: #FFF200;text-align: justify; font-family: sans-serif;",
    "padding:0 1%; background: #EAEAEA; color: #231F20;text-align: justify; font-family: sans-serif;",
    "padding:0 1%;  color: #941208;text-align: justify; font-family: sans-serif; font-weight: 900",
    "padding:0 1%; color: #AEAEAE; text-align: justify; font-family: sans-serif; font-weight: normal",
    "padding:0 1%; color: #FFF200; text-align: justify; font-family: sans-serif; font-weight: normal"
  );

  console.table({
    STATISTICS: {
      CREATE: AECODE.coreStatus[0].item,
      INSERT: AECODE.coreStatus[1].item,
      UPDATE: AECODE.coreStatus[2].item,
      DELETE: AECODE.coreStatus[3].item + AECODE.coreStatus[4].item,
      LOG: AECODE.messages.length,
      INFO: AECODE.coreStatus.reduce((sum, status) => sum + status.item, 0),
      WARNING: AECODE.coreStatus.reduce(
        (sum, status) => sum + status.warnItem,
        0
      ),
      ERROR: AECODE.coreStatus.reduce(
        (sum, status) => sum + status.errorItem,
        0
      ),
    },
  });

  AECODE.serviceStatus == true
    ? console.log(
        "%c SERVICE %c CONNECTED",
        "color: #17a2b8; font-family: sans-serif;",
        "color: #28a745; font-family: sans-serif;"
      )
    : console.log(
        "%c SERVICE %c DISCONNECTED",
        "color: #17a2b8; font-family: sans-serif;",
        "color: #dc3545; font-family: sans-serif;"
      );

  consoles.forEach((item) => {
    if (item === "INFO") {
      /** INFO */
      console.group(
        `%c${item} : ${AECODE.coreStatus.reduce(
          (sum, status) => sum + status.item,
          0
        )}`,
        `padding: 0 1%; border-radius: 25px; background: #17a2b8; color: #EAEAEA; font-family: sans-serif;`
      );
      for (let i = 0; i < 5; i++) {
        let coreStatus = [
          AECODE.coreStatus[i].create,
          AECODE.coreStatus[i].insert,
          AECODE.coreStatus[i].update,
          AECODE.coreStatus[i].attrDelete,
          AECODE.coreStatus[i].delete,
        ];
        console.group(
          `%c${styles[i].label} : ${AECODE.coreStatus[i].item}`,
          `padding: 0 1%; border-radius: 25px; background: ${styles[i].bg}; color: ${styles[i].color}; font-family: sans-serif;`
        );
        coreStatus[i].forEach((item) => {
          console.info(
            `%c${styles[i].label}`,
            `padding: 0 1%; color: ${styles[i].bg}; font-family: sans-serif;`,
            item
          );
        });
        console.groupEnd();
      }
    } else if (item === "WARNING" || item === "ERROR") {
      /** WARNING | ERROR */
      console.group(
        `%c${item} : ${
          item === "WARNING"
            ? AECODE.coreStatus.reduce(
                (sum, status) => sum + status.warnItem,
                0
              )
            : AECODE.coreStatus.reduce(
                (sum, status) => sum + status.errorItem,
                0
              )
        }`,
        `padding: 0 1%; border-radius: 25px; background: #17a2b8; color: #EAEAEA; font-family: sans-serif;`
      );
      styles.forEach((style, index) => {
        const parameters = item === "WARNING"
          ? AECODE.coreStatus[index].warning
          : AECODE.coreStatus[index].error;
        parameters.forEach((parameter) => {
          const consoleFunc = item === "WARNING" ? console.warn : console.error;
          consoleFunc(
            `%c${style.label}`,
            `padding: 0 1%; background: ${style.bg}; color: ${style.color}; font-family: sans-serif;`,
            parameter
          );
        });
      });
    } else {
      /** SYSTEM */
      console.group(
        `%c${item} : ${AECODE.messages.length}`,
        `padding: 0 1%; border-radius: 25px; background: #17a2b8; color: #EAEAEA; font-family: sans-serif;`
      );
      AECODE.messages.forEach((item) => {
        console.log(
          "%cMODULE ADDED",
          "padding: 0 1%; color: #17a2b8; font-family: sans-serif;",
          item
        );
      });
    }
    console.groupEnd();
  });

  console.groupEnd();
  console.groupCollapsed(
    `%c.ıl${"⁞".repeat(
      45
    )}| ANIL ERDEMIR © ${new Date().getFullYear()} |${"⁞".repeat(45)}lı.`,
    "padding: 0 1%; border-radius: 25px; background: #231F20; color: #EAEAEA; font-family: sans-serif; font-weight: 900;"
  );
  console.log(
    `

                                              ▄▄█████████████▄▄▄
                                          ▄████████████████████████▄
                           ▄█▄         ▄██████████████████████████████▄
                          ████▄      ███████████████████████████████████▄
                         ███████    ████████████████▀▀▀▀▀▀█████████████████▄
                       ▄█████████ ████████████▀▀            ▀██████████████
                      ▄██████████████████████▀             ▄████████████████▀
                     ▄██████████████████████           ▄▄███████████████▀
                    ███████████████████████         ▄███████████████▀▀       ╓▄▄
                   ███████████████████████        ▄██████████████▀▀        ▄█████
                 ▄████████████████████████       ████████████▀▀          ▄███████
                ▄███████████ ████████████▌      ██████████▀             █████████
               ▄██████████▀   ████████████     ▐██████▀                █████████
              ███████████▀     ▀██████████▌    ███▀▀                  ██████████
             ███████████        ▀███████████                        ▄██████████
            ███████████    \x1b[33m@╢╣ \x1b[0m  ▀███████████▄                    ▄███████████
          ▄███████████    \x1b[33m╓╢▒▒▒╣\x1b[0m   █████████████▄▄             ▄████████████▀
         ▄██████████▀     \x1b[33m╢▒▒▒▒▒╢\x1b[0m   ██████████████████▄▄▄▄▄████████████████▀
        ███████████▀     \x1b[33m]▒▒▒▒╣╜\x1b[0m     ▀███████████████████████████████████▀
       ███████████       \x1b[33m║╢╜\x1b[0m          ▀███████████████████████████████▀
      ███████████                      ▀███████████████████████████▀▀
    ▄██████████▀                         ▀██████████████████▀▀▀▀
   ▄████████▀▀                             ▀█████████▄
  ███████▀                                    ▀▀██████▄
  ▀▀                                                 ▀▀

%c.ıl${"⁞".repeat(45)}| www.anilerdemir.com |${"⁞".repeat(45)}lı.`,
    "padding: 0 1%; border-radius: 25px; background: #231F20; color: #EAEAEA; font-family: sans-serif; font-weight: 900;"
  );
  console.groupEnd();
  console.log(AECODE.Module.ascii(""));
}
