import React, { useContext } from "react";
import styles from "./Home.module.css";
import { AddContact } from "../context/AddContact/AddContact";

const Home = () => {
  const { input, changeHandler, clickHandler } = useContext(AddContact);

  return (
    <div className= {styles.main}>
      <div className={styles.inputBox}>
        <input
          className={styles.input}
          type="text"
          placeholder="name"
          name="name"
          value={input.name}
          onChange={changeHandler}
        />

        <input
          className={styles.input}
          type="text"
          placeholder="email"
          name="email"
          value={input.email}
          onChange={changeHandler}
        />
        <input
          className={styles.input}
          type="number"
          placeholder="contact"
          name="contact"
          value={input.contact}
          onChange={changeHandler}
        />
        <button onClick={clickHandler} className={styles.button}>Add Contact</button>
      </div>
    </div>
  );
};

export default Home;
