import { useId, useState } from "react";
import { Input } from "./Input";
import { ListItems } from "./ListItems";

const TodoList = () => {
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
      <div>
        <Input updateListItems={updateListItems} />
      </div>
      <div>
        <button
          // style={{ ...styles.button, ...styles.listButton }}
          onClick={toggleListVisibility}
        >
          {showList ? "Hide List" : "Show List"}
        </button>

        {showList && (
          <div>
            <h3>Pending TODO List</h3>
            <ul>
              {listItems
                .filter((item) => item.isPending)
                .map(({ id, value, isPending }) => (
                  <ListItems
                    listItems={listItems}
                    setListItems={setListItems}
                    id={id}
                    value={value}
                    status={!isPending}
                    buttonName="Mark as Complete"
                  />
                ))}
            </ul>
            <h3>Completed TODO List</h3>
            <ul>
              {listItems
                .filter((item) => !item.isPending)
                .map(({ id, value, isPending }) => (
                  <ListItems
                    listItems={listItems}
                    setListItems={setListItems}
                    id={id}
                    value={value}
                    status={!isPending}
                    buttonName="Mark as Incomplete"
                  />
                ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default TodoList;
