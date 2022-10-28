import React from "react";
import "./LinkItem.css";

const LinkItem = ({ item }) => {
  return (
    <button
      // type="button"
      onClick={(e) => {
        e.preventDefault();
        window.location.href = item.Link;
      }}
      className="link_container"
    >
      {item.Header}
    </button>
  );
};

export default LinkItem;
