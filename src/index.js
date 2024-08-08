import React from "react";
import ReactDOM from "react-dom/client";
import Accordion from "./Accordion";
import FileExplorer from "./FileExplorer";
import RoundCountdownTimer from "./RoundCountdownTimer";
import TodoList from "./TodoList";
import data from "./FileExplorer/data.json";
import Autocomplete from "./Autocomplete";
import NestedComments from "./NestedComments";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <TodoList /> */}
    {/* <RoundCountdownTimer /> */}
    {/* <Accordion /> */}
    {/* <FileExplorer data={data} /> */}
    <Autocomplete />
    {/* <NestedComments /> */}
  </React.StrictMode>
);

// Nested comments json data:
// {
//   "id": 2,
//   "content": "Reply to the first comment.",
//   "timestamp": "2024-08-07T10:05:00Z",
//   "replies": [
//     {
//       "id": 4,
//       "content": "Reply to the reply.",
//       "timestamp": "2024-08-07T10:10:00Z",
//       "replies": []
//     }
//   ]
// },
// {
//   "id": 3,
//   "content": "Another reply to the first comment.",
//   "timestamp": "2024-08-07T10:07:00Z",
//   "replies": []
// }
