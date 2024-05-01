import React from 'react'
import { FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { ImClock } from 'react-icons/im'
import newzealand from '../linkImage/newzealandstudy.png'
const NzVisit = () => {
  return (
    <>
       {/* newzealand visitor visa*/}
     <div className="PTE2">
                <img src={newzealand} alt="" className='img-fluid w-100' />
            </div>

      {/* content */}
      <div className='main-section py-5'>
        <div className='container'>
          <div className='row g-3'>
            <div className='col-lg-9 shadow p-4 mb-5 bg-body rounded'>

              {/*newzealand visitor visa*/}
              <div className='pb-3'>
                <h3 className='mb-3'>New Zealand  Visitor Visa</h3>
                <p>There is no doubt as to why so many people from all over the world travel to New Zealand. To your surprise, the number has increased a lot, with an expected growth of 5.1 million visitors each year, according to a report by the Ministry of Tourism. As a result, the government has put strict laws in place regarding visas. If you have an Indian passport, you won't be eligible for a visa waiver, and you'll need to apply for a visa with New Zealand Immigration before your visit. </p>
              </div>
              {/*  requirement */}
              <div className='pb-3'>
                <h3 className='mb-3'>New Zealand Tourist Visa Requirements</h3>
                <ul>
                  <li>Duly completed (Form No. INZ 1017) New Zealand Visitor Visa Application Form.</li>
                  <li>Your valid passport for at least 3 months from the intended date of departure from New Zealand.</li>
                  <li>Proof of funds to buy one or an onward ticket from New Zealand.</li>
                  <li>Proof of funds to sustain during your stay in New Zealand.</li>
                  <li>A sponsorship form is required for Temporary Entry when a New Zealand resident is supporting you.</li>
                  <li>Proof of travel insurance.</li>
                
                </ul>
              </div>

              {/*eligibility */}
              <div className='pb-3'>
                <h3 className='mb-3'>New Zealand Tourist Visa Eligibility </h3>
                <ul>
                  <li>You are an Australian citizen or resident.</li>
                  <li>You can stay up to 6 months in New Zealand if you are a UK citizen and/or passport holder.</li>
                  <li>Citizens from Visa-Waiver agreement countries can stay in New Zealand for 3 months.</li>
                </ul>
              </div>


              {/* How to get  */}
              <div className='pb-3'>
                <h3 className='mb-3'>How to Apply for New Zealand Tourist Visa</h3>
                <p>Step 1: Click here and pick New Zealand as the country to visit.</p>
                <p>Step 2: Select the visa type and continue.</p>
                <p>Step 3: Choose the dates.</p>
                <p>Step 4: Next, provide your details, like name, address, birth date, and passport number.</p>
                <p>Step 5: Upload the required documents, like your passport, PAN card, and passport-sized photographs.</p>
                <p>Step 6: Pay the visa fees using the payment mode available.</p>
          
              </div>
              {/* process time */}
              <div className='pb-3'>
                <h3 className='mb-3'>Processing Time for a New Zealand Tourist Visa</h3>
                <p>You can check out the status of your New Zealand Visitor Visa application online.</p>
                <p>Average processing times for Visitor Visa (Holiday Visa) as per New Zealand immigration services statistics are as given below:</p>
                <ul>
                  <li>50% of Visitor Visa applications are completed within 76 days.</li>
                  <li>75% of Visitor Visa applications are completed within 90 days.</li>
                  <li>90% of Visitor Visa applications are completed within 120 days.</li>
                </ul>
              </div>
            </div>

            <div className='col-lg-3 '>
              <div className='border py-4 mb-3 fixtext'>
                <h3 className='text-center fw-bold text-white'>New Zealand</h3>

              </div>
              <div class="list-group mb-4 bg-primary">
                <a href="/canadaVisit" class="list-group-item list-group-item-action py-3">Canada </a>
                <a href="/Ausvisit" class="list-group-item list-group-item-action py-3">Australia </a>
                <a href="/GermanyVisit" class="list-group-item list-group-item-action py-3">Germany </a>
                <a href="/SingaporeVisit" class="list-group-item list-group-item-action py-3 ">Singapore </a>
                <a href="/UkVisitor" class="list-group-item list-group-item-action py-3 ">UK </a>
                <a href="/UsaVisit" class="list-group-item list-group-item-action py-3 ">USA</a>
              

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

export default NzVisit
