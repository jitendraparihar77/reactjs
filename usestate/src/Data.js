import React, { useState } from "react";
import datas from "./datas.json";

export const Data = () => {
  const [nData, setnData] = useState(datas);

  const handleremove = (itemId) => {
    setnData(nData.filter((item) => item.id !== itemId));
  };

  const handleupdate = (itemId) => {
    setnData(
      nData.map((items) => {
        if (items.id === itemId) {
          return { name: "newUpdate" };
        } else {
          return items;
        }
      })
    );
  };

  return (
    <div>
      <ul>
        {nData.map((items) => {
          return (
            <li key={items.id}>
              {items.name}
              <button onClick={() => handleremove(items.id)}>remove</button>
              <button onClick={() => handleupdate(items.id)}>update</button>
            </li>
          );
        })}
        <button
          onClick={() => {
            setnData([]);
          }}
        >
          clear
        </button>
      </ul>
    </div>
  );
};

export default Data;
