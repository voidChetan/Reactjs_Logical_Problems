import React, { useState } from 'react';

const AboutMe = () => {
    const [myName, setMyName] =  useState("Chetan");
    const [name, setName] = useState('Lado');

    const onmyName = () => {
       setMyName('Aarvika');
       alert(myName);
    }
 
    function changeNAme () {
        setMyName("Rahukl");
        alert(myName)
    }

    return (
        <div>
            About - 
            <h1>{myName}</h1>
            <button onClick={onmyName}>onmyName</button>
            <button onClick={changeNAme}>CLick Me</button>
        </div>
    );
};

export default AboutMe;