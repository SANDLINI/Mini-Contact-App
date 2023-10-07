import { createContext, useState } from "react";

export const AddContact = createContext();

export const AddContactProvider = ({ children }) => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    contact: "",
  });

  const [data, setData] = useState([]);

  const changeHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const clickHandler = () => {
    setData([...data, {...input}]);
    // console.log(data);
    setInput({ name: "", email: "", contact: "" });
  };

  return (
    <AddContact.Provider
      value={{ input, setInput, data, setData, changeHandler, clickHandler }}
    >
      {children}
    </AddContact.Provider>
  );
};
