import {useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Registration(){
const navigate = useNavigate()
       const [newData , setNewData] = useState({
        name:"",
        email:"",
        number:"",
        password:"",
       }) 
       const [errorses , setError] = useState({
       nameErr:"",
       emailErr:"",
       numErr:"",
       pwdErr:"",
       })
       
       
       const handleWork = (e) =>{
        let name = e.target.name;
        let value = e.target.value;
        setNewData({
          ...newData,
          [name]:value
        })
       }
       const submitMe = (e) =>{
        e.preventDefault();
        let error = false;
        if (newData.name.trim() === "" || newData.name.trim() === null){
          setError((err)=>{
            return{
              ...err,
              nameErr:'Name is required'
            }

          })
          
        }if(newData.email ==""|| newData.email == null || newData.email.trim() == "" || newData.email.indexOf('@',3) == -1||newData.email.indexOf(".") == -1 ){
          setError((err)=>{
            return{
              ...err,
              emailErr:' Email address is required'
            }
            
          })
        } if(!(newData.number.startsWith('090') ||newData.number.startsWith('070')||newData.number.startsWith('081')||newData.number.startsWith('080')) && newData.number.length != 11 ){
          setError((err)=>{
            return{
              ...err,
              numErr:'invalid  Phone Numberr'
            }
          })
          error = true;
        }
        if(newData.number.trim()==="" || newData.number.trim()=== null){
           setError((err)=>{
            return{
             ...err,
             numErr:"Phone Number is required"
            }
           })
           error=true
           
        } 
        if(newData.password == ""  || newData.password == null || newData.password.trim() == ""){
              setError((err)=>{
                return{
                 ...err,
                 pwdErr:"Password is required"
                }
               })
              error=true
          }
          
          const getLocalData = localStorage.getItem("data")
          if (!getLocalData){
            localStorage.setItem("data", JSON.stringify([newData]))
            navigate("/login")
            console.log(newData)
          }else{
            let parsedData = JSON.parse(getLocalData)
            parsedData.push(newData)
            let stringifyData = JSON.stringify(parsedData)
            localStorage.setItem("data", stringifyData)
            navigate("/login")
            console.log(newData)
          }

            // const getLocalData = JSON.parse(localStorage.getItem("data")) || []
            // getLocalData.push(newData)
            // localStorage.setItem("data", JSON.stringify(getLocalData))
            // navigate("/login")
            // console.log(newData)

        if(!error){
          console.log("submit")
        }else{
          console.log("not submit")
          
        }

        
       }
       
       

       return(
        <>
        <form action="" onSubmit={submitMe} className='container-fluid bg-dark p-5'>
         <label htmlFor="" className='text-light'>Name:</label>
         <input type="text " id="name" placeholder="Enter your name" name="name" className ="form-control rounded-pill" onChange={handleWork}/>
         <p style={{color:"red"}}>{errorses.nameErr}</p><br /><br />

         <label htmlFor="" className='text-light'>Email:</label>
         <input type="email" id="email" placeholder="Enter your email" name="email" className="form-control rounded-pill" onChange={handleWork}/>
         <p style={{color:"red"}}>{errorses.emailErr}</p><br /><br />

         <label htmlFor="" className='text-light'>Phone:</label>
         <input type="text" name='number' placeholder="Enter your Phone number" className="form-control rounded-pill" onChange={handleWork} />
         <p style={{color:"red"}}>{errorses.numErr}</p><br /><br />

         <label htmlFor="" className='text-light'>Password:</label>
         <input type="password" name='password' placeholder="" className="form-control rounded-pill" onChange={handleWork} />
         <p style={{color:"red"}}>{errorses.pwdErr}</p><br /><br />
         
 <button type='submit' className='btn btn-outline-primary rounded-pill mb-5'>Submit</button>
         </form>
         </>

)


}
export default Registration;    