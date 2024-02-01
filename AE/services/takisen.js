import * as AECODE from "https://www.anilerdemir.com/assets/core/aecode.js";

AECODE.Core.insert(
  "head",
  AECODE.Core.create("link", { rel: "icon", type: "text/x-icon" })
);
AECODE.Core.insert(
  "head",
  AECODE.Core.create("link", { rel: "shortcut icon", type: "text/x-icon" })
);

const socialMedias = AECODE.Module.randomTag();
AECODE.Core.insert(
    ".footerTopTutucu",
    AECODE.Core.create(socialMedias)
  );
AECODE.Module.socialMedia(socialMedias);

AECODE.Core.update(`link[rel='icon']`, {
  href: `${AECODE.baseurl}AE/images/takisen/takisen-icon.png`,
});
AECODE.Core.update(`link[rel='shortcut icon']`, {
  href: `${AECODE.baseurl}AE/images/takisen/takisen-icon.png`,
});

AECODE.Core.update(
  `${AECODE.anilerdemir[1]} style`,
  {},
  `${socialMedias}{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    font-size: xx-large;
  }
  ${socialMedias} *{
    margin: 0 5px;
  }
  #footer {
        background: #efefef !important;
        border-top: 3px solid #d3098c !important;
        border-image: linear-gradient(90deg, transparent 25%, #d3098c 50%, transparent 75%)1 !important;
    }
    #footer div,
    .footerBankaTutucu {
        background: transparent !important;
        background-color: transparent !important;
        border: none !important;
    }
    .footerTopTutucu {
        margin-top: 0px !important;
    }
    .footerBankaTutucu {
        text-align: center !important;
    }
    .footerBankaTutucu,
    .bankaSol {
        float: none !important;
    }    
    .tsLogo {
        width: 300px !important;
        height: auto !important;
    }    
    .tsFooterLogo {
        width: auto !important;
        height: 50px !important;
        margin-bottom: 25px !important;
    }
    .tsBanka {
        width: auto !important;
        height: 25px !important;
    }
    .productItem .productImage a {
        padding-bottom: 100% !important;
    }
    .cargoIcon {
        background: transparent;
        color: #d3098c;
    }
    .navigation,
    .navigation .HeaderMenu2>li:hover>a,
    .navigation .HeaderMenu2>li>ul>li>a:hover {
        background: #231f20 !important;
    }
    .navigation .HeaderMenu2>li>a {
        color: white !important;
    }
    .mycartIcon a:hover,
    .favori a:hover,
    .examineIcon a:hover {
        background: black !important;
    }
    .navigation {
        /* margin-bottom: 25px !important; */
        height: 50px;
    }
    .navigation a {
        text-decoration: none;
    }
    .ProductList div,
    .Block_item div,
    #txtbxNewsletterMail,
    .newsbutton,
    .ProductList {
        border-radius: 10px !important;
    }
    .mycartIcon a,
    .favori a,
    .examineIcon a,
    .discountIcon {
        background: #d3098c !important;
    }
    .dortluAltBlok h5 {
        color: #d3098c !important;
    }
    .slides,
    .flex-control-nav,
    .flex-direction-nav {
        mix-blend-mode: multiply;
    }
    .slides li {
        /* background: url("https://www.anilerdemir.com/AE/images/takisen/takisen-isigini-yansit.png") no-repeat !important; */
        background-position: 2% top !important;
        background-size: 10% !important;
    }
    #pnlSlider {
        margin: auto auto 1% auto !important;
        background: url("${AECODE.baseurl}AE/images/takisen/takisen-bgSlider.jpg") no-repeat !important;
        background-position: center top !important;
        background-size: cover !important;
    }
    #pnlSlider img {
        height: 360px !important;
        /* 480px */
        padding: 0% !important;
        background: transparent !important;
        object-fit: scale-down !important;
    }
    .bottomHead {
        padding-bottom: 50px;
    }
    a,
    .bottomHead a {
        text-decoration: none !important;
    }
    .hazirSablonlar-17 {
        margin-top: 5px;
    }
    .ProductList {
        margin: 1%;
        /* background: lightpink; */
    }
    .StokYok,
    .IndirimVar .regularPrice span{
        text-decoration: line-through;
        text-decoration-color: #d3098c;
    }
    .StokYok span {
        color: #d3098c;
        background: none;
        font-weight: bold;
        font-size: xx-large;
        text-transform: uppercase;
    }
    .StokYok .productImage {
        filter: grayscale(1);
        opacity: 0.5;
    }
    .StokYok .productPrice {
        visibility: hidden;
    }
    .pageNumber a,
    .pageNumber a.SelectedSayfa{
        border: none !important;
        border-radius: 10px;
    }
    .pageNumber a.SelectedSayfa,
    .buyfastbutton {
        background: #d3098c !important;
    }
    @media screen and (min-width: 1042px) {
        .logoArea,
        .headerContent {
            background: url("${AECODE.baseurl}AE/images/takisen/ts-favicon.png") no-repeat !important;
            background-position: left center !important;
            background-size: 90px !important;
        }
    }
    @media screen and (max-width: 767px) {
        .ProductListContent,
        .homeContainer,
        .ProductListContent,
        .ProductList,
        .ProductList .sort_4 {
            display: inherit !important;
        }
    }\n`
);

["#divTicimaxCopyrightContent", ".tsTitle", ".tsSubTitle", ".satir1"].map(
  (item) => {
    AECODE.Core.delete(item);
  }
);
