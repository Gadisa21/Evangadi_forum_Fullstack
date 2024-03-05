import React, { createContext, useState } from "react";

export const userProvider = createContext();

export const UserProvider = (props) => {
  const [user, setUser] = useState({userName:"",userId:""});

  return (
    <userProvider.Provider value={[user, setUser]}>
      {props.children}
    </userProvider.Provider>
  );
};
