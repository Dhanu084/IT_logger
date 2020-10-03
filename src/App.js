import React, { useEffect, Fragment } from "react";
import Searchbar from "./Components/Layouts/Searchbar";

import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import Logs from "./Components/logs/Logs";
import AddBtn from "./Components/Layouts/AddBtn";
import AddLogModal from "./Components/logs/AddLogModal";
import EditLogModal from "./Components/logs/EditLogModal";
import AddTechModal from "./Components/techs/AddTechModal";
import TechListModal from "./Components/techs/TechListModal";

const App = () => {
  useEffect(() => {
    //Init matrialize JS
    M.AutoInit();
  });
  return (
    <Fragment>
      <Searchbar />
      <div className="container">
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
        <Logs />
      </div>
    </Fragment>
  );
};

export default App;
