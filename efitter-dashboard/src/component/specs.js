import React, { useState } from "react";
import "./specs.css";
import arrow from "../assets/arrowdark.svg";
import SelectProp from "../resources/selectProp";
import ColorPicker from "../resources/colorPicker";

const fontPicker = ["montserrat", "Raleway", "San-Serif"];
const fontSizePicker = [1, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

const Specifics = () => {
  const [options, showOptions] = useState(false);

// dislay the colorPicker component
const [dispPicker, setDispPicker] = useState(false)

const handleDisp = () =>{
  setDispPicker(!dispPicker)
  console.log("ughhh")
}

// colorPicker section
  const [colorCode, setColorCode] = useState("#ffffff")

// the function to get the color code from the Picker component
  const getColorCode = () =>{
    console.log("hIya")
  }
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

            <div className="BackG-C">
              <p>Background-color</p>
              <div className="c-code" onClick={handleDisp}>
                <p >{colorCode}</p>

                {/* the colorPicker compoenent */}
                <div className={dispPicker ? "picker" : "noPicker"}>
                  <ColorPicker getColor= {getColorCode} colorCode={colorCode}/>
                </div>
                <div className="circ" ></div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Specifics;
