import { useId, useState } from "react";
import { Input } from "../Input";
import { CompletedList } from "./CompletedList";
import { PendingList } from "./PendingList";

export const ListPage = () => {
  const [listItems, setListItems] = useState([]);
  const [showList, setShowList] = useState(false);
  const idPrefix = useId();

  const toggleListVisibility = () => {
    setShowList(!showList);
  };

  const updateListItems = (item) => {
    setListItems([
      ...listItems,
      { id: `${idPrefix}` + Math.random(), value: item, isPending: true },
    ]);
  };

  const styles = {
    input: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "20px",
    },
    listContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      marginTop: "20px",
    },
    button: {
      cursor: "pointer",
      padding: "5px 12px",
      border: "none",
      borderRadius: "4px",
      gap: "8px",
    },
    listButton: {
      backgroundColor: "lightgray",
    },
  };

  return (
    <>
      <div style={styles.input}>
        <Input updateListItems={updateListItems} />
      </div>
      <div style={styles.listContainer}>
        <button
          style={{ ...styles.button, ...styles.listButton }}
          onClick={toggleListVisibility}
        >
          {showList ? "Hide List" : "Show List"}
        </button>
        {showList && (
          <PendingList listItems={listItems} setListItems={setListItems} />
        )}
        {showList && (
          <CompletedList listItems={listItems} setListItems={setListItems} />
        )}
      </div>
    </>
  );
};
