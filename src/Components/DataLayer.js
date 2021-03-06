import React, { createContext, useContext, useReducer } from "react";

export const DataLayerContext = createContext();

export const DataLayer = ({ reducer, initialState, DataLayer }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {DataLayer}
  </DataLayerContext.Provider>
);
const useDataLayerValue = () => useContext(DataLayerContext);

export { useDataLayerValue };

export default DataLayer;
