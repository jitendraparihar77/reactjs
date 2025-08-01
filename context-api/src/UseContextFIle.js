import React, { useContext } from "react";
import { greetContext } from "./App";

function UseContextFIle() {
  const useCon = useContext(greetContext) || {};
  const { greet = "no greet", greet2 = "no greet2" } = useCon;
  return (
    <div>
      <h1>UseContext use</h1>
      <p>
        Greet : {greet} {greet2}
      </p>
    </div>
  );
}

export default UseContextFIle;
