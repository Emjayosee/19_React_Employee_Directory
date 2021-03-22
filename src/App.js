import React from "react";
import './App.css';
import {BasicTable} from "./components/BasicTable"

function App() {
  return (
    <div className="App">
      <h1>Employee Contact Directory (Click Header to Sort by Column)</h1>
      <BasicTable />
    </div>
  );
}

export default App;
