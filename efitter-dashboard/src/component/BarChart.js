import { useEffect, useState } from "react";
import React from "react";
import { Bar } from "react-chartjs-2";
import "./BarChart.css";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  Legend,
  LinearScale,
  Tooltip,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const Bars = ({ dataPass }) => {
  const selectValue = dataPass;
  console.log(selectValue);
  const [dropedValue, setDropedValue] = useState();

  // useEffect
  useEffect(() => {
    if (selectValue === 1) {
      setDropedValue([37, 60, 44, 75, 81, 64, 72, 67]);
    } else if (selectValue === 2) {
      setDropedValue([41, 80, 54, 71, 41, 74, 59, 61]);
    } else if (selectValue === 3) {
      setDropedValue([57, 58, 44, 55, 61, 54, 72, 81]);
    }
  }, [selectValue]);

  const data = {
    labels: ["Jan", "Feb", "Mar", "May", "Jun", "Jul", "Aug"],
    datasets: [
      {
        label: "without efitter",
        // [65, 69, 70, 50, 56, 56, 72, 41]
        data: dropedValue,
        backgroundColor: "#712e49",
        borderWidth: 1,
        borderRadius: 10,
        borderSkipped: false,
      },

      {
        label: "with efitter",
        // [65, 59, 80, 81, 45, 66, 36, 37]
        data: dropedValue,
        backgroundColor: "#ffd9e3",
        borderWidth: 1,
        borderRadius: 5,
        borderSkipped: false,
        barPadding: 1.5,
        // barPercentage: 1.5,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top",
        align: "start",
        labels: {
          boxWidth: 10,
          boxHeight: 10,
          // padding: 10,
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          backgroundColor: "#004aad",
        },
      },
      y: {
        beginAtZero: false,
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <div className="BarChart">
      <Bar data={data} options={options} className="barss" />
    </div>
  );
};

export default Bars;
