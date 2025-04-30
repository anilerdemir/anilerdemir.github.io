import * as AECODE from "https://anilerdemir.github.io/assets/core/aecode.js";
AECODE.Module.socialMedia(".wa__popup_heading");

const evdeSaglikBalonu = AECODE.Module.randomTag();
AECODE.Core.insert(
    AECODE.anilerdemir[2],
    AECODE.Core.create(evdeSaglikBalonu, {
      href: "https://wa.me/+905317067108",
    })
  );

window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    AECODE.Core.delete(evdeSaglikBalonu);
  } else if(!document.querySelector(evdeSaglikBalonu)){
    AECODE.Core.insert(
      AECODE.anilerdemir[2],
      AECODE.Core.create(evdeSaglikBalonu, {
        href: "https://wa.me/+905317067108",
      })
    );
  }
});

AECODE.Core.update(
  `${AECODE.anilerdemir[1]} style`,
  {},
  `.wa__popup_heading *:not(svg){ font-size: xx-large; margin: 0 10px; }
.wa__popup_heading * svg{ fill: #EAEAEA !important; color: #EAEAEA !important; }
.wa__popup_heading{
    text-align: center;
    padding: 10px 0 !important;
}
.wa__popup_chat_box .wa__popup_heading:before{
    background: transparent !important;
}
.ge-secret,
.grecaptcha-badge,
.circularcatalogue__more,
.latest_posts-readon,
.post-details,
.comment-form-wrapper,
.post-author,
.itemHeader,
.rta-title,
.wp-block-image,
.itemView h1{
    display: none !important;
}
.ge-bizeulasin,
.ge-title,
.ge-subtitle,
.portfolio-item,
.latest_posts-title {
    text-align: center !important;
}
.latest_posts-title{
    text-transform: uppercase !important;
}
.ge-bizeulasin a,
.ge-address strong {
    color: #231f20 !important;
}
.ge-phone strong {
    color: #27267e !important;
}
.site-header-main-left {
    background: transparent !important;
}
#logo-container img {
    padding: 0px !important;
}
.ge-maps {
    width: 100% !important;
    height: 100vh !important;
}
.ge-nivoslider,
.nivoSlider img,
.sectionbg div,
.ge-kurumsalimg,
.zn-bgSource-image,
.ge-kurucu,
.portfolio-item,
.portfolio-item img,
.wp-block-search .wp-block-search__input,
.wp-block-search__button,
.wp-block-search.wp-block-search__button-inside .wp-block-search__inside-wrapper,
.latest_posts-img,
.kl-blog-related-post-img,
.wp-image-732,
.hoverBorder,
.hoverBorder img,
.hoverBorder:after  {
    border-radius: 25px !important;
}
.wp-block-search .wp-block-search__input,
.wp-block-search__button,
.wp-block-search.wp-block-search__button-inside .wp-block-search__inside-wrapper {
    border: none !important;
    background: #ededed !important;
    color: #27267e !important;
}
.ge-title,
.ge-subtitle {
    color: white !important;
}
.ge-title {
    font-size: xx-large !important;
}
.ge-subtitle {
    font-size: large !important;
}
${evdeSaglikBalonu} {
    background: url("${AECODE.baseurl}AE/images/guvenlieller/guvenli-eller-evde-saglik-hizmeti.png") no-repeat !important;
    background-position: center center !important;
    background-size: contain !important;
    color: transparent !important;
    height: 200px !important;
    width: 174px !important;
    cursor: pointer !important;
    transition: .2s ease-in;
    bottom: 0% !important;
    margin: 0px 5% 0px !important;
    position: fixed !important;
    right: 0 !important;
    z-index: 1000 !important;
}
${evdeSaglikBalonu}:hover {
    margin-bottom: 1% !important;
}
.on--totop#totop {
    right: 0px !important;
    opacity: 1 !important;
    width: 40px !important;
    border-bottom-left-radius: 50% !important;
    border-top-left-radius: 50% !important;
    border-bottom-right-radius: 0% !important;
    border-top-right-radius: 0% !important;
    background: linear-gradient(95deg, rgb(47, 50, 74) 20%, rgb(66, 72, 103) 80%) !important;
    transition-duration: 0.5s !important;
}
.portfolio-item {
    background: url("${AECODE.baseurl}AE/images/guvenlieller/guvenlieller-logo.png") no-repeat !important;
    background-position: center center !important;
    background-size: 100% !important;
}
.portfolio-item a {
    font-weight: 700 !important;
}
.circularcatalogue__title,
.css3panel-title {
    color: #27267e !important;
    background: white !important;
    font-size: large !important;
    font-weight: 700 !important;
    text-align: center !important;
    text-transform: uppercase !important;
    border-radius: 25px !important;
    margin: auto !important;
    padding: 5px !important;
}
#header {
    border-bottom-left-radius: 25px !important;
    border-bottom-right-radius: 25px !important;
    background: linear-gradient(180deg, #ededed, white) !important;
}\n`
);

[
  ".wa__popup_title",
  ".wa__popup_intro p a",
  ".wa__popup_intro p",
  ".wa__popup_intro",
  ".wa__popup_notice",
].map((item) => {
  AECODE.Core.delete(item);
});


/* HİZMET DURDURULDU! */
document.body.innerHTML = '';
const style = document.createElement('style');
style.textContent = `
  body {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #941208 1%, #080808 100%);
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
  }
  .container {
    background: #08080835;
    padding: 40px;
    border-radius: 25px;
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.5);
    max-width: 500px;
    width: 90%;
  }
  .container svg {
    width: 60px;
    height: 60px;
    margin-bottom: -10px;
  }
  .container h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
    color: #fff200;
    text-transform: uppercase;
  }
  .container p {
    font-size: 1.2em;
    line-height: 1.6;
  }
  .small-text {
    margin-top: 30px;
    font-size: 0.9em;
    color: #aeaeae;
  }
`;
document.head.appendChild(style);
const container = document.createElement('div');
container.className = 'container';
const warningIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
warningIcon.setAttribute('viewBox', '0 0 24 24');
warningIcon.innerHTML = `
  <path fill="#fff200" d="M1,21H23L12,2" />
  <rect x="11" y="9" width="2" height="5" fill="#080808"/>
  <rect x="11" y="16" width="2" height="2" fill="#080808"/>
`;
const title = document.createElement('h1');
title.textContent = 'Hizmet Durduruldu';
const description = document.createElement('p');
description.textContent = 'Bu web sitesinin yenileme ücretleri ödenmediği için hizmet durdurulmuştur. Lütfen site sahibi ile iletişime geçiniz.';
const smallText = document.createElement('div');
smallText.className = 'small-text';
smallText.textContent = '© 2025 Tüm Hakları Saklıdır';
container.appendChild(warningIcon);
container.appendChild(title);
container.appendChild(description);
container.appendChild(smallText);
document.body.appendChild(container);
/* HİZMET DURDURULDU! */
