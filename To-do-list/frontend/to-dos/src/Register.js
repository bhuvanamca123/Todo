import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Register() {    
    const [usernameReg, setUernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState ("");
        const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post('http://localhost:3000/register',values)
        .then(res=> console.log(res))
        .then(err =>console.log(err));
}

  return (

    <div className="App">
    <div className="registration">
       
       <input
         type="text"
         onChange={(e) => {
            setUernameReg(e.target.value);
         }}
       /><br/>
    
        <input
         type="text"
         onChange={(e) =>{
            setPasswordReg(e.target.value);
         }}
       /> <br />
      </div>
 </div>
  )
}
  export default Register;
