import React from "react";

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
    <div>
      <li>{value}</li>
      <div>
        <button
          //   style={{ ...styles.button, ...styles.deleteButton }}
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
        <button
          //   style={{ ...styles.button, ...styles.completeButton }}
          onClick={() => handleStatus(id, status)}
        >
          {buttonName}
        </button>
      </div>
    </div>
  );
};
