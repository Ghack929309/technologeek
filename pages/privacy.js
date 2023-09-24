import React from "react";
import { PrivacyComponent } from "../components/privacyComponent";
import { SeoComponent } from "../components/SeoComponent";
import { Analytics } from "../components/Analytics";

const Privacy = () => {
  return (
    <>
      <SeoComponent title="TechchnoloGeek | Privacy & Policies" />
      <PrivacyComponent />
      <Analytics />
    </>
  );
};
export default Privacy;
