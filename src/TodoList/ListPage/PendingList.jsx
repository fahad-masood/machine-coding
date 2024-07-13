export const PendingList = ({ listItems, setListItems }) => {
  console.log(listItems);
  return (
    <>
      <h3>Pending TODO List</h3>
      <ul style={{ display: "flex", gap: "4px" }}>
        {listItems.map((item) => (
          <>
            <li>{item}</li>
            <button>Delete</button>
            <button>Mark as Complete</button>
          </>
        ))}
      </ul>
    </>
  );
};
