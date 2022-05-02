import React from "react";

function DetailCard({ i, std }) {
  return (
    <>
      <tr>
        <th scope="row">{i + 1}</th>
        <td>{std.name}</td>
        <td>{std.dob}</td>
        <td>{std.city}</td>
        <td>{std.state}</td>
        <td>{std.zip}</td>
        <td>
          <button className="btn btn-outline-info btn-sm me-2">Edit</button>
          <button type="button" className="btn btn-danger btn-sm">
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}

export default DetailCard;
