import React from "react";

function DisplayData({ data, handleDelete, updatedata }) {
  console.log(data, "From Display");
  return (
    <div>
      {data.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Delete</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.FirstName}</td>
                <td>{item.LastName}</td>
                <td>
                  <button
                    style={{
                      background: "red",
                      minWidth: "80px" /* Adjust this value as needed */,
                      padding: "8px",
                    }}
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className="Updatebtn"
                    style={{
                      background: "#67B7EF",
                      minWidth: "80px" /* Adjust this value as needed */,
                      padding: "8px",
                    }}
                    onClick={() => updatedata(index, item)}
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h1>List is empty</h1>
      )}
    </div>
  );
}

export default DisplayData;
