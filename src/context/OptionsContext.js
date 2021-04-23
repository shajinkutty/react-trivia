import { createContext, useState } from "react";


export const OptionContext = createContext();

export default function OptionProvider({ children }) {
  const [difficulty, setDifficulty] = useState("default");
  const [category, setCategory] = useState(0)
  return (
    <OptionContext.Provider value={{ difficulty, setDifficulty,category,setCategory }}>
      {children}
    </OptionContext.Provider>
  );
}
