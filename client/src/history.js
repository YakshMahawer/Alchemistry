import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
import { useTable } from "react-table";
import logo from "./logo.png";

const History = () => {
  const [history, setHistory] = useState([]);

  const columns = useMemo(
    () => [
      {
        Header: "Date",
        accessor: "date",
        Cell: ({ value }) => formatDate(value),
      },
      {
        Header: "HCl",
        accessor: "conc_a",
      },
      {
        Header: "NaCl",
        accessor: "conc_b",
      },
      {
        Header: "CuSO4",
        accessor: "conc_c",
      },
      {
        Header: "FeSO4",
        accessor: "conc_d",
      },
      {
        Header: "Color",
        accessor: "color",
      },
      {
        Header: "Main Product",
        accessor: "product_name",
      },
      {
        Header: "Actions",
        Cell: () => <button onClick={() => handlePlayReaction()}>Play</button>,
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: history });

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const response = await axios.get("/api/history");
      if (response.data.success) {
        setHistory(response.data.history);
      } else {
        console.log("Failed to fetch history:", response.data.message);
      }
    } catch (error) {
      console.error("Failed to fetch history:", error);
    }
  };

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "short", year: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  const handlePlayReaction = () => {
    // Perform the play action for the selected reaction
    console.log("Playing reaction...");
  };

  return (
    <div>
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <h1 style={{ textAlign: "center", marginTop: 0 }}>History</h1>{" "}
      <table {...getTableProps()} style={{ width: "100%" }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    backgroundColor: "lightgreen",
                    padding: "8px",
                  }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr
                {...row.getRowProps()}
                style={{ backgroundColor: "lightgray" }}
              >
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    style={{ textAlign: "center", padding: "8px" }}
                  >
                    {cell.render("Cell")}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default History;
