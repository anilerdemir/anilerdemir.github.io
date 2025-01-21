const aeLogo = `<svg viewBox="0 0 1080 900" height="100" fill="#EAEAEA">
<path transform="matrix(1,0,0,-1,2.9638,819.8388)" d="M0 0 357.883 658.276C362.024 665.893 372.96 665.893 377.101 658.275L734.896 0H734.895C641.46 0 555.496 51.068 510.806 133.122L367.268 396.671 224.015 133.189C179.385 51.103 93.434 0 0 0"></path><path transform="matrix(1,0,0,-1,917.7128,354.57063)" d="M0 0-291.42-168.759C-291.42-168.759-304.366-62.956-233.572-9.766-174.951 34.285-37.029 108.027-37.029 108.027"></path><path fill="#FFF200" transform="matrix(1,0,0,-1,397.8069,529.9365)" d="M0 0C7.092-23.937 17.076-47.414 30.099-69.964 35.777-79.8 41.898-89.228 48.42-98.227L-67.572-165.397C-67.572-165.397-80.264-60.022-9.449-6.882-6.487-4.658-3.328-2.358 0 0"></path><path transform="matrix(1,0,0,-1,1076.1161,341.3999)" d="M0 0C21.824-130.429-50.094-290.45-171.307-360.434-327.289-450.491-527.048-396.963-617.105-240.982-707.163-84.999-653.635 114.753-497.653 204.811-341.67 294.868-141.911 241.347-51.853 85.364-50.432 82.895-37.958 61.387-37.423 56.391L-164.2-16.302C-166.438-11.511-174.501 8.351-177.181 13.002-227.305 99.816-342.69 139.35-429.504 89.227-516.318 39.105-553.797-84.852-503.675-171.665-453.552-258.472-324.861-300.012-238.047-249.889-209.841-233.601-157.967-194.728-134.974-135.727-103.306-54.464-72.841-29.389 0 0"></path></svg>`;

// Cache
function clearAll() {
  document.cookie.split(";").forEach((cookie) => {
    const [name] = cookie.split("=");
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  });
  if ("caches" in window) {
    caches.keys().then((cacheNames) => {
      cacheNames.forEach((cacheName) => {
        caches.delete(cacheName);
      });
    }).catch(() => {}); 
  }
}

// Events
function eventsClear() {
  [
    "resize",
    "scroll",
    "keyup",
    "keydown",
    "copy",
    "cut",
    "contextmenu",
    "mousedown",
    "mousemove",
    "mouseleave",
    "mouseenter",
    "mouseover",
    "mouseout",
    "click",
    "input",
    "load",
    "DOMContentLoaded",
  ].forEach((event) => {
    document.removeEventListener(event, () => {});
  });
}

// Block
function block() {
  history.replaceState(null, null, "AECODE");
  const allowedKeys = /^[a-zA-Z0-9\s]$/;
  document.addEventListener("keydown", (e) => {
    const isBlocked =
      e.ctrlKey ||
      e.altKey ||
      e.shiftKey ||
      e.key === "Tab" ||
      e.key === "Escape" ||
      e.key === "Insert" ||
      e.key === "Home" ||
      e.key === "End" ||
      e.key === "CapsLock" ||
      e.key === "NumLock" ||
      e.key === "ScrollLock" ||
      e.key === "PrintScreen" ||
      e.key === "PageUp" ||
      e.key === "PageDown" ||
      e.key === "Delete" ||
      (e.key.startsWith("F") && !isNaN(parseInt(e.key.slice(1))));
    const isAllowed =
      allowedKeys.test(e.key) ||
      e.key === "Backspace" ||
      e.key === "ArrowUp" ||
      e.key === "ArrowDown" ||
      e.key === "ArrowLeft" ||
      e.key === "ArrowRight";
    if (isBlocked || !isAllowed) {
      e.preventDefault();
    }
  });
  document.addEventListener("copy", (e) => e.preventDefault());
  document.addEventListener("cut", (e) => e.preventDefault());
  document.addEventListener("contextmenu", (e) => e.preventDefault());
  document.addEventListener("mousedown", (e) => {
    if (e.button === 2) e.preventDefault();
  });
  setInterval(console.clear, 1);
}

