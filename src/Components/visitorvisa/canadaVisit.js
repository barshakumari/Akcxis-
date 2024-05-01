import React from 'react'
import { FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { ImClock } from 'react-icons/im'
import canada from '../linkImage/canadastudy.png'
const CanadaVisit = () => {
  return (
    <>
      {/* Canada visitor visa*/}
      <div className="PTE2">
        <img src={canada} alt="" className='img-fluid w-100' />
      </div>

      {/* content */}
      <div className='main-section py-5'>
        <div className='container'>
          <div className='row g-3'>
            <div className='col-lg-9 shadow p-4 mb-5 bg-body rounded'>

              {/*Canada visitor visa*/}
              <div className='pb-3'>
                <h3 className='mb-3'>Canada Visitor Visa</h3>
                <p>A Canada Tourist Visa, known officially as a Temporary Resident Visa (TRV), is an official endorsement provided by a Canadian Visa Office and affixed to your passport. It serves as confirmation that you have satisfied the requirements for temporary residency in Canada, whether as a visitor, student, or worker.</p>
                <p>There exist two primary categories of Visitor Visas for Canada:</p>
                <ol>
                  <li>Single entry visa: This type of visa allows for a single entry into Canada and typically remains valid for a duration of up to 6 months from the date of entry.</li>
                  <li>Multiple-entry visa: A multiple-entry visitor visa permits multiple entries into Canada and can be valid for up to 10 years, or until one month before the expiry date on the passport or re-entry visa, whichever date occurs earlier.</li>
                </ol>
              </div>


              {/* benefits */}
              <div className='pb-3'>
                <h3 className='mb-3'>Benefits of Canada Visitor Visa</h3>
                <ul>
                  <li>Can stay for 6 months </li>
                  <li>Free to travel throughout Canada with a visit visa</li>
                  <li>You can take your children’s and dependents along with you </li>
                </ul>
              </div>

              {/* requirements  */}
              <div className='pb-3'>
                <h3 className='mb-3'>Canada Tourist Visa Requirements </h3>
                <ul>
                  <li>A valid passport with an expiry date exceeding 6 months</li>
                  <li>Documents to prove your ties to your nation country</li>
                  <li>2 recent passport size photographs with a white background having no borders</li>
                  <li>The photograph must not be more than 90 days old</li>
                  <li>A sworn affidavit or an invitation letter from your relatives, if you plan to live with them</li>
                  <li>Medical clearance certificate</li>
                  <li>Photocopy of your return ticket and/or travel itinerary</li>
                  <li>Any additional documents required by the local visa office</li>
                  <li>Bank statements to prove you have enough funds to live in Canada for a while. </li>
                </ul>
              </div>

              {/*  Eligibility */}
              <div className='pb-3'>
                <h3 className='mb-3'>Canada Tourist Visa Eligibility</h3>
                <ul>
                  <li>Sufficient funds are required to cover the trip</li>
                  <li>Valid documents and invitation letters from sponsors.</li>
                  <li>Temporary resident visa (Only in certain Countries)</li>
                </ul>
              </div>

              {/* How to get  */}
              <div className='pb-3'>
                <h3 className='mb-3'>How to Apply for Canada Tourist Visa</h3>
                <p>Step 1: Check the requirements</p>
                <p>Step 2: Arrange the checklist of documents</p>
                <p>Step 3: Submit all the documents</p>
                <p>Step 4: Apply for the Visa</p>
                <p>Step 5: Fly to Canada</p>
              </div>
              {/* process time */}
              <div className='pb-3'>
                <h3 className='mb-3'>Processing Time for a Canada Tourist Visa</h3>
                <p>The processing time for a Canada tourist visa is 15 days, if your documentation is done properly. A business visa takes 1 to 6 weeks of processing time. A temporary resident visa application takes 16-20 days to be processed.</p>
              </div>
            </div>

            <div className='col-lg-3 '>
              <div className='border py-4 mb-3 fixtext'>
                <h3 className='text-center fw-bold text-white'>CANADA Visitor Visa</h3>

              </div>
              <div class="list-group mb-4 bg-primary">
                <a href="/UkVisitor" class="list-group-item list-group-item-action py-3">UK </a>
                <a href="/AusVisit" class="list-group-item list-group-item-action py-3">Australia </a>
                <a href="/NzVisit" class="list-group-item list-group-item-action py-3">New Zealand </a>
                <a href="/SingaporeVisit" class="list-group-item list-group-item-action py-3 ">Singapore </a>
                <a href="/GermanyVisit" class="list-group-item list-group-item-action py-3 ">Germany </a>
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

export default CanadaVisit
