import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.scss";

import SensorIO from "./SensorIO";

import {
  FirebaseAppProvider,
  DatabaseProvider,
  useFirebaseApp,
} from "reactfire";
import { getDatabase } from "firebase/database";

import firebaseConfig from "./firebaseConfig";

const AppWithFirebase = () => {
  const databaseInstance = getDatabase(useFirebaseApp());

  return (
    <DatabaseProvider sdk={databaseInstance}>
      <SensorIO />
    </DatabaseProvider>
  );
};

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <AppWithFirebase />
  </FirebaseAppProvider>,
  document.getElementById("root")
);
