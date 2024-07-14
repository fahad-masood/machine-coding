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

  const styles = {
    container: {
      maxWidth: "600px",
    },
    title: {
      color: "#333",
      display: "flex",
      justifyContent: "center",
    },
    list: {
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
    },
    listItemsContainer: {
      display: "flex",
      marginBottom: "4px",
    },
    listItems: {
      marginRight: "20px",
      alignContent: "center",
    },
    buttonGroup: {
      display: "flex",
      gap: "8px",
    },
    button: {
      cursor: "pointer",
      padding: "5px 12px",
      border: "none",
      borderRadius: "4px",
    },
    deleteButton: {
      backgroundColor: "red",
      color: "white",
    },
    incompleteButton: {
      backgroundColor: "#333",
      color: "white",
    },
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.title}>Completed TODO List</h3>
      <ul style={styles.list}>
        {listItems.map(
          ({ id, value, isPending }) =>
            !isPending && (
              <div style={styles.listItemsContainer} key={id}>
                <li style={styles.listItems}>{value}</li>
                <div style={styles.buttonGroup}>
                  <button
                    style={{ ...styles.button, ...styles.deleteButton }}
                    onClick={() => handleDelete(id)}
                  >
                    Delete
                  </button>
                  <button
                    style={{ ...styles.button, ...styles.incompleteButton }}
                    onClick={() => handleIncomplete(id)}
                  >
                    Mark as Incomplete
                  </button>
                </div>
              </div>
            )
        )}
      </ul>
    </div>
  );
};
