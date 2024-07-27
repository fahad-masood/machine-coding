import React, { useState } from "react";
import "./index.css";

const FileExplorer = ({ data }) => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div className="fe-container">
      <h3>
        {data.type === "folder" ? (active ? "📂" : "📁") : "📄"}{" "}
        <span onClick={handleClick} className="file-name">
          {data.name}
        </span>
      </h3>
      {active &&
        data?.children?.map((child, index) => {
          return <FileExplorer key={index} data={child} />;
        })}
    </div>
  );
};

export default FileExplorer;
