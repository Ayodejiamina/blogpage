import React from 'react'

function Footer() {
  return (
    <div className='container-fluid foot'>
      <h2 className='text-center'>Try Wake free for 30 days</h2>
      <p className='text-center'>AminBlog page all the time!!!!!!!!!!</p>
      <div className='row justify-content-center bg-light pt-5'>
       <div className='col-lg-3 col-md-4 col-sm-6 col-6 mb-5'>
        <p>Pricing</p>
        <p>Signup</p>
        <p>Apps</p>
       </div>

       <div className='col-lg-3 col-md-4 col-sm-6 col-6 mb-5'>
        <p>About</p>
        <p>Blog</p>
        <p>Support</p>
       </div>

       <div className='col-lg-3 col-md-4 col-sm-6 col-6 mb-5'>
        <p>Terms</p>
        <p>Privacy</p>
        <p>Security</p>
       </div>

       <div className='col-lg-3 col-md-4 col-sm-6 col-6 icons mb-5'>
        <p><i className='fab fa-facebook'></i>Facebook</p>
        <p><i className='fab fa-twitter'></i>Twitter</p>
        <p><i className='fab fa-instagram'></i>Instagram</p>
        <p><i className='fab fa-linkedin'></i>Linkedin</p>
       </div>
      </div>
    </div>
  )
}

export default Footer