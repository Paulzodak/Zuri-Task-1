import React, { useState } from "react";
import classes from "./Contact.module.css";
import FirstName from "./Form/FirstName";
import LastName from "./Form/LastName";
import Email from "./Form/Email";
import Message from "./Form/Message";
import Footer from "../Footer";
const Contact = ({ mobile }) => {
  const [formIsValid, setFormIsValid] = useState({
    first_name: false,
    last_name: false,
    email: false,
    message: false,
  });
  console.log(formIsValid);
  return (
    <>
      <form className={mobile ? classes.form_mobile : classes.form}>
        <header className={classes.header}>Contact Me</header>
        <p className={classes.p}>
          Hi there, contact me to ask me about anything you have in mind.
        </p>
        <div
          className={
            mobile ? classes.input_container_mobile : classes.input_container
          }
        >
          <FirstName
            formIsValid={formIsValid}
            setFormIsValid={setFormIsValid}
          />
          <LastName formIsValid={formIsValid} setFormIsValid={setFormIsValid} />
        </div>
        <Email formIsValid={formIsValid} setFormIsValid={setFormIsValid} />
        <Message formIsValid={formIsValid} setFormIsValid={setFormIsValid} />
        <label className={classes.agreement}>
          <input type="checkbox" className={classes.checkbox} />
          <span className={classes.checkmark}></span>
          &nbsp; You agree to providing your data to who may contact you.
        </label>

        <button
          type={"button"}
          id={"btn__submit"}
          className={`${classes.submit} ${
            !formIsValid.first_name ||
            !formIsValid.last_name ||
            !formIsValid.email ||
            !formIsValid.message
              ? classes.btn_error
              : classes.btn
          }`}
        >
          Send message
        </button>
      </form>
      <hr className={mobile ? classes.hr_mobile : classes.hr} />
      <Footer mobile={mobile} />
    </>
  );
};
export default Contact;
