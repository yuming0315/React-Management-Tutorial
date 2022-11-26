import React,{useState} from "react";
import Customer from "./components/Customer"
import Head from "./components/Head";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";

function App() {
  const [state , setState] = useState({customers:""});

  function componentDidMount(){
    callApi().then(res => setState({customers: res}))
    .catch(err=>console.log(err));
    return state&&true;
  }

  const callApi = async() =>{
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  return (
    <Paper className="paper">
      <Table className="table">
        <Head />
        {componentDidMount()?state.customers.map(c=>{return(<Customer key={c.id}         props={c} /> )}):""}
        {state.customers.map(c=><Customer key={c.id} props={c} />)}
      </Table>
    </Paper>
  );
}

export default App;
