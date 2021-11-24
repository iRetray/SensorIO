import React, { Fragment } from "react";

import { Ground, Water, Air } from "./sensorComponents";

const ModulePage = ({ currentModule }) => {
  return (
    <Fragment>
      {currentModule === "GROUND" ? (
        <Ground />
      ) : currentModule === "WATER" ? (
        <Water />
      ) : (
        <Air />
      )}
    </Fragment>
  );
};

export default ModulePage;
