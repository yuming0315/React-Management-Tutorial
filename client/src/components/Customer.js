import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";

function Customer(props) {
  return (
    <TableBody>
      <TableRow>
        <TableCell>{props.customer.id}</TableCell>
        <TableCell>
          <img src={props.customer.image} alt="profile" />
        </TableCell>
        <TableCell>{props.customer.name}</TableCell>
        <TableCell>{props.customer.birthday}</TableCell>
        <TableCell>{props.customer.gender}</TableCell>
        <TableCell>{props.customer.job}</TableCell>
      </TableRow>
    </TableBody>
  );
}

export default Customer;
