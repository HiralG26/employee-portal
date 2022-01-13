import * as ActionTypes from '../actions/action-types';



const initialState = {

    employees: [],
    employee: undefined

}
//static data
// { LocationID: 'MUM', Name: 'ABC', Age: 30, Department: 'JVTC', Designation: 'Sr. Executive', Location: 'Mumbai', EmpCode: '2233' },
//         { LocationID: 'DEL', Name: 'ABC', Age: 20, Department: 'DIGI', Designation: 'Manager', Location: 'Delhi', EmpCode: '1233' },
//         { LocationID: 'MUM', Name: 'ABC', Age: 29, Department: 'HRD', Designation: 'Asst. Manager', Location: 'Mumbai', EmpCode: '2433' }


function employeeReducer(state = initialState, action) {

    const { type, payload } = action;

    switch (type) {
        case ActionTypes.GET_EMPLOYEES:
            return state = { ...state, employees: payload };

        case ActionTypes.GET_EMPLOYEE:
        console.log(payload);
            return { ...state, employee: payload };

        case ActionTypes.ADD_EMPLOYEE:
            console.log(payload);
            return { ...state, employees: [...state.employees, payload] };

        case ActionTypes.DELETE_EMPLOYEE:
            //     let index = state.employees.findIndex(item=>item.LocationID === payload.LocationID && item.EmpCode===payload.EmpCode);
            //     return {...state,employees:state.employees.splice(index,1)};
            let dItem = state.employees.find(item => item.LocationID == payload.LocationID && item.EmpCode === payload.EmpCode);
            return { ...state, employees: state.employees.filter((item) => dItem != item) };
        default:
            return state;


    }

}



export default employeeReducer;