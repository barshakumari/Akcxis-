import React from 'react'
import { FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { ImClock } from 'react-icons/im'
import usa from '../linkImage/usastudy.png'
const UsaVisit = () => {
  return (
    <>
      {/* USA Visitor Visa*/}
      <div className="PTE2">
                <img src={usa} alt="" className='img-fluid w-100' />
              
            </div>

      {/* content */}
      <div className='main-section py-5'>
        <div className='container'>
          <div className='row g-3'>
            <div className='col-lg-9 shadow p-4 mb-5 bg-body rounded'>

              {/* UUSA tourist vis*/}
              <div className='pb-3'>
                <h3 className='mb-3'>USA Visitor Visa</h3>
                <p>Obtaining a tourist visa for the USA from India follows a straightforward process. The initial and crucial step involves completing the Form DS-160 online. Annually, a large number of people journey from India to the USA for various reasons. Additionally, there is a potential pathway to convert your tourist visa into a work visa upon securing an employment opportunity with a US-based employer.</p>
              </div>
              {/* types */}
              <div className='pb-3'>
                <h3 className='mb-3'>Types of USA Visitor Visa</h3>
                <ol>
                  <li>B-1 VISA</li>
                  <li>B-2 VISA</li>
                  <li>Tourist C</li>
                  <li>Tourist C-1, D and C-1/D</li>
                  <li>H-1B and dependents</li>
                  <li>L1 and dependent</li>
                </ol>
              </div>

              {/* benefits */}
              <div className='pb-3'>
                <h3 className='mb-3'>Benefits of USA Visitor Visa</h3>
                <ul>
                  <li>Stay for up to 6 months </li>
                  <li>Free travel throughout the USA</li>
                  <li>Ability to bring along children and dependents</li>
                </ul>
              </div>

              {/* requirements  */}
              <div className='pb-3'>
                <h3 className='mb-3'>USA Tourist Visa Requirements </h3>
                <ul>
                  <li>Valid passport</li>
                  <li>Old passports (if any)</li>
                  <li>Recent photograph (as per the requirements)</li>
                  <li>Completed and signed DS-160 form</li>
                  <li>Confirmation page of the DS-160 form</li>
                  <li>It must be stamped at the Visa Application Centre (VAC)</li>
                  <li>Receipts of the visa fee</li>
                  <li>Proof of funds</li>
                  <li>Proof of character</li>
                </ul>
              </div>

              {/*  Eligibility */}
              <div className='pb-3'>
                <h3 className='mb-3'>USA Tourist Visa Eligibility</h3>
                <ul>
                  <li>Show proof of your travel</li>
                  <li>You must display sufficient proof of funds</li>
                  <li>You must have a residence in your home country</li>
                </ul>
              </div>

              {/* How to get  */}
              <div className='pb-3'>
                <h3 className='mb-3'>How to Apply for USA Tourist Visa</h3>
                <p>Step 1: Choose the type of visa you require</p>
                <p>Step 2: Complete the online application</p>
                <p>Step 3: Give your biometrics.</p>
                <p>Step 4: Submit all documents and DS 160 form.</p>
                <p>Step 5: Pay the fees.</p>
                <p>Step 6: Book US visit visa appointment </p>
                <p>Step 7: Attend a US visa interview</p>
                <p>Step 8: Get the US tourist visa if eligibility criteria are met</p>

              </div>
              {/* process time */}
              <div className='pb-3'>
                <h3 className='mb-3'>Processing Time for a USA Tourist Visa</h3>
                <p>The processing time of the US tourist visa is between three days to 2 weeks. It can delay if there is traffic at the embassy or consulate.</p>
              </div>
            </div>

            <div className='col-lg-3 '>
              <div className='border py-4 mb-3 fixtext'>
                <h3 className='text-center fw-bold text-white'>USA Visitor Visa</h3>

              </div>
              <div class="list-group mb-4 bg-primary">
                <a href="/UkVisitor" class="list-group-item list-group-item-action py-3">UK </a>
                <a href="/AusVisit" class="list-group-item list-group-item-action py-3">Australia </a>
                <a href="/NzVisit" class="list-group-item list-group-item-action py-3">New Zealand </a>
                <a href="/SingaporeVisit" class="list-group-item list-group-item-action py-3 ">Singapore </a>
                <a href="/GermanyVisit" class="list-group-item list-group-item-action py-3 ">Germany </a>
                <a href="/canadaVisit" class="list-group-item list-group-item-action py-3 ">Canada</a>  
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

      </div>0.
       
    </>
  )
}

export default UsaVisit
