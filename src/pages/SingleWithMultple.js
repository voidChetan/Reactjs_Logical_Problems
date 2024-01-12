import React, { useState } from 'react';
import axios from 'axios';
const SingleWithMultple = () => {
    let [employeeObj, setEmployeeObj] = useState({
        "EmpId": 0,
        "Name": "",
        "ContactNo": "",
        "Email": "",
        "City": "",
        "State": "",
        "PinCode": "",
        "Designation": "",
        "MockEmpRelatives": []
    });

    const updateEmpFormValues = (event, key) => {
        setEmployeeObj(prevObj => ({ ...prevObj, [key]: event.target.value }))
    }
    const addRelative = () => {
        setEmployeeObj(prevObj => ({ ...prevObj, MockEmpRelatives: [...prevObj.MockEmpRelatives, relativeObj] }))
    }



    let [relativeObj, setRelativeObj] = useState({
        "RelativeId": 0,
        "Name": "",
        "Relation": "",
        "Age": 0,
        "EmpId": 0
    });
    const updateRelativeFormValues = (event, key) => {
        setRelativeObj(prevObj => ({ ...prevObj, [key]: event.target.value }))
    }

    const createEmployee = async ()  => {
        const response = await  axios.post("https://onlinetestapi.gerasim.in/api/Mock/CreateEmployee",employeeObj);
        if(response.data.result) {
            alert("Employee Creation Succedd")
        } else {
            alert(response.data.message)
        }
    }


    return (
        <div className="container-fluid">
            <div className="mt-2 p-3 bg-primary text-white rounded text-center">
                <h1>Single With Multiple Entity</h1>
                <h5>Employee With Multple Family Relative Scenario </h5>
            </div>
            <div className="row pt-2"  >
                <div className="col-12">
                    <div className="card">
                        <div className="card-header bg-success text-white">
                            <div className="row">
                                <div className="col-6"> New Employee</div>
                                <div className="col-6 text-end">

                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-7">
                                    <div className="row">
                                        <div className="col-6">
                                            <label for=""><b>Name</b></label>
                                            <input type="text" onChange={(event) => { updateEmpFormValues(event, 'Name') }} className="form-control"
                                                placeholder="Enter Name" />
                                        </div>

                                    </div>
                                    <div className="row">
                                        <div className="col-4">
                                            <label for=""><b>Contact No</b></label>
                                            <input type="text" onChange={(event) => { updateEmpFormValues(event, 'ContactNo') }} className="form-control"
                                                placeholder="Enter Contact No" />
                                        </div>
                                        <div className="col-4">
                                            <label for=""><b>Email</b></label>
                                            <input type="text" onChange={(event) => { updateEmpFormValues(event, 'Email') }} className="form-control"
                                                placeholder="Enter Email" />
                                        </div>
                                        <div className="col-4">
                                            <label for=""><b>City</b></label>
                                            <input type="text" onChange={(event) => { updateEmpFormValues(event, 'City') }} className="form-control" placeholder="Enter City" />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-4">
                                            <label for=""><b>State</b></label>
                                            <input type="text" onChange={(event) => { updateEmpFormValues(event, 'State') }} className="form-control" placeholder="Enter State" />
                                        </div>
                                        <div className="col-4">
                                            <label for=""><b>Pincode</b></label>
                                            <input type="text" onChange={(event) => { updateEmpFormValues(event, 'PinCode') }} className="form-control" placeholder="Enter Pincode" />
                                        </div>
                                        <div className="col-4">
                                            <label for=""><b>Dasignation</b></label>
                                            <select className="form-control" onChange={(event) => { updateEmpFormValues(event, 'Designation') }} >
                                                <option value="">Select</option>
                                                <option value="Jr Developer">Jr Developer</option>
                                                <option value="Sr Developer">Sr Developer</option>
                                                <option value="Team Leader">Team Leader</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-6 text-end">
                                            <button className="btn text-white btn-sm bg-secondary">Reset</button>
                                        </div>
                                        <div className="col-6">
                                            <button className="btn text-white btn-sm bg-success"  onClick={createEmployee}>
                                                Save Employee
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-5">
                                    <div className="row">
                                        <div className="col-4">
                                            <label for=""><b>Name</b></label>
                                            <input type="text" onChange={(event) => { updateRelativeFormValues(event, 'Name') }} placeholder="Relative Name" className="form-control" />
                                        </div>
                                        <div className="col-3">
                                            <label for=""><b>Relation</b></label>
                                            <select className="form-control" onChange={(event) => { updateRelativeFormValues(event, 'Relation') }} >
                                                <option value="">Select</option>
                                                <option value="Mother">Mother</option>
                                                <option value="Father">Father</option>
                                                <option value="Sister">Sister</option>
                                                <option value="Brother">Brother</option>
                                            </select>
                                        </div>
                                        <div className="col-3">
                                            <label for=""><b>Age</b></label>
                                            <input type="text" placeholder="Age" onChange={(event) => { updateRelativeFormValues(event, 'Age') }} className="form-control" />
                                        </div>
                                        <div className="col-1 mt-4 text-end">
                                            <button className="btn btn-sm bg-primary" onClick={addRelative} >Add</button>
                                        </div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-12">
                                            <table className="table table-bordered">
                                                <thead>
                                                    <tr>
                                                        <th>Sr</th>
                                                        <th>Name</th>
                                                        <th>Relation</th>
                                                        <th>Age</th>
                                                        <th className="text-center">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        employeeObj.MockEmpRelatives.map((item, index) => {
                                                            return (<tr  >
                                                                <td> {index + 1}</td>
                                                                <td> {item.Name} </td>
                                                                <td>  {item.Relation}  </td>
                                                                <td>  {item.Age}  </td>
                                                                <td className="text-center">
                                                                    <button className="btn btn-sm btn-danger">Delete</button>
                                                                </td>
                                                            </tr>)
                                                        })
                                                    }


                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleWithMultple;