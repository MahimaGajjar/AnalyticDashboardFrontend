import React, { useEffect, useState } from "react";
import { loadCSVData } from "../utils/loadCSV";
import { Bar, Pie, Line } from "react-chartjs-2";
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
import styles from "./overview.module.css";

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

const Overview = () => {
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

  if (loading) return <div className={styles.loader}>Loading Data...</div>;

  // Extract manufacturer counts
  const manufacturerCounts = {};
  data.forEach((item) => {
    manufacturerCounts[item.Make] = (manufacturerCounts[item.Make] || 0) + 1;
  });

  const topManufacturers = Object.entries(manufacturerCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);

  // Bar Chart Data
  const barChartData = {
    labels: topManufacturers.map(([make]) => make),
    datasets: [
      {
        label: "EV Count",
        data: topManufacturers.map(([, count]) => count),
        backgroundColor: [
          "#3498db",
          "#e74c3c",
          "#f1c40f",
          "#2ecc71",
          "#9b59b6",
        ],
      },
    ],
  };

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
        backgroundColor: ["#1abc9c", "#e67e22", "#9b59b6"],
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
      <h2 className={styles.heading}>Electric Vehicle Population Dashboard</h2>
      <div className={styles.infoContainer}>
        <div className={styles.infoBox}>
          <h3>Overview</h3>
          <p>
            Total EVs: <span>{data.length}</span>
          </p>
          <p>
            Manufacturers: <span>{Object.keys(manufacturerCounts).length}</span>
          </p>
          <p>
            Most Popular Manufacturer: <span>{topManufacturers[0][0]}</span>
          </p>
          <p>
            Most Common EV Type: <span>{Object.keys(evTypeCounts)[0]}</span>
          </p>
        </div>

        <div className={styles.barchartContainer}>
          <h3>Top 5 EV Manufacturers</h3>
          <Bar data={barChartData} />
        </div>
      </div>
    </div>
  );
};

export default Overview;
