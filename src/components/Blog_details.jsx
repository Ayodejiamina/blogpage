import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';


function Blog_details() {
  const [pardata,setPardata] = useState([])
  const [parcom,setParcom] = useState([])
  const {id} = useParams()


    //For Post section
  const Posturl = `https://dummyjson.com/posts`;
      async function ParamData(){
        await axios.get(Posturl)
        .then((res) => {
          const SinglePost = res.data.posts
          setPardata(SinglePost)
          // console.log(SinglePost)
        })
      }
      useEffect(()=>{
        ParamData()
        ComData()

      },[])

      //For comment section
      const Comurl = `https://dummyjson.com/comments/post/${id}`
      async function ComData(){
        await axios.get(Comurl)
        .then((results)=>{
          const SingleCom = results.data.comments
          setParcom(SingleCom)
        })
      }
      console.log(parcom)
  return (
    <>
    {pardata ? 
       pardata.map((value,index)=>{
          if(value.id == id){
           return(
            <div className='container-fluid'>
            <div className='det'>
            {/* <img src='https://images.unsplash.com/photo-1603217041431-9a99375beab0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJsb2dnZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' alt="" /> */}
            </div>
            <div>
              <h2 className='text-center'>{value.title}</h2>
              <p>{value.body}</p>
              {/* <p>Tags:{value.tags[0]}<a>&#128524</a></p> */}
            </div>
          </div>
          )
         }

       })
    :"Loading...."
    }
    

    <div className='container'>
      <h2>Blog Posts</h2>
     
      {
    parcom ? 
      parcom.map((comms,index)=>{
        return(
        <>
       
          <div className='d-flex justify-content-space-between my-4'>
            <img src='https://plus.unsplash.com/premium_photo-1673976277102-5182681bf8cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGJsb2dnZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60' style={{width:"100% 100%", height:"100px"}}/>
            <div>
              <p>Username:<strong>{comms.user.username}</strong></p>
              <p>Comments:<strong>{comms.body}</strong></p>
            </div>
          </div>

        </>)
      })
    :"loading" 
    
    }

     
    </div>

    </>
  )
}

export default Blog_details;