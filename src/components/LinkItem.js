import React from "react";
import "./LinkItem.css";
import { Link } from "react-router-dom";

const LinkItem = ({ item, mobile }) => {
  if (item.Link) {
    return (
      <a
        className={mobile ? "link_container_mobile" : "link_container"}
        id={item.ID}
        href={item.Link}
      >
        {item.Header}
      </a>
    );
  }
  if (item.Routerlink) {
    <Link
      to={item.Routerlink}
      className={mobile ? "link_container_mobile" : "link_container"}
      id={item.ID}
    />;
  }
};

export default LinkItem;
