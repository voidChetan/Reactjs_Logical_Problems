import React, { useState } from 'react';
import axios from 'axios';
const User = () => {
    let [loginobj,setLogin] = useState({ "EmailId": "", "Password": ""});
    let [token, setToken] = useState('');
    let [userList, setuserList] = useState([]);


    
          
    const changeObj= (event,key)=> {
        setLogin(prevObj => ({...prevObj,[key]:event.target.value}))
    }
    const login = async ()=> {
        debugger;
        const result = await axios.post('https://freeapi.gerasim.in/api/JWT/login',loginobj );
        debugger;
        if(result.data.result) {
            setToken(result.data.data.token);
        }
    }

    const getUsers=  async () => { 
        const headers = {
            'Authorization': `Bearer ${token}`, // Example authorization header
        };
        const config = {
            headers: headers, // Include the headers in the request
        };
        const result = await axios.get('https://freeapi.gerasim.in/api/JWT/GetAllUsers',config);
        setuserList(result.data.data);
    }
    return (
        <div>
            <div className='row'>
                <div className='col-4'>
                    <div className='row'>
                        <div className='col-12'>
                            <label>Email</label>
                            <input type='text' onChange={(event)=>{changeObj(event,'EmailId')}} className='form-control'/>
                        </div>
                        <div className='col-12'>
                            <label>Password</label>
                            <input type='text' onChange={(event)=>{changeObj(event,'Password')}}  className='form-control'/>
                        </div>
                        <div className='col-12'>
                            <button className='btn btn-primary' onClick={login}>Login</button>
                        </div>
                    </div>
                </div>
                <div className='col-4'>
                    <button className='btn btn-success' onClick={getUsers}>get Users</button>
                </div>
            </div>
        </div>
    );
};

export default User;