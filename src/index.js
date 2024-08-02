import React from "react";
import ReactDOM from "react-dom/client";
import Accordion from "./Accordion";
import FileExplorer from "./FileExplorer";
import RoundCountdownTimer from "./RoundCountdownTimer";
import TodoList from "./TodoList";
import data from "./FileExplorer/data.json";
import Autocomplete from "./Autocomplete";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <TodoList /> */}
    {/* <RoundCountdownTimer /> */}
    {/* <Accordion /> */}
    {/* <FileExplorer data={data} /> */}
    <Autocomplete />
  </React.StrictMode>
);
