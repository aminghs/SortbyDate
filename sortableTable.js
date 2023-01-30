import React, { useState } from "react";

const ExampleTable = ({ data }) => {
  const [sortOrder, setSortOrder] = useState("asc");

  const sortData = (a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    if (dateA < dateB) return sortOrder === "asc" ? -1 : 1;
    if (dateA > dateB) return sortOrder === "asc" ? 1 : -1;
    return 0;
  };

  const sortedData = [...data].sort(sortData);

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>
              Date
              <button onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
                Sort
              </button>
            </th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, index) => (
            <tr key={index}>
              <td>{row.date}</td>
              <td>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
