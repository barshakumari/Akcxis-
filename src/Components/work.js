import React from 'react'
import img1 from './images/work1.png'
import { Link } from 'react-router-dom'
import { BsCheck2Square } from 'react-icons/bs';
import image1 from './images/Documents (3).png'
import image2 from './images/Opportunity (2).png'
import image3 from './images/Interview (2).png'
import image4 from './images/Resume (2).png'
import canada from "./images/canada.png"
import australia from "./images/australia.png"
import uk from "./images/uk.png"
import us from "./images/us.png"
import singapore from "./images/singapore.png"
import germany from "./images/Germany.png"
import poland from './images/poland.png'
import newzealand from './images/New-Zealand.png'
import uae from './images/uae.png'
import malaysia from './images/Malaysia.png'
import ireland from './images/Ireland.png'
import denmark from './images/Denmark.png'
import hungary from './images/hungary.png'
import croatia from './images/Croatia.png'
import malta from './images/malta.png'
import portugal from './images/Portugal.png'
// import Card from './card';
import Form from './form';
import './work.css'
import Modal from './modal';

const Work = () => {
  return (
    <>
      {/* work1*/}
      <div className='work1'>
        <img src={img1} alt="" className='img-fluid w-100 bg-img' />
        <div className='work'>
          <h1 className='fw-bold text-center text-light display-2'>Work</h1>
        </div>
        {/* <div className='position-sticy end-0 fix-1'>
          <Form />
        </div> */}
      </div>

      {/* go to home page */}
      <div className='direct py-2 d-flex justify-content-center align-items-center '>
        <div className='d-flex justify-content-between align-items-center'>
          <Link to="/" className='text-dark fs-6 fw-semibold border-end border-white pe-3 text-decoration-none'>Home</Link>
          <Link to="/contact" className='text-dark fs-6 fw-semibold  ps-3 text-decoration-none'>Book a Free Demo</Link>
        </div>
      </div>

      {/* work2 */}
      <div className='work2 py-5'>
        <div className='container'>
          <div className="cardMain">
            <Modal title="Apply Now" className="ms-1 fw-semibold fs-5" />
          </div>
          <div className='heading-title1'>
            <h1 className=' '>JOB OPPORTUNITIES</h1>
          </div>
          <h5 className='text-uppercase fw-semibold mb-3'>WORK AND SETTLE ABROAD</h5>
          <p className=''>An international work experience on your resume will not only open plethora of job opportunities across the globe but also will lead to better pay packages and pave way for you and your family to settle abroad. With our pool of resources and experts, Akcxis Immigrations, will help you find the right job fit with your skill sets and assist you in your entire work visa application process.
          </p>
        </div>
      </div>

      {/* why work */}
      <div className='work3 bg-light py-3'>
        <div className='container'>
          <div className='heading-title1'>
            <h1 className=' '>BRIGHTER FUTURE</h1>
          </div>
          <h5 className=' text-uppercase fw-semibold mb-3'>WHY WORK ABROAD? </h5>
          <p className=''>Working in a foreign land can help you build a network of associations. A team with multi-cultural environment can help you build your communication skills, hone your foreign language and broaden your perspective. Working abroad is an excellent way to travel foreign land, understand international economic scenario while at the same time improving your financial standing.
          </p>
          <ul>
            <li> Live in a Foreign Land </li>
            <li> Earn in Dollars</li>
            <li> Benefits of Increased Pay </li>
            <li> Improved Career Opportunities </li>
            <li> Gain Insights into Other Culture </li>
            <li> Enjoy Travel Opportunities </li>
            <li> Move with your Family </li>
            <li> Gain access to World-Class Education and Healthcare Benefits </li>
            <li> Pathway to Citizenship</li>
          </ul>
        </div>
      </div>
      {/* services */}
      <div className='work4 py-4'>
        <div className='container'>
          <div className='heading-title1'>
            <h1 className=' '>OUR SERVICES</h1>
          </div>

          <h5 className=' text-uppercase fw-semibold mb-3'>EFFICIENT AND EFFECTIVE </h5>
          <p className=''>We help our clients build their profile to meet international standards so as to get the best of opportunities in their desired destination country and to increase their chances of acceptance.</p>
          <div className='d-flex justify-content-between align-items-center servicebox1 mt-4'>
            <div className='service-box border-dark border-opacity-25 rounded-3 shadow-lg py-2'>
              <div className='d-flex justify-content-center'>
                <img src={image4} alt='' className='img-fluid W-50' />
              </div>
              <h5 className='text-center fw-bold mt-3'>Resume/CV Drafting Services</h5>
            </div>
            <div className='service-box border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center'>
                <img src={image2} alt='' className='img-fluid W-50' />
              </div>
              <h5 className='text-center fw-bold mt-3'>Job Search</h5>
            </div>
            <div className='service-box border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center'>
                <img src={image3} alt='' className='img-fluid W-50' />
              </div>
              <h5 className='text-center fw-bold mt-3'>Interview Assistance</h5>
            </div>
            <div className='service-box border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center'>
                <img src={image1} alt='' className='img-fluid W-50' />
              </div>
              <h5 className='text-center fw-bold mt-3'>Work Visa Documentation and Filing</h5>
            </div>
          </div>
        </div>
      </div>

      {/* document */}
      <div className='work5 py-5 bg-light'>
        <div className='container'>
          <div className='heading-title1'>
            <h1 className=' '>Documents Requirement</h1>
          </div>
          <div className=''>
            <ul>
              <li>Passport</li>
              <li>Academic Marksheets and Certificates</li>
              <li>Work Experience Letter</li>
              <li>Updated Resume or Curriculum Vitae</li>
              <li>Letter of Recommendations (From Previous Employer)</li>
              <li>Marriage certificate (if applying with a spouse)</li>
              <li>Children's birth certificates (if applying with children)</li>
              <li>Job offer Letter</li>
              <li>Proof of Funds</li>
              <li>Pre - Requisite Exams - IELTS/PTE/CELPIP</li>
              <li>Health insurance for foreign workers</li>
            </ul>
          </div>
        </div>
      </div>

      {/* step */}
      <div className='work6 py-5'>
        <div className='container'>
          <div className='heading-title1'>
            <h1 className=' '>STEPS TO APPLY</h1>
          </div>
          <h5 className=' text-uppercase fw-semibold mb-3'>Applying for a Work Visa</h5>
          <p>Step1: <span className=' fs-6'>Decide whether you are applying online or offline</span></p>
          <p>Step2: <span className=' fs-6'>Get all necessary documents from your current and previous employers</span></p>
          <p>Step3: <span className=' fs-6'>Complete the visa application form by entering all required information</span></p>
          <p>Step4: <span className=' fs-6'>Pay the fees required for visa processing</span></p>
          <p>Step5: <span className=' fs-6'>Send the filled application to the concerned embassy</span></p>
        </div>
      </div>

      {/* country */}
      <div className='work7 py-4 bg-light'>
        <div className='container'>
          <div className='heading-title1'>
            <h1 className=' '>CHOOSE YOUR COUNTRY</h1>
          </div>
          <div className='countryimg1 d-flex justify-content-around align-items-center mt-5'>
            <div className='box  border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center'>
                <img src={australia} alt='' className='img-fluid  py-2' />
              </div>
              <h6 className='text-center fw-bold'>AUSTRALIA</h6>
            </div>
            <div className='box border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center '>
                <img src={newzealand} alt='' className='img-fluid  py-2' />
              </div>
              <h6 className='text-center fw-bold'>NEW ZEALAND</h6>
            </div>
            <div className='box border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center'>
                <img src={canada} alt='' className='img-fluid py-2' />
              </div>
              <h6 className='text-center fw-bold'>CANADA</h6>
            </div>
            <div className='box  border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center'>
                <img src={uk} alt='' className='img-fluid  py-2' />
              </div>
              <h6 className='text-center fw-bold'>UK</h6>
            </div>

          </div>

          <div className='countryimg1 d-flex justify-content-around align-items-center '>
            <div className='box  border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center'>
                <img src={ireland} alt='' className='img-fluid  py-2' />
              </div>
              <h6 className='text-center fw-bold'>IRELAND</h6>
            </div>
            <div className='box border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center '>
                <img src={us} alt='' className='img-fluid  py-2' />
              </div>
              <h6 className='text-center fw-bold'>USA</h6>
            </div>
            <div className='box border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center'>
                <img src={portugal} alt='' className='img-fluid py-2' />
              </div>
              <h6 className='text-center fw-bold'>PORTUGAL</h6>
            </div>
            <div className='box  border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center'>
                <img src={germany} alt='' className='img-fluid  py-2' />
              </div>
              <h6 className='text-center fw-bold'>GERMANY</h6>
            </div>

          </div>

          <div className='countryimg1 d-flex justify-content-around align-items-center'>
            <div className='box  border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center'>
                <img src={malta} alt='' className='img-fluid  py-2' />
              </div>
              <h6 className='text-center fw-bold'>MALTA</h6>
            </div>
            <div className='box border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center '>
                <img src={croatia} alt='' className='img-fluid  py-2' />
              </div>
              <h6 className='text-center fw-bold'>CROATIA</h6>
            </div>
            <div className='box border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center'>
                <img src={hungary} alt='' className='img-fluid py-2' />
              </div>
              <h6 className='text-center fw-bold'>HUNGARY</h6>
            </div>
            <div className='box  border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center'>
                <img src={denmark} alt='' className='img-fluid  py-2' />
              </div>
              <h6 className='text-center fw-bold'>DENMARK</h6>
            </div>

          </div>

          <div className='countryimg1 d-flex justify-content-around align-items-center '>
            <div className='box  border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center'>
                <img src={uae} alt='' className='img-fluid  py-2' />
              </div>
              <h6 className='text-center fw-bold'>UAE</h6>
            </div>
            <div className='box border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center '>
                <img src={malaysia} alt='' className='img-fluid  py-2' />
              </div>
              <h6 className='text-center fw-bold'>MALAYSIA</h6>
            </div>
            <div className='box border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center'>
                <img src={poland} alt='' className='img-fluid py-2' />
              </div>
              <h6 className='text-center fw-bold'>Poland</h6>
            </div>
            <div className='box  border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center'>
                <img src={singapore} alt='' className='img-fluid  py-2' />
              </div>
              <h6 className='text-center fw-bold'>SINGAPORE</h6>
            </div>

          </div>
        </div>
      </div>

      {/* faq */}
      <div className='work8 py-5'>
        <div className='container'>
          <h5 className='   fw-semibold'>FAQs</h5>
          <div className="accordion my-3" id="accordionExample">
            <div className="accordion-item border border-dark">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Q: Do I need a passport when applying for a work Visa?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  A: A valid passport is needed to get a work visa. The passport must be valid for at least 6 months at the time of visa application.
                </div>
              </div>
            </div>
            <div className="accordion-item mt-3 border border-dark">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Q: Which countries are best for working abroad?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  A: Although there are a lot of opportunities across the globe when it comes to working abroad, the most popular destinations chosen by Indians are Australia, Canada, New Zealand, United Kingdom, USA, Singapore, Germany, Ireland, UAE and the Middle East countries.
                </div>
              </div>
            </div>
            <div className="accordion-item mt-3 border border-dark">
              <h2 className="accordion-header  " id="headingThree">
                <button className="accordion-button collapsed btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Q: How can I get a Work Visa?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  A: Countries across the globe look for skilled workers to meet labour shortage in specific areas. One should look at the skilled worker requirement list of individual countries while searching for jobs or applying for a work visa of that country. <br /><br />
                  You may also be required to take a Language Proficiency Test like IELTS/PTE, especially for English-speaking countries before applying for a work visa.<br /><br />
                  While the visa application process may vary from country to country, with the right set of skills, qualifications, work experience and documentation, obtaining a work visa can be a smooth process.
                </div>
              </div>
            </div>
            <div className="accordion-item mt-3 border border-dark">
              <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button collapsed btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  Q: How long is a work visa valid for?
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  A: A work visa or permit is for a specified period of time and can be contract-based as well. These are usually given for a period of 1 to 6 months, with possible extension of an additional 6 months. It is rare for work visas to extend beyond a period of 1 year.
                </div>
              </div>
            </div>
            <div className="accordion-item mt-3 border border-dark">
              <h2 className="accordion-header " id="headingFive">
                <button className="accordion-button collapsed btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  Q: What is the difference between work permit and visa?
                </button>
              </h2>
              <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  A: A work permit is a letter of employment given to an employee by an employer who is outsourcing a professional staff from other countries that allows the candidate to legally work in that country for the specified amount of time. Whereas, a visa is issued by that country's immigration authorities that allows the person entry into that country.

                </div>
              </div>
            </div>
            <div className="accordion-item mt-3 border border-dark">
              <h2 className="accordion-header " id="headingSix">
                <button className="accordion-button collapsed btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                  Q: What are the eligibility criteria to get a work visa of different countries?
                </button>
              </h2>
              <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  A:  Eligibility requirements vary with different countries. Some countries require you to have a job offer in that country before applying for a work visa, whereas, some countries permit you to enter the country on tourist visa and apply for a work visa while in the country on getting a job offer.<br /><br />
                  Few countries have also launched Job-Seeker visa that permits you to enter the country for a specified period of time to look for a job. Once you obtain a job offer, you can apply for work visa of that country.

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Work
