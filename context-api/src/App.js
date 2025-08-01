import React, { createContext } from "react";
import B from "./B";
import UseContextFIle from "./UseContextFIle";

const greetContext = createContext({ greet: " ", greet2: " " });
function App() {
  const greet = "hello";
  const greet2 = "hello2";
  return (
    <div className="App">
      <greetContext.Provider value={{ greet, greet2 }}>
        <B />
        <UseContextFIle />
      </greetContext.Provider>
    </div>
  );
}
export default App;
export { greetContext };
