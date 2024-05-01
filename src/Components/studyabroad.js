import React from 'react'
import img1 from "../Components/images/studyabroad1.jpg"
import Modal from './modal'
import { BsArrowUpRightCircleFill } from 'react-icons/bs';
import { BsCheck2Square } from 'react-icons/bs';
import { Link } from 'react-router-dom'
import layer from './images/Layer5.png'
import "./studyabroad.css"
import canada from "./images/canada.png"
import australia from "./images/australia.png"
import uk from "./images/uk.png"
import us from "./images/us.png"
import singapore from "./images/singapore.png"
import germany from "./images/Germany.png"
import Form from './form';

const Studyabroad = () => {
  return (
    <>
      {/* section20 */}
      <div className='section20'>
        <img src={img1} alt="" className='img-fluid w-100 bg-img' />
        <div className='studyabroad1'>
          <h1 className='fw-bold text-center text-light display-2'>Study Abroad</h1>
        </div>
        {/* <div className='position-sticy end-0 fix-1'>
          <Form />
        </div> */}
      </div>

      {/* go to home page */}
      <div className='direct d-flex justify-content-center align-items-center py-1'>
        <div className='d-flex justify-content-between align-items-center'>
          <Link to="/" className='text-dark fw-semibold border-end border-white pe-3 text-decoration-none fs-6'>Home</Link>
          <Modal title="Book an Appointment" className="ms-1 fw-semibold fs-6" />
        </div>
      </div>

      {/* why study */}
      <div className="study py-5 ">
        <div className="container ">
          <div className="cardMain">
            <Modal title="Apply Now" className="ms-1 fw-semibold fs-5" />
          </div>
          <h6 className='text-decoration-underline fw-bolder Text1'>EXPLORE THE WORLD</h6>
          <h5 className='text-uppercase fw-semibold '>Why Study Abroad? </h5>
          <h6 className='fw-bold mt-4'><BsCheck2Square className=' fs-4 text-warning' />&nbsp;&nbsp;Top Notch Education - <span className='text-secondary '>Studying internationally offers a wider variety of courses, some of which might also include research options and skill-based training for students.
          </span> </h6>
          <h6 className='fw-bold'><BsCheck2Square className='fs-4 text-warning' />&nbsp;&nbsp;Career Opportunities - <span className='text-secondary '> International experience puts you ahead of the pack, when it comes to internships and job applications.
          </span> </h6>

          <h6 className='fw-bold'><BsCheck2Square className='fs-4 text-warning' />&nbsp;&nbsp;Enhance Your Network - <span className='text-secondary '> Studying abroad builds invaluable relationships with people all over the world, leading to career opportunities, including internships, job offers and business partnerships.
          </span> </h6>
          <h6 className='fw-bold'><BsCheck2Square className='fs-4 text-warning' />&nbsp;&nbsp;Higher Pay - <span className='text-secondary '>  Higher education abroad uplifts job opportunities and salary package. Alumni who have studied abroad on an average gets 25% higher salaries than the rest of the candidates who have applied for the same job.
          </span> </h6>
          <h6 className='fw-bold'><BsCheck2Square className='fs-4 text-warning' />&nbsp;&nbsp;Become Independent - <span className='text-secondary '>
            Away from family and friends, studying abroad makes you self-reliant. You will learn to overcome personal challenges and manage limited finance and resources, preparing you for a more self-sufficient future.
          </span> </h6>
          <h6 className='fw-bold'><BsCheck2Square className='fs-4 text-warning' />&nbsp;&nbsp;Brush Up Your Language Skills - <span className='text-secondary '>
            Studying abroad gives an opportunity to refresh or pick-up foreign language skills. This can add on to your profile on the resume.
          </span> </h6>
          <h6 className='fw-bold'><BsCheck2Square className=' fs-4 text-warning' />&nbsp;&nbsp;See the World - <span className='text-secondary '>
            Studying abroad opens your mind to new experiences and sights and allows you to explore different cultures.
          </span> </h6>
          <h6 className='fw-bold'><BsCheck2Square className=' fs-4 text-warning' />&nbsp;&nbsp;An Experience of a lifetime - <span className='text-secondary '>
            It is an excellent opportunity to travel the world with no commitments except to study and learn. It will be a chance to gain better understanding and create experience of a lifetime.
          </span> </h6>
        </div>

      </div>

      {/* section21 */}
      <div className='facts'>
        <div className='section21 py-4 '>
          <div className='container '>
            <h6 className=' text-decoration-underline fw-bolder text-center'>FACT CHECKER</h6>
            <h5 className=' text-center text-uppercase fw-semibold'>
              Study Abroad Myth - Facts
            </h5>

            <div className="row ">
              <div className="col-lg-6 ps-5  border-end border-warning border-5 mt-3">
                <h5 className=' fw-bold mb-3 ms-5'>MYTHS</h5>
                <p className=''><BsArrowUpRightCircleFill className='fs-1 text-danger' /> &nbsp; Study abroad is Expensive. </p>
                <p className=''><BsArrowUpRightCircleFill className='fs-1 text-danger' /> &nbsp; It's Difficult to Find Scholarship for International Students. </p>
                <p className=''><BsArrowUpRightCircleFill className='fs-1 text-danger' /> &nbsp; Employers Do not Give Importance to Study Abroad. </p>
                <p className=''><BsArrowUpRightCircleFill className='fs-1 text-danger' /> &nbsp; Travelling Alone Gives You the Same Experience. </p>
                <p className=''><BsArrowUpRightCircleFill className='fs-1 text-danger' /> &nbsp; I'll Have No Friends and Feel Lonely. </p>
                <p className=''><BsArrowUpRightCircleFill className='fs-1 text-danger' /> &nbsp; I Will Have Problems Communicating With Foreigners. </p>
                <p className=''><BsArrowUpRightCircleFill className='fs-1 text-danger' /> &nbsp; Indian Studends Get negiected. </p>
                <p className=''><BsArrowUpRightCircleFill className='fs-1 text-danger' /> &nbsp; Studying Abroad is No Longer Safe. </p>
              </div>
              <div className="col-lg-6 ps-5 mt-3">
                <h5 className=' fw-bold mb-3 ms-5'>FACTS</h5>
                <p className=''><BsArrowUpRightCircleFill className='fs-1 text-success' /> &nbsp;It's affordable. </p>
                <p className=''><BsArrowUpRightCircleFill className='fs-1 text-success' /> &nbsp;It's Challenging, But Not Impossible. </p>
                <p className=''><BsArrowUpRightCircleFill className='fs-1 text-success' /> &nbsp; A holistic Education is Greatly Valued. </p>
                <p className=''><BsArrowUpRightCircleFill className='fs-1 text-success' /> &nbsp; Holidays Only provide You a Brid's-Eye View. </p>
                <p className=''><BsArrowUpRightCircleFill className='fs-1 text-success' /> &nbsp; Not True, But Depends on You. </p>
                <p className=''><BsArrowUpRightCircleFill className='fs-1 text-success' /> &nbsp; After the Initial Hiccups It Gets Better with Time and Practice. </p>
                <p className=''><BsArrowUpRightCircleFill className='fs-1 text-success' /> &nbsp; Colleges Strive Towards Building an Inclusive Environment. </p>
                <p className=''><BsArrowUpRightCircleFill className='fs-1 text-success' /> &nbsp; Universities Rank Student Safety as Top Priority. </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Journey AI  */}
      <div className='journey py-5'>
        <div className='container'>
          <h6 className=' text-decoration-underline fw-bolder text-center'>GLOBAL REACH, LOCAL SUPPORT</h6>
          <h5 className='text-center text-uppercase fw-semibold'>Study Abroad Journey with Akcxis Immigrations</h5>
          <img src={layer} alt='' className='img-fluid py-3' />
        </div>
      </div>

      {/* section22 */}
      <div className='section22 py-5 bg-light '>
        <div className='container '>
          <h6 className=' text-decoration-underline fw-bolder Text1'>WE CARE</h6>
          <h5 className='  text-uppercase fw-semibold'>Why Choose Us</h5>
          <h5 className='fw-bold mt-3'><BsCheck2Square className=' fs-4 text-warning' />&nbsp;&nbsp;1. Team of Experienced Education Counsellors: <span className='fs-6 text-secondary fw-semibold'>We understand the challenges that students have during the entire process of admission, filing and visa application. With overseas education expertise and our experienced team of counsellors, we are here to help you at every stage.</span></h5>
          <h5 className='fw-bold'><BsCheck2Square className=' fs-4 text-warning' />&nbsp;&nbsp;2. Composite Model: <span className='fs-6 fw-semibold text-secondary'>At Akcxis Immigrations, we offer both online and offline mode of services. Getting counselling has never been easier as you can avail this from any corner of the world.</span></h5>
          <h5 className='fw-bold'><BsCheck2Square className=' fs-4 text-warning' />&nbsp;&nbsp;3. End-to-End Support: <span className='fs-6 fw-semibold text-secondary'>We are your one-stop solution. Right from the course and university shortlisting to the visa documentation filing and post-arrival support, we have you covered.</span></h5>
          <h5 className='fw-bold'><BsCheck2Square className=' fs-4 text-warning' />&nbsp;&nbsp;4. Technology Oriented: <span className='fs-6 fw-semibold text-secondary'> Our technology driven systems will make your journey towards education abroad smooth and easy. </span></h5>
          <h5 className='fw-bold'><BsCheck2Square className=' fs-4 text-warning' />&nbsp;&nbsp;5. Post Arrival Support: <span className='fs-6 fw-semibold text-secondary'>Our network across the globe will provide you the assistance needed, even after you arrive at your chosen destination.</span>
          </h5>
        </div>
      </div>

      {/* destinations */}
      <div className='destination py-4'>
        <div className='container'>
          <h5 className='text-center text-uppercase fw-semibold mb-5'>Popular Study Destination</h5>
          <h6 className='fw-bold  mt-4 text-uppercase'>The United States of America</h6>
          <p className='text-secondary '>The United States of America as a country boasts of some of the best universities across the globe. International students are attracted to USA for its quality education and high academic standards.
            USA is home to over 4000 universities and colleges providing a huge array of courses and is in particularly popular for its STEM courses. A student is eligible of 2-year work stay after pursuing a STEM course in the USA.<br /><br />
            Some of the top universities across the globe like Harvard, MIT, Yale, Caltech, Princeton, Stanford etc. are located in USA. With 55 out of 100 top universities across the globe placed in US, the country offers a perfect mix of multi-cultural environment, job and growth opportunities.</p>
          <h6 className='fw-bold mt-5 text-uppercase'>The United Kingdom</h6>
          <p className='text-secondary '>UK boasts of a creative and challenging educational system. With universities and colleges like London School of Economic, University College London, King's College London, University of Warwick, UK has institutions that consistently rank amongst the top globally.
            <br /><br />  UK with its variety of programmes offers quality education, post-study work opportunities, cultural diversity and a very strong international student support system.</p>
          <h6 className='fw-bold mt-5 text-uppercase'>Canada</h6>
          <p className='text-secondary '>
            With its academic excellence and focus on skill development Canada has slowly but consistently become a preferred higher education destination by international students. Government policies to get post-study work and easy immigration opportunities has made it one of the most sought-after higher education destinations.<br /><br />
            Besides affordable and a strong education system with a wide variety of diplomas and degrees, Canada boasts of a safe and a peaceful environment with high standard of livings. Toronto, Vancouver, Montreal are some of the favoured student destinations in Canada.
          </p>
          <h6 className='fw-bold mt-5 text-uppercase'>Australia</h6>
          <p className='text-secondary '>
            Australia offers an education system which is designed to help you succeed in the global workspace. There is an increasing number of Indian students choosing Australia for their higher education.<br /><br />
            Australian education institutions besides providing quality education and internationally recognized degrees offer a great support system to International Students. The relaxation in country's visa policies along with its dynamic culture, high standard of living and beautiful landscapes makes it the third most popular English speaking study destinations.
          </p>
          <h6 className='fw-bold mt-5 text-uppercase'>Germany</h6>
          <p className='text-secondary '>Germany with it's so many perks is a favoured study destination in Europe by Indian students. International students can enjoy zero or low-cost tuition fee by enrolling in German public universities. Only a small administrative fee and other basic charges are charged per semester from international students making Germany the most cost-effective study destination.<br /><br />
            With over 800 courses and 350 universities to choose from, Germany offers excellent higher education and infrastructure, internationally recognized degrees and great job opportunities. Most of the Master's programs can be studied in English language</p>
          <h6 className='fw-bold mt-5 text-uppercase'>Singapore</h6>
          <p className='text-secondary '>Singapore is amongst the smartest and the safest places in the world. With it's close proximity and affordable education especially when in comparison to western countries, Singapore is a perfect destination for students looking for International degrees.
            Singapore is known for its management programs and is home to world renowned universities like Nanyang Technological University (NTU) and National University of Singapore (NUS). Singapore as a study destination offers a diverse array of culture and experience.</p>
          <div className='countryimg d-flex justify-content-evenly align-items-center mt-5'>
            <a href='/usastudy' className='text-decoration-none'>
              <div className='box  border-dark border-opacity-25 rounded-3 shadow-lg'>
                <div className='d-flex justify-content-center'>
                  <img src={us} alt='' className='img-fluid w-50 py-1' />
                </div>
                <h6 className='text-center fw-bold'>US</h6>
              </div>
            </a>
            <a href='/ukstudy' className='text-decoration-none'>
              <div className='box border-dark border-opacity-25 rounded-3 shadow-lg'>
                <div className='d-flex justify-content-center '>
                  <img src={uk} alt='' className='img-fluid w-50 py-1' />
                </div>
                <h6 className='text-center fw-bold '>UK</h6>
              </div>
            </a>
           <a href='/canadastudy' className='text-decoration-none'>
           <div className='box border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center'>
                <img src={canada} alt='' className='img-fluid w-50 py-1' />
              </div>
              <h6 className='text-center fw-bold'>CANADA</h6>
            </div>
            </a> 
          </div>
        
          <div className='countryimg d-flex justify-content-evenly align-items-center '>
          <a href='/australiastudy'  className='text-decoration-none'>
            <div className='box  border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center'>
                <img src={australia} alt='' className='img-fluid w-50 py-1' />
              </div>
              <h6 className='text-center fw-bold'>AUSTRALIA</h6>
            </div>
            </a>
            <a href='germanystudy'  className='text-decoration-none'>
            <div className='box border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center '>
                <img src={germany} alt='' className='img-fluid w-50 py-1' />
              </div>
              <h6 className='text-center fw-bold'>GERMANY</h6>
            </div>
            </a>
            <a href='singaporestudy'  className='text-decoration-none'>
            <div className='box  border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center'>
                <img src={singapore} alt='' className='img-fluid w-50 py-1' />
              </div>
              <h6 className='text-center fw-bold'>SINGAPORE</h6>
            </div>
            </a>
          </div>
        </div>
      </div>
      {/* document */}
      <div className='document py-4 bg-light  '>
        <div className='container'>
          <h5 className=' text-center text-uppercase fw-semibold'>Document Checklist</h5>
          <div className='mt-4'>
            <div className='d-flex justify-content-between border px-3'>
              <h6 className='fw-bold' >1. &nbsp;Passport</h6>
              <input className="form-check-input fs-5" type="checkbox" defaultValue id="flexCheckDefault" />
            </div>
            <div className='d-flex justify-content-between border px-3'>
              <h6 className='fw-bold'>2.  &nbsp;10th Class Marksheet</h6>
              <input className="form-check-input fs-5" type="checkbox" defaultValue id="flexCheckDefault" /></div>
            <div className='d-flex justify-content-between border px-3'>
              <h6 className='fw-bold'>3.  &nbsp;12th Class Marksheet</h6>
              <input className="form-check-input fs-5" type="checkbox" defaultValue id="flexCheckDefault" /> </div>

            <div className='d-flex justify-content-between border px-3'>
              <h6 className='fw-bold'>4.  &nbsp;Bachelor's Degree or Certificate, Transcript (Consolidated Marksheet), Individual Certificates or Diplomas (If any )</h6>
              <input className="form-check-input fs-5" type="checkbox" defaultValue id="flexCheckDefault" />
            </div>
            <div className='d-flex justify-content-between border px-3'>
              <h6 className='fw-bold'>5.  &nbsp;Statement of Purpose (SOP)</h6>
              <input className="form-check-input fs-5" type="checkbox" defaultValue id="flexCheckDefault" />
            </div>

            <div className='d-flex justify-content-between border px-3'>
              <h6 className='fw-bold'>6.  &nbsp;Letter of Recommendations (Min. 2 LORs)</h6>
              <input className="form-check-input fs-5" type="checkbox" defaultValue id="flexCheckDefault" />
            </div>
            <div className='d-flex justify-content-between border px-3'>
              <h6 className='fw-bold'>7.  &nbsp;Updated Resume or Curriculum Vitae</h6>
              <input className="form-check-input fs-5" type="checkbox" defaultValue id="flexCheckDefault" />
            </div>

            <div className='d-flex justify-content-between border px-3'>
              <h6 className='fw-bold'>8.  &nbsp;Work Experience Letter (Applicable in case of any academic gap)</h6>
              <input className="form-check-input fs-5" type="checkbox" defaultValue id="flexCheckDefault" />
            </div>

            <div className='d-flex justify-content-between border px-3'>
              <h6 className='fw-bold'>9.  &nbsp;Pre - Requisite Exams - IELTS/PTE/CELPIP/TOEFL/GRE/GMAT/SAT (If any)</h6>
              <input className="form-check-input fs-5" type="checkbox" defaultValue id="flexCheckDefault" />
            </div>
          </div>
        </div>
      </div>

      {/* section23 */}
      <div className='section23 py-3 '>
        <div className='container'>
          <h5 className='   fw-semibold'>FAQs</h5>
          <div className="accordion my-3" id="accordionExample">
            <div className="accordion-item border border-dark">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Q: What is the age limit for studying abroad?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  A: Your study abroad can being right after 12th. There is no upper age limit to apply for education abroad. Different countries and universities have different criterias. Right course and the right destination can be chosen based on your interest.
                </div>
              </div>
            </div>
            <div className="accordion-item mt-3 border border-dark">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Q: How much will it cost to study abroad?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  A:  Although the cost will depend on the choice for university and the course opted for, but an average minimum of INR 15 lakh should be set aside for your study abroad. This is an average minimum expense for an year's tution fee along with living expense.
                </div>
              </div>
            </div>
            <div className="accordion-item mt-3 border border-dark">
              <h2 className="accordion-header  " id="headingThree">
                <button className="accordion-button collapsed btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Q: How can I get financial aid to study abroad?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  A: A student can apply for education loan for his/her education. Education loan can be funded by the government, banks, private institutions etc.  <br /><br />Different universities and colleges have different scholarship programs available. Scholarship might be based on:
                  <br />
                  1. Merit
                  <br />
                  2. Need based
                  <br />
                  3. Research based
                  <br />
                  4. And other criterias
                  <br />
                  A student must check the individual university/college website to explore these options.
                </div>
              </div>
            </div>
            <div className="accordion-item mt-3 border border-dark">
              <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button collapsed btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  Q: When should I start planning my study abroad procedure?
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  A: A student should ideally plan his/her study abroad process from grade 11th itself, as it will give them enough time to prepare and appear for standardized test. In any case, a student should start the process of study abroad at least 9 months before the start of the course date.
                </div>
              </div>
            </div>
            <div className="accordion-item mt-3 border border-dark">
              <h2 className="accordion-header " id="headingFive">
                <button className="accordion-button collapsed btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  Q: Can I change my major after starting my course?
                </button>
              </h2>
              <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  A: Yes, most of the universities and colleges give the option where a student can change their major after starting the course. In fact, many student switch their major during college years.
                </div>
              </div>
            </div>
            <div className="accordion-item mt-3 border border-dark">
              <h2 className="accordion-header " id="headingSix">
                <button className="accordion-button collapsed btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                  Q: Which are the best countries to study abroad?
                </button>
              </h2>
              <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  A: The USA, UK, Australia, Canada, Germany, Singapore etc., are some of the most popular destinations chosen by students when wanting to study abroad.
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default Studyabroad
