import react, { useState } from "react";
import "./Results.css";
import client from "../assets/ClientLogo.svg";
import CartOutline from "../assets/cart-outline.svg";
import ruler from "../assets/ruler_svgrepo.svg";
import check from "../assets/check.svg";
import Bars from "../component/BarChart";
import { Link } from "react-router-dom";
import arrow from "../assets/Arr.svg";
import dArrow from "../assets/arrDown.svg";

const results = [
  {
    iconic: CartOutline,
    Rates: 1495,
    order: "orders on efitter",
    growth: "35%",
    arr: arrow,
    class: "green",
  },

  {
    iconic: ruler,
    Rates: "32%",
    order: "of orders use Sizing Solution",
    growth: "34%",
    arr: arrow,
    class: "green",
  },

  {
    iconic: check,
    Rates: "32%",
    order: "of sizes are predicted accurately",
    growth: "35%",
    arr: dArrow,
    class: "cols",
  },
];
const Results = () => {
  const [dropValue, setDropValue] = useState(1);

  const handleDrop = (e) => {
    setDropValue(parseInt(e.target.value));
  };
  return (
    <section className="result">
      <div className="heading">
        <img src={client} alt="illustration" />
        <p>Your Performance</p>
      </div>

      <section className="Cases">
        <div className="te-txt">
          <p>Results</p>
        </div>
        <div className="boxes">
          {results.map((items, index) => {
            return (
              <div className="box" key={index}>
                <div className="iconbox">
                  <img src={items.iconic} alt="cart" />
                </div>

                <div className="ctnt">
                  <p className="la-rg"> {items.Rates}</p>
                  <p>{items.order}</p>
                  <p className={items.class}>
                    <img src={items.arr} alt="arr" />
                    {items.growth}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="graph">
        <div className="Ave">
          <div>
            <p className="b-ave">Average order value / Returns</p>
          </div>

          <div className="selection">
            <select className="D-sel" onChange={handleDrop} value={dropValue}>
              <option value="1">1-month</option>
              <option value="2">6-months</option>
              <option value="3">1-year</option>
            </select>
          </div>
        </div>
        <Bars dataPass={dropValue} />
        <p className="Download">
          <Link to="/">Download CSV</Link>
        </p>
      </section>
    </section>
  );
};

export default Results;
