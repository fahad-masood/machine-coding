import { useId, useState } from "react";
import { Input } from "./Input";
import { ListItems } from "./ListItems";
import "./index.css";
import { DropArea } from "./DropArea";

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

  return (
    <div className="container">
      <div className="input">
        <Input updateListItems={updateListItems} />
      </div>
      <div className="button-container">
        <button className="list-button" onClick={toggleListVisibility}>
          {showList ? "Hide List" : "Show List"}
        </button>
      </div>
      <div className="lists-container">
        {showList && (
          <>
            <div className="list-container pending">
              <h3 className="list-heading">Pending TODO List</h3>
              <ul className="list">
                <DropArea />
                {listItems
                  .filter((item) => item.isPending)
                  .map(({ id, value, isPending }) => (
                    <div key={id}>
                      <ListItems
                        listItems={listItems}
                        setListItems={setListItems}
                        id={id}
                        value={value}
                        status={!isPending}
                        buttonName="◻"
                      />
                      <DropArea />
                    </div>
                  ))}
              </ul>
            </div>
            <div className="list-container completed">
              <h3 className="list-heading">Completed TODO List</h3>
              <ul className="list">
                <DropArea />
                {listItems
                  .filter((item) => !item.isPending)
                  .map(({ id, value, isPending }) => (
                    <div key={id}>
                      <ListItems
                        listItems={listItems}
                        setListItems={setListItems}
                        id={id}
                        value={value}
                        status={!isPending}
                        buttonName="☑"
                      />
                      <DropArea />
                    </div>
                  ))}
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TodoList;
