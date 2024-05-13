import React from 'react'
import { FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { ImClock } from 'react-icons/im'
import uk from '../linkImage/ukstudy.png'
const UkVisitor = () => {
  return (
    <>
      {/* UK visitor visa*/}
      <div className="PTE2">
        <img src={uk} alt="" className='img-fluid w-100' />

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
                            <a >UK</a>
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
                <h3 className='mb-3'>UK Visitor Visa</h3>
                <p>The UK, officially known as the United Kingdom, is a European island country renowned for its vibrant cities such as London, Oxford, Edinburgh, and Manchester, which stand out as top tourist attractions. Its renowned museums, captivating gardens, rich historical heritage, and exciting events draw visitors from around the globe.</p>
              </div>
              {/* TYPES */}
              <div className='pb-3'>
                <h3 className='mb-3'>Types of UK Visitor Visas</h3>
                <ol>
                  <li>Marriage visa</li>
                  <li>Tier 4 visa</li>
                  <li>Permitted paid engagement visa</li>
                  <li>Short-term study visa</li>
                  <li>UK visitor visa</li>
                </ol>
              </div>

              {/* benefits */}
              <div className='pb-3'>
                <h3 className='mb-3'>Benefits of UK Visitor Visa</h3>
                <ul>
                  <li>You can stay for 6 months with a Visit visa in the UK </li>
                  <li>Visa can be extended if you wish to stay</li>
                  <li>Attend conferences or meeting </li>
                  <li>Meet family or friends</li>
                  <li>Explore the authentic British cuisine</li>
                </ul>
              </div>

              {/* requirements  */}
              <div className='pb-3'>
                <h3 className='mb-3'>UK Tourist Visa Requirements </h3>
                <ul>
                  <li>The online form of UK Tourist Visa Application Form VAF1A.</li>
                  <li>2 recent photographs as per the guidelines of the UK government.</li>
                  <li>Valid passport.</li>
                  <li>Proof of funds to support the stay in the UK.</li>
                  <li>Your last 10 years of travel history.</li>
                  <li>Bio metric information.</li>
                  <li>Letter of Invitation.</li>
                  <li>Fee receipts.</li>
                  <li>Your language skills certificate. </li>
                  <li>Medical certificates, stating that you are fit to travel to the UK.</li>
                </ul>
              </div>

              {/*  Eligibility */}
              <div className='pb-3'>
                <h3 className='mb-3'>UK Tourist Visa Eligibility</h3>
                <ul>
                  <li>Should have a valid Passport and 6 months of validity, and the passport should have two blank pages.</li>
                  <li>Sufficient bank balance should be present for themselves and their family.</li>
                  <li>Should not intend to seek a job</li>
                  <li>No criminal records.</li>
                </ul>
              </div>

              {/* How to get  */}
              <div className='pb-3'>
                <h3 className='mb-3'>How to Apply for UK Tourist Visa</h3>
                <p>Step 1: Immigration documents checklist</p>
                <p>Step 2: Complete application processing</p>
                <p>Step 3: Forms, documentation & application filing</p>
                <p>Step 4: Updates & Follow-up</p>

              </div>
              {/* process time */}
              <div className='pb-3'>
                <h3 className='mb-3'>Processing Time for a UK Tourist Visa</h3>
                <p>The decision on your UK Standard Visitor Visa should come within 3 weeks of attending the appointment at the Visa Application Centre. One week here is equal to 5 working days.</p>
              </div>
            </div>

            <div className='col-lg-3 '>
              <div className='border py-4 mb-3 fixtext'>
                <h3 className='text-center fw-bold text-white'>UK Visitor Visa</h3>

              </div>
              <div className="list-group mb-4 bg-primary">
                <a href="/canadaVisit" className="list-group-item list-group-item-action py-3">Canada </a>
                <a href="/AusVisit" className="list-group-item list-group-item-action py-3">Australia </a>
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

export default UkVisitor
