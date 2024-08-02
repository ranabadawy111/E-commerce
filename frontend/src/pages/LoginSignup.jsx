import React, { useState } from 'react';
import "./CSS/LoginSignUp.css"

const LoginSignUp = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });
  const changeHandler = (e)=>{
    setFormData({...formData, [e.target.name]: e.target.value});
  }
  const signup = async()=>{
    let responseData;
    await fetch("http://localhost:3000/api/v1/auth/signup", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=> responseData=data);
    if(responseData.success){
      console.log(responseData)
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/"); 
    }else{
      alert(responseData.errors);
    }
  }
  const login = async()=>{
    let responseData;
    await fetch("http://localhost:3000/api/v1/auth/login", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((response)=> response.json()).then((data)=> responseData=data);
    if(responseData.success){
      console.log(responseData)
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/"); 
    }else{
      alert(responseData.errors);
    }
  }
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state==="Sign Up"?<input type="text" name="username" value={formData.username} onChange={changeHandler} placeholder='Your Name' />:<></>}
          <input type="email" name="email" value={formData.email} onChange={changeHandler} id="" placeholder='Email Address' />
          <input type="password" name="password" value={formData.password} onChange={changeHandler} id="" placeholder='Password'/>
        </div>
        <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>
        {state==="Sign Up"?
        <p className="loginsignup-login">Already have an account? <span onClick={()=>{setState("Login")}}>Login here</span></p>
        :<p className="loginsignup-login">Create an account? <span onClick={()=>{setState("Sign Up")}}>Click here</span></p>}
   
        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  )
}
export default LoginSignUp;