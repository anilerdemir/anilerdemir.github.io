import * as AECODE from "https://anilerdemir.github.io/assets/core/aecode.js";
const xhrTag = AECODE.Module.randomTag();
AECODE.Core.insert("body", AECODE.Core.create(xhrTag));

const httpErrors = {
  400: "Bad Request - Hatalı İstek",
  401: "Unauthorized - Yetkisiz",
  403: "Forbidden - Yasaklı",
  404: "Not Found - Bulunamadı",
  500: "Internal Server Error - Sunucu Hatası",
};
AECODE.Core.update(
  xhrTag,
  {},
  `<svg id="xhrsvg" width="380px" height="500px" viewBox="0 0 837 1045">
<g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage">
    <path d="M353,9 L626.664028,170 L626.664028,487 L353,642 L79.3359724,487 L79.3359724,170 L353,9 Z" id="Polygon-1" stroke="#007FB2" stroke-width="6" sketch:type="MSShapeGroup"></path>
    <path d="M78.5,529 L147,569.186414 L147,648.311216 L78.5,687 L10,648.311216 L10,569.186414 L78.5,529 Z" id="Polygon-2" stroke="#EF4A5B" stroke-width="6" sketch:type="MSShapeGroup"></path>
    <path d="M773,186 L827,217.538705 L827,279.636651 L773,310 L719,279.636651 L719,217.538705 L773,186 Z" id="Polygon-3" stroke="#795D9C" stroke-width="6" sketch:type="MSShapeGroup"></path>
    <path d="M639,529 L773,607.846761 L773,763.091627 L639,839 L505,763.091627 L505,607.846761 L639,529 Z" id="Polygon-4" stroke="#F2773F" stroke-width="6" sketch:type="MSShapeGroup"></path>
    <path d="M281,801 L383,861.025276 L383,979.21169 L281,1037 L179,979.21169 L179,861.025276 L281,801 Z" id="Polygon-5" stroke="#36B455" stroke-width="6" sketch:type="MSShapeGroup"></path>
</g>
</svg>
<div class="message-box">
<h1>${document.title.substring(0, 3)}</h1>
<h2>${httpErrors[parseInt(document.title.substring(0, 3))].toUpperCase()}</h2>
<div class="button">
<div class="action-link-wrap fa-fade">
  <a onclick="history.back(-2)" class="link-button link-back-button"><i class="fa-solid fa-caret-left fa-2xl"></i> GO BACK - GERİ DÖN <i class="fa-solid fa-caret-right fa-2xl"></i></a>
</div>
</div>
</div>
<canvas></canvas>`
);

AECODE.Effect.matrix();

AECODE.Core.update(
  `${AECODE.anilerdemir[1]} style`,
  {},
  `body {
    background-color: #231f20 !important;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  canvas {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    }
  svg#xhrsvg {
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    left: 5%;
  }
  .message-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    color: #eaeaea;
    font-family: AE-G;
  }
  .message-box h1 {
    font-size: 100pt;
    line-height: 46px;
    margin-bottom: 40px;
    font-weight: 900;
  }
  .message-box h2 {
    font-family: AE-G;
    font-weight: normal;
  }
  .button .action-link-wrap {
    margin-top: 40px;
  }
  .button .action-link-wrap a {
    background: #fff200;
    padding: 8px 25px;
    border-radius: 25px;
    color: #231f20;
    font-weight: bold;
    font-size: 14px;
    transition: all 0.3s linear;
    cursor: pointer;
    text-decoration: none;
    margin-right: 10px
  }
  .button .action-link-wrap a:hover {
    background: #aeaeae;
    color: #231f20;
  }
  #Polygon-1 , #Polygon-2 , #Polygon-3 , #Polygon-4 , #Polygon-4, #Polygon-5 {
    animation: float 1s infinite ease-in-out alternate;
  }
  #Polygon-2 {
    animation-delay: .2s; 
  }
  #Polygon-3 {
    animation-delay: .4s; 
  }
  #Polygon-4 {
    animation-delay: .6s; 
  }
  #Polygon-5 {
    animation-delay: .8s; 
  }
  @keyframes float {
      100% {
      transform: translateY(20px);
    }
  }`
);

AECODE.Core.delete(AECODE.anilerdemir[3]);