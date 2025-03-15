import React, { useEffect, useState } from "react";
import { loadCSVData } from "../utils/loadCSV";
import { Pie, Line } from "react-chartjs-2";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";
import styles from "./cardview.module.css";

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

const CardView = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCSVData("/Electric_Vehicle_Population_Data.csv")
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading CSV:", error);
        setLoading(false);
      });
  }, []);
  const manufacturerCounts = {};
  data.forEach((item) => {
    manufacturerCounts[item.Make] = (manufacturerCounts[item.Make] || 0) + 1;
  });

  const topManufacturers = Object.entries(manufacturerCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);
  if (loading) return <div className={styles.loader}>Loading Data...</div>;
  const evTypeCounts = data.reduce((acc, curr) => {
    acc[curr["Electric Vehicle Type"]] =
      (acc[curr["Electric Vehicle Type"]] || 0) + 1;
    return acc;
  }, {});
  const pieChartData = {
    labels: Object.keys(evTypeCounts),
    datasets: [
      {
        label: "EV Type Distribution",
        data: Object.values(evTypeCounts),
        backgroundColor: ["#FFB200", "#500073", "#000"],
      },
    ],
  };
  const yearCounts = data.reduce((acc, curr) => {
    const year = curr["Model Year"];
    acc[year] = (acc[year] || 0) + 1;
    return acc;
  }, {});

  const lineChartData = {
    labels: Object.keys(yearCounts).sort(),
    datasets: [
      {
        label: "EV Growth Over Years",
        data: Object.values(yearCounts).sort((a, b) => a - b),
        borderColor: "#3498db",
        fill: false,
      },
    ],
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Electric Vehicle Population </h2>
      <div className={styles.infoContainer}>
        <div className={styles.linechartContainer}>
          <h3>EV Growth Over Years</h3>
          <Line data={lineChartData} />
        </div>

        <div className={styles.piechartContainer}>
          <h3>EV Type Distribution</h3>
          <Pie data={pieChartData} />
        </div>
      </div>
    </div>
  );
};

export default CardView;
