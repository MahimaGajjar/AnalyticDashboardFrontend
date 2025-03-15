import React, { useEffect, useState } from "react";
import { loadCSVData } from "../utils/loadCSV";
import styles from "./datatable.module.css";

const Datatable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "asc" });
  const [filterMake, setFilterMake] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const rowsPerPage = 10;

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

  const sortedData = [...data].sort((a, b) => {
    if (!sortConfig.key) return 0;
    const aValue = a[sortConfig.key];
    const bValue = b[sortConfig.key];

    if (typeof aValue === "string") {
      return sortConfig.direction === "asc"
        ? aValue.localeCompare(bValue)
        : bValue.localeCompare(aValue);
    } else {
      return sortConfig.direction === "asc" ? aValue - bValue : bValue - aValue;
    }
  });

  const filteredData = sortedData
    .filter((row) => (filterMake ? row.Make === filterMake : true))
    .filter((row) =>
      row.Model?.toString().toLowerCase().includes(searchQuery.toLowerCase())
    );

  // Pagination
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  const requestSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  const uniqueMakes = [...new Set(data.map((row) => row.Make))];

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>EV Data Table</h2>

      {loading ? (
        <div className={styles.loaderContainer}>
          <div className={styles.loader}></div>
          <p>Loading data, please wait...</p>
        </div>
      ) : (
        <>
          <div className={styles.controls}>
            <select
              value={filterMake}
              onChange={(e) => setFilterMake(e.target.value)}
            >
              <option value="">All Makes</option>
              {uniqueMakes.map((make) => (
                <option key={make} value={make}>
                  {make}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Search by Model..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th onClick={() => requestSort("VIN (1-10)")}>VIN</th>
                  <th onClick={() => requestSort("Make")}>Make</th>
                  <th onClick={() => requestSort("Model")}>Model</th>
                  <th onClick={() => requestSort("Model Year")}>Model Year</th>
                  <th onClick={() => requestSort("Electric Vehicle Type")}>
                    EV Type
                  </th>
                </tr>
              </thead>
              <tbody>
                {currentRows.map((row, index) => (
                  <tr key={index}>
                    <td>{row["VIN (1-10)"]}</td>
                    <td>{row.Make}</td>
                    <td>{row.Model}</td>
                    <td>{row["Model Year"]}</td>
                    <td>{row["Electric Vehicle Type"]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <br />
          <div className={styles.pagination}>
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              ◀ Prev
            </button>
            <span>
              Page {currentPage} of{" "}
              {Math.ceil(filteredData.length / rowsPerPage)}
            </span>
            <button
              onClick={() =>
                setCurrentPage((prev) =>
                  Math.min(
                    prev + 1,
                    Math.ceil(filteredData.length / rowsPerPage)
                  )
                )
              }
              disabled={
                currentPage === Math.ceil(filteredData.length / rowsPerPage)
              }
            >
              Next ▶
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Datatable;
