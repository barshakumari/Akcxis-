import React from 'react'
import img from "./linkImage/ielts.jpg"
import { Link } from 'react-router-dom'
import Form from './form'
import { FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { ImClock } from 'react-icons/im'
import Modal from './modal'
import "./pte.css"
import { BsCheck2Square } from 'react-icons/bs';
const Ielts = () => {
  return (
    <>
      <div className="PTE2">
        <img src={img} alt="" className='img-fluid w-100' />
        {/* <div className="fix-1 position-sticy   end-0 ">
          <Form />
        </div> */}
      </div>

      {/* ielts */}
      <div className='direct py-1 d-flex justify-content-center align-items-center '>
        <div className='d-flex justify-content-between align-items-center'>
          <Link to="/" className='text-dark fs-6 fw-semibold border-end border-white pe-3 text-decoration-none'>Home</Link>
          <Modal title="Book a Free Demo " className="ms-1 fw-semibold fs-6" />
        </div>
      </div>
      {/* content */}
      <div className='IELTS-section py-5'>
        <div className='container shadow-lg py-4 px-5 mb-5 bg-body rounded'>
          {/* about */}
          <div>
            <h3 className='mb-3'>About IELTS</h3>
            <p className=''>The International English Language Testing System is the gold standard for English-language testing that has been trusted by over 12,000 organisations in over 150 countries for more than 30 years. IELTS is globally accepted by all immigration departments that require an English Language test, including Australia, Canada, the UK, the USA, Ireland and New Zealand. It assesses an individual’s ability to Listen, Read, Write, and Speak in English and is graded on a band scale of 0-9. The test is conducted in either a computer or paper-based format.
            </p>
          </div>


          {/* types of ielts */}
          <div className=''>
            <h3 className='mb-3'> Types of IELTS test</h3>
            <p className=''>There are 3 types of IELTS tests- IELTS Academic, IELTS General Training and IELTS for UKVI test. The type of test which a candidate should take depends on the reason for taking the test.</p>
            <h5 className='fw-bold mb-3'>1. IELTS Academic:</h5>
            <p >If you have been planning to pursue higher education abroad or seeking professional registration, then IELTS Academic is for you. This test is meant to assess how ready you are to begin studying or training in an environment where English is a primary language of communication.
            </p>
            <p>When planning to move to an English-speaking country for studies or employability, you’ll have to provide a proof of your English language proficiency skills in most cases, which is where IELTS can be of great help. The IELTS results are recognised by more than 10,000 organisations, including educational institutions, employers, professional associations and governments, in 140 countries around the world.</p>

            <table className="table table-bordered border-dark  table-striped my-5">
              <thead className='table-dark'>
                <tr>
                  <th colspan="3" className='text-center'>IELTS ACADEMIC TEST FORMAT [TOTAL DURATION: 2 HOURS 45 MINUTES]</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='fw-semibold fs-5 text-center'>Listening</td>
                  <td>30 Minutes </td>

                </tr>
                <tr>
                  <td className='fw-semibold fs-5 text-center'>Academic Reading</td>
                  <td>60 Minutes</td>

                </tr>

                <tr>
                  <td className='fw-semibold fs-5 text-center'>Academic Writing</td>
                  <td>60 Minutes</td>

                </tr>
                <tr>
                  <td className='fw-semibold fs-5 text-center'>Speaking</td>
                  <td>11 to 14 minutes</td>

                </tr>
              </tbody>
            </table>
            {/* <p className=''> The Listening and Speaking tests are the same for IELTS General Training and IELTS Academic the writing and the reading sections are different for both the tests.</p> */}
            <h5 className='fw-bold mb-3'>2. IELTS General Training:</h5>
            <p >IELTS General Training test measures your proficiency in English language proficiency in a very every day, practical context. It is suited for candidates wanting to pursue studies in a high school or a vocational training program. It is mandatory for candidates planning to migrate to Australia, Canada, New Zealand and the UK. </p>

            <table className="table table-bordered border-dark  table-striped my-5">
              <thead className='table-dark'>
                <tr>
                  <th colspan="3" className='text-center '>IELTS GENERAL TRAINING TEST FORMAT [TOTAL DURATION: 2 HOURS 45 MINUTES]</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='fw-semibold fs-5 text-center'>Listening</td>
                  <td>40 Minutes </td>

                </tr>
                <tr>
                  <td className='fw-semibold fs-5 text-center'>
                    General Training Reading</td>
                  <td>60 Minutes</td>

                </tr>

                <tr>
                  <td className='fw-semibold fs-5 text-center'>General Training Writing</td>
                  <td>60 Minutes</td>

                </tr>
                <tr>
                  <td className='fw-semibold fs-5 text-center'>Speaking</td>
                  <td>11 to 14 minutes</td>

                </tr>
              </tbody>
            </table>
            {/* <p className=''> The Listening and Speaking tests are the same for IELTS General Training and IELTS Academic whereas the writing and the reading sections are different for both the tests.</p> */}

            <h5 className='fw-bold mb-3'>3. IELTS For UKVI:</h5>
            <p> IELTS for UKVI' is an officially approved English Language Test recognised by the UK government. It allows applicants to demonstrate their proficiency in English while applying for a UK Visa and Immigration (UKVI). IELTS is reappointed as a language test trusted by the UK government for visas.</p>
            {/* <p>You can read about this in detail here: IELTS for UK Reappointed by the UK government.</p> */}
            <p>If you are planning to study, work or move to the UK, you need to appear for IELTS for UKVI. Universities, colleges, and professional bodies will only accept IELTS for UKVI scores. Regular IELTS will not be considered.</p>
            <p>Various visa categories require applicants to have an English language qualification from the list of Secure English Language Tests (SELT tests) approved by the UK Home Office.</p>
          </div>

          {/* benefits ielts */}
          <div className='py-4'>
            <h3 className=' mb-3'>Benefits of IELTS</h3>
            <p className=' '>English is the third most-spoken language globally, with over 375 million speakers.</p>
            <ul>
              <li>Recognized Worldwide</li>
              <li>Develops English language skills</li>
              <li>Cultural and Global Understanding</li>
              <li>Networking Opportunities</li>
              <li>A High Score Increases Career Opportunities</li>
            </ul>
          </div>
          {/* exam format */}
          <div className=''>
            <h3 className='  '>IELTS Exam Format</h3>
            <table className="table table-bordered border-dark  table-striped my-4">

              <thead className='table-dark'>
                <tr className='fs-5 text-center'>
                  <th scope="col">IELTS Exam</th>
                  <th scope="col">Time</th>
                  <th scope="col">IELTS Exam Pattern</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='fw-semibold fs-5 text-center'> Reading</td>
                  <td>60 Minutes <br />(2 tasks) </td>
                  <td><ol>
                    <li>Academic</li>
                    <ul>
                      <li>3 different Passages taken from Academic Sources</li>
                      <li>Texts will Either be Descriptive and Factual or Analytical</li>
                      <li>May Include Graphs, Diagrams</li>
                      <li>Includes total 40 questions of different types</li>
                    </ul>
                    <li>General Trainng</li>
                    <ul>
                      <li>4 to 5 short Factual Texts</li>
                      <li>40 Questions of different types</li>
                    </ul>
                  </ol></td>
                </tr>
                <tr>
                  <td className='fw-semibold fs-5 text-center'>Writing </td>
                  <td>60 Minutes <br />(2 tasks) </td>
                  <td><ol>
                    <li>Academic </li>
                    <ul>
                      <li>Report Writing on the following topics (At least 150 Words)</li>

                      <li>Bar chart, Pie chart, Line graph, Map/Process chart </li>
                      <li>Essay Writing (At least 250 Words)</li>
                    </ul>
                    <li>General Training</li>
                    <ul>
                      <li>Formal & Informal Letter Writing (At least 150 Words)</li>
                      <li>Essay Writing (At least 250 Words)</li>
                    </ul>
                  </ol></td>
                </tr>
                <tr>
                  <td className='fw-semibold fs-5 text-center'>Listening</td>
                  <td>40 Minutes <br />(40 question)</td>
                  <td>
                    <ol>
                      <li>Audio 1 (Questions 1-10)</li>
                      <li>Audio 2 (Questions 11-20)</li>
                      <li>Audio 3 (Questions 21-30)</li>
                      <li>Audio 4 (Questions 31-40)</li>
                    </ol>
                  </td>
                </tr>

                <tr>
                  <td className='fw-semibold fs-5 text-center'>
                    Speaking
                  </td>
                  <td>11-14 Minutes </td>
                  <td>
                    <ol>
                      <li>Introduction &
                        General Questions</li>
                      <li>Cue Card
                        (Task Card)
                        <ul>
                          <li>Preparation time = 1 minutes</li>
                          <li>Speaking time = 2 minutes</li>
                        </ul>
                      </li>
                      <li>Follow - Up
                        Questions
                      </li>
                    </ol>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>


          {/* comparison IELTS PTE TOEFL */}
          <div className='score comparison '>
            <h3 className=' mb-3'>Equivalency of IELTS, TOEFL and PTE Scores</h3>
            <table className="table table-bordered border-dark table-striped my-4">
              <thead className='table-dark text-center '>
                <tr className='fs-5'>
                  <th scope="col">Proficiency Level</th>
                  <th scope="col">IELTS</th>
                  <th scope="col">TOEFL</th>
                  <th scope="col">PTE</th>
                </tr>
              </thead>
              <tbody className='fs-6 fw-semibold text-center'>
                <tr>
                  <td>Expert</td>
                  <td>9</td>
                  <td>118-120</td>
                  <td>89-90</td>
                </tr>

                <tr>
                  <td>Very Good</td>
                  <td>8.5</td>
                  <td>115-117</td>
                  <td>83-85</td>
                </tr>

                <tr>
                  <td>Very Good</td>
                  <td>8</td>
                  <td>110-114</td>
                  <td>78-82</td>
                </tr>

                <tr>
                  <td>Good</td>
                  <td>7.5</td>
                  <td>102-109</td>
                  <td>73-77</td>
                </tr>

                <tr>
                  <td>Good</td>
                  <td>7</td>
                  <td>94-101 </td>
                  <td>64-72</td>
                </tr>

                <tr>
                  <td>Competent</td>
                  <td>6.5</td>
                  <td>79-93</td>
                  <td>58-63</td>
                </tr>

                <tr>
                  <td>Competent</td>
                  <td>6</td>
                  <td>60-78</td>
                  <td>50-57</td>
                </tr>

                <tr>
                  <td>Modest</td>
                  <td>5.5</td>
                  <td>46-59</td>
                  <td>42-49</td>
                </tr>
                <tr>
                  <td>Modest</td>
                  <td>5</td>
                  <td>35-45</td>
                  <td>35-41</td>
                </tr>
                
                <tr>
                  <td>Limited</td>
                  <td>4-5</td>
                  <td>32-34</td>
                  <td>30-34</td>
                </tr>

                <tr>
                  <td>Extremely Limited</td>
                  <td>0-4</td>
                  <td>0-31</td>
                  <td>0-30</td>
                </tr>


              </tbody>
            </table>

          </div>

          {/* scoring */}
          <div className=''>
            <h3 className=' mb-3'>IELTS Scoring</h3>
            <p className=''>IELTS does not have any pass or fail but a higher score increases the probability of successful career and excellent education.</p>
            <p className=''>IELTS scores are accepted by countries such as -</p>
            <ul>
              <li>The USA</li>
              <li>The UK</li>
              <li>Europe</li>
              <li>Australia</li>
              <li>New Zealand</li>
            </ul>

            <div className='row my-4'>
              <div className='col-lg-4 col-md-12'>
                <h5 className='text-center text-uppercase fw-bold'>Academic Reading </h5>
                <table className="table table-bordered border-dark table-striped ">
                  <thead className='table-dark text-center'>
                    <tr className='fs-5'>
                      <th scope="col">Correct Answers</th>
                      <th scope="col">Score</th>

                    </tr>
                  </thead>
                  <tbody className='fs-6 fw-semibold text-center'>
                    <tr>
                      <td>39-47</td>
                      <td>9</td>

                    </tr>
                    <tr>
                      <td>37-38</td>
                      <td>8.5</td>

                    </tr>
                    <tr>
                      <td>35-36</td>
                      <td>8</td>

                    </tr>
                    <tr>
                      <td>33-34</td>
                      <td>7.5</td>

                    </tr>
                    <tr>
                      <td>30-32</td>
                      <td>7</td>

                    </tr>
                    <tr>
                      <td>27-29</td>
                      <td>6.5</td>

                    </tr>
                    <tr>
                      <td>23-26</td>
                      <td>6</td>

                    </tr>
                    <tr>
                      <td>19-22</td>
                      <td>5.5</td>

                    </tr>
                    <tr>
                      <td>15-18</td>
                      <td>5</td>

                    </tr>
                    <tr>
                      <td>13-14</td>
                      <td>4.5</td>

                    </tr>
                    <tr>
                      <td>10-12</td>
                      <td>4</td>
                    </tr>

                  </tbody>
                </table>
              </div>
              <div className='col-lg-4 col-md-12'>
                <h5 className='text-center  fw-bold'>General Reading </h5>
                <table className="table table-bordered border-dark table-striped ">
                  <thead className='table-dark'>
                    <tr className='fs-5 text-center'>
                      <th scope="col">Corrrect Answers</th>
                      <th scope="col">Score</th>

                    </tr>
                  </thead>
                  <tbody className='fs-6 fw-semibold text-center'>
                    <tr>
                      <td>40</td>
                      <td>9</td>

                    </tr>
                    <tr>
                      <td>39</td>
                      <td>8.5</td>

                    </tr>
                    <tr>
                      <td>36-38</td>
                      <td>8</td>

                    </tr>
                    <tr>
                      <td>34-35</td>
                      <td>7.5</td>

                    </tr>
                    <tr>
                      <td>32-33</td>
                      <td>7</td>

                    </tr>
                    <tr>
                      <td>30-31</td>
                      <td>6.5</td>

                    </tr>
                    <tr>
                      <td>27-29</td>
                      <td>6</td>

                    </tr>
                    <tr>
                      <td>23-26</td>
                      <td>5.5</td>

                    </tr>
                    <tr>
                      <td>19-22</td>
                      <td>5</td>

                    </tr>
                    <tr>
                      <td>15-18</td>
                      <td>4.5</td>
                    </tr>
                    <tr>
                      <td>10-15</td>
                      <td>4</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className='col-lg-4 col-md-12'>
                <h5 className='text-center text-uppercase fw-bold'>Listening </h5>
                <table className="table table-bordered border-dark table-striped ">
                  <thead className='table-dark'>
                    <tr className='fs-5 text-center'>
                      <th scope="col">Corrrect Answers</th>
                      <th scope="col">Score</th>

                    </tr>
                  </thead>
                  <tbody className='fs-6 fw-semibold text-center'>
                    <tr>
                      <td>39-40</td>
                      <td>9</td>

                    </tr>
                    <tr>
                      <td>37-38</td>
                      <td>8.5</td>

                    </tr>
                    <tr>
                      <td>35-36</td>
                      <td>8</td>

                    </tr>
                    <tr>
                      <td>33-34</td>
                      <td>7.5</td>

                    </tr>
                    <tr>
                      <td>30-31</td>
                      <td>7</td>

                    </tr>
                    <tr>
                      <td>26-29</td>
                      <td>6.5</td>

                    </tr>
                    <tr>
                      <td>23-25</td>
                      <td>6</td>

                    </tr>
                    <tr>
                      <td>18-22</td>
                      <td>5.5</td>

                    </tr>
                    <tr>
                      <td>16-17</td>
                      <td>5</td>

                    </tr>
                    <tr>
                      <td>13-15</td>
                      <td>4.5</td>

                    </tr>
                    <tr>
                      <td>10-12</td>
                      <td>4</td>

                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <h3 className='mb-3'>Why IELTS?</h3>
            <p>While moving to a native English-speaking nation for studying, working, or migrating, candidates are required to demonstrate that they understand the English language. The idea is to prove that they will be able to manage day-to-day activities abroad. For this purpose, IELTS or the International English Language Testing System, has been relied on by students, aspiring migrants, and job seekers for more than 30 years. This test is consistently candidates’ top choice. Here is what makes it so popular:</p>
            <ul>
              <li>Accessibility of the test</li>
              <li>Accuracy of test results</li>
              <li>Accepted around the world</li>
              <li>Adds weight to your PR application</li>
              <li>Helpful at every stage of the career</li>
            </ul>
            <h3 className='mb-3'>Why akcxis Immigrations?</h3>
            <p className=''>akcxis Immigrations trainer ensures that you achieve the required band score in IELTS and make your dream of pursuing higher studies at your dream destination come true! </p>
            <p className=''>With our on-campus classes with free grammar sessions, online classes at your comfort, practice tests, simulated mock tests, expert evaluation sessions and tips for the exam day, we offer a comprehensive knowledge to the learners and leaving no stone unturned to ensure that you clear the test with flying colours!</p>
          </div>
          {/* FAQ */}
          <div className='py-4'>
            <h3 className=' '>FAQs</h3>
            <div className="accordion my-3 " id="accordionExample">
              <div className="accordion-item border border-dark ">
                <h3 className="accordion-header" id="headingOne">
                  <button className="accordion-button btn btn-warning " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Q: What is the minimum IELTS score needed for study visa?
                  </button>
                </h3>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    A:  Most of the countries need an overall band of 6 for undergraduate programs and an overall band of 6.5 for post graduate programs. Having said that, each university and course have its own requirements of IELTS score and the student should check the official website to know the exact score requirements. Higher the score, better are the student's chances to get the admission.
                  </div>
                </div>
              </div>
              <div className="accordion-item mt-3 border border-dark ">
                <h3 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed btn btn-warning " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Q: How often is IELTS test conducted?

                  </button>
                </h3>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    A: In each test centre, IELTS Academic is conducted 4 times in a month, while the IELTS General Training is conducted twice a month.
                  </div>
                </div>
              </div>
              <div className="accordion-item mt-3 border border-dark">
                <h3 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Q:  Difference Between Computer Based and Paper Based IELTS?
                  </button>
                </h3>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    A: In the IELTS paper-based test, the Reading, Listening, and Writing sections are to be answered on the examination paper itself. Speaking test is be carried out with a trained IELTS examiner through a face-to-face interview separately within a week prior or after the test date.
                    <br /><br />In Computer-based IELTS the Reading, Listening, and Writing sections take place on a computer. The Speaking test is held in the face-to-face method with IELTS examiners. The Speaking section may be completed up to one week after or prior to the test date.

                  </div>
                </div>
              </div>
              <div className="accordion-item mt-3 border border-dark">
                <h3 className="accordion-header " id="headingFour">
                  <button className="accordion-button collapsed btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                    Q: What is the validity of IELTS score?

                  </button>
                </h3>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    A:  The IELTS score is valid for a period of 2 years from the date of the result.

                  </div>
                </div>
              </div>
              <div className="accordion-item mt-3 border border-dark">
                <h3 className="accordion-header" id="headingFive">
                  <button className="accordion-button collapsed  btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                    Q:  Can I reappear in a single section to improve IELTS score?

                  </button>
                </h3>
                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    A: IELTS One Skill Retake test must be taken within 60 days of attempting full IELTS test.The candidate will receive a new IELTS Test Report Form (TRF) that has his/her IELTS One Skill Retake score as well as scores from the original performance. The candidate can choose whether to use new or old TRF.<br />There is no limit on number of times a candidate wants to reappear for a full IELTS exam in all 4 sections. However, Single retake test system is still not implemented in India.
                  </div>
                </div>
              </div>
              <div className="accordion-item mt-3 border border-dark">
                <h3 className="accordion-header " id="headingSix">
                  <button className="accordion-button collapsed btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                    Q:  How much is the IELTS exam fee?

                  </button>
                </h3>
                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">

                  <div className="accordion-body">
                    A: The IELTS exam fee in India is ₹16,250 as per now.

                  </div>
                </div>
              </div>

              <div className="accordion-item mt-3 border border-dark">
                <h3 className="accordion-header " id="headingSeven">
                  <button className="accordion-button collapsed btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                    Q: How soon can I expect the results of my IELTS test?

                  </button>
                </h3>
                <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    A: Results for IELTS paper-based test will be available 13 days after the test. For computer based IELTS test, the result may come out anywhere between 3-5 working days.

                  </div>
                </div>
              </div>

              <div className="accordion-item mt-3 border border-dark">
                <h3 className="accordion-header " id="headingEight">
                  <button className="accordion-button collapsed btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                    Q: What are the documents required to appear for the IELTS test?


                  </button>
                </h3>
                <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    A: The candidate must have a valid passport to book an IELTS exam. He/she must carry the passport on the exam date.

                  </div>
                </div>
              </div>


              <div className="accordion-item mt-3 border border-dark">
                <h3 className="accordion-header " id="headingEight">
                  <button className="accordion-button collapsed btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                    Q: Is it possible to reschedule the IELTS test?

                  </button>
                </h3>
                <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    A: Yes, it is generally possible to reschedule the reschedule the IELTS test, but the specific policies and procedures for rescheduling can vary depending on the test centre and the organization that administers the test in your region. .

                  </div>
                </div>
              </div>


              <div className="accordion-item mt-3 border border-dark">
                <h3 className="accordion-header " id="headingEight">
                  <button className="accordion-button collapsed btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                    Q: What is the refund policy for cancelling the IELTS exam?


                  </button>
                </h3>
                <div id="collapseTen" className="accordion-collapse collapse" aria-labelledby="headingTen" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    A: Refund policies for cancelling an IELTS test vary depending on the test centre, and the organization that administers the test in your region. Generally, IELTS test fees are non-refundable or only partially refundable, and the amount of refund you might receive depends on when you cancel and the specific policies of the test centre.

                  </div>
                </div>
              </div>
            </div>
          </div>



        </div>
      </div>
    </>
  )
}

export default Ielts
