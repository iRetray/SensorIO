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

import sensorAir from "../../assets/sensorAir.jpg";

export const Air = () => {
  const database = useDatabase();
  const airRef = ref(database, "SENSORMQ");
  const { status, data: firebaseData } = useDatabaseListData(airRef);
  const [graphData, setGraphData] = useState({
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Comportamiento del sensor de Calidad del aire",
        },
      },
    },
    data: {
      labels: [],
      datasets: [
        {
          label: "Sensor de Calidad del aire",
          data: [],
          borderColor: "#237804",
          backgroundColor: "#52c41a",
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
              text: "Comportamiento del sensor de Calidad del aire",
            },
          },
        },
        data: {
          labels: firebaseData.map(({}, index) => index),
          datasets: [
            {
              label: "Sensor de Calidad del aire",
              data: firebaseData,
              borderColor: "#237804",
              backgroundColor: "#52c41a",
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
          <img src={sensorAir} alt="" className="imageSensor" />
          <div>
            <p className="title">Sensor de Calidad del aire</p>
            <div className="specs">
              <p className="code">
                <strong>Codigo de sensor:</strong> MQ-135
              </p>
              <p className="description">
                El MQ-135 es un sensor de calidad del aire que permite detectar
                algunos gases peligrosos como Amoniaco, Dioxido de Nitrógeno,
                Alcohol, Benzeno, Dioxido y Monoxido de carbono. El sensor puede
                detectar concentraciones de gas entre 10 y 1000 ppm y es de
                utilidad para detección de gases nocivos para la salud en la
                industria principalmente. Su velocidad de respuesta es bastante
                buena, por lo que puede activar cualquier dispositivo de manera
                oportuna. La presentación es en un módulo que puede conectarse a
                un microcontrolador muy fácilmente y se incluye la electrónica
                básica para realizar la interfaz con el sensor, disponemos de
                salidas del tipo analógica y digital.
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
