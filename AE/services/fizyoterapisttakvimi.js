import * as AECODE from "https://anilerdemir.github.io/assets/core/aecode.js";

const socialMedias = AECODE.Module.randomTag();
AECODE.Core.insert("#eluidd54dd61b", AECODE.Core.create(socialMedias));
AECODE.Module.socialMedia(socialMedias);

AECODE.Core.update(`.latest_posts-readon .u-trans-all-2s .text-custom-child .kl-main-bgcolor`,{},`Devamını Oku`);

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
  .m_title {
  text-align: center;
  text-transform: uppercase;
  font-weight: bold;
  }
  .latest_posts-desc{
  text-align: justify;
  }
  `);

AECODE.Core.delete(`.post-details`);
