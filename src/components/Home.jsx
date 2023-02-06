import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Blogcom from './BlogCom';

function Home() {
  return (
   <>
   <Carousel>
      <Carousel.Item className='caros'>
        <img
          className="d-block w-100"
          src="images/blogger4.avif"
          alt="First slide"
        />
        <Carousel.Caption className='carost'>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item  className='caros'>
        <img
          className="d-block w-100"
          src="images/blogger2.avif"
          alt="Second slide"
        />

        <Carousel.Caption className='carost'>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='caros'>
        <img
          className="d-block w-100"
          src="images/blogger3.avif"
          alt="Third slide"
        />

        <Carousel.Caption className='carost'>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='caros'>
        <img
          className="d-block w-100"
          src="images/blogger5.avif"
          alt="Third slide"
        />

        <Carousel.Caption className='carost'>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <div className='container-fluid'>
       <Blogcom/>
    </div>

</>
  )
}

export default Home;