import React, { createContext, useState } from "react";
export const DetailsContext = createContext();
export const DetailsProvider = ({ children }) => {
  const [details, setDetails] = useState({
    name: "",
    position: "",
    place: "",
    number: "",
    email: "",
  });

  return (
    <DetailsContext.Provider value={{ details, setDetails }}>
      {children}
    </DetailsContext.Provider>
  );
};
