import React, { useState } from "react";

const App = () => {
  const [tableData, setTableData] = useState([
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 28 },
    { id: 3, name: "Jim", age: 31 },
  ]);

  const [editingId, setEditingId] = useState(null);

  const handleEdit = (id) => {
    setEditingId(id);
  };

  const handleSave = (id, data) => {
    setTableData(
      tableData.map((row) =>
        row.id === id ? { ...row, ...data } : row
      )
    );
    setEditingId(null);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row) => (
          <tr key={row.id}>
            <td>
              {editingId === row.id ? (
                <input
                  type="text"
                  defaultValue={row.name}
                  onBlur={(event) =>
                    handleSave(row.id, { name: event.target.value })
                  }
                />
              ) : (
                <span onClick={() => handleEdit(row.id)}>{row.name}</span>
              )}
            </td>
            <td>
              {editingId === row.id ? (
                <input
                  type="number"
                  defaultValue={row.age}
                  onBlur={(event) =>
                    handleSave(row.id, { age: event.target.value })
                  }
                />
              ) : (
                <span onClick={() => handleEdit(row.id)}>{row.age}</span>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default App;
