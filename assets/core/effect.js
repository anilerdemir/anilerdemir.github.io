import * as AECODE from "https://anilerdemir.github.io/assets/core/aecode.js";
/** EFFECT */
export class Effect {
  constructor(id) {
    this.id = document.querySelector(id);
    this.chars = "!<>-_\\/[]{}—=+*^?#________";
    this.codeTextUpdate = this.codeTextUpdate.bind(this);
  }
  /** CODE */
  codeText(newText) {
    this.queue = [];
    Array.from({
      length: Math.max(this.id.innerText.length, newText.length),
    }).forEach((_, i) => {
      const from = this.id.innerText[i] || "",
        to = newText[i] || "",
        start = Math.floor(Math.random() * 40),
        end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    });
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.codeTextUpdate();
    return new Promise((resolve) => (this.resolve = resolve));
  }
  codeTextUpdate() {
    let output = "";
    let complete = 0;
    const codeSpan = AECODE.Module.randomTag();
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.chars[Math.floor(Math.random() * this.chars.length)];
          this.queue[i].char = char;
        }
        output += `<${codeSpan} style="color: ${AECODE.Module.randomColor()};">${char}</${codeSpan}>`;
      } else {
        output += from;
      }
    }
    this.id.innerHTML = output;
    complete === this.queue.length
      ? this.resolve()
      : ((this.frameRequest = requestAnimationFrame(this.codeTextUpdate)),
        this.frame++);
  }
  static code(tagName, phrases) {
    if (document.querySelector(tagName)) {
      let counter = 0;
      const next = () => {
        new Effect(tagName).codeText(phrases[counter]).then(() => {
          setTimeout(next, 1000);
        });
        counter = (counter + 1) % phrases.length;
      };
      next();
    }
  }
  static matrix() {
    let screenY =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth,
      screenX =
        window.innerHeight ||
        document.documentElement.clientHeight ||
        document.body.clientHeight,
      canvas = document.querySelector("canvas"),
      ctx = canvas.getContext("2d"),
      fallingCharArr = [],
      fontSize = 10,
      maxColums = screenY / fontSize;
    canvas.width = screenY;
    canvas.height = screenX;
    const charArr = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
    ];
    function randomInt(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
    function randomFloat(min, max) {
      return Math.random() * (max - min) + min;
    }
    function Point(x, y) {
      this.x = x;
      this.y = y;
    }
    Point.prototype.draw = function (ctx) {
      this.value = charArr[randomInt(0, charArr.length - 1)];
      this.speed = randomFloat(1, 5);
      ctx.fillStyle = AECODE.Module.randomColor();
      ctx.font = fontSize + "pt AE-M";
      ctx.fillText(this.value, this.x, this.y);
      this.y += this.speed;
      if (this.y > screenX) {
        this.y = randomFloat(-100, 0);
        this.speed = randomFloat(2, 5);
      }
    };
    for (let i = 0; i < maxColums; i++) {
      fallingCharArr.push(new Point(i * fontSize, randomFloat(-2000, 0)));
    }
    let update = () => {
      ctx.fillStyle = "#231F20";
      ctx.fillRect(0, 0, screenY, screenX);
      let i = fallingCharArr.length;
      while (i--) {
        fallingCharArr[i].draw(ctx);
      }
      requestAnimationFrame(update);
    };
    update();
  }
}
