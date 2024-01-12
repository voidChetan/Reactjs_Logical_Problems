import React, { useEffect, useState } from 'react';
import axios from 'axios';
const SingleWithMultple = () => {
    let [employeeObj, setEmployeeObj] = useState({
        "empId": 0,
        "name": "",
        "contactNo": "",
        "email": "",
        "city": "",
        "state": "",
        "pinCode": "",
        "designation": "",
        "mockEmpRelatives": []
    });
    let [empList, setEmpList] = useState([])
    let [isNewView, setIsNewView] = useState(false)

    useEffect(() => {
        getAllEmployee();
    }, [])
    const changeView = () => {
        setIsNewView(!isNewView)
    }

    const updateEmpFormValues = (event, key) => {
        setEmployeeObj(prevObj => ({ ...prevObj, [key]: event.target.value }))
    }
    const addRelative = () => {
        setEmployeeObj(prevObj => ({ ...prevObj, mockEmpRelatives: [...prevObj.mockEmpRelatives, relativeObj] }))
    }



    let [relativeObj, setRelativeObj] = useState({
        "relativeId": 0,
        "name": "",
        "relation": "",
        "age": 0,
        "empId": 0
    });
    const updateRelativeFormValues = (event, key) => {
        setRelativeObj(prevObj => ({ ...prevObj, [key]: event.target.value }))
    }

    const createEmployee = async () => {
        const response = await axios.post("https://onlinetestapi.gerasim.in/api/Mock/CreateEmployee", employeeObj);
        if (response.data.result) {
            alert("Employee Creation Success");
            getAllEmployee()
        } else {
            alert(response.data.message)
        }
    }
    const updateEMp =   async () => {
        const response = await axios.post("https://onlinetestapi.gerasim.in/api/Mock/UpdateEmployee", employeeObj); 
        if (response.data.result) {
            alert("Employee Update Success");
            getAllEmployee()
        } else {
            alert(response.data.message)
        }
    }
    const deletEmp =   async (id) => {
        const isDelet = window.confirm('Are you Sure want to delete');
        if(isDelet) {
            const response = await axios.get("https://onlinetestapi.gerasim.in/api/Mock/DeleteEmployeeById?id=" +id); 
            if (response.data.result) {
                alert("Employee Deleted Success");
                getAllEmployee()
            } else {
                alert(response.data.message)
            }
        }
        
    }

    

    const getAllEmployee = async () => {
        const result = await axios.get("https://onlinetestapi.gerasim.in/api/Mock/GetAllEmployees");
        setEmpList(result.data.data)
    }

    const getEmployeeById = async (id) => {
        const result =  await axios.get("https://onlinetestapi.gerasim.in/api/Mock/GetEmployeeById?id=" + id);
        setEmployeeObj(result.data.data);
        changeView();
    }


    return (
        <div className="container-fluid">
            <div className="mt-2 p-3 bg-primary text-white rounded text-center">
                <h1>Single With Multiple Entity</h1>
                <h5>Employee With Multple Family Relative Scenario </h5>
            </div>
            {
                isNewView && <div className="row pt-2"  >
                    <div className="col-12">
                        <div className="card">
                            <div className="card-header bg-success text-white">
                                <div className="row">
                                    <div className="col-6"> New Employee</div>
                                    <div className="col-6 text-end">
                                        <button className='btn btn-sm btn-primary' onClick={changeView}>List</button>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-7">
                                        <div className="row">
                                            <div className="col-6">
                                                <label ><b>Name</b></label>
                                                <input type="text" value={employeeObj.name} onChange={(event) => { updateEmpFormValues(event, 'name') }} className="form-control"
                                                    placeholder="Enter Name" />
                                            </div>

                                        </div>
                                        <div className="row">
                                            <div className="col-4">
                                                <label ><b>Contact No</b></label>
                                                <input type="text"  value={employeeObj.contactNo}  onChange={(event) => { updateEmpFormValues(event, 'contactNo') }} className="form-control"
                                                    placeholder="Enter Contact No" />
                                            </div>
                                            <div className="col-4">
                                                <label ><b>Email</b></label>
                                                <input type="text"  value={employeeObj.email}  onChange={(event) => { updateEmpFormValues(event, 'email') }} className="form-control"
                                                    placeholder="Enter Email" />
                                            </div>
                                            <div className="col-4">
                                                <label ><b>City</b></label>
                                                <input type="text"  value={employeeObj.city}  onChange={(event) => { updateEmpFormValues(event, 'city') }} className="form-control" placeholder="Enter City" />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-4">
                                                <label ><b>State</b></label>
                                                <input type="text"  value={employeeObj.state}  onChange={(event) => { updateEmpFormValues(event, 'state') }} className="form-control" placeholder="Enter State" />
                                            </div>
                                            <div className="col-4">
                                                <label ><b>Pincode</b></label>
                                                <input type="text"  value={employeeObj.pinCode}  onChange={(event) => { updateEmpFormValues(event, 'pinCode') }} className="form-control" placeholder="Enter Pincode" />
                                            </div>
                                            <div className="col-4">
                                                <label ><b>Dasignation</b></label>
                                                <select  value={employeeObj.designation}  className="form-control" onChange={(event) => { updateEmpFormValues(event, 'designation') }} >
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
                                                {
                                                    employeeObj.empId == 0  &&   <button className="btn text-white btn-sm bg-success" onClick={createEmployee}>
                                                    Save Employee
                                                </button>
                                                }
                                                {
                                                    employeeObj.empId !== 0  &&   <button className="btn btn-sm bg-secondary" onClick={updateEMp}>
                                                    Update Employee
                                                </button>
                                                } 
                                              
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <div className="row">
                                            <div className="col-4">
                                                <label ><b>Name</b></label>
                                                <input type="text" onChange={(event) => { updateRelativeFormValues(event, 'name') }} placeholder="Relative Name" className="form-control" />
                                            </div>
                                            <div className="col-3">
                                                <label ><b>Relation</b></label>
                                                <select className="form-control" onChange={(event) => { updateRelativeFormValues(event, 'relation') }} >
                                                    <option value="">Select</option>
                                                    <option value="Mother">Mother</option>
                                                    <option value="Father">Father</option>
                                                    <option value="Sister">Sister</option>
                                                    <option value="Brother">Brother</option>
                                                </select>
                                            </div>
                                            <div className="col-3">
                                                <label ><b>Age</b></label>
                                                <input type="text" placeholder="Age" onChange={(event) => { updateRelativeFormValues(event, 'age') }} className="form-control" />
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
                                                            employeeObj.mockEmpRelatives.map((item, index) => {
                                                                return (<tr  >
                                                                    <td> {index + 1}</td>
                                                                    <td> {item.name} </td>
                                                                    <td>  {item.relation}  </td>
                                                                    <td>  {item.age}  </td>
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
            }
            {
                !isNewView && <div className='row pt-2'>
                    <div className='col-12'>
                        <div className='card'>
                            <div className='card-header bg-success'>
                                <div className="row">
                                    <div className="col-6"> Employee List</div>
                                    <div className="col-6 text-end">
                                        <button className='btn btn-sm btn-primary' onClick={changeView}>New Employee</button>
                                    </div>
                                </div>
                            </div>
                            <div className='card-body'>
                                <table className='table table-bordered'>
                                    <thead>
                                        <tr>
                                            <th>Sr</th>
                                            <th>Name</th>
                                            <th>Contact</th>
                                            <th>City</th>
                                            <th>Designation</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            empList.map((item, index) => {
                                                return (<tr>
                                                    <td>{index + 1}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.contactNo}</td>
                                                    <td>{item.city}</td>
                                                    <td>{item.designation}</td>
                                                    <td>
                                                        <button className='btn btn-sm btn-primary' onClick={()=>{getEmployeeById(item.empId)}}>Edit</button>
                                                        <button className='btn btn-sm btn-danger mx-2' onClick={()=>{deletEmp(item.empId)}}>Delete</button>
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
            }


        </div>
    );
};

export default SingleWithMultple;