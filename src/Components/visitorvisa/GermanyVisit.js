import React from 'react'
import { FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { ImClock } from 'react-icons/im'
import germany from '../linkImage/germanystudy.png'
const GermanyVisit = () => {
  return (
  <>
     {/* Germany visitor visa*/}
     <div className="PTE2">
                <img src={germany} alt="" className='img-fluid w-100' />
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
                            <a >Germany</a>
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
                <h3 className='mb-3'>Germany Visitor Visa</h3>
                <p>If you intend to travel to Germany as a tourist, you should be aware of the country's visa requirements. </p>
                <p>To visit Germany, you will require a 90-day valid short-term visa. The Schengen visa is another name for this temporary visa. The Schengen visa is accepted in all of the European nations that are parties to the Schengen agreement, as you may already be aware. Among the nations included by the Schengen agreement is Germany.</p>
                <p>You can enter and remain in Germany as well as the other 26 Schengen nations if you have a Schengen visa.</p>
              </div>


              {/*  requirement */}
              <div className='pb-3'>
                <h3 className='mb-3'>Germany Tourist Visa Requirements</h3>
                <ul>
                  <li>Application Form</li>
                  <li>Photograph</li>
                  <li>Valid passport</li>
                  <li>Itinerary</li>
                  <li>Proof of financial means</li>
                  <li>Invitation letter</li>
                  <li>Travel Health insurance</li>
                  <li>Minor visitor</li>
                </ul>
              </div>

              {/*eligibility */}
              <div className='pb-3'>
                <h3 className='mb-3'>Germany Tourist Visa Eligibility </h3>
                <ul>
                  <li>A valid passport</li>
                  <li>Issue date of passport must be within the previous ten years</li>
                  <li>Passport size photos</li>
                  <li>A copy of your completed and signed application form</li>
                  <li>Proof of hotel bookings, flight bookings and a detailed plan of your activities during the duration of your stay in Germany</li>
                  <li>Copy of tour ticket</li>
                  <li>Proof of having enough finances to support your travel and stay in the country</li>
                  <li>Recent statement from your bank</li>
                  <li>Proof of having a valid medical insurance with a minimum coverage of 30,000 Euros </li>
                  <li>No-objection certificate from your university or school of you are student and from your employer of you are working in a company</li>
                  <li>A Cover letter explaining your reason to visit Germany</li>
                  <li>Proof of civil status. That could be a marriage certificate, birth certificate of children, death certificate of spouse, ration card (if applicable), etc.</li>
                </ul>
              </div>


              {/* How to get  */}
              <div className='pb-3'>
                <h3 className='mb-3'>How to Apply for Germany Tourist Visa</h3>
                <p>Step 1: Download and fill the visa application form correctly</p>
                <p>Step 2: Schedule an appointment at the embassy or at visa application centre</p>
                <p>Step 3: Pay the visa fees as mentioned</p>
                <p>Step 4: Attend the interview</p>
                <p>Step 5: Submit all the required documents and biometrics</p>
                <p>Step 6: Await response and collect your visa </p>
          
              </div>
              {/* process time */}
              <div className='pb-3'>
                <h3 className='mb-3'>Processing Time for a Germany Tourist Visa</h3>
                <p>The average time taken for a German visitor visa to be processed would be 10-15 working days. However, a delay can be expected in certain scenarios because business visas and other visas are given more importance.</p>
              </div>
            </div>

            <div className='col-lg-3 '>
              <div className='border py-4 mb-3 fixtext'>
                <h3 className='text-center fw-bold text-white'>Germany Visitor Visa</h3>

              </div>
              <div className="list-group mb-4 bg-primary">
                <a href="/canadaVisit" className="list-group-item list-group-item-action py-3">Canada </a>
                <a href="/Ausvisit" className="list-group-item list-group-item-action py-3">Australia </a>
                <a href="/Nzvisit" className="list-group-item list-group-item-action py-3">New Zealand </a>
                <a href="/SingaporeVisit" className="list-group-item list-group-item-action py-3 ">Singapore </a>
                <a href="/UkVisitor" className="list-group-item list-group-item-action py-3 ">UK </a>
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

export default GermanyVisit
