import React from "react";
import ReactDOM from "react-dom/client";
import Accordion from "./Accordion";
import RoundCountdownTimer from "./RoundCountdownTimer";
import TodoList from "./TodoList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TodoList />
    {/* <RoundCountdownTimer /> */}
    {/* <Accordion /> */}
  </React.StrictMode>
);
