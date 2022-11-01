import React from "react";
import "./LinkItem.css";

const LinkItem = ({ item, mobile }) => {
  return (
    <a
      className={mobile ? "link_container_mobile" : "link_container"}
      id={item.ID}
      href={item.Link}
    >
      {item.Header}
    </a>
  );
};

export default LinkItem;
