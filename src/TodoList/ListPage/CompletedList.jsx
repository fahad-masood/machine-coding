export const CompletedList = ({ listItems }) => {
  return (
    <>
      <h3>Completed TODO List</h3>
      <ul style={{ display: "flex", gap: "4px" }}>
        {listItems.map((item) => (
          <>
            <li>{item}</li>
            <button>Delete</button>
            <button>Mark as Incomplete</button>
          </>
        ))}
      </ul>
    </>
  );
};
