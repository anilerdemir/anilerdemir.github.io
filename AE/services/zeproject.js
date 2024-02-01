import * as AECODE from "https://www.anilerdemir.com/assets/core/aecode.js";

const socialMedias = AECODE.Module.randomTag();
AECODE.Core.insert(
    "#fancy-title-54",
    AECODE.Core.create(socialMedias)
);
AECODE.Module.socialMedia(socialMedias);

AECODE.Core.update(
  `${AECODE.anilerdemir[1]} style`,
  {},
  `${socialMedias}{
    font-size: xx-large;
  }
  ${socialMedias} *{
    fill: #EAEAEA;
    color: #EAEAEA;
    margin: 0 5px;
  }
  .trans-header .bg-true.mk-header:not(.a-sticky) .mk-header-inner {
        background-color: rgba(211, 211, 211, 0.41) !important;
    }
    #background-layer--21{
        background-size: cover;
    }
    .sticky-style-fixed.header-style-1 .mk-header-holder,
    .sticky-style-fixed.header-style-3 .mk-header-holder,
    .sticky-style-fixed.header-style-1.a-sticky .mk-header-holder,
    .sticky-style-fixed.header-style-3.a-sticky .mk-header-holder {
        top: 0px;
    }`
);

["#mk-footer .footer-wrapper", ".mk-header-toolbar", "#sadece-mobil", "#fancy-title-54 span span a", "#fancy-title-54 span span", "#fancy-title-54 span"].map(
  (item) => AECODE.Core.delete(item)
);
