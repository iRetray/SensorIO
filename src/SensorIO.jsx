import React, { Fragment, useState } from "react";

import LateralNav from "./components/LateralNav";
import ModulePage from "./components/ModulePage";

function SensorIO() {
  const [currentModule, setCurrentModule] = useState("GROUND");

  return (
    <Fragment>
      <div className="MainContainer">
        <LateralNav setCurrentModule={setCurrentModule} />
        <div className="ModuleMainSection">
          <ModulePage currentModule={currentModule} />
        </div>
      </div>
    </Fragment>
  );
}

export default SensorIO;
