import { createContext, useState, useContext } from "react";

const AppContext = createContext<any>(undefined);


export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [results, setResults] = useState<any[]>([]);

  return (
    <AppContext.Provider value={{ results, setResults }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
