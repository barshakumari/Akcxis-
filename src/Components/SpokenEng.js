import React from 'react'
import img from "./linkImage/spoken.jpg"
import Form from './form'
import './pte.css'
import Modal from './modal'
import { FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { ImClock } from 'react-icons/im'
import { Link } from 'react-router-dom'
const SpokenEng = () => {
  return (
    <>
    <div className='spoken1'>
      <img src={img} alt="" className='img-fluid w-100'/>
    </div>
    <div className="fix-1 position-sticy   end-0 ">
                    <Form />
                </div>
    {/* sPEKEN ENGLISH */}
    <div className='direct py-1 d-flex justify-content-center align-items-center '>
                <div className='d-flex justify-content-between align-items-center'>
                    <Link to="/" className='text-dark fs-6 fw-semibold border-end border-white pe-3 text-decoration-none'>Home</Link>
                    <Modal title="Book a Free Demo " className="ms-1 fw-semibold fs-6" />
                </div>
            </div>

               {/* content */}
      <div className='english-section py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-9' >
              {/* about */}
              <div>
                <h5 className='text-uppercase fw-semibold'>About Spoken English</h5>
                <p></p>
              </div>

              
              {/* FAQ */}
              <div className='py-4'>
                <h5 className=' fw-semibold '>FAQs</h5>
                <div className="accordion my-3 " id="accordionExample">
                  <div className="accordion-item border border-dark ">
                    <h2 className="accordion-header" id="headingOne">
                      <button className="accordion-button btn btn-warning " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Q:
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        A:
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mt-3 border border-dark ">
                    <h2 className="accordion-header" id="headingTwo">
                      <button className="accordion-button collapsed btn btn-warning " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Q:
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        A:
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mt-3 border border-dark">
                    <h2 className="accordion-header" id="headingThree">
                      <button className="accordion-button collapsed btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Q:
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        A:
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mt-3 border border-dark">
                    <h2 className="accordion-header " id="headingFour">
                      <button className="accordion-button collapsed btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                        Q:
                      </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        A:
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mt-3 border border-dark">
                    <h2 className="accordion-header" id="headingFive">
                      <button className="accordion-button collapsed  btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                        Q:
                      </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        A:
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item mt-3 border border-dark">
                    <h2 className="accordion-header " id="headingSix">
                      <button className="accordion-button collapsed btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        Q:
                      </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        A:
                      </div>
                    </div>
                  </div>
                </div>
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

export default SpokenEng
