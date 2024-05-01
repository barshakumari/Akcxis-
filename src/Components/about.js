import React from 'react'
import img1 from "../Components/images/about1.jpg"
import img2 from "../Components/images/about2.jpg"
import img4 from "../Components/images/visionimg.jpg"
import tropy from '../Components/images/akcxis trofy.png'
import "./about.css"
import { Link } from 'react-router-dom'
import video from "./images/video.MP4"
import team from "./images/akcxis team.png"
import akcxistravel from './images/akcxistravel.png'
import akcxistech from './images/akcxistechnology.png'

// import Form from './form'
import Modal from './modal'
const About = () => {

  return (
    <>
      {/* section12 */}
      <div className='section12'>
        <img src={img1} alt="" className='img-fluid w-100 bg-img' />
        <div className='about1'>
          <h1 className='fw-bold text-center text-light display-2'>About Us</h1>
        </div>
        {/* <div className='position-sticy end-0 fix-1'>
          <Form/>
        </div> */}
      </div>


      {/* go to home page */}
      <div className='direct py-2 d-flex justify-content-center align-items-center '>
        <div className='d-flex justify-content-between align-items-center'>
          <Link to="/" className='text-dark fs-6 fw-semibold border-end border-white pe-3 text-decoration-none '>Home</Link>
          <Link to="/contact" className='text-dark fs-6 fw-semibold  ps-3 text-decoration-none'>Contact Us</Link>
        </div>
      </div>

      {/* section15 */}
      <div className="section15 py-4 bg-light">
        <div className="container">
          <div className='heading-title1'>
            <h1 className='text-center '>ABOUT THE GROUP</h1>
          </div>
          <div className="row g-3">
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <div>

                <h6 className=' text-decoration-underline fw-bolder  text-start'></h6>
                <h5 className='mt-3 text-start text-uppercase fw-semibold'>50+ Years of Your Trust
                  and Recommendation
                </h5>
                <p className=' mt-3'>Vidhata, since it's inception in 1971, has a rich and a trust worthy history. Our focus as a group has always been to bring human insight to business and deliver beyond expectations.
                </p>
                <p className=' mt-3'>Started with humble beginnings, as a typical Indian family run business, the group has over a period of time diversified and distinguished itself in infrastructure and car retail sectors. The group has spread its wings into travels, education and consultancy vertical under Akcxis. Vidhata is well known for its expertise and excellence in the service sector. </p>
              </div>
            </div>
            <div className="col-lg-6 ">
              <img src={tropy} alt="" className='img-fluid' />
            </div>
          </div>
        </div>
      </div>

      {/* section13 */}
      <div className='section13 py-5 '>
        <div className='container'>
          <div className="cardMain">
            <Modal title="Get in Touch" className="ms-1 fw-bold fs-5" />
          </div>
          <div className='heading-title1'>
            <h1 className='text-center '>ABOUT AKCXIS</h1>
          </div>
          <div className='row'>
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <div>
                <h5 className='text-uppercase fw-semibold  mb-3 '>Akcxis Immigrations
                </h5>
                <p className=''>
                  Akcxis International Services is the Education and Consultancy vertical of Vidhata Group. Our primary goal is to assist students, individuals, families, entrepreneurs and investors from all over the world to relocate and succeed in the country of their choice. We are dedicated to establish the path for you and your families future.
                </p>
                <p className='' >
                  We help our clients navigate through their Study Visa, Spouse Visa, Work Permit, Business Visa and Immigration Services with ease and in a hassle-free environment. We are on a mission to provide excellence.
                </p>
              </div>
            </div>
            <div className="col-lg-6 ">
              <center>
                <video height={400} controls autoPlay>
                  <source src={video} type="video/mp4" />
                </video>
              </center>
            </div>

          </div>
        </div>
      </div>

      {/* Akcxis Travel */}
      <div className="section13 py-4 bg-light">
        <div className='container'>
          <div className="row  g-3">
            <div className="col-lg-6 d-flex justify-content-center">
              <img src={akcxistravel} alt="" className='img-fluid  ' />
            </div>
            <div className="col-lg-6  d-flex justify-content-center align-items-center">
              <div>
                <h5 className='text-uppercase fw-semibold  mb-3'>AKCXIS TRAVELS</h5>
                {/* <h5 className=' text-start text-white fw-semibold  text-uppercase mt-3'>We Are a Team of Experienced Consultants
              </h5> */}
                <p className=' mt-3'> Welcome to Akcxis Travels, where every journey is a story waiting to be
                  told. With our expertise and dedication to personalized service, we're here
                  to turn your travel dreams into unforgettable adventures. Whether you're
                  seeking luxury retreats, cultural explorations, or adrenaline-filled
                  escapades, we've got you covered.
                </p>
                <p className=' mt-3'>From the moment you reach out to us, until you return home with
                  memories to cherish, we'll take care of every detail. So, why wait? Let's
                  embark on your next unforgettable journey together. Choose Akcxis
                  Travels and let the adventure begin.</p>
               <p>Akcxis Travel arranges all travel requirements, from services related to car booking to air booking, private jets, whether it's for your business trips or luxury holidays. We are your one-stop destination management company.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* akcxis technologies */}
      <div className="section13 py-4 ">
        <div className='container'>
          <div className="row  g-3">

            <div className="col-lg-6  d-flex justify-content-center align-items-center">
              <div>
                <h5 className=' text-uppercase fw-semibold  mb-3 '>AKCXIS TECHNOLOGIES</h5>
                {/* <h5 className=' text-start text-white fw-semibold  text-uppercase mt-3'>We Are a Team of Experienced Consultants
              </h5> */}
                <p className=' mt-3'> Akcxis Technologies is a cutting-edge digital marketing company that specializes in providing a comprehensive range of marketing solutions to businesses of all sizes. We understand that in today's fast-paced world, digital marketing is the key to success. That's why we leverage the latest technologies and strategies to help our clients achieve their marketing goals.
                </p>
                <p>From Instagram to Facebook to LinkedIn, Akcxis Technology is a one-stop tech solution for all digital marketing and web-related services.</p>

              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <img src={akcxistech} alt="" className='img-fluid  ' />
            </div>
          </div>
        </div>
      </div>
      {/* section14 */}
      <div className="section14 py-4 bg-light">
        <div className='container'>

          <div className="row  g-3">
            <div className="col-lg-6 d-flex justify-content-center">
              <img src={img2} alt="" className='img-fluid  ' />
            </div>
            <div className="col-lg-6  d-flex justify-content-center align-items-center">
              <div>
                <div className='heading-title1'>
                  <h1 className='text-left  '>WHY CHOOSE US</h1>
                </div>
                <h5 className=' text-start  fw-semibold  text-uppercase  mb-3'>We Are a Team of Experienced Consultants
                </h5>
                <p className='  mt-3'> We care about you and understand your needs, goals and aspirations. We have a team which specializes and is proficient in delivering a tailor made step-by-step approach to make the entire application process a hassle-free experience. We believe that your success is our success.</p>
              </div>
            </div>

          </div>

        </div>


      </div>


      {/* vision */}
      <div className="VISION py-4">
        <div className="container ">
          <div className='heading-title1'>
            <h1 className='text-center '>OUR VISION</h1>
          </div>
          <div className="row g-3">
            <div className="col-lg-6   d-flex justify-content-center align-items-center">
              <div>
                <h5 className='mt-3 text-uppercase fw-semibold'>We Confer Wings to Your Dreams of Going Abroad</h5>
                <p className=' mt-3 '>To Globally Earn the Tag of Being Recognised as a Credible Advisory by Empowering Clients and their Families in the entire process of being a Global Citizen.</p>
              </div>
            </div>
            <div className="col-lg-6  d-flex justify-content-center align-items-center">
              <img src={img4} alt="" width={400} className='img-fluid   ' />
            </div>
          </div>
        </div>
      </div>

      {/* team */}
      <div className='section9 py-5'>
        <div className='container text-center'>
          <div className='heading-title1'>
          <h1 className=''>OUR TEAM OF EXPERTS</h1>
          </div>

          <img src={team} alt="" className='img-fluid w-50 ' />
        </div>
      </div>
    </>
  )
}

export default About
