import React from "react";
import classes from "./inputs.module.css";
const Message = () => {
  return (
    <label className={classes.label}>
      Message
      <textarea
        type="textarea"
        placeholder="Send me a message and I'll reply you as soon as possible..."
        className={classes.Message}
      >
        Send me a message and I'll reply you as soon as possible...
      </textarea>
    </label>
  );
};

export default Message;
