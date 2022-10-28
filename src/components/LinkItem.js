import React from "react";
import "./LinkItem.css";

const LinkItem = ({ item, mobile }) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        window.location.href = item.Link;
      }}
      className={mobile ? "link_container_mobile" : "link_container"}
    >
      {item.Header}
    </button>
  );
};

export default LinkItem;
