import React from 'react'
import { FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { ImClock } from 'react-icons/im'
import canada from '../linkImage/canadastudy.png'
import './pr.css'
const CanadaPr = () => {
  return (
  <>
    {/* Australia Header section */}
    <div className="PTE2">
                <img src={canada} alt="" className='img-fluid w-100' />
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
                            <a href='/migrate'>PR</a>
                        </li>
                        <li>
                            <a >Canada</a>
                        </li>
                    </ol>
                </div>
            </div>
      {/* content */}
      <div className='main-section py-5'>
        <div className='container'>
          <div className='row g-3'>
            <div className='col-lg-9 shadow p-4 mb-5 bg-body rounded'>

              {/* Canada PR?*/}
              <div className='pb-3'>
                <h3 className='mb-3'>Canada PR?</h3>
                <p>Canada PR is a Permanent residency status conferred to any foreign national who qualifies the eligibility criteria of the Canadian government defined to offer a PR. A PR holder is not a Canadian citizen but a Permanent Resident of the country who will have all the privileges that a citizen has except for voting rights. Immigration, Refugees and Citizenship Canada (IRCC) is the governing authority to formulate the laws for Canada immigration. And every immigrant in Canada is chosen by the IRCC board.</p>
              </div>


              {/* benefits */}
              <div className='pb-3'>
                <h3 className='mb-3'>Benefits of Migrating to Canada</h3>
                <ul>
                  <li>High quality of life </li>
                  <li>Growing economy</li>
                  <li>Education in Canada</li>
                  <li>Growing job market</li>
                  <li>Health care services</li>
                  <li>Safe and secure</li>
                  <li>Beautiful place to live</li>
                  <li>Multicultural society</li>
                 
                </ul>
              </div>

              {/*canada PR requirements  */}
              <div className='pb-3'>
                <h3 className='mb-3'>Canada PR Requirements </h3>
                <ul>
                  <li>Valid passport</li>
                  <li>Driver’s license</li>
                  <li>Government issued identity cards</li>
                  <li>Proof of funds</li>
                  <li>Originals and photocopies of all relevant documents</li>
                  <li>Certified translation of documents which are not written in English</li>
                  <li>Language Test results (IELTS)</li>
                  <li>ECA or Educational Credential Assessment</li>
                  <li>Sponsorship letters, personal identification letter, recommendation letter or similar documents</li>
                  <li>Other documents may be required depending on the immigration route you have chosen</li>

                </ul>
              </div>

              {/* canada PR Eligibility */}
              <div className='pb-3'>
                <h3 className='mb-3'>Canada PR Eligibility</h3>
            <p><b>1. Age:</b> Individuals within the age of 18 and 35 get the most preferred and maximum points</p>
            <p><b>2. Education: </b> Education qualification must be at par with higher secondary education in Canada or above</p>
            <p><b>3.	Work experience: </b> One year of full-time work experience in an organization is a minimum requirement.</p>
            <p><b>4.	Language ability: </b> The minimum result of 6 bands in the International English Language Testing System (IELTS)</p>
            <p><b>5.	Adaptability: </b> 10 extra points for a common-law partner or spouse applying for Canada PR</p>
            <p><b>6.	Arranged employment: </b> 10 additional points are granted if an individual receives a job offer from Canada</p>
              </div>

              {/* How to get an Canada PR */}
              <div className='pb-3'>
                <h3 className='mb-3'>How to get an Canada PR</h3>
                <p>Step 1: Check your eligibility for the program.</p>
                <p>Step 2: Gather all the mandatory documents</p>
                <p>Step 3: Create an Express Entry Profile with accurate details.</p>
                <p>Step 4: Submit your profile in the Express Entry Pool.</p>
                <p>Step 5: Wait to receive an Invitation to Apply (ITA).</p>
            
              </div>
              {/* process time */}
              <div className='pb-3'>
                <h3 className='mb-3'>Processing Time for a Canada PR</h3>
         <p>The Express Entry program is the quickest and easiest way to process Canada PR. The entire process completes within six months. However, after receiving ITA for PR Visa, the average time taken is around five to eight months.</p>
                             
              </div>
            </div>

            <div className='col-lg-3 '>
              <div className='border py-4 mb-3 fixtext'>
                <h3 className='text-center fw-bold text-white'>CANADA PR</h3>

              </div>
              <div className="list-group mb-4 bg-primary">
                <a href="/AusPr" className="list-group-item list-group-item-action py-3 " aria-current="true">
                 Australia PR
                </a>

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

export default CanadaPr
