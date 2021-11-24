import React, { Fragment, useEffect, useState } from "react";

import { ref } from "firebase/database";
import { useDatabase, useDatabaseListData } from "reactfire";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

import sensorGround from "../../assets/sensorGround.jpg";

export const Ground = () => {
  const database = useDatabase();
  const groundRef = ref(database, "SENSORHUMEDAD");
  const { status, data: firebaseData } = useDatabaseListData(groundRef);
  const [graphData, setGraphData] = useState({
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Comportamiento del sensor de Humedad del suelo",
        },
      },
    },
    data: {
      labels: [],
      datasets: [
        {
          label: "Sensor de humedad",
          data: [],
          borderColor: "#006d75",
          backgroundColor: "#13c2c2",
        },
      ],
    },
  });

  useEffect(() => {
    if (status === "success") {
      setGraphData({
        options: {
          responsive: true,
          plugins: {
            legend: {
              position: "top",
            },
            title: {
              display: true,
              text: "Comportamiento del sensor de Humedad del suelo",
            },
          },
        },
        data: {
          labels: firebaseData.map(({}, index) => index),
          datasets: [
            {
              label: "Sensor de humedad",
              data: firebaseData,
              borderColor: "#006d75",
              backgroundColor: "#13c2c2",
            },
          ],
        },
      });
    }
  }, [firebaseData]);

  return (
    <Fragment>
      <div className="ModulePage">
        <div className="header">
          <img src={sensorGround} alt="" className="imageSensor" />
          <div>
            <p className="title">Sensor de humedad del suelo</p>
            <div className="specs">
              <p className="code">
                <strong>Codigo de sensor:</strong> HTXHS98
              </p>
              <p className="description">
                El Sensor de humedad de Suelo FC-28 permite medir de forma
                sencilla la humedad del suelo por medio de 2 electrodos
                resistivos. Compatible con Arduino, PIC,
                ESP8266/NodeMCU/NodeMCU-32. El sensor es ideal para monitorear
                el nivel de humedad de tus plantas y así recordar cuando
                necesitan ser regadas o incluso para realizar un sistema
                totalmente automatizado de riego añadiendo una válvula o una
                bomba de agua. Si el sistema se conecta a internet podríamos
                controlar/monitorear nuestro jardín desde cualquier lugar del
                mundo!
              </p>
            </div>
          </div>
        </div>
        <Line options={graphData.options} data={graphData.data} />
      </div>
    </Fragment>
  );
};
