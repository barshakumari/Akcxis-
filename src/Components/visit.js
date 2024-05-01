import React from 'react'
import { Link } from 'react-router-dom'
import img from './images/visit.png'
import Modal from './modal'
import './visit.css'
import { BsCheck2Square } from 'react-icons/bs';
import canada from "./images/canada.png"
import australia from "./images/australia.png"
import uk from "./images/uk.png"
import us from "./images/us.png"
import singapore from "./images/singapore.png"
import germany from "./images/Germany.png"
import bangladesh from "./images/Bangladesh.png"
import hongkong from './images/Hong-Kong.png'
import japan from './images/Japan.png'
import italy from './images/Italy.png'
import korea from './images/South-Korea.png'
import spain from './images/Spain.png'
import srilanka from './images/Sri-LAnka.png'
import turkey from './images/Turkey.png'
import uae from './images/uae.png'
import malaysia from './images/Malaysia.png'
import france from './images/France.png'
import africa from './images/South-Africa.png'
import swetzeland from './images/Switzerland.png'
import vietnam from './images/Vietnam.png'
import egypt from './images/Egypt.png'
import indonesia from './images/Indonesia.png'
import thailand from './images/Thailand.png'
import newzealand from './images/New-Zealand.png'

// import { RxDotFilled } from 'react-icons/rx';
import team from './images/team.png'
import success from './images/success.png'
import document from './images/document.png'
import support from './images/support.png'
import Form from './form'


