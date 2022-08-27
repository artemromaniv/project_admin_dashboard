
import React,{ createContext, Dispatch, SetStateAction, useContext, useState } from "react";

interface StateContextType {
  collapsed:boolean,
  setCollapsed:Dispatch<SetStateAction<boolean>>
}

const StateContext = createContext<StateContextType>(null!);

export const ContextProvider = ({children}:React.PropsWithChildren) => {
  const [collapsed,setCollapsed] = useState(false)
  return (
    <StateContext.Provider value={{collapsed,setCollapsed}}>
        {children}
    </StateContext.Provider>
  )
}

export const useStateContext = () => useContext(StateContext);
