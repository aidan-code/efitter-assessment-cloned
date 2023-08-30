import React, { useState } from "react";
import "./specs.css";
import arrow from "../assets/arrowdark.svg";
import SelectProp from "../resources/selectProp";

const fontPicker = ["montserrat", "Raleway", "San-Serif"];
const fontSizePicker = [1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

const Specifics = () => {
  const [options, showOptions] = useState(false);

  const showGen = () => {
    showOptions(!options);
    console.log("ishhh");
  };

  return (
    <main className="Specs">
      {/* the selector sections accordion */}
      <div className="general">
        <div className="cas-ny">
          <div className="Accordion" onClick={showGen}>
            <p>General</p>

            <img
              src={arrow}
              className={options ? "twist" : "revert"}
              alt="arrow"
            />
          </div>
          <div className="Selectors">
            <SelectProp arr={fontPicker} name="Font family" />
            <SelectProp arr={fontSizePicker} name="Font size" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Specifics;
