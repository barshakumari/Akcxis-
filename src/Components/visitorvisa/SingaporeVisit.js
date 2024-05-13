import React from 'react'
import { FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { ImClock } from 'react-icons/im'
import singapore from '../linkImage/singaporestudy.png'
const SingaporeVisit = () => {
  return (
   <>
    {/*Singapore  visitor visa*/}
    <div className="PTE2">
                <img src={singapore} alt="" className='img-fluid w-100' />
             
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
                            <a >Singapore</a>
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
                <h3 className='mb-3'>Singapore Visitor Visa</h3>
                <p>The Immigration and Checkpoints Authority (ICA) is responsible for issuing Singapore visas. This is a pre-entry permit that allows the bearer of the visa to enter or depart from Singapore. Depending on the type of visa, a person's allowed stay in Singapore varies.</p>
                <p>A visa for entry is not required for visitors holding diplomatic or official passports to enter Singapore. </p>
                <p>Since Singapore is one of the most popular travel destinations for Indians, there has been a significant increase in the need for a visa. The online procedure is easy to follow. Individual walk-in applications are not accepted by the Singapore High Commission.</p>
              </div>
       


              {/* requirements  */}
              <div className='pb-3'>
                <h3 className='mb-3'>Singapore  Tourist Visa Requirements </h3>
                <ul>
                  <li>Duly filled visa application form.</li>
                  <li>Passport with 6 months validity at least.</li>
                  <li>Clear photocopy of passport’s first, last, and observation pages.</li>
                  <li>2 recent passport-size colour photographs.</li>
                  <li>Copy of passport of the invitee.</li>
                  <li>6 months bank statement of the applicant.</li>
                  <li>Property investments (if any)</li>
                  <li>Confirmed return air ticket.</li>
                  <li>Covering letter stating the purpose of visit, date of travel, number of passengers, details of the land itinerary, place of stay in Singapore, and employment details of the applicant.</li>
               
                </ul>
              </div>

              {/*  Eligibility */}
              <div className='pb-3'>
                <h3 className='mb-3'>Singapore  Tourist Visa Eligibility</h3>
                <ul>
                  <li>Valid passport</li>
                  <li>Return ticket</li>
                  <li>Completion of the processes related to the payment</li>
                  <li>Proof of your accommodation</li>
                  <li>Invitation letter from an organisation</li>
                  <li>Onward ticket (for transit visa)</li>
                </ul>
              </div>

              {/* How to get  */}
              <div className='pb-3'>
                <h3 className='mb-3'>How to Apply for Singapore  Tourist Visa</h3>
                <p>Step 1: Apply online and fill out the Singapore Visa application form.</p>
                <p>Step 2: Give your fingerprint and Photo</p>
                <p>Step 3: Submit all the documents</p>
                <p>Step 4: Pay the fees.</p>
                <p>Step 5: Make an appointment to submit the form.</p>
                <p>Step 6: If eligibility criteria are met, you will get a Singapore visa.</p>
          
              </div>
              {/* process time */}
              <div className='pb-3'>
                <h3 className='mb-3'>Processing Time for a Singapore  Tourist Visa</h3>
                <p>The processing time differs based on the type of the chosen, and the place from where it is applied. The processing time of Singapore Visa for Indians takes a maximum of 7 to 10 working days.</p>
                <p>Though it seems like just a week in getting the application processed, it is suggested to apply for the application at least 30 days before the traveling date. It helps in experiencing tension-free processing.</p>
              </div>
            </div>

            <div className='col-lg-3 '>
              <div className='border py-4 mb-3 fixtext'>
                <h3 className='text-center fw-bold text-white'>Singapore Visitor Visa</h3>

              </div>
              <div className="list-group mb-4 bg-primary">
                <a href="/canadaVisit" className="list-group-item list-group-item-action py-3">Canada </a>
                <a href="/UkVisitor" className="list-group-item list-group-item-action py-3">UK </a>
                <a href="/NzVisit" className="list-group-item list-group-item-action py-3">New Zealand </a>
                <a href="/Ausvisit" className="list-group-item list-group-item-action py-3 ">Australia </a>
                <a href="/Germanyvisit" className="list-group-item list-group-item-action py-3 ">Germany </a>
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

export default SingaporeVisit
