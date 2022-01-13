import { Table } from "react-bootstrap";
import { useContext } from "react";
import { EmployeeContext } from "./Home";
import { Link } from "react-router-dom";
import React from 'react';
import { Trash } from "react-bootstrap-icons";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { deleteEmployee } from "../actions/action-creators";

//data is props comming from home.jsx
//export default 
function EmployeeList({deleteEmployee}){
    
const {data} = useContext(EmployeeContext);

function handleDelete(LocationID,EmpCode,e){
    
    deleteEmployee(LocationID,EmpCode);
    console.log(LocationID+"++"+EmpCode);
}
return (
    <React.Fragment>
        <Link to = "/employees/create" className="btn btn-success">Add Employee</Link>
        <Table striped bordered hover></Table>
        
         <Table striped bordered hover>
         <thead>
             <tr>
                 <th>Location</th>
                 <th>Emp. Code</th>
                 <th>Name</th>
                 <th>Designation</th>
                 <th>Department</th>
                 <th></th>
                 <th>Delete</th>
             </tr>
         </thead>
         <tbody>
             {
                 data.map((item,index)=>{
                     return(<tr key = {index}>
                     <td>{item.Location}</td>
                     <td>{item.EmpCode}</td>
                     <td>{item.Name}</td>
                     <td>{item.Designation}</td>
                     <td>{item.Department}</td>
                     <td>
                         <Link to={`/employees/location/${item.LocationID}/empCode/${item.EmpCode}`}>Details</Link>
                         </td>
                         <td>
                         <Trash className="trash-style" onClick={(e)=> handleDelete(item.LocationID,item.EmpCode,e)} />
                             </td>
                     </tr>)

                 })
             }
         </tbody>
     </Table>
     </React.Fragment>

   
        
     ) 
}

function mapDispatchToProps(dispatch){
    let actionMap={
        deleteEmployee
    }
    return bindActionCreators(actionMap,dispatch)
}

export default connect(null,mapDispatchToProps)(EmployeeList);