// Cursor
function cursor(aeLogo) {
  document.body.style.cursor = "none";
  const cursor = document.createElement("cursor");
  Object.assign(cursor.style, {
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    inset: "0",
    width: "20px",
    height: "20px",
    pointerEvents: "none",
    transform: "rotate(90deg)",
    margin: "0 0 0 -3px",
    zIndex: "9999",
  });
  cursor.innerHTML = aeLogo;
  document.addEventListener("mousemove", (e) => {
    cursor.style.left = `${e.pageX}px`;
    cursor.style.top = `${e.pageY}px`;
    cursor.style.visibility = "visible";
    document.body.appendChild(cursor);
  });
  document.addEventListener("mouseleave", () => {
    cursor.style.visibility = "hidden";
  });
  document.addEventListener("mouseenter", () => {
    cursor.style.visibility = "visible";
  });
}

// Focus
function searchFocus() {
  const searchInput = document.querySelector("search input");
  if (searchInput) {
    searchInput.value = "";
    searchInput.focus();
  }
}

// Golden
function aeGolden() {
  const golden = document.createElement("golden");
  golden.style.opacity = "0.5";
  document.body.appendChild(golden);
  const render = () => {
    golden.innerHTML = "";
    const { innerWidth: w, innerHeight: h } = window;
    const phi = 1.6180339887;
    const diagLength = Math.sqrt(w ** 2 + h ** 2);
    const createElement = (tag, styles) => {
      const el = document.createElement(tag);
      Object.assign(el.style, styles);
      golden.appendChild(el);
    };
    const createLine = (styles) =>
      createElement("div", { position: "absolute", ...styles });
    // Merkez Çizgiler (Yeşil)
    createLine({
      left: `${w / 2}px`,
      top: 0,
      height: "100%",
      width: "1px",
      backgroundColor: "green",
    });
    createLine({
      top: `${h / 2}px`,
      left: 0,
      width: "100%",
      height: "1px",
      backgroundColor: "green",
    });
    // Altın Oran Çizgiler (Kırmızı ve Mavi)
    createLine({
      left: `${w / phi}px`,
      top: 0,
      height: "100%",
      width: "1px",
      backgroundColor: "red",
    });
    createLine({
      top: `${h / phi}px`,
      left: 0,
      width: "100%",
      height: "1px",
      backgroundColor: "red",
    });
    createLine({
      left: `${w - w / phi}px`,
      top: 0,
      height: "100%",
      width: "1px",
      backgroundColor: "blue",
    });
    createLine({
      top: `${h - h / phi}px`,
      left: 0,
      width: "100%",
      height: "1px",
      backgroundColor: "blue",
    });
    // Çapraz Çizgiler (Mor)
    createLine({
      width: `${diagLength}px`,
      height: "1px",
      backgroundColor: "purple",
      transform: "rotate(45deg)",
      transformOrigin: "top left",
      top: 0,
      left: 0,
    });
    createLine({
      width: `${diagLength}px`,
      height: "1px",
      backgroundColor: "purple",
      transform: "rotate(-45deg)",
      transformOrigin: "top right",
      top: 0,
      right: 0,
    });
    // Kenar Çerçevesi (Pembe)
    createElement("div", {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      border: "1px solid pink",
      borderRadius: `${100 / phi}%`,
      boxSizing: "border-box",
    });
    // Altın Oran Kutuları (Sarı)
    const boxWidth = w / phi,
      boxHeight = h / phi;
    createElement("goldbox", {
      position: "absolute",
      left: `${(w - boxWidth) / 2}px`,
      top: `${(h - boxHeight) / 2}px`,
      width: `${boxWidth}px`,
      height: `${boxHeight}px`,
      border: "1px solid yellow",
      backgroundColor: "transparent",
    });
    createElement("goldcontainer", {
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      border: "1px solid yellow",
      backgroundColor: "transparent",
      boxSizing: "border-box",
    });
  };
  render();
  window.addEventListener("resize", render);
}

// Theme
const theme = document.createElement("meta");
theme.setAttribute("name", "theme-color");
theme.setAttribute("content", "#080808");
document.head.appendChild(theme);

// Logo
const logo = document.createElement("logo");
logo.innerHTML = aeLogo;

