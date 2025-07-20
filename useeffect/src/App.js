import React, { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState("please click me");
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("wel-com to my page");
  }, [data,count]);
  return (
    <div>
      <button
        onClick={() => {
          setData("contact");
        }}
      >
        contact
      </button>
      <button
        onClick={() => {
          setData("to");
        }}
      >
        to
      </button>
      <button
        onClick={() => {
          setData("jitendra parihar");
        }}
      >
        jitendra parihar
      </button>
      <h1>{data}</h1>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
