import React from 'react'
import img1 from "../Components/images/career.jpg"
import Q from "../Components/images/Q.png"
import sitting from "../Components/images/sitting.png"
import man from "../Components/images/man.png"

import "./career.css"
import Modal from './modal'
import { Link } from 'react-router-dom'
import { FiPhone } from 'react-icons/fi'
import { AiOutlineMail } from 'react-icons/ai'
import { FaWhatsapp } from 'react-icons/fa'
import Form from './form'


const Career = () => {
  return (
    <>
      {/* section24 */}
      
      <div className='section24'>
        <img src={img1} alt="" className='img-fluid w-100 bg-img' />
        <div className='career1'>
          <h1 className='fw-bold text-center text-light display-2'>Career</h1>
        </div>
        {/* <div className='position-sticy end-0 fix-1'>
          <Form />
        </div> */}
      </div>

      {/* go to home page */}
      <div className='direct py-1  d-flex justify-content-center align-items-center '>
        <div className='d-flex justify-content-between align-items-center'>
          <Link to="/" className='text-dark fw-semibold border-end border-white pe-3 text-decoration-none fs-6'>Home</Link>
          <Modal title="Book an Appointment" className="ms-1 fw-semibold fs-6" />
        </div>
      </div>
      {/*section25 */}
      <div className='section25 py-5'>
        <div className='container'>
        <div className="cardMain">
          <Modal title="Apply Now" className="ms-1 fw-semibold fs-5" />
        </div>
        <div className='heading-title1'>
            <h1>CAREER AT AKCXIS</h1>
          </div>
          <h5 className=' fw-semibold'>BUILD A REWARDING CAREER DOING MEANINGFUL WORK</h5>
          <p className=' mt-3'>We confer a dynamic and global environment to our students and clients to live up to their potential. Additionally, if you want to build your career that not only gives you satisfaction but also allows you to achieve your dreams. Our expert team will help you by guiding you in the right direction.</p>
          <div className='row mt-5'>
            <div className="col-lg-4 d-flex">
              <img src={man} alt="" className='img-fluid' />
              <div className='mx-3'>
                <h6 className='fw-bold'>WHO WE ARE</h6>
                <p className='text-secondary'>We are renowned immigration consultants who till now have helped hundreds of people to go abroad and are currently assisting individuals in their overseas journey.</p>
              </div>
            </div>
            <div className="col-lg-4 d-flex">
              <img src={Q} alt="" className='img-fluid' />
              <div className='mx-3'>
                <h6 className='fw-bold '>WHAT WE BELIEVE</h6>
                <p className='text-secondary'>We believe in providing full tailor made step-by-step services, assisting you in becoming Global Citizens in a hassle-free environment. We believe your success is our success.</p>
              </div>

            </div>
            <div className="col-lg-4 d-flex">
              <img src={sitting} alt="" className='img-fluid' />
              <div className='mx-3'>
                <h6 className='fw-bold'>WHAT WE DO</h6>
                <p className='text-secondary'>We help masses study, work, travel, invest & settle overseas in any country around the world.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section26 */}
      <div className="section26 py-5 bg-light">
        <div className="container px-4">
        <div className='heading-title1'>
            <h1>JOIN THE TEAM</h1>
          </div>
          <h5 className=' text-uppercase fw-semibold'>Your Future With Akcxis</h5>
          <p className=' mt-4'>With Akcxis, you can find better job opportunities as per your qualification. Our HR team not only provides better job options, but also helps to build your career and help you in your career growth. In current economic scenario, Akcxis allows you a role that is refreshingly challenging and assists you to establish genuinely valuable skills and knowledge. </p>
          <p className='mb-5'>Moreover, our brand is trustworthy and recognized in India. We believe in conferring authentic and best services to our clients. Our customers refer to us as a most reliable and trustworthy firm because of their experience with us. This plays a significant role in our growth.</p>

          <div className="row ">
            <div className="col-lg-1 ">
              <img src={man} alt="" className='img-fluid' />
            </div>
            <div className="col-lg-5">
              <h6 className='fw-bold'>A STABLE, EXPANDING BUSINESS:</h6>
              <p className='text-secondary'>Akcxis Brains is a leading market player in the field of immigration consultation services. Our goal is to confer scope & quality service. We believe in growing with staedy rapid speed and reliability.</p>
            </div>
            <div className="col-lg-1 ">
              <img src={Q} alt="" className='img-fluid' />
            </div>
            <div className="col-lg-5">
              <h6 className='fw-bold'>PERFORMANCE INCENTIVES:</h6>
              <p className='text-secondary'>Our employees play an indispensable role behind our success. Thus, we believe in giving incentives to our employees to appreciate their work and motivate them to work harder.</p>
            </div>
          </div>

          <div className="row ">
            <div className="col-lg-1">
              <img src={man} alt="" className='img-fluid' />
            </div>
            <div className="col-lg-5">
              <h6 className='fw-bold'>
                GLOBAL CHANCES:</h6>
              <p className='text-secondary'>We confer a wide range of growth opportunities within our network that allows you to select a career path & expand on it in various geographies. </p>
            </div>
            <div className="col-lg-1 ">
              <img src={Q} alt="" className='img-fluid' />
            </div>
            <div className="col-lg-5">
              <h6 className='fw-bold'>REAL IMPACT:</h6>
              <p className='text-secondary'>When you assist people to begin their studies or career in foreign nations, it will have an impact on their whole family. Every success story will enable you to  make a difference in someone's life.</p>
            </div>
          </div>

          <div className="row ">
            <div className="col-lg-1">
              <img src={man} alt="" className='img-fluid' />
            </div>
            <div className="col-lg-5">
              <h6 className='fw-bold'>BE RECOGNIZED AS AN EXPERT:</h6>
              <p className='text-secondary'>As an overseas immigration counselor, you get knowledge & skills to show the right direction to people with a complicated yet life changing process. It makes a positive impact on you as an individual as well as socially & allows you to attain a skill that is universally relevant.</p>
            </div>
            <div className="col-lg-1 ">
              <img src={Q} alt="" className='img-fluid' />
            </div>
            <div className="col-lg-5">
              <h6 className='fw-bold'>
                A CULTURE OF EXCELLENCE:</h6>
              <p className='text-secondary'>Reap the rewards of working in a supportive yet competitive culture. When you join Akcxis Brains, you become a member of a team that collaborates to confer our customers with solutions that can change their lives. Our workforce is among the smartest and most qualified in the industry as it requires a high level of skill and dedication.</p>
            </div>
          </div>
        </div>
      </div>

      {/* contact us */}
      <div className='container  d-flex justify-content-center text-center'>
        <div className='border border-dark border-opacity-25 rounded-3 shadow-lg w-50 py-4 my-3 '>
          <h5 className='text-uppercase fw-semibold '>
            contact us:
          </h5>
          <h6 className='mt-3'><AiOutlineMail className='fs-4' />&nbsp;  <a href='mailto:hr@akcxis.com' className='text-secondary'>hr@akcxis.com</a></h6>
          <h6><FiPhone className='fs-4' />&nbsp;  <a href='tel:+91-98727-33369' className='text-secondary'>+91-98727-33369</a></h6>
          <h6><FaWhatsapp className='fs-4' />&nbsp; <a href='https://api.whatsapp.com/message/A475MHX2ZGQGO1?autoload=1&app_absent=0' className='text-secondary'>+91-98728-33369</a></h6>
        </div>
      </div>

    </>
  )
}

export default Career
