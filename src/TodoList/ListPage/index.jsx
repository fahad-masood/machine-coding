import { useState } from "react";
import { Input } from "../Input";
import { CompletedList } from "./CompletedList";
import { PendingList } from "./PendingList";

export const ListPage = () => {
  const [listItems, setListItems] = useState([]);
  const [showList, setShowList] = useState(true);

  const toggleListVisibility = () => {
    setShowList(!showList);
  };

  const updateListItems = (item) => {
    setListItems(...listItems, { item, isPending: true });
  };
  return (
    <div>
      <Input updateListItems={updateListItems} />
      <button
        style={{
          marginTop: "12px",
          marginLeft: "12px",
          cursor: "pointer",
          padding: "6px 15px",
          border: "none",
          borderRadius: "4px",
          background: "lightgray",
        }}
        onClick={toggleListVisibility}
      >
        {showList ? "Hide List" : "Show List"}
      </button>
      {showList && (
        <PendingList listItems={listItems} setListItems={setListItems} />
      )}
      {showList && <CompletedList listItems={listItems} />}
    </div>
  );
};

// We need to break the list into 2 separate lists:
// 1. Pending tasks
// 2. Completed tasks

// Add will add the todo to pending task by default
// For each todo there will be 2 buttons, one will be to mark it as complete/incomplete
// and another button will be to delete it

// Try using 1 state only
// OR
// Try with 2 states
