export const PendingList = ({ listItems, setListItems }) => {
  const handleDelete = (id) => {
    listItems = listItems.filter((item) => item.id !== id);
    setListItems(listItems);
  };

  const handleComplete = (id) => {
    let valueToBeChanged = listItems.find((item) => item.id === id);
    let filteredValues = listItems.filter((item) => item.id !== id);
    valueToBeChanged.isPending = false;
    setListItems([...filteredValues, valueToBeChanged]);
  };

  return (
    <>
      <h3>Pending TODO List</h3>
      <ul style={{ display: "flex", gap: "4px" }}>
        {listItems.map(
          ({ id, value, isPending }) =>
            isPending && (
              <div key={id}>
                <li>{value}</li>
                <button onClick={() => handleDelete(id)}>Delete</button>
                <button onClick={() => handleComplete(id)}>
                  Mark as Complete
                </button>
              </div>
            )
        )}
      </ul>
    </>
  );
};
