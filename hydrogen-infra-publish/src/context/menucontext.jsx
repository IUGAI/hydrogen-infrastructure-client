import { useContext, useReducer,createContext  } from "react";
const MyContext = createContext();

const initialState = {
  showSide: true,
  
};

const reducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      return { ...state, showSide: !state.showSide };
    default:
        return {...state}
  }
};



const MyProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
};

const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
};

export { MyContext, MyProvider, useMyContext };