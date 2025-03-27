import { createContext, useContext, useState } from "react";

const AppContext = createContext<any>(undefined);

export const AppContextProvider = ({ children }: any) => {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter((prev) => prev + 1);

  return (
    <AppContext.Provider value={{ counter, increment }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context)
    throw new Error("useAppContext must be used within a AppContextProvider");
  return context;
};
