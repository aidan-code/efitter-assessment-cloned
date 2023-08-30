import { useState } from "react";
import React from "react";
import "./selectProp.css";

const SelectProp = ({ arr, name }) => {
  const [fontValue, setFontValue] = useState();

  const getFont = (e) => {
    let val = e.target.value;
    console.log(val);
    setFontValue(val);
  };

  return (
    <div className="s-prop">
      <div className="ny-7b">
        <p>{name}</p>
      </div>
      <select
        name="fontSelector"
        id="fonts"
        value={fontValue}
        onChange={getFont}
      >
        {arr.map((items, index) => {
          return (
            <option value={items} key={index}>
              {items}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectProp;
