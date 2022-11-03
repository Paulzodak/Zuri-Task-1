import React from "react";
import classes from "./inputs.module.css";
const Email = () => {
  return (
    <label className={classes.label}>
      Email
      <input
        id={"email"}
        type={"text"}
        placeholder="yourname@email.com"
        className={classes.Email}
      ></input>
    </label>
  );
};

export default Email;
