import React, { useContext } from "react";
import styles from "./Contact.module.css";
import { AddContact } from "../context/AddContact/AddContact";

const Contact = () => {
  const { data, setData } = useContext(AddContact);
  // console.log(data);

  const deleteHandler = (ind) => {
    const temp = [...data];
    temp.splice(ind, 1);
    setData([...temp]);
  };

  return (
    <>
      {data.length === 0 && <h1 className= {styles.heading}>No contact found Please Add contact first</h1>}
      {data.length !== 0 && (
        <div className={styles.main}>
          {data.map((items, ind) => {
            return (
              <div key={ind} className={styles.contact}>
                <p>Name :{items.name}</p>
                <p>Email :{items.email}</p>
                <p>Contact :{items.contact}</p>
                <button
                  className={styles.button}
                  onClick={() => {
                    deleteHandler(ind);
                  }}
                >
                  Delete
                </button>
                <br />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Contact;
