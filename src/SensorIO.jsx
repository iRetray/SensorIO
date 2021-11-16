import React, { Fragment } from "react";

import LateralNav from "./components/LateralNav";
import HeaderModule from "./components/HeaderModule";
import ModulePage from "./components/ModulePage";

function SensorIO() {
  return (
    <Fragment>
      <div className="MainContainer">
        <LateralNav />
        <div className="ModuleMainSection">
          <HeaderModule />
          <ModulePage />
        </div>
      </div>
    </Fragment>
  );
}

export default SensorIO;
