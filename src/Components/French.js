import React from 'react'
import img from "./linkImage/FRENCH.jpg"
import { Link } from 'react-router-dom'
import Form from './form'
import { FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { ImClock } from 'react-icons/im'
import Modal from './modal'
import "./pte.css"

const French = () => {
  return (
  <>
  <div className="French1">
    <img src={img} alt="" className='img-fluid w-100'/>
    <div>
          <Form />
        </div>
      </div>
{/* Faq */}
      {/* Toefl2 */}
      <div className='direct py-1 d-flex justify-content-center align-items-center '>
        <div className='d-flex justify-content-between align-items-center'>
          <Link to="/" className='text-dark fs-6 fw-semibold border-end border-white pe-3 text-decoration-none'>Home</Link>
          <Modal title="Book a Free Demo " className="ms-1 fw-semibold fs-6" />
        </div>
      </div>

  
      {/* content */}
      <div className='FRENCH-section py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9' >
              {/* about */}
              <div>
                <h5 className='text-uppercase fw-semibold'>About French</h5>
                <p></p>
              </div>
            </div>
            <div className=' col-lg-3'>
              <div className='box border py-4 px-2 position-sticky'>
                <h6 className='fw-bold'>Talk to Our Coaching Experts</h6>
                <h6 className='mt-3'><FiPhone className='fs-5' />&nbsp; <a href='tel:+91-98727-33369' className='text-secondary'>+91-98727-33369</a></h6>
                <h6><FaWhatsapp className='fs-5' />&nbsp; <a href='https://api.whatsapp.com/message/A475MHX2ZGQGO1?autoload=1&app_absent=0' className='text-secondary'>+91-9872833369 </a></h6>
                <hr />
                <h6 className='fw-bold mt-4'>Support</h6>
                <h6 className='text-secondary'><ImClock className='fs-5 text-dark' />&nbsp;Monday to Saturday - 9:30 AM to 6:30 PM</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
  
  </>
  )
}

export default French
