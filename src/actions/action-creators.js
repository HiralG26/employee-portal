import * as ActionTypes from './action-types';
import axios from 'axios'
//import { dispatch } from 'jest-circus/build/state';

const API_URL = process.env.REACT_APP_EMPLOYEE_API_URL;

//export function loadEmployees(employees) { //laod emp is action creator

//asynch function using thunk 
export function loadEmployees(employees) {
    return async (dispatch) => {
        try {
            let result = await axios.get(API_URL);
            dispatch({
                type: ActionTypes.GET_EMPLOYEES,// action type
                payload: result.data
            })
            return Promise.resolve(result.data);

        } catch (error) {
            return Promise.reject(error)

        }
        // type: ActionTypes.GET_EMPLOYEES,// action type
        // payload: employees
    }

}

export function addEmployee(employees) {
    return async (dispatch) => {
        try {
            console.log("invoked");
            let result = await axios.post(API_URL, employees);//adding to db not in memory state
            dispatch({
                type: ActionTypes.ADD_EMPLOYEE,
                payload: employees
            })
            return Promise.resolve(result.data)
        } catch (error) {
            return Promise.reject(error)

        }

    }
}

export function deleteEmployee(LocationID, EmpCode) {
    return async (dispatch) => {
        try {
            let url = `${API_URL}/location/${LocationID}/empcode/${EmpCode}`;
            let result = await axios.delete(url);
            dispatch({
                type: ActionTypes.DELETE_EMPLOYEE,
                payload: { LocationID: LocationID, EmpCode: EmpCode }
            })
            return Promise.resolve(result.data)
        }
        catch (er) {
            return Promise.reject("error:", er)
        }

    }


}


export function getEmployee(LocationID, EmpCode) {
    console.log("here");
    return async (dispatch) => {
        try {
            let url = `${API_URL}/location/${LocationID}/empcode/${EmpCode}`;
            console.log(url);
            let result = await axios.get(url);
            dispatch({
                type: ActionTypes.GET_EMPLOYEE,
                payload: result.data
            })

            return Promise.resolve(result.data);
        } catch (ex) {
            return Promise.reject(ex);
        }
    }
}