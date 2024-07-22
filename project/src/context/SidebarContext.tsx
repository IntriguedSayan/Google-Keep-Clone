import React, { createContext, useState } from "react";

interface ValueType{
    isOpen:boolean,
    setIsOpen:(isOpen:boolean) => void;
}
interface ChildrenProp{
    children:React.ReactElement;
}

export const Context = createContext<ValueType | boolean>(false);

const SidebarContextProvider:React.FC<ChildrenProp> = ({children}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);



  return <Context.Provider value={{isOpen, setIsOpen}}>
    {children}
  </Context.Provider>;
};

export { SidebarContextProvider };
