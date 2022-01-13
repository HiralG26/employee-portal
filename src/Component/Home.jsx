import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { getEmployees } from '../Services/employee-services';
import EmployeeList from './EmployeeList';
import SearchBar from './SearchBar';
import { connect } from 'react-redux';

//to direct pass value from parent to child without props
export const EmployeeContext = React.createContext();

//export default -- remove this for create container
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            employees: props.employees,
            filteredResult: props.employees
        }
        this.handleSearch = this.handleSearch.bind(this);
        //console.log(this.state);
    }

    static getDerivedStateFromProps(newProps, oldState) {
        if (newProps.employees.length != oldState.employees.length) {
            console.log('props changed', newProps);
            return {
                employees: newProps.employees,
                filteredResult: newProps.employees
            }
        }
        return null;
    }


    async componentDidMount() {
        //     let employees = await getEmployees()
        //     .catch(err=> console.log("Error in loading employee data"));
        //     //console.log(employees);
        //     this.setState({employees , filteredResult : employees}); //equivalent to this.setState({employees : employees});
        // 
    }

    handleSearch(searchText) {
        //do search using search text and update state
        // console.log(searchText)
        if (searchText && searchText.length > 0) {
            searchText = searchText.toUpperCase();
            let searchResult = this.state.employees.filter((item) => item.Name.toUpperCase().indexOf(searchText) >= 0
                || item.Location.toUpperCase().indexOf(searchText) >= 0
                || item.Department.toUpperCase().indexOf(searchText) >= 0)
            this.setState({ filteredResult: searchResult })
        } else {
            this.setState({ filteredResult: this.state.employees })
        }
    }


    render() {
        console.log(this.state)
        return (
            <EmployeeContext.Provider value={{ employees: this.state.employees, data: this.state.filteredResult, doSearch: this.handleSearch }}>
                <Container>
                    <Row>
                        <Col>
                            <h2> Home</h2>
                            {/* with props */}
                            {/* <SearchBar doSearch= {this.handleSearch}/>
                        <EmployeeList data={this.state.filteredResult}/> */}
                            {/* with const */}
                            <SearchBar />
                            <EmployeeList />
                        </Col>
                    </Row>
                </Container>
            </EmployeeContext.Provider>
        );
    }
}

//container creation
function mapStateToProp(globalState) {
    return {
        //employees : state.employeeState.employees
        employees: globalState.employeeState.employees

    }
}

// function mapDispatchToProps(dispatch){}

export default connect(mapStateToProp)(Home);