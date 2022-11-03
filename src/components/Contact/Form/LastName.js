import React from "react";
import classes from "./inputs.module.css";
const LastName = () => {
  return (
    <label className={classes.label}>
      Last name
      <input
        type="text"
        placeholder="Enter your last name"
        className={classes.first_name}
      ></input>
    </label>
  );
};

export default LastName;
