export let coreStatus = [
  { create: [], item: 0, warning: [], warnItem: 0, error: [], errorItem: 0 },
  { insert: [], item: 0, warning: [], warnItem: 0, error: [], errorItem: 0 },
  { update: [], item: 0, warning: [], warnItem: 0, error: [], errorItem: 0 },
  {
    attrDelete: [],
    item: 0,
    warning: [],
    warnItem: 0,
    error: [],
    errorItem: 0,
  },
  { delete: [], item: 0, warning: [], warnItem: 0, error: [], errorItem: 0 },
];

/** CORE */
export class Core {
  /** CREATE
    @param {string} tagName - Yeni element oluşturur.
    @param {list} attributes - Oluşturulan elemente özellik ekler.
    @param {string} content - Oluşturulan elemente içerik ekler.*/
  static create(tagName, attributes = {}, content = "") {
    try {
      if (document.createElement(tagName)) {
        const element = document.createElement(tagName);
        Object.keys(attributes).forEach((attr) =>
          attr === "title"
            ? (element.addEventListener(
                "mouseover",
                () => (element.title = attributes[attr])
              ),
              element.addEventListener("mouseout", () =>
                element.removeAttribute("title")
              ))
            : attr === "href" && tagName !== "link"
            ? element.addEventListener(
                "click",
                () => (location.href = attributes[attr])
              )
            : element.setAttribute(attr, attributes[attr])
        );
        element.innerHTML = content;
        coreStatus[0].create[coreStatus[0].item++] = `${element.tagName}`;
        return element;
      } else {
        throw new Error(tagName);
      }
    } catch (err) {
      coreStatus[0].error[coreStatus[0].errorItem++] = `${tagName
        .toUpperCase()
        .substring(0, "anilerdemir".length * 4)}`;
    }
  }

  /** INSERT
    @param {tag} selector - Seçilen element varsa işaretler, yoksa hata mesajı döndürür.
    @param {string} element - Seçilen elemente yeni element ekler.
    @param {value} pre - Değer verildiğinde prepend olarak ekler.*/
  static insert(selector, elements, pre = null) {
    try {
      if (document.querySelector(selector)) {
        if (!Array.isArray(elements)) {
          pre == null
            ? document.querySelector(selector).append(elements)
            : document.querySelector(selector).prepend(elements);
          coreStatus[1].insert[
            coreStatus[1].item
          ] = `${selector.toUpperCase()} « ${elements.tagName}`;
          coreStatus[1].item++;
        } else {
          elements.forEach((element) => {
            pre == null
              ? document.querySelector(selector).append(element)
              : document.querySelector(selector).prepend(element);
            coreStatus[1].insert[
              coreStatus[1].item++
            ] = `${selector.toUpperCase()} « ${element.tagName}`;
          });
        }
      } else {
        throw new Error(elements.tagName);
      }
    } catch (err) {
      if (err instanceof TypeError) {
        coreStatus[1].warning[coreStatus[1].warnItem++] = `${selector
          .toUpperCase()
          .substring(0, "anilerdemir".length * 4)} « !`;
      } else {
        coreStatus[1].error[
          coreStatus[1].errorItem++
        ] = `! « ${err.message.substring(0, "anilerdemir".length * 4)}`;
      }
    }
  }

  /** UPDATE
    @param {tag} selector - Seçilen element varsa işaretler, yoksa hata mesajı döndürür.
    @param {list} attributes - Seçilen elementin özelliklerini günceller.
    @param {string} content - Seçilen elementin içeriğini günceller.*/
  static update(selector, attributes = {}, content = "", contentValue = true) {
    try {
      const element = document.querySelector(selector);
      if (element) {
        let attrValues = "";
        if (Object.keys(attributes).length === 0 && content === "") {
          throw new Error();
        } else {
          if (Object.keys(attributes).length === 0) {
            const existingAttributes = element.attributes;
            for (let i = 0; i < existingAttributes.length; i++) {
              const attrName = existingAttributes[i].name;
              const attrValue = existingAttributes[i].value;
              attributes[attrName] = attrValue;
            }
          }
          if (contentValue) {
            content = `${content} ${element.innerHTML}`;
          }
        }
        Object.keys(attributes).forEach((attr) => {
          if (attr === "title") {
            element.addEventListener(
              "mouseover",
              () => (element.title = attributes[attr])
            );
            element.addEventListener("mouseout", () =>
              element.removeAttribute("title")
            );
          } else if (attr === "href" && element.tagName !== "LINK") {
            element.addEventListener(
              "click",
              () => (location.href = attributes[attr])
            );
          } else if (
            attr !== "title" &&
            (attr !== "href" || element.tagName === "LINK")
          ) {
            element.setAttribute(attr, attributes[attr]);
          }
          attrValues += `${attr.toUpperCase()}: ${attributes[attr].substring(
            0,
            "anilerdemir".length
          )}; `;
        });
        element.innerHTML = content;
        coreStatus[2].update[coreStatus[2].item++] = `${
          element.tagName
        } { ${attrValues}} ' ${content.substring(
          0,
          "anilerdemir".length
        )} '...`;
      } else {
        throw new Error();
      }
    } catch (err) {
      if (
        document.querySelector(selector) &&
        Object.keys(attributes).length === 0 &&
        content === ""
      ) {
        coreStatus[2].warning[coreStatus[2].warnItem++] = `${selector
          .toUpperCase()
          .substring(0, "anilerdemir".length * 4)}`;
      } else {
        coreStatus[2].error[coreStatus[2].errorItem++] = `${selector
          .toUpperCase()
          .substring(0, "anilerdemir".length * 4)}`;
      }
    }
  }

  /** DELETE
    @param {tag} selector - Seçilen element varsa siler, yoksa hata mesajı döndürür.
    @param {array} attributes - Seçilen elementin belirtilen parametrelerini siler, yoksa hata mesajı döndürür.*/
  static delete(selector, attributes = []) {
    try {
      const elements = document.querySelectorAll(selector);
      if (elements.length === 0) {
        throw new Error(selector);
      } else if (Array.isArray(attributes) && attributes.length === 0) {
        elements.forEach((element) => {
          element.remove();
          coreStatus[4].delete[coreStatus[4].item++] = `${element.tagName}`;
        });
      } else if (Array.isArray(attributes)) {
        elements.forEach((element) => {
          attributes.forEach((attr) => {
            if (element.hasAttribute(attr)) {
              element.removeAttribute(attr);
              coreStatus[3].attrDelete[coreStatus[3].item++] = `${
                element.tagName
              } ${attr.toUpperCase()}`;
            } else {
              throw new Error(`${element.tagName} ${attr}`);
            }
          });
        });
      }
    } catch (err) {
      if (document.querySelectorAll(selector).length === 0) {
        coreStatus[4].error[coreStatus[4].errorItem++] = `${err.message
          .toUpperCase()
          .substring(0, "anilerdemir".length * 4)}`;
      } else {
        coreStatus[3].warning[coreStatus[3].warnItem++] = `${err.message
          .toUpperCase()
          .substring(0, "anilerdemir".length * 4)}`;
      }
    }
  }
}
