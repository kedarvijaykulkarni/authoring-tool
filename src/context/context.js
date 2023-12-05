import React, { useState } from "react";
import listDocuments from '../mockData/listDocuments';
import listEnvironments from '../mockData/listEnvironments';
import listEquipments from '../mockData/listEquipments';

const GEAContext = React.createContext();
// const axios = require("axios").default;
// axios.defaults.baseURL = "https://api.github.com";

const GEAProvider = ({ children }) => {
//   const [dtDocuments, setDTDocuments] = useState();

//   setDTDocuments(mockDocuments);

//   console.log("mockDocuments, ", mockDocuments)

  return (   
    <GEAContext.Provider
      value={{
        listDocuments,
        listEnvironments,
        listEquipments
      }}
    >
      {children}
    </GEAContext.Provider>
  );
};

export { GEAProvider, GEAContext };