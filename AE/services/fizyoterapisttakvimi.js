import * as AECODE from "https://anilerdemir.github.io/assets/core/aecode.js";

const socialmedias = AECODE.Module.randomTag();
AECODE.Core.insert(AECODE.anilerdemir[2], AECODE.Core.create(socialmedias));
AECODE.Module.socialMedia(socialmedias);

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
  });
