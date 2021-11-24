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

import sensorWater from "../../assets/sensorWater.png";

export const Water = () => {
  const database = useDatabase();
  const waterRef = ref(database, "SENSORAGUA");
  const { status, data: firebaseData } = useDatabaseListData(waterRef);
  const [graphData, setGraphData] = useState({
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Comportamiento del sensor de Nivel del agua",
        },
      },
    },
    data: {
      labels: [],
      datasets: [
        {
          label: "Sensor de Nivel del agua",
          data: [],
          borderColor: "#ad8b00",
          backgroundColor: "#fadb14",
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
              text: "Comportamiento del sensor de Nivel del agua",
            },
          },
        },
        data: {
          labels: firebaseData.map(({}, index) => index),
          datasets: [
            {
              label: "Sensor de Nivel del agua",
              data: firebaseData,
              borderColor: "#ad8b00",
              backgroundColor: "#fadb14",
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
          <img src={sensorWater} alt="" className="imageSensor" />
          <div>
            <p className="title">Sensor de nivel del agua</p>
            <div className="specs">
              <p className="code">
                <strong>Codigo de sensor:</strong> Genérico
              </p>
              <p className="description">
                Este módulo puede detectar la profundidad del agua, el
                componente principal es un circuito amplificador que está
                formado principalmente por un transistor y unas líneas metálicas
                en el PCB. Cuando está puesto en el agua, el elemento sensor
                presentará una resistencia que puede cambiar junto con eEste
                módulo puede detectar la profundidad del agua, el componente
                principal es un circuito amplificador que está formado
                principalmente por un transistor y unas líneas metálicas en el
                PCB. Cuando está puesto en el agua, el elemento sensor
                presentará una resistencia que puede cambiar junto con el cambio
                de profundidad del agua. La señal de la profundidad del agua es
                convertida en señal eléctrica, y podemos conocer el cambio de
                profundidad del agua
              </p>
            </div>
          </div>
        </div>
        <div style={{ maxWidth: "1000px", margin: "auto" }}>
          <Line options={graphData.options} data={graphData.data} />
        </div>
      </div>
    </Fragment>
  );
};
