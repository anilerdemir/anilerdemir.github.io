import * as AECODE from "https://anilerdemir.github.io/assets/core/aecode.js";

const socialMedias = AECODE.Module.randomTag();
AECODE.Core.insert(
    ".footerTopTutucu",
    AECODE.Core.create(socialMedias)
  );
AECODE.Module.socialMedia(socialMedias);