const Visit = () => {
  return (
    <>
      {/* visit */}
      <div className='visit'>
        <img src={img} alt="" className='img-fluid w-100 bg-img' />
        <div className='visit1'>
          <h1 className='fw-bold text-center text-light display-2'>Visit</h1>
        </div>
        {/* <div className='position-sticy end-0 fix-1'>
          <Form/>
        </div> */}
      </div>

      {/* go to home page */}
      <div className='direct py-1 d-flex justify-content-center align-items-center '>
        <div className='d-flex justify-content-between align-items-center'>
          <Link to="/" className='text-dark fw-semibold border-end border-white pe-3 text-decoration-none fs-6'>Home</Link>
          <Modal title="Book an Appointment" className="ms-1 fw-semibold fs-6" />
        </div>
      </div>

      {/* visit heading */}
      <div className='visit-heading py-5'>
        <div className='container'>
        <div className='heading-title1'>
            <h1>GLOBE TROTTER</h1>
          </div>
          <h5 className='text-uppercase fw-semibold '>Travel and Explore the world with us</h5>
          <p className=' mt-4'>Visitor Visa is a non-immigrant visa that allows you to travel to a country for tourism and holiday purpose. If the purpose of the visit is to conduct business, one must apply for a business visa. This allows you to travel to a country to carry out business activities like conduct meetings, participate in exhibitions, attend conferences or carry out commercial transactions.
          </p>
          <p className=''>Every country has a set of its own eligibility, application and document requirements, which must be fulfilled to get a tourist or a business visit visa. We assist you in your application and documentation, making the entire process quick and wrinkle-free for you.</p>
        </div>
      </div>

      {/* our services */}
      <div className='service py-4 bg-light'>
        <div className='container'>
        <div className="cardMain">
          <Modal title="Apply Now" className="ms-1 fw-semibold fs-5" />
        </div>
        <div className='heading-title1'>
            <h1>Our Services</h1>
          </div>
  
          <p className='  '><BsCheck2Square className='fs-4 text-warning ' />&nbsp; Application Form</p>
          <p className=' '><BsCheck2Square className='fs-4 text-warning ' />&nbsp; Document Checklist</p>
          <p className=' '><BsCheck2Square className='fs-4 text-warning ' />&nbsp; Cover Letter</p>
          <p className=' '><BsCheck2Square className='fs-4 text-warning ' />&nbsp; Mock Interview</p>
          <p className=' '><BsCheck2Square className='fs-4 text-warning ' />&nbsp; Flight and Hotel Booking</p>
          <p className=' '><BsCheck2Square className='fs-4 text-warning ' />&nbsp; Review of Document and Filing</p>
          <p className=' '><BsCheck2Square className='fs-4 text-warning ' />&nbsp; Collection of Documents from Embassy</p>
        </div>
      </div>

      {/* why choose us */}
      <div className='visit-choose py-5'>
        <div className='container '>
        <div className='heading-title1'>
            <h1>ONE - STOP SOLUTION</h1>
          </div>
          <h5 className='text-uppercase fw-semibold text-center pb-3  '>Why Choose Us</h5>
          <div className='d-flex justify-content-around align-items-center mt-3 choose1 '>
            <div className='team border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center'>
                <img src={support} alt='' className='img-fluid w-25' />
              </div>
              <h6 className='text-center mt-3'>Committed to Support You </h6>
              <p className=' text-secondary mt-4'>A dedicated visa consultant is available to support and guide our clients all through the process of documentation, application and collection of documents post visa</p>
            </div>
            <div className='team border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center'>
                <img src={team} alt='' className='img-fluid w-25' />
              </div>
              <h6 className='text-center mt-3'>Expert Visa Consultants</h6>
              <p className=' text-secondary mt-4'>Our team of expert  bring with them the year of experience, high performance and success stories</p>
            </div>

            <div className='team border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center'>
                <img src={document} alt='' className='img-fluid w-25' />
              </div>
              <h6 className='text-center mt-3'>Quick and Speedy Documentation</h6>
              <p className=' text-secondary mt-4'>Our step-by-step process flow and prompt response makes the entire documentation and visa application process fast and efficient</p>
            </div>
            <div className='team border-dark border-opacity-25 rounded-3 shadow-lg '>
              <div className='d-flex justify-content-center'>
                <img src={success} alt='' className='img-fluid w-25' />
              </div>
              <h6 className='text-center mt-3'>High Success Rate</h6>
              <p className=' text-secondary mt-4'>With the legency of trust and experience, we have helped thousands of applicants file and get their visas successfully</p>
            </div>
          </div>
        </div>
      </div>

      {/* general document */}
      <div className='general py-5 bg-light'>
        <div className='container'>
        <div className='heading-title1'>
            <h1>Tourist Visa General Document Checklist</h1>
          </div>
          <div className=''>
            <ul>
              <li>Passport (minimum validity 6 months)</li>
              <li>Photocopy of passport's bio pages</li>
              <li>2 Photographs (white background)</li>
              <li>Cover letter</li>
              <li>Return flight bookings</li>
              <li>Hotel booking vouchers</li>
              <li>Recent bank statement (evidence of finance)</li>
              <li>Invitation letter (in case applicable)</li>
              <li>Birth certificate (in case of minors)</li>
            </ul>
          </div>

          <div className='heading-title1 mt-5'>
            <h1>Business Visa General Document Checklist</h1>
          </div>
          <div className=''>
            <ul>
              <li>Passport (minimum validity 6 months)</li>
              <li>Photocopy of passport's bio pages</li>
              <li>2 Photographs (white background)</li>
              <li>Cover letter</li>
              <li>Return flight booking</li>
              <li>Hotel booking vouchers</li>
              <li>Recent bank statement  (evidence of finance)</li>
              <li>Invitation letter (in case applicable)</li>
              <li>Sponsorship letter (in case of sponsorship)</li>
              <li>Letter by employer (in case of employee)</li>

            </ul>
      
          
          </div>
        </div>
      </div>

      {/* choose country */}
      <div className='country1 py-5 bg-light'>
        <div className='container'>
        <div className='heading-title1'>
            <h1>CHOOSE YOUR COUNTRY</h1>
          </div>
          <div className='countryimg1 d-flex justify-content-around align-items-center mt-5'>
            <div className='box  border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center'>
                <img src={us} alt='' className='img-fluid  py-2 ' />
              </div>
              <h6 className='text-center fw-bold'>USA</h6>
            </div>
            <div className='box border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center '>
                <img src={canada} alt='' className='img-fluid  py-2 ' />
              </div>
              <h6 className='text-center fw-bold'>CANADA</h6>
            </div>
            <div className='box border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center'>
                <img src={australia} alt='' className='img-fluid py-2 ' />
              </div>
              <h6 className='text-center fw-bold'>AUSTRALIA</h6>
            </div>
            <div className='box  border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center'>
                <img src={newzealand} alt='' className='img-fluid  py-2 ' />
              </div>
              <h6 className='text-center fw-bold'>NEW ZEALAND</h6>
            </div>

          </div>

          <div className='countryimg1 d-flex justify-content-around align-items-center '>
            <div className='box  border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center'>
                <img src={italy} alt='' className='img-fluid  py-2 ' />
              </div>
              <h6 className='text-center fw-bold'>ITALY</h6>
            </div>
            <div className='box border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center '>
                <img src={france} alt='' className='img-fluid py-2 ' />
              </div>
              <h6 className='text-center fw-bold'>FRANCE </h6>
            </div>
            <div className='box border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center '>
                <img src={germany} alt='' className='img-fluid py-2 ' />
              </div>
              <h6 className='text-center fw-bold'>GERMANY</h6>
            </div>

            <div className='box  border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center'>
                <img src={spain} alt='' className='img-fluid py-2 ' />
              </div>
              <h6 className='text-center fw-bold'>SPAIN</h6>
            </div>
          </div>
          <div className='countryimg1 d-flex justify-content-around align-items-center '>
            <div className='box border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center '>
                <img src={swetzeland} alt='' className='img-fluid  py-2 ' />
              </div>
              <h6 className='text-center fw-bold'>SWITZERLAND</h6>
            </div>
            <div className='box  border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center'>
                <img src={turkey} alt='' className='img-fluid py-2 ' />
              </div>
              <h6 className='text-center fw-bold'>TURKEY</h6>
            </div>
            <div className='box border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center '>
                <img src={egypt} alt='' className='img-fluid  py-2 ' />
              </div>
              <h6 className='text-center fw-bold'>EGYPT</h6>
            </div>
            <div className='box border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center '>
                <img src={africa} alt='' className='img-fluid  py-2 ' />
              </div>
              <h6 className='text-center fw-bold'>SOUTH AFRICA</h6>
            </div>

          </div>

          <div className='countryimg1 d-flex justify-content-around align-items-center '>
            <div className='box  border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center'>
                <img src={uk} alt='' className='img-fluid py-2 ' />
              </div>
              <h6 className='text-center fw-bold'>UK</h6>
            </div>
            <div className='box  border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center'>
                <img src={uae} alt='' className='img-fluid py-2 ' />
              </div>
              <h6 className='text-center fw-bold'>UAE</h6>
            </div>
            <div className='box  border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center'>
                <img src={singapore} alt='' className='img-fluid py-2 ' />
              </div>
              <h6 className='text-center fw-bold'>SINGAPORE</h6>
            </div>
            <div className='box  border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center'>
                <img src={hongkong} alt='' className='img-fluid py-2 ' />
              </div>
              <h6 className='text-center fw-bold'>HONG KONG</h6>
            </div>


          </div>

          <div className='countryimg1 d-flex justify-content-around align-items-center '>
            <div className='box  border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center'>
                <img src={bangladesh} alt='' className='img-fluid py-2 ' />
              </div>
              <h6 className='text-center fw-bold'>BANGLADESH</h6>
            </div>
            <div className='box  border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center'>
                <img src={srilanka} alt='' className='img-fluid py-2 ' />
              </div>
              <h6 className='text-center fw-bold'>SRI LANKA</h6>
            </div>

            <div className='box  border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center'>
                <img src={thailand} alt='' className='img-fluid py-2 ' />
              </div>
              <h6 className='text-center fw-bold'>THAILAND</h6>
            </div>

            <div className='box  border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center'>
                <img src={indonesia} alt='' className='img-fluid py-2 ' />
              </div>
              <h6 className='text-center fw-bold'>INDONESIA</h6>
            </div>
          </div>


          <div className='countryimg1 d-flex justify-content-around align-items-center '>
            <div className='box  border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center'>
                <img src={malaysia} alt='' className='img-fluid py-2 ' />
              </div>
              <h6 className='text-center fw-bold'>MALAYSIA</h6>
            </div>
            <div className='box border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center '>
                <img src={japan} alt='' className='img-fluid  py-2 ' />
              </div>
              <h6 className='text-center fw-bold'>JAPAN</h6>
            </div>

            <div className='box border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center '>
                <img src={korea} alt='' className='img-fluid  py-2' />
              </div>
              <h6 className='text-center fw-bold'>SOUTH KOREA</h6>
            </div>

            <div className='box border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center '>
                <img src={vietnam} alt='' className='img-fluid  py-2' />
              </div>
              <h6 className='text-center fw-bold'>VIETNAM</h6>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className='faq py-4'>
        <div className='container'>
          <h5 className=' fw-semibold '>FAQs</h5>
          <div className="accordion my-3" id="accordionExample">
            <div className="accordion-item border border-dark">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Q: What is a Schengen visa?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  A: Schengen visa is a visa that allows you to visit and explore any of the 26 Schengen. A Schengen visa usually does not allow you to stay for more than 90 days in the Schengen territory. It is only a visit visa and does not permit the holder to take up employment.
                </div>
              </div>
            </div>
            <div className="accordion-item mt-3 border border-dark">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Q:  Which countries are part of the Schengen territory?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  A: The Schengen area currently consists of 26 European countries also known as "Schengen States".
                  <br /><br />
                  The countries are - Austria, Belgium, the Czech Republic, Denmark, Estonia, Finland, France, Germany, Greece, Hungary, Iceland, Italy, Latvia, Liechtenstein, Lithuania, Luxembourg, Malta, the Netherlands, Norway, Poland, Portugal, Slovakia, Slovenia, Spain, Sweden and Switzerland.
                </div>
              </div>
            </div>
            <div className="accordion-item mt-3 border border-dark">
              <h2 className="accordion-header  " id="headingThree">
                <button className="accordion-button collapsed btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Q: How much does a visitor visa cost?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  A:  The application cost of a visitor visa varies according to the country that you are applying to. For example, the US visitor visa application cost is $160 USD, whereas, a Singapore visa application is $30 SGD.
                </div>
              </div>
            </div>
            <div className="accordion-item mt-3 border border-dark">
              <h2 className="accordion-header " id="headingFour">
                <button className="accordion-button collapsed btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  Q:  Is it compulsory to have an itinerary when you apply for a tourist visa?
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  A:  Most countries do not require a detailed itinerary with a visitor visa application but they might require you to submit proof of flight bookings and hotel booking vouchers.
                </div>
              </div>
            </div>

            <div className="accordion-item mt-3 border border-dark">
              <h2 className="accordion-header " id="headingFive">
                <button className="accordion-button collapsed btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  Q:  How long can I stay in a country with a visitor visa?
                </button>
              </h2>
              <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  A: Visitor Visa is a short-term visa. The length of stay varies from country to country. Although, on an average, you can stay from 90 days to six months on a visitor visa.
                </div>
              </div>
            </div>

            <div className="accordion-item mt-3 border border-dark">
              <h2 className="accordion-header " id="headingSix">
                <button className="accordion-button collapsed btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                  Q: My passport expires in 2 months. Can I apply for visitor visa?
                </button>
              </h2>
              <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  A: Most countries would require a minimum validity of 3-6 months on your passport from your intended date of travel. Therefore, you should make sure that your passport has a minimum of 6 months validity from the date of travel, to avoid any rejections.
                </div>
              </div>
            </div>

            <div className="accordion-item mt-3 border border-dark">
              <h2 className="accordion-header " id="headingSeven">
                <button className="accordion-button collapsed btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                  Q:  Can I convert my Canada visitor visa to work visa?
                </button>
              </h2>
              <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  A: If you have a valid job offer while in Canada as a visitor, you can apply for and receive a work permit without having to leave Canada. This temporary policy is extended to deal with significant labour shortage and can be availed until February 28, 2025.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* </div> */}
    </>
  )
}

export default Visit
