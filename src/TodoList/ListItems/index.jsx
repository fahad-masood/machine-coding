import React from "react";
import "./index.css";
export const ListItems = ({
  id,
  value,
  listItems,
  setListItems,
  status,
  buttonName,
}) => {
  const handleDelete = (id) => {
    listItems = listItems.filter((item) => item.id !== id);
    setListItems(listItems);
  };
  const handleStatus = (id, status) => {
    let valueToBeChanged = listItems.find((item) => item.id === id);
    let filteredValues = listItems.filter((item) => item.id !== id);
    valueToBeChanged.isPending = status;
    setListItems([...filteredValues, valueToBeChanged]);
  };
  return (
    <div className="list-card" draggable>
      <li className="text">{value}</li>
      <div className="buttons">
        <div className="delete-button" onClick={() => handleDelete(id)}>
          🗑️
        </div>
        <div className="status-button" onClick={() => handleStatus(id, status)}>
          {buttonName}
        </div>
      </div>
    </div>
  );
};
