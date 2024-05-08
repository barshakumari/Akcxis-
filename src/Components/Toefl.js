import React from 'react'
import img1 from "./linkImage/TOEFL1.jpg"
import Form from './form'
import './pte.css'
import Modal from './modal'
import { Link } from 'react-router-dom'
import { FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { ImClock } from 'react-icons/im'
import { BsCheck2Square } from 'react-icons/bs';
const TOEFL = () => {
    return (
        <>
            {/* TOEFL1 */}
            <div className='PTE2'>
                <img src={img1} alt="" className='img-fluid w-100' />
                {/* <div className="fix-1 position-sticy   end-0 ">
                    <Form />
                </div> */}
            </div>

            {/* TOEFL2 */}
            <div className='direct py-1 d-flex justify-content-center align-items-center '>
                <div className='d-flex justify-content-between align-items-center'>
                    <Link to="/" className='text-dark fs-6 fw-semibold border-end border-white pe-3 text-decoration-none'>Home</Link>
                    <Modal title="Book a Free Demo " className="ms-1 fw-semibold fs-6" />
                </div>
            </div>

            {/* content */}
            <div className='TOEFL-section py-4' >
                <div className='container shadow-lg py-4 px-5 mb-5 bg-body rounded'>
                 
                            {/* about */}
                            <div className='py-4'>
                                <h3 className=' mb-3'>
                                    Test of English as a Foreign Language
                                </h3>
                                <p className=''>TOEFL iBT test measures, a candidate's ability, in academic English across all four sections- listening, reading, speaking and writing. It tests the English skills in a manner where it is actually used in a classroom. It gives the institution the right parameter to know how well the student will succeed in an English-speaking academic environment. TOEFL scores are used in over 150 countries including USA, Canada, the UK, Australia, New Zealand etc. Besides universities and colleges, workplaces and immigration authorities might also use TOEFL for migration purposes.</p>

                            </div>
                            {/* types of TOEFL */}
                            <div className='py-2'>
                                <h3 className=' mb-3'>Types of TOEFL exam</h3>
                                <p className=''>Most prevalent version of TOEFL exam is TOEFL iBT. The TOEFL iBT (internet-based examination), being one of the most preferred versions of the TOEFL exam, is offered in an online mode. TOEFL iBT can be taken at a test centre or at home and is a 3 hour long exam with fair and unbiased scoring.</p>
                                <h5 className='fw-bold mb-3'>Besides TOEFL iBT, other TOEFL assessments are:</h5>
                                <h6 className='text-uppercase fw-bold' >1. TOEFL PBT</h6>
                                <p className=''>  TOEFL PBT is a paper-based TOEFL exam that is offered in an offline mode, in places where TOEFL iBT is not available. In addition to scaled sectional scores, test takers get a score for the PBT on a scale of 310-677.</p>

                                <h6 className='text-uppercase fw-bold'>2.  TOEFL Essentials </h6>
                                <p className=''>The TOEFL Essentials is a friendly test which can be taken in just 1.5 hours measuring the four core language skills- listening, reading, writing and speaking.  It has short, engaging tasks that relate to both academic situations and everyday life.</p>

                                <h6 className='text-uppercase fw-bold'>3. TOEFL Primary</h6>
                                <p className=''>TOEFL Primary is designed for students' whose age is 8+, to measure the students' English communication skills to guide the teachers to set their goals and monitor the students' progress and more.</p>

                                <h6 className='text-uppercase fw-bold'>4. TOEFL Junior </h6>
                                <p className=''>TOEFL Junior is an objective test designed for ages 11+, to measure the students' English communication skills. These assessments pinpoint students' strengths and challenges.</p>

                                <h6 className='text-uppercase fw-bold'>5. TOEFL ITP</h6>
                                <p className=''>TOEFL ITP Assessment series is a leading English-proficiency testing program for ages 16+ that measures and evaluate the students' English-language skills with confidence.</p>
                            </div>
                            {/* benefits of TOEFL */}
                            <div className='py-3'>
                                <h3 className=' mb-3'>Benefits of TOEFL</h3>
                                <ul>
                                    <li>Objective assessment</li>
                                    <li>Widely-accepted English language test</li>
                                    <li>Improves knowledge of academic English</li>
                                    <li>Adds on a skill to your CV</li>
                                    <li>More job opportunities</li>
                                    <li>Measures skills in a classroom environment</li>
                                </ul>

                            </div>
                            {/* exam pattern */}
                            <div className='py-4'>
                                <h3 className='   mb-3 '>TOEFL Exam Pattern</h3>
                                <table className="table table-bordered border-dark  table-striped my-4 ">
                                    <thead className='table-dark'>
                                        <tr className='fs-5 text-center'>
                                            <th scope="col">TOEFL Exam Section</th>
                                            <th scope="col">Time</th>
                                            <th scope="col">TOEFL  Exam Pattern</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='fw-semibold fs-5 text-center'>Reading</td>
                                            <td>60-80 Minutes
                                                <br/> (36-56 questions)</td>
                                            <td>Three to four reading passages to answer questions</td>
                                        </tr>
                                        <tr>
                                            <td className='fw-semibold fs-5 text-center'>Listening</td>
                                            <td>60-90 Minutes  <br/> (34-51 questions)</td>
                                            <td>Audio clips containing 4-6 short lectures and 2-3 lengthy conversations</td>
                                        </tr>
                                        <tr>
                                            <td className='fw-semibold fs-5 text-center'>Speaking</td>
                                            <td>20 Minutes <br/>  (6 tasks)</td>

                                            <td>It is necessary to speak on familiar topics or on any academic-related issue</td>
                                        </tr>
                                        <tr>
                                            <td className='fw-semibold fs-5 text-center'>Writing</td>
                                            <td>50 Minutes <br/>  (2 tasks)</td>
                                            <td>After comparing a reading passage to a classroom lecture, express your opinion, logic and argument</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            {/* score */}
                            <div className='py-4'>
                                <h3 className=' mb-3'>TOEFL Scoring</h3>
                                <p className=''>TOEFL iBT score is calculated by adding together scores of each of the 4 section - reading, listening, speaking, writing - where each section is worth 30 points.</p>
                                <table className="table table-bordered border-dark  table-striped my-4">
                                    <thead className='table-dark '>
                                        <tr className='fs-5 text-center'>
                                            <th className='text-center '>Sections</th>
                                            <th className='text-center '>TOEFL Score Range</th>
                                            <th className='text-center '>Proficiency Level</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className='fw-semibold fs-5 text-center'>Listening</td>
                                            <td>Score Range 0-30</td>
                                            <td>
                                                <ol>
                                                    <li>Advanced (22-30)</li>
                                                    <li>High-Intermediate (17-21)</li>
                                                    <li>Low-Intermediate (9-16)</li>
                                                    <li>Below Low-Intermediate (0-8)</li>
                                                </ol>
                                            </td>

                                        </tr>
                                        <tr>
                                            <td className='fw-semibold fs-5 text-center'>
                                                Reading  </td>
                                            <td>Score Range 0-30</td>
                                            <td>
                                                <ol>
                                                    <li>Advanced (24-30)</li>
                                                    <li>High-Intermediate (18-23)</li>
                                                    <li>Low-Intermediate (4-17)</li>
                                                    <li>Below Low-Intermediate (0-3)</li>
                                                </ol>
                                            </td>

                                        </tr>

                                        <tr>
                                            <td className='fw-semibold fs-5 text-center'>Writing</td>
                                            <td>Score Range 0-30</td>
                                            <td> <ol>
                                                <li>Advanced (24-30)</li>
                                                <li>High-Intermediate (17-23)</li>
                                                <li>Low-Intermediate (13-16)</li>
                                                <li>Basic (7-12)</li>
                                                <li>Below Basic (0-6)</li>
                                            </ol></td>

                                        </tr>
                                        <tr>
                                            <td className='fw-semibold fs-5 text-center'>Speaking</td>
                                            <td> Score Range 0-30</td>
                                            <td>
                                                <ol>
                                                    <li>Advanced (25-30)</li>
                                                    <li>High-Intermediate (20-24)</li>
                                                    <li>Low-Intermediate (16-19)</li>
                                                    <li>Basic (10-15)</li>
                                                    <li>Below Basic (0-9)</li>
                                                </ol>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p className=' '>A score of a minimum of 80 is generally required by students to get admission into a university/college. The better the score, the better the scope of getting admission into a good college or a university.</p>
                            </div>


                            {/* comparison */}
                            <div className='py-4'>
                                <h3 className=' '>TOEFL and IELTS Comparision</h3>
                                <table className="table table-bordered border-dark table-striped my-4">
                                    <thead className='table-dark'>
                                        <tr className='fs-5 text-center'>
                                            <th scope="col">IELTS Score</th>
                                            <th scope="col">TOEFL Score</th>
                                        </tr>
                                    </thead>
                                    <tbody className='fs-6 fw-semibold text-center'>
                                        <tr>

                                            <td>9</td>
                                            <td>118-120</td>
                                        </tr>
                                        <tr>

                                            <td>8.5</td>
                                            <td>115-117</td>
                                        </tr>
                                        <tr>

                                            <td>8</td>
                                            <td>110-114</td>
                                        </tr>
                                        <tr>

                                            <td>7.5</td>
                                            <td>102-109</td>
                                        </tr>
                                        <tr>

                                            <td>7</td>
                                            <td>94-101</td>
                                        </tr>
                                        <tr>

                                            <td>6.5</td>
                                            <td>79-93</td>
                                        </tr>
                                        <tr>

                                            <td>6</td>
                                            <td>60-78</td>
                                        </tr>
                                        <tr>

                                            <td>5.5</td>
                                            <td>46-59</td>
                                        </tr>
                                        <tr>

                                            <td>5</td>
                                            <td>35-45</td>
                                        </tr>
                                        <tr>

                                            <td>4.5</td>
                                            <td>32-34</td>
                                        </tr>
                                        <tr>

                                            <td>0-4</td>
                                            <td>0-31</td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>
                            {/* FAQ */}
                            <div className='py-4'>
                                <h3 className=' '>FAQs</h3>
                                <div className="accordion my-3 " id="accordionExample">
                                    <div className="accordion-item border border-dark ">
                                        <h3 className="accordion-header" id="headingOne">
                                            <button className="accordion-button btn btn-warning " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Q: How long is TOEFL exam?
                                            </button>
                                        </h3>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                A: The TOEFL iBT exam takes about 3 hours which includes a 10-minute mandatory break after the first two sections. Typically, a student should keep 3.5 hours allowing half an hour for check-in.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item mt-3 border border-dark ">
                                        <h3 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed btn btn-warning " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Q: What is the TOEFL exam score validity?
                                            </button>
                                        </h3>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                A: TOEFL score is valid for 2 years from the day of the exam.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item mt-3 border border-dark">
                                        <h3 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Q: How many times can I attempt the TOEFL Exam?
                                            </button>
                                        </h3>
                                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                A: The TOEFL test can be taken by the candidate as many times as he/she wants. However, the candidate cannot register for the exam within 3 days of any existing appointment. Also, the candidate cannot repeat the exam more than once in a period of 12 days and not more than 5 times in a year. A candidate will have to pay full TOEFL exam fee each time they take a test.

                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item mt-3 border border-dark">
                                        <h3 className="accordion-header " id="headingFour">
                                            <button className="accordion-button collapsed btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                                                Q: How much does TOEFL cost? 
                                            </button>
                                        </h3>
                                        <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                A: The TOEFL iBT test fee in India is INR 14,322.03. TOEFL PBT and TOEFL home edition is also priced at par with TOEFL iBT.<br/><br/>
                                                TOEFL online registration closes 7 days before the test date and late registration closes 4 days prior to the test date. The candidate will have to pay additional late registration fee to the tune of US $40. Any exam which is rescheduled should be done no later than 4 days before the test date and a candidate will have to pay US $60 as rescheduling fee.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item mt-3 border border-dark">
                                        <h3 className="accordion-header" id="headingFive">
                                            <button className="accordion-button collapsed  btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                                                Q: How do I check my TOEFL score? 
                                            </button>
                                        </h3>
                                        <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                A: A candidate will receive mail when the scores are available and can check his/her score through their ETS account. The score is usually available 6 days after the test date and the candidate can download their PDF score within 8 days after the test.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item mt-3 border border-dark">
                                        <h3 className="accordion-header " id="headingSix">
                                            <button className="accordion-button collapsed btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                                Q: What is a good score In TOEFL?
                                            </button>
                                        </h3>
                                        <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                A: Although there is no pass/fail in TOEFL iBT. A score of 80 is considered a good score to get admission into most universities/colleges. The higher the score, the better are the candidate's chances of getting into a good university. Howsoever, a candidate should check the official website of the university or college to know the minimum score required for the specific course.
                                            </div>
                                        </div>
                                    </div>

                                    <div className="accordion-item mt-3 border border-dark">
                                        <h3 className="accordion-header " id="headingSeven">
                                            <button className="accordion-button collapsed btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                                                Q: What is MyBest Scores in TOEFL?
                                            </button>
                                        </h3>
                                        <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                A: MyBest  scores also sometimes called superscores are the highest scores in each of the 4 sections from all the TOEFL iBt test taken by the candidate in last two years.<br/><br/>Since August 1, 2019, the test score reports automatically include MyBest Scores in addition to scores from a single test date, which allows the candidate to show their best performance in each section, demonstrate growth in areas of relative weakness and compensate for suboptimal performance caused by factors unrelated to the test.
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

export default TOEFL
