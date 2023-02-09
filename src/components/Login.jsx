import React from 'react'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'


function Login() {

  const navigator = useNavigate()

  const [pwd,setPwd] = useState('');
  const [emails,setEmail] = useState('');
  const [loginStatus,setLoginStatus] = useState('');


  const LoginData = (e)=>{
    e.preventDefault()
    const LoggedData = localStorage.getItem('data')
    console.log(emails)
    console.log(pwd)

    if(LoggedData){
      try{
        const datas = JSON.parse(LoggedData);
        datas.map((value,index) =>{
      
      
          if(emails == value.email && pwd == value.password ){
            // let status = true;
            // let name = value.name
            
            setLoginStatus({'name' : value.name})
            localStorage.setItem("activeuser", JSON.stringify({'name' : value.name, active: true}))
            navigator('/')
          }else{
            document.getElementById('pwderr').innerHTML = "Incorrect Email or Password"
            document.getElementById('pwderr').style.color = "red"
          }
          })

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