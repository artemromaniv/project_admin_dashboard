
import React,{ createContext, useContext, useState } from "react";

interface StateContextType {
  screenSize:number | undefined
}

const StateContext = createContext<StateContextType>(null!);

export const ContextProvider = ({children}:React.PropsWithChildren) => {
  const [screenSize,setScreenSize] = useState(undefined)
  return (
    <StateContext.Provider value={{screenSize}}>
        {children}
    </StateContext.Provider>
  )
}

