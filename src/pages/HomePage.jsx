import React from "react";
import Fullpage, {
  FullPageSections,
  FullpageSection,
} from "@ap.cx/react-fullpage";
import ASection from "../sections/ASection";
import BSection from "../sections/BSection";
import ESection from "../sections/ESection";
import CSection from "../sections/CSection";
import DSection from "../sections/DSection";

const HomePage = () => {
  return (
    <Fullpage>
      <FullPageSections>
        <FullpageSection
          style={{ position: "relative", height: "100vh", overflow: "hidden" }}
        >
          <ASection />
        </FullpageSection>
        <FullpageSection style={{ height: "100vh" }}>
          <BSection />
        </FullpageSection>
        <FullpageSection
          style={{ height: "100vh", backgroundColor: "#03091C" }}
        >
          <CSection />
        </FullpageSection>
        {/* Uncomment if needed */}
        {/* <FullpageSection
          style={{ height: "100vh" }}
        >
          <DSection />
        </FullpageSection> */}
        <FullpageSection
          style={{ height: "100vh" }}
        >
          <ESection />
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
};

export default HomePage;
