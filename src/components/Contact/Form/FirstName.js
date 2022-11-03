import React from "react";
import classes from "./inputs.module.css";

const FirstName = () => {
  return (
    <label className={classes.label}>
      First name
      <input
        id={"first_name"}
        type="text"
        placeholder="Enter your first name"
        className={classes.first_name}
      ></input>
    </label>
  );
};

export default FirstName;
