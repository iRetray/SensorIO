import React, { Fragment } from "react";

import { AiOutlineGithub } from "react-icons/ai";
import { GiGroundSprout } from "react-icons/gi";
import { IoWater } from "react-icons/io5";
import { TiWaves } from "react-icons/ti";

import chipIcon from "../assets/chipBlue.png";

// eslint-disable-next-line react/prop-types
const DeviceItem = ({ name, icon }) => (
  <div className="deviceItem">
    <div className="icon">{icon}</div>
    <p className="nameItem">{name}</p>
  </div>
);

const LateralNav = () => {
  const goToRepo = () => {
    window.open("https://github.com/iRetray/SensorIO", "_blank");
  };

  return (
    <Fragment>
      <div className="LateralNavContainer">
        <div>
          <div className="nameAppContainer">
            <img src={chipIcon} alt="" className="chipImage" />
            <div>
              <p className="nameApp">Sensor.io</p>
              <p className="subtitle">UI para dispositivos de IOT</p>
            </div>
          </div>
          <div className="devicesContainer">
            <p className="titleDevices">Listado de dispositivos</p>
            <div className="devicesSection">
              <DeviceItem
                name="Humedad del suelo"
                icon={<GiGroundSprout size={20} />}
              />
              <DeviceItem name="Nivel del agua" icon={<IoWater size={20} />} />
              <DeviceItem name="Calidad de aire" icon={<TiWaves size={20} />} />
            </div>
          </div>
        </div>

        <div className="versionContainer">
          <div>
            <p>Version de desarrollo</p>
            <p className="version">Sensor.io V 0.1.0 Alpha</p>
          </div>
          <div className="githubLink" onClick={goToRepo}>
            <AiOutlineGithub size={30} />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default LateralNav;
