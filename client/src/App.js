import React,{useState,useEffect} from "react";
import Customer from "./components/Customer"
import Head from "./components/Head";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";

function App() {
  // state의 변수 자체를 state로 사용하였음 오류를 뱉지는 않지만 잘못됨
  const [customerList , setCustomerList] = useState([]);
  const [flag, setFlag] = useState(false);
  

  // componentDidMount는 class형 component에서 사용하는 생명주기  그래서 잘못 씀
  // function componentDidMount(){
  //   callApi().then(res => setState({customers: res}))
  //   .catch(err=>console.log(err));
  //   return state&&true;
  // }

  useEffect(() => {
    callApi().then(res => setCustomerList(res)).catch(err=>console.log(err));
  }, []);
  

  const callApi = async() =>{
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }
  const handleClickTest = () => {
    setFlag(!flag)
  }
  return (
    <Paper className="paper">
      <Table className="table">
        <Head />
        {/* 아래는 완전 잘못된 코드 /*}
        {/* {componentDidMount()?state.customers.map(c=>{return(<Customer key={c.id}         props={c} /> )}):""} */}
        {customerList.map((customer,index)=><Customer key={index} customer={customer} />)}
      </Table>
    </Paper>
  );
}

export default App;
