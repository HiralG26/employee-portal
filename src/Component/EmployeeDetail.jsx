// import {useParams} from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import { getEmployee } from '../Services/employee-services';

// export default function EmployeeDetail(){
//     const {LocationID,empCode} = useParams();
//     const [employee, setEmployee] = useState();

//     useEffect(async()=>{
//         let employee = await getEmployee(LocationID,empCode).catch(err=>console.log("Error in fetching details"));
//         console.log(employee);

//     }),[LocationID,empCode]; //if loc and emp code is updated then only useeffect will execute 
//     return(
//         <div><h2>Employee Details</h2>
//         { employee && <p> Name : {employee.Name}</p>}
//         </div>
//     )
// }

import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Row, Table, Col , Container} from 'react-bootstrap';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {getEmployee} from '../actions/action-creators';


//export default 
function EmployeeDetail({getEmployee, employee}) {

    const { LocationID, empCode } = useParams();

    //const [employee, setEmployee] = useState();

    useEffect(() => {
        async function fetchEmployee() {
           getEmployee(LocationID,empCode);
        } fetchEmployee();
    
    }, [LocationID, empCode]);
    console.log (LocationID ,empCode);
            

return (<React.Fragment>{employee && createTable()}</React.Fragment>)

function createTable(){
    return <Container>
        <Row>
            <Col className="col-md-6 mx-auto">
                <Table bordered striped hover>
                    <thead>
                        <tr>
                            <th colSpan="2"><h3>Employee Details</h3></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Name</th>
                            <td>{employee.Name}</td>
                        </tr>
                        <tr>
                            <th>Employee Code</th>
                            <td>{employee.EmpCode}</td>
                        </tr>
                        <tr>
                            <th>Age</th>
                            <td>{employee.Age}</td>
                        </tr>
                        <tr>
                            <th>Department</th>
                            <td>{employee.Department}</td>
                        </tr>
                        <tr>
                            <th>Designation</th>
                            <td>{employee.Designation}</td>
                        </tr>
                        <tr>
                            <th>Location</th>
                            <td>{employee.Location}</td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
        </Row>
    </Container>
}
}

function mapStateToProps(state){

    return{
    
    employee:state.employeeState.employee
    
    }
    
    }

function mapDispatchToProps(dispatch){
    let actionMap={
        getEmployee
    }
    return bindActionCreators(actionMap,dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(EmployeeDetail);