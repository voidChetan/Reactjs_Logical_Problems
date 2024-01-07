import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DependentDropdown = () => {

    let [stateList, setStateList] = useState([]);
    let [districtList, setDistrictList] = useState([]);
    let [cityList, setCityList] = useState([])

    useEffect(()=>{
        getAllState();
    },[]);

    const getAllState = async () => {
        const result =  await  axios.get("https://freeapi.miniprojectideas.com/api/youtube/GetAllState");
        setStateList(result.data.data);
    }

    const onStateChange = async (event)=> { 
        const result = await axios.get("https://freeapi.miniprojectideas.com/api/youtube/GetAllDistrictByStateId?id="+event.target.value); 
        setDistrictList(result.data.data)
    }

    const onDistrictChnage = async (event)=>{
        const response = await axios.get("https://freeapi.miniprojectideas.com/api/youtube/GetAllCitiesByDistrictId?id="+event.target.value);
        setCityList(response.data.data)
    }

    return (
        <div>
            <div className="mt-2 p-3 bg-primary text-white rounded text-center">
                <h1>Dependent drop-down</h1>
                <h4>State - District - City </h4>
                <p>Logic Building & Problem Solving </p>
            </div>
            <div className='row pt-1'>
                <div className="col-12">
                    <div className="myBox">
                        <div className='row'>
                            <div className='col-4 p-4'>
                                <label className='font-weight-bold'>Select State</label>
                                <select className='form-select form-select-lg' onChange={(event)=>{onStateChange(event)}}>
                                    <option>Select State</option>
                                    {
                                        stateList.map((item)=> {
                                            return (<option value={item.stateId}> {item.stateName}</option>)
                                        })
                                    }
                                </select>
                            </div>
                            <div className='col-4 p-4'>
                                <label>Select District</label>
                                <select className='form-select form-select-lg' onChange={(event)=>{onDistrictChnage(event)}}>
                                    <option>Select District</option>
                                    {
                                        districtList.map((item)=>{
                                            return(<option value={item.districtId}> {item.districtName}</option>)
                                        })
                                    }
                                </select>
                            </div>
                            <div className='col-4 p-4'>
                                <label>Select City</label>
                                <select className='form-select form-select-lg'>
                                    <option>Select City</option>
                                    {
                                        cityList.map((item)=>{
                                            return(<option value={item.cityId}> {item.cityName}</option>)
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-12 text-center'>
                                <button className='btn btn-success btn-lg'>  Reset  </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DependentDropdown;