export const CompletedList = ({ listItems, setListItems }) => {
  const handleDelete = (id) => {
    listItems = listItems.filter((item) => item.id !== id);
    setListItems(listItems);
  };

  const handleIncomplete = (id) => {
    let valueToBeChanged = listItems.find((item) => item.id === id);
    let filteredValues = listItems.filter((item) => item.id !== id);
    valueToBeChanged.isPending = true;
    setListItems([...filteredValues, valueToBeChanged]);
  };

  return (
    <>
      <h3>Completed TODO List</h3>
      <ul style={{ display: "flex", gap: "4px" }}>
        {listItems.map(
          ({ id, value, isPending }) =>
            !isPending && (
              <div key={id}>
                <li>{value}</li>
                <button onClick={() => handleDelete(id)}>Delete</button>
                <button onClick={() => handleIncomplete(id)}>
                  Mark as Incomplete
                </button>
              </div>
            )
        )}
      </ul>
    </>
  );
};
