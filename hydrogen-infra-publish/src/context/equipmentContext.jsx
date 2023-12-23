import { createContext, useContext, useReducer } from "react";

const MyEquipmentContext = createContext();
const initialState = {
  initalStation: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case "insert":
      return { ...state, initalStation: action.payload };
    default:
      return { ...state };
  }
};
function MyequipmentContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MyEquipmentContext.Provider value={{ state, dispatch }}>
      {children}
    </MyEquipmentContext.Provider>
  );
}

const useMyContextEquipment = () => {
  const context = useContext(MyEquipmentContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyProvider");
  }
  return context;
};

export { MyEquipmentContext, MyequipmentContext, useMyContextEquipment };
