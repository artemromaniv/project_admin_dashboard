
import React,{ createContext, useContext, useState } from "react";

interface StateContextType {
  collapsed:boolean
}

const StateContext = createContext<StateContextType>(null!);

export const ContextProvider = ({children}:React.PropsWithChildren) => {
  const [collapsed,setCollapsed] = useState(false)
  return (
    <StateContext.Provider value={{collapsed}}>
        {children}
    </StateContext.Provider>
  )
}