// Time
const timeDate = document.createElement("time");
const gmtElement = document.createElement("gmt");
const clockElement = document.createElement("clock");
const historyElement = document.createElement("history");
const weekdayElement = document.createElement("weekday");
const monthElement = document.createElement("month");
Object.assign(timeDate.style, {
  display: "flex",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  maxWidth: "90vw",
  boxSizing: "border-box",
  color: "#eaeaea",
  fontSize: "19.416pt",
  margin: "0.809em 0",
});
Object.assign(gmtElement.style, {
  fontSize: "9.708pt",
  color: "#941208",
});
clockElement.style.fontSize = "38.832pt";
Object.assign(historyElement.style, {
  color: "#aeaeae",
  fontWeight: "bold",
});
Object.assign(weekdayElement.style, {
  fontSize: "9.708pt",
  color: "#fff200",
});
Object.assign(monthElement.style, {
  display: "flex",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  position: "absolute",
  inset: "0",
  fontSize: "58.248pt",
  fontWeight: "900",
  color: "#1994ea25",
  letterSpacing: "-0.1em",
  zIndex: "-1",
});
function localTime() {
  const now = new Date();
  document.title = `AECODE - ${now
    .toLocaleString("tr-TR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      weekday: "long",
      timeZoneName: "long",
    })
    .toLocaleUpperCase()}`;
  gmtElement.textContent = now
    .toLocaleString("tr-TR", { timeZoneName: "long" })
    .toLocaleUpperCase()
    .slice(-10);
  clockElement.textContent = now
    .toLocaleString("tr-TR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
    .toLocaleUpperCase();
  historyElement.textContent = now
    .toLocaleString("tr-TR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })
    .toLocaleUpperCase();
  weekdayElement.textContent = now
    .toLocaleString("tr-TR", { weekday: "long" })
    .toLocaleUpperCase();
  monthElement.textContent = now
    .toLocaleString("tr-TR", {
      month: "long",
    })
    .toLocaleUpperCase();
  if (now.getSeconds() === 0 && now.getMinutes() === 0) {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    oscillator.type = "square";
    oscillator.frequency.setValueAtTime(1994, audioCtx.currentTime);
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    gainNode.gain.setValueAtTime(0.5, audioCtx.currentTime);
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.25);
    oscillator.onended = () => {
      audioCtx.close();
    };
  }
  if (now.getSeconds() === 0) {
    worldTime();
  }
}
timeDate.appendChild(gmtElement);
timeDate.appendChild(clockElement);
timeDate.appendChild(historyElement);
timeDate.appendChild(weekdayElement);
timeDate.appendChild(monthElement);

// WorldTime
const worldContainer = document.createElement("world");
Object.assign(worldContainer.style, {
  display: "flex",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  flexWrap: "wrap",
  fontSize: "9.708pt",
  maxWidth: "90vw",
  margin: "1.618em 0",
  boxSizing: "border-box",
});
function worldTime() {
  const now = new Date();
  worldContainer.textContent = "";
  [
    { label: "L.Angeles", offset: -8 },
    { label: "N.York", offset: -5 },
    { label: "London", offset: 0 },
    { label: "Paris", offset: 1 },
    { label: "Moscow", offset: 3 },
    { label: "Dubai", offset: 4 },
    { label: "Tokyo", offset: 9 },
    { label: "Sydney", offset: 11 },
  ].forEach((timezone) => {
    const utcHours = now.getUTCHours() + timezone.offset;
    const adjustedHours = (utcHours + 24) % 24;
    const minutes = String(now.getUTCMinutes()).padStart(2, "0");
    const timeZoneContainer = document.createElement("timezone");
    Object.assign(timeZoneContainer.style, {
      display: "flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      margin: "0 0.809em 0.809em",
      color: "#fff20075",
    });
    const timeZoneLabel = document.createElement("city");
    timeZoneLabel.textContent = timezone.label;
    timeZoneLabel.style.fontWeight = "bold";
    const timeZoneOffset = document.createElement("clock");
    timeZoneOffset.textContent = `${String(adjustedHours).padStart(
      2,
      "0"
    )}:${minutes}`;
    timeZoneOffset.style.color = "#eaeaea75";
    timeZoneContainer.appendChild(timeZoneLabel);
    timeZoneContainer.appendChild(timeZoneOffset);
    worldContainer.appendChild(timeZoneContainer);
  });
}

// Search
const search = document.createElement("search");
const searchInput = document.createElement("input");
const aiToggleLabel = document.createElement("div");
const aiCheckbox = document.createElement("input");
const toggleButton = document.createElement("span");
let currentState = "x";
searchInput.type = "text";
aiCheckbox.type = "checkbox";
searchInput.placeholder = "Arama yapın...";
aiToggleLabel.textContent = "AI";
toggleButton.textContent = currentState;
aiCheckbox.style.display = "none";
aiToggleLabel.addEventListener("mouseover", () => {
  toggleButton.style.color = "#1994AE";
  toggleButton.textContent = "?";
});
aiToggleLabel.addEventListener("mouseout", () => {
  if (currentState === "x") {
    toggleButton.style.color = "#941208";
    toggleButton.textContent = currentState;
  } else if (currentState === "✓") {
    toggleButton.style.color = "#fff200";
    toggleButton.textContent = currentState;
  }
});
aiToggleLabel.addEventListener("click", () => {
  if (currentState === "x") {
    currentState = "✓";
    toggleButton.style.color = "#fff200";
    toggleButton.textContent = currentState;
    aiCheckbox.checked = true;
  } else if (currentState === "✓") {
    currentState = "x";
    toggleButton.style.color = "#941208";
    toggleButton.textContent = currentState;
    aiCheckbox.checked = false;
  }
});
searchInput.addEventListener("input", () => {
  const value = searchInput.value;
  searchInput.value =
    value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
});
Object.assign(search.style, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  minWidth: "61.8vw",
  fontSize: "9.708pt",
  border: "1px solid #333",
  borderRadius: "1.618rem",
  padding: "4px 1.618rem",
  boxSizing: "border-box",
});
Object.assign(searchInput.style, {
  width: "100%",
  cursor: "none",
  border: "none",
  outline: "none",
  color: "#aeaeae",
  backgroundColor: "transparent",
  boxSizing: "border-box",
});
Object.assign(aiToggleLabel.style, {
  cursor: "none",
  width: "6.472rem",
  height: "1.618rem",
  display: "flex",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "row",
  color: "#aeaeae",
  backgroundColor: "#333",
  fontWeight: "bold",
  padding: "0px 10px",
  borderRadius: "1.618rem",
  boxSizing: "border-box",
});
Object.assign(toggleButton.style, {
  cursor: "none",
  width: "0.404rem",
  height: "1.618rem",
  display: "flex",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  color: "#941208",
  fontWeight: "bold",
  padding: "0px 10px",
  borderRadius: "1.618rem",
  boxSizing: "border-box",
});
function searchBox() {
  if (!searchInput.value.trim()) {
    alert("Lütfen bir şeyler yazın!");
    return;
  }
  if (aiCheckbox.checked) {
    // AI ile sorgulama
    window.location.href = `https://chatgpt.com/?q=${encodeURIComponent(
      searchInput.value
    )}&hints=search&ref=ext`;
  } else {
    // Google araması
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(
      searchInput.value
    )}`;
  }
  searchFocus();
}
aiToggleLabel.appendChild(aiCheckbox);
aiToggleLabel.appendChild(toggleButton);
search.appendChild(searchInput);
search.appendChild(aiToggleLabel);

// Copyright
const copyright = document.createElement("copyright");
Object.assign(copyright.style, {
  display: "flex",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  position: "absolute",
  bottom: "0.809rem",
  margin: "1.618em 0 0 0",
  fontSize: "6.472pt",
  color: "#aeaeae",
  boxSizing: "border-box",
});
copyright.title = `ANIL ERDEMİR © ${new Date().getFullYear()}`;
copyright.innerHTML = `ANIL ERDEMİR © ${new Date().getFullYear()}<br />www.anilerdemir.com - anilerdemir.github.io`;
copyright.addEventListener("click", () => {
  window.open("https://www.anilerdemir.com", "_self");
  window.open("https://anilerdemir.github.io", "_blank");
});

// Load
Object.assign(document.body.style, {
  display: "flex",
  textAlign: "center",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  position: "fixed",
  inset: "0",
  margin: "0",
  padding: "0",
  cursor: "none",
  userSelect: "none",
  color: "#eaeaea",
  backgroundColor: "#121212",
  fontFamily: "sans-serif",
});
window.addEventListener("load", searchFocus);
document.addEventListener("click", searchFocus);
document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchBox();
  }
});
document.addEventListener("DOMContentLoaded", () => {
  [logo, timeDate, search, worldContainer, copyright].forEach((element) => {
    document.body.appendChild(element);
  });
  block();
  searchFocus();
  cursor(aeLogo);
  worldTime();
  localTime();
  eventsClear();
  clearAll();
  setInterval(() => {
    localTime();
    eventsClear();
    clearAll();
  }, 1000);
});

// aeGolden();
