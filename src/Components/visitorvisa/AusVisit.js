import React from 'react'
import { FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { ImClock } from 'react-icons/im'
import aus from '../linkImage/australiastudy.png'
const AusVisit = () => {
  return (
 <>
    {/*Australia visitor visa*/}
    <div className="PTE2">
                <img src={aus} alt="" className='img-fluid w-100' />
                <div>
                    {/* <Form /> */}
                </div>
            </div>

            <div className='heading-linking'>
                <div className='container'>
                    <ol>
                        <li>
                            <a href='/'>Home</a>
                        </li>
                        <li>
                            <a href='/visit'>Visit</a>
                        </li>
                        <li>
                            <a >Australia</a>
                        </li>
                    </ol>
                </div>
            </div>
      {/* content */}
      <div className='main-section py-5'>
        <div className='container'>
          <div className='row g-3'>
            <div className='col-lg-9 shadow p-4 mb-5 bg-body rounded'>

              {/*Canada visitor visa*/}
              <div className='pb-3'>
                <h3 className='mb-3'>Australia Visitor Visa</h3>
                <p>An Australia Tourist Visa is a type of non-immigrant visa. It allows foreign nationals to visit Australia for a short time period. Indian citizens who wish to visit Australia for tourism purposes have to apply for the visitor visa (Subclass 600), which allows them to go to Australia for business or tourism related activities.</p>
              </div>
           {/* TYPES */}
           <div className='pb-3'>
            <h3 className='mb-3'>Types of Australia Visitor Visas</h3>
            <ol>
              <li>Tourist visitor</li>
              <li>Business visitor</li>
              <li>Sponsored family visitor</li>
            </ol>
           </div>

              {/* benefits */}
              <div className='pb-3'>
                <h3 className='mb-3'>Benefits of Australia Visitor Visa</h3>
                <ul>
                  <li>No sponsor is required </li>
                  <li>Visit visa can be taken multiple times</li>
                  <li>You can apply at your nearest visa office </li>
                </ul>
              </div>

              {/* requirements  */}
              <div className='pb-3'>
                <h3 className='mb-3'>Australia Tourist Visa Requirements </h3>
                <ul>
                  <li>Valid passport</li>
                  <li>Old passports (if any)</li>
                  <li>Recent photographs (as per the requirements)</li>
                  <li>Completed visa application form (Form 1419)</li>
                  <li>Documents showing your purpose of visit</li>
                  <li>Proof of funds</li>
                  <li>Bank statements (past six months)</li>
                  <li>Income tax returns (past three years)</li>
                  <li>Property investments (if any)</li>
                  <li>Fixed deposits (if any)</li>
                  <li>Medical test results</li>
                  <li>X-ray examinations</li>
                  <li>Personal cover letter</li>
                  <li>Travel Insurance</li>
                  <li>Proofs of Accommodation</li>
                </ul>
              </div>

              {/*  Eligibility */}
              <div className='pb-3'>
                <h3 className='mb-3'>Australia Tourist Visa Eligibility</h3>
                <ul>
                  <li>Sufficient funds to cover the trip</li>
                  <li>Valid documents and invitation letters from sponsors</li>
                  <li>Temporary resident visa (only in certain countries)</li>
                  <li>No criminal records</li>
                </ul>
              </div>

              {/* How to get  */}
              <div className='pb-3'>
                <h3 className='mb-3'>How to Apply for Australia Tourist Visa</h3>
                <p>Step 1: Choose a subclass.</p>
                <p>Step 2: Submit all the necessary documents.</p>
                <p>Step 3: Fill the application form.</p>
                <p>Step 4: Pay the fees.</p>
                <p>Step 5: Make an appointment to submit the form.</p>
                <p>Step 6: If eligibility criteria are met, you will get a tourist visa.</p>
          
              </div>
              {/* process time */}
              <div className='pb-3'>
                <h3 className='mb-3'>Processing Time for a Australia Tourist Visa</h3>
                <p>The Australia Visit Visa Processing time ranges from 2 to 4 weeks. It also depends on the proper documents submitted by the applicant.</p>
              </div>
            </div>

            <div className='col-lg-3 '>
              <div className='border py-4 mb-3 fixtext'>
                <h3 className='text-center fw-bold text-white'>Australia Visitor Visa</h3>

              </div>
              <div className="list-group mb-4 bg-primary">
                <a href="/canadaVisit" className="list-group-item list-group-item-action py-3">Canada </a>
                <a href="/UkVisitor" className="list-group-item list-group-item-action py-3">UK </a>
                <a href="/NzVisit" className="list-group-item list-group-item-action py-3">New Zealand </a>
                <a href="/SingaporeVisit" className="list-group-item list-group-item-action py-3 ">Singapore </a>
                <a href="/GermanyVisit" className="list-group-item list-group-item-action py-3 ">Germany </a>
                <a href="/UsaVisit" className="list-group-item list-group-item-action py-3 ">USA</a>


              </div>
              <div className='box border py-4 px-2 '>
                <h5 className='fw-bold'>Talk to our Immigration Experts</h5>
                <h6 className='mt-3'><FiPhone className='fs-5' />&nbsp; Phone: <a href='tel:+91-98727-33369' className='text-secondary'>+91-98727-33369</a></h6>
                <h6><FaWhatsapp className='fs-5' />&nbsp; Whatsapp: <a href='https://api.whatsapp.com/message/A475MHX2ZGQGO1?autoload=1&app_absent=0' className='text-secondary'>+91-9872833369 </a></h6>
                <hr />
                <h5 className='fw-bold mt-4'>Support</h5>
                <h6 className='text-secondary'><ImClock className='fs-5 text-dark' />&nbsp;Monday to Saturday - 9 AM to 6 PM</h6>
              </div>
            </div>
          </div>
        </div>

      </div>
 
 
 </>
  )
}

export default AusVisit
