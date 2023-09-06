import React from "react";
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: "GTM-K3GKPJ5",
};

TagManager.initialize(tagManagerArgs);

const LazyTagManager = () => {
  return <div></div>;
};

export default LazyTagManager;
