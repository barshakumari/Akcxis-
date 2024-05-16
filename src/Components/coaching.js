import React from 'react'
import img1 from "../Components/images/coaching.png"
import img3 from "../Components/images/ielts.png"
import img4 from "../Components/images/pte.png"
import img5 from "../Components/images/toeflicon.png"
import img6 from "../Components/images/Eicon.png"
import img7 from "../Components/images/SPOKEN  ENGLISH.png"
import img8 from "../Components/images/FRENCH.png"
import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import image4 from "./images/image4.png"
import image5 from "./images/image5.png"
import image6 from "./images/image6.png"
import image7 from "./images/image7.png"
import image8 from "./images/image8.png"
import image9 from "./images/coaching2.png"
import "./coaching.css"
import { Link } from 'react-router-dom'
import Modal from './modal'
import Form from './form'

const Coaching = () => {
  return (
    <>

      <div className='section12'>
        <img src={img1} className='img-fluid w-100' />

      </div>

      {/* go to home page */}
      <div className='heading-linking'>
        <div className='container'>
          <ol>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/contact'>Contact</a>
            </li>
          </ol>
        </div>
      </div>


      {/* heading */}
      <div className="heading py-5 ">
        <div className="container">
          <div className='heading-title1'>
            <h1 className='text-center '>CREATE A NEW FUTURE</h1>
          </div>
          <div className="row">
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <img src={image9} alt="" className='img-fluid ' />
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-center" >
              <div>
                <h5 className=' fw-semibold  text-uppercase'>Explore your Coaching options with us</h5>
                <p className=' mt-3'>
                  Standardized tests help the universities/colleges, employers and visa officers to ensure and measure the skills of the applicant against a common globally accepted platform. Most of the universities and colleges abroad look for a proof of English Language Proficiency from the students.  The English language Proficiency proof would be required by employers and visa officers for the purpose of study visa, work visa or PR as well. The candidates must carefully look for the requirements of the specific university or college and the country they are keen to go to, before selecting the right course. At Akcxis Immigrations, we make sure that you ace these standardized tests and achieve the highest score possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section17 */}
      <div className="section17 bg-light py-5">
        <div className="cardMain">
          <Modal title="Apply Now" className="ms-1 fw-semibold fs-5" />
        </div>
        <div className='heading-title1'>
          <h1 className='text-center '>CHECKOUT THE SOLUTION</h1>
        </div>
        <h5 className='text-center fw-semibold  text-uppercase'>Most Ranked Courses</h5>
        <div className='d-flex justify-content-evenly align-items-center mx-3 material'>
          <div className='cardstudy border border-dark border-opacity-25 rounded-3 shadow-lg'>
            <a href="/ielts" className='text-decoration-none text-dark'>
              <div className='d-flex justify-content-center'>
                <img src={img3} alt="" className='img-fluid w-50 mb-5' />
              </div>
              {/* <h4 className="text-center mt-5">IELTS</h4> */}
              <p className="">International English Language Testing System exam is one of the most popular exams for students, professionals and individuals who want to go abroad for higher education, work or to settle Abroad.</p>
            </a>
          </div>

          <div className='cardstudy border border-dark border-opacity-25 rounded-3 shadow-lg'>
            <a href="/Pte" className='text-decoration-none text-dark'>
              <div className='d-flex justify-content-center'>
                <img src={img4} alt="" className='img-fluid mb-5 w-75' />
              </div>
              {/* <h4 className="mt-3 text-center">PTE</h4> */}
              <p className="">Pearson Test of English is a completely AI based computer test dedicated for testing English language usage of non-native English speakers. The test is widely accepted by Universities, colleges and governments across the globe.</p>
            </a>
          </div>
          <div className='cardstudy border border-dark border-opacity-25 rounded-3 shadow-lg'>
            <a href="/Toefl" className='text-decoration-none text-dark'>
              <div className="d-flex justify-content-center">
                <img src={img5} alt="" className='img-fluid  mb-5 ' />
              </div>
              {/* <h4 className="mt-3 text-center"> TOEFL</h4> */}
              <p className="">TOEFL stands for Test of English as a Foreign Language. It is a standardized test to measure the english language proficiency. TOEFL can be given as internet based or paper based test.</p>
            </a>
          </div>
        </div >
        {/* <div className='d-flex justify-content-evenly align-items-center mt-4 material mx-3'>
          <div className='cardstudy border border-dark border-opacity-25 rounded-3 shadow-lg'>
    
              <div className='d-flex justify-content-center'>
                <img src={img6}  alt="" className='img-fluid mb-5 w-75' />
              </div>
            
              <p className="">The Canadian English Language Proficiency Index Program or CELPIP is suitable for people who need to prove their English language skills, when applying for Canadian permanent residency, work permit and citizenship.</p>
    
          </div>
          <div className='cardstudy border border-dark border-opacity-25 rounded-3 shadow-lg'>
   
              <div className='d-flex justify-content-center'>
                <img src={img7}  alt="" className='img-fluid mb-5 w-50' />
              </div>
         
              <p className="">Having a good command on Spoken English skills opens a plethora of a opportunity, be it in education, at work or building interpersonal skills.</p>
        
          </div>
          <div className='cardstudy border border-dark border-opacity-25 rounded-3 shadow-lg'>

              <div className="d-flex justify-content-center" >
                <img src={img8}  alt="" className='img-fluid mb-5 w-50' />
              </div>
           
              <p className="">The exam is based on the Common European Framework of Reference for Languages, which categorizes language proficiency from A1 (basic user) to C2 (advanced user). Language test that assesses a candidate's ability to converse in French is the TCF.  The Test de connaissance du français is a language placement test for non-native speakers of French. International students who are fluent and good in French and want to attend classes in that language must pass this language exam.</p>
  
          </div>
        </div > */}
      </div>
      {/* section18 */}
      <div className=' section18  py-4 '>
        <div className='heading-title1'>
          <h1 className='text-center '>YOUR PATH WAY TO SUCCESS</h1>
        </div>
        <h5 className='fw-semibold  text-uppercase text-center'>Why Akcxis Immigrations?</h5>
        <div className='row mt-5 w-100'>
          <div className='col-lg-3 col-md-6 col-sm-12 text-center'>
            <img src={image1} alt="" className='img-fluid w-25' />
            <p className='text-center'>Real Time Test Experience By Students</p>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12 text-center'>
            <img src={image2} alt="" className='img-fluid w-25' />
            <p className='text-center'>Free Grammar Classes Twice A Week</p>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12 text-center'>
            <img src={image3} alt="" className='img-fluid w-25' />
            <p className='text-center'>Early Morning And Late Evening Batches</p>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12 text-center'>
            <img src={image4} alt="" className='img-fluid w-25' />
            <p className='text-center'>Offline And Online Practice Material</p>
          </div>

        </div>
        <div className='row  mt-3 w-100'>
          <div className='col-lg-3 col-md-6 col-sm-12 text-center'>
            <img src={image5} alt="" className='img-fluid w-25' />
            <p className='text-center'>Experienced And Certified Trainers</p>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12 text-center'>
            <img src={image6} alt="" className='img-fluid w-25' />
            <p className='text-center'>Crash Course For Faster Preparation</p>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12 text-center'>
            <img src={image7} alt="" className='img-fluid w-25' />
            <p className='text-center'>Flexible Class Schedules</p>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-12 text-center'>
            <img src={image8} alt="" className='img-fluid w-25' />
            <p className='text-center'>Tips & Tricks</p>
          </div>
        </div>
      </div>
      {/* section19 */}
      < div className="section19 py-4 bg-light" >
        <div className="container">
          <h5 className=' fw-semibold '>FAQs</h5>
          <div className="accordion my-3 " id="accordionExample">
            <div className="accordion-item border border-dark ">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button btn btn-warning " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Q: How long is my score valid for?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  A: The score of IELTS, PTE, TOEFL, CELPIP and TCF is valid for 2 years. After that, if needed the candidate will have to reappear for the test. The test can be taken more than once, if the applicant wants to improve the scores.
                </div>
              </div>
            </div>
            <div className="accordion-item mt-3 border border-dark ">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed btn btn-warning " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Q: Which is better IELTS or PTE?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  A: Both IELTS and PTE are English proficiency tests. PTE is a completely computer-based test and is widely accepted by countries for immigration and study purposes, especially in countries like Australia, New Zealand, UK, USA, Singapore etc.
                  <br />
                  <br /> IELTS is accepted by all immigration departments and more than 11,000 organizations, including universities, colleges, employers etc. for study, work and migration purposes.
                  <br /><br />To make the right choice, the applicant would need to check and consider the following points: <br />
                  1. Purpose for giving the exam i.e., study, work or migration <br />
                  2. Course requirements <br />
                  3. Specific country's immigration policy
                </div>
              </div>
            </div>
            <div className="accordion-item mt-3 border border-dark">
              <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Q: Which countries accept TOEFL?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  The TOEFL iBT test is widely recognized for educational purposes by countries like UK, Ireland, Australia, Canada and New Zealand. More than 90% institutes in United States accept TOEFL iBT scores for admission purposes. Leading institutions throughout Europe, especially France and Germany accept TOEFL iBT scores as well.
                  <br /><br />TOEFL scores although widely accepted for study purpose, might not be accepted for direct PR in some countries. The applicant is advised to check for eligibility criteria of the country he/she is interested in, before appearing for TOEFL for migration purpose.
                </div>
              </div>
            </div>
            <div className="accordion-item mt-3 border border-dark">
              <h2 className="accordion-header " id="headingFour">
                <button className="accordion-button collapsed btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                  Q: Can I take CELPIP test for studying in Canada?
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  CELPIP is used to assess English language skills for non-native speakers in listening, writing, speaking and reading for the purpose of immigration in Canada. From August 10, 2023 CELPIP general will be accepted by IRCC for study permit applications. A minimum score of CLB 7 is needed by students appearing for CELPIP for study purpose.
                </div>
              </div>
            </div>
            <div className="accordion-item mt-3 border border-dark">
              <h2 className="accordion-header" id="headingFive">
                <button className="accordion-button collapsed  btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                  Q: Will I need to give TCF exam?
                </button>
              </h2>
              <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  TCF (test de Connaissance du francais) is a language proficiency test for non-native French speakers for the purpose of employment, academic or migration reasons. The TCF exam is an official proof of French language proficiency and is recognized by IRCC for permanent residence (PR) of Canada. Giving TCF exam is also mandatory if the candidate plans to immigrate to Quebec - for which the candidate will need to clear TCFQ.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Coaching
