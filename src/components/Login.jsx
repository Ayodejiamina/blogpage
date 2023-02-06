import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'


function Login() {

  const navigator = useNavigate()

  const [pwd,setPwd] = useState('');
  const [emails,setEmail] = useState('');
  const [loginStatus,setLoginStatus] = useState({
    name : ""
  });


  const LoginData = (e)=>{
    e.preventDefault()
    const LoggedData = localStorage.getItem('data')
    
    if(LoggedData){
      try{
        const datas = JSON.parse(LoggedData);
        datas.map((value,index) =>{
          if(value.email === emails && value.password === pwd ){
            // let status = true;
            // let name = value.name
            
            setLoginStatus({...loginStatus, ['name'] : value.name})
            localStorage.setItem("activeuser", JSON.stringify(loginStatus))
            navigator('/blog_details')
          }else{
            document.getElementById('pwderr').innerHTML = "Incorrect Email or Password"
            document.getElementById('pwderr').style.color = "red"
          }
          })
        console.log(datas.email)
        console.log(datas.password)

      }
      catch(error) {
        console.log('error has occur')
      }  
    }
  }
  return (
    <div className='container-fluid bg-dark p-5'>
      <div className='fieldcon '>
      <form onSubmit={LoginData}>
        <fieldset>
          <legend>Login Page</legend>
               <span className='spans'>Email:</span> <input type="email"  onChange={(e)=>{setEmail(e.target.value)}} placeholder="Enter your email" name="email" class="form-control rounded-pill" />
               <span className='spans'> Password:</span><input type="password"  onChange={(e)=>{setPwd(e.target.value)}} placeholder="" name="password" class="form-control rounded-pill" />
               <p id='pwderr'></p>
               <div className='text-center'><button type='submit' className='btn btn-outline-warning my-4 rounded-pill'>Login </button></div> 
            
        </fieldset>
        
              </form>
      </div>
          </div>
  )
}

export default Login