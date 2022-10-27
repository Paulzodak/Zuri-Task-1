import React from "react";
import "./LinkItem.css";

const LinkItem = ({ item }) => {
  return (
    <button onClick={() => {}} className="link_container">
      {item.Header}
    </button>
  );
};

export default LinkItem;
