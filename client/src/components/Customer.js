import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";

function Customer(props) {
  return (
    <TableBody>
      <TableRow>
        <TableCell>{props.id}</TableCell>
        <TableCell>
          <img src={props.image} alt="profile" />
        </TableCell>
        <TableCell>{props.name}</TableCell>
        <TableCell>{props.birthday}</TableCell>
        <TableCell>{props.gender}</TableCell>
        <TableCell>{props.job}</TableCell>
      </TableRow>
    </TableBody>
  );
}

export default Customer;
