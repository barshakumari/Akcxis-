import React from 'react'
import img from "./linkImage/pte.jpg"
import { BsCheck2Square } from 'react-icons/bs';
import flexible from './linkImage/Flexbility.png'
import fast from './linkImage/Runing.png'
import fair from './linkImage/Ethics.png'
import secure from './linkImage/Security.png'
import unlimited from './linkImage/Unlimited.png'
import conveinent from './linkImage/conveinent.png'
import { FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { ImClock } from 'react-icons/im'
import "./pte.css"
import { Link } from 'react-router-dom'
import Modal from './modal'
import Form from './form'

const Pte = () => {
    return (
        <>
            {/* PTE2 */}
            <div className="PTE2">
                <img src={img} alt="" className='img-fluid w-100' />
                {/* <div className="fix-1 position-sticy   end-0 ">
                    <Form />
                </div> */}
            </div>

            {/* go to home page */}
            <div className='direct py-1 d-flex justify-content-center align-items-center '>
                <div className='d-flex justify-content-between align-items-center'>
                    <Link to="/" className='text-dark fs-6 fw-semibold border-end border-white pe-3 text-decoration-none'>Home</Link>
                    <Modal title="Book a Free Demo " className="ms-1 fw-semibold fs-6" />
                </div>
            </div>

            {/* content */}
            <div className='main-section py-5'>
                <div className='container shadow-lg py-4 px-5 mb-5 bg-body rounded'>
                    <div>
                        {/* about */}
                        <div className='about-pte'>
                            <h2 className='mb-2'>About Pearson Test Of English</h2>
                            <p className=' mb-4'>Pearson Test of English or PTE is fast becoming one of the most accepted English language proficiency tests. PTE Academic is the first completely AI based exam which assesses the candidate's ability in reading, listening, speaking and writing. PTE tests the candidate on day-to-day usage of English language as opposed to high-level English. Pearson test of English uses sophisticated algorithms based on real-world data points which makes scoring of the test precise, consistent and objective. PTE Academic is used by institutes and immigration officers worldwide for study visa, employment and immigration purpose.</p>
                        </div>
                        {/* benefits */}
                        <div className='benefit-pte py-4'>
                            <h2 className=' mb-4'>Why PTE?</h2>
                            <div className='row g-4'>
                                <div className='col-lg-4  col-md-6 col-sm-6 '>
                                    <div className='border  border-dark border-opacity-25 rounded-3 shadow-lg text-center py-3 px-2 benefit-box'>
                                        <img src={flexible} alt='' className='img-fluid' />
                                        <h5 className='fw-bold'>Flexible</h5>
                                        <p className=''>More than 250 centers worldwide offer Test dates which are available almost throughout the year</p>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-6 col-sm-6 '>
                                    <div className='border  border-dark border-opacity-25 rounded-3 shadow-lg text-center py-3 px-2 benefit-box'>
                                        <img src={fast} alt='' className='img-fluid' />
                                        <h5 className='fw-bold'>Fast</h5>
                                        <p className=''>Results are typically declared within 2-5 working days</p>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-6 col-sm-6 '>
                                    <div className='border  border-dark border-opacity-25 rounded-3 shadow-lg text-center py-3 px-2 benefit-box'>
                                        <img src={fair} alt='' className='img-fluid' />
                                        <h5 className='fw-bold' >Fair</h5>
                                        <p className=''>Since the test uses computerized marking, it ensures that all test takers are scored accurately and impartially</p>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-6 col-sm-6  '>
                                    <div className='border  border-dark border-opacity-25 rounded-3 shadow-lg text-center py-3 px-2 benefit-box'>
                                        <img src={secure} alt='' className='img-fluid' />
                                        <h5 className='fw-bold' >Secure</h5>
                                        <p className=''>The test centers follow strict protocols to ensure test security like randomized test forms, palm-vein scanning and data forensics</p>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-6 col-sm-6 '>
                                    <div className='border  border-dark border-opacity-25 rounded-3 shadow-lg text-center py-3 px-2 benefit-box'>
                                        <img src={unlimited} alt='' className='img-fluid' />
                                        <h5 className='fw-bold'>Unlimited</h5>
                                        <p className=''>The result can be sent to as many Universities or Institutions as the candidates want, with no extra payment</p>
                                    </div>
                                </div>
                                <div className='col-lg-4 col-md-6 col-sm-6  '>
                                    <div className='border  border-dark border-opacity-25 rounded-3 shadow-lg text-center py-3 px-2 benefit-box'>
                                        <img src={conveinent} alt='' className='img-fluid' />
                                        <h5 className='fw-bold' >Convenient</h5>
                                        <p className=''>PTE Academic exam is given in a single sitting in less than 2 and a half hours with only 52-64 questions, making it less stressful for the test-takers</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*exam format  */}
                        <div className='exam-format py-5'>
                            <h2 className=' '>Exam Format</h2>
                            <table class="table table-bordered border-dark  table-striped my-4">
                                <thead className='table-dark'>
                                    <tr className='fs-5 text-center '>
                                        <th scope="col">PTE Exam section</th>
                                        <th scope="col">Time</th>
                                        <th scope="col">PTE Exam Pattern</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className='fw-semibold fs-5 text-center'>Speaking</td>
                                        <td>(30-35 Minutes)  </td>
                                        <td><ol>
                                            <li>Personal introduction</li>
                                            <li> Read aloud (6-7 questions)
                                            </li>
                                            <li>Repeat sentence (10-12
                                                questions)
                                            </li>
                                            <li>Describe image (3-4
                                                questions)
                                            </li>

                                        </ol></td>
                                    </tr>

                                    <tr>
                                        <td className='fw-semibold fs-5 text-center'>Writing</td>
                                        <td>(Approx 30 Minutes)<br />(28-36 questions) </td>
                                        <td><ol>
                                            <li>Re-tell lecture (1-2 questions)</li>
                                            <li>Answer short question (5-6
                                                questions)
                                            </li>
                                            <li>Summarize written text (1-2
                                                questions)
                                            </li>
                                            <li>Write an essay (1-2 questions)
                                            </li>
                                        </ol></td>
                                    </tr>
                                    <tr>
                                        <td className='fw-semibold fs-5 text-center'>Reading</td>
                                        <td>(Approx 29-30 Minutes) <br />(13-18 questions):</td>
                                        <td>
                                            <ol>
                                                <li>Reading & writing: Fill in the
                                                    blanks (5-6 questions)</li>
                                                <li>Multiple-choice, choose
                                                    multiple answers (1-2 questions)
                                                </li>
                                                <li> Re-order paragraphs (2-3
                                                    questions)
                                                </li>
                                                <li>Reading: Fill in the blanks (4-5
                                                    questions)
                                                </li>
                                                <li>Multiple-choice, choose single
                                                    answer (1-2 questions)</li>
                                            </ol>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3" className='text-center'>*Negative marking in multiple choice questions</td>

                                    </tr>
                                    <tr>
                                        <td className='fw-semibold fs-5 text-center'>Listening</td>
                                        <td>(Approx. 30-43 Minutes) <br />(12-20 questions):</td>
                                        <td>
                                            <ol>
                                                <li>Summarize spoken text (1-2
                                                    questions, 10 mins) with template</li>
                                                <li> Multiple-choice (1-2 questions)
                                                </li>
                                                <li>Fill in the blanks (2-3
                                                    questions)</li>
                                                <li>Highlight the correct summary
                                                    (1-2 questions)
                                                </li>
                                                <li> Multiple-choice, choose a
                                                    single answer (1-2 questions)
                                                </li>
                                                <li>Select missing word (1-2
                                                    questions)</li>
                                                <li>. Highlight incorrect words (2-3
                                                    questions)</li>
                                                <li>Write from dictation (3-4
                                                    questions)
                                                </li>
                                            </ol>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3" className='text-center'>*Negative marking in multiple choice questions & highlight incorrect words</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* comparison */}
                        <div className='pte-comparison py-4'>
                            <h2 className=' '>PTE and IELTS Comparision</h2>
                            <table class="table table-bordered border-dark table-striped my-4">
                                <thead className='table-dark'>
                                    <tr className='fs-5'>
                                        <th scope="col">IELTS English Level</th>
                                        <th scope="col">IELTS (1.0-9.0)</th>
                                        <th scope="col">PTE Academic (0-90)</th>
                                    </tr>
                                </thead>
                                <tbody className='fs-6 fw-semibold'>
                                    <tr>
                                        <td>Expert</td>
                                        <td>9</td>
                                        <td>86-90</td>
                                    </tr>
                                    <tr>
                                        <td>Very Good</td>
                                        <td>8.5</td>
                                        <td>83-86</td>
                                    </tr>
                                    <tr>
                                        <td>Very Good</td>
                                        <td>8.0</td>
                                        <td>79-83</td>
                                    </tr>
                                    <tr>
                                        <td>Good</td>
                                        <td>7.5</td>
                                        <td>73-79</td>
                                    </tr>
                                    <tr>
                                        <td>Good</td>
                                        <td>7.0</td>
                                        <td>65-73</td>
                                    </tr>
                                    <tr>
                                        <td>Competent</td>
                                        <td>6.5</td>
                                        <td>58-65</td>
                                    </tr>
                                    <tr>
                                        <td>Competent</td>
                                        <td>6.0</td>
                                        <td>50-58</td>
                                    </tr>
                                    <tr>
                                        <td>Modest</td>
                                        <td>5.5</td>
                                        <td>43-50</td>
                                    </tr>
                                    <tr>
                                        <td>Modest</td>
                                        <td>5.5</td>
                                        <td>36-43</td>
                                    </tr>
                                    <tr>
                                        <td>Limited</td>
                                        <td>4.5</td>
                                        <td>30-36</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* score pte */}
                        <div className='pte-score  py-4'>
                            <h2 className=''>PTE Scoring</h2>
                            <p className=''>PTE is scored from 10 to 90 where 10 is the lowest score and 90 is the highest. Graded on the scale, the score showcases the person's ability to read, speak, listen and write day-to-day use English language. Although there is no passing score in PTE, a score in the range of 65-75 is considered to be a good PTE score for admission to top universities. Since PTE is a computer-based test the results are usually given within 3-5 working days from the test date. </p>
                        </div>

                        {/* why pte */}
                        <div className='why-pte py-4'>
                            <h2 className=' mb-3'>Why PTE In Akcxis Immigrations?</h2>
                            <h6 className=''>< BsCheck2Square className='fs-5 text-warning ' /> &nbsp;Flexible Class Timings</h6>
                            <h6 className=''>< BsCheck2Square className='fs-5 text-warning ' /> &nbsp;Experienced Staff</h6>
                            <h6 className=''>< BsCheck2Square className='fs-5 text-warning ' /> &nbsp;Weekend Classes</h6>
                            <h6 className=''>< BsCheck2Square className='fs-5 text-warning ' /> &nbsp;Section-wise Mock Tests</h6>
                            <h6 className=''>< BsCheck2Square className='fs-5 text-warning ' /> &nbsp;Full length scored Mock Tests</h6>
                        </div>

                        {/* faq */}
                        <div className='Faq-pte py-4'>
                            <h2 className=' '>FAQs</h2>
                            <div className="accordion my-3 " id="accordionExample">
                                <div className="accordion-item border border-dark ">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button btn btn-warning " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            Q: What is the PTE exam fee?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            A: The usual PTE Academic exam fee is RS. 15,900 (as per now) in India. A candidate will have to pay late booking fee as well, if he/she books the exam within 48 hours of the PTE test date.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item mt-3 border border-dark ">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed btn btn-warning " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Q: What are the different types of PTE exams?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            A: The PTE exam is of four different types:<br />
                                            1.	PTE Academic <br />
                                            2.	PTE Academic Online<br />
                                            3.	PTE Academic UKVI<br />
                                            4.	PTE Home
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item mt-3 border border-dark">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Q: What is the validity of PTE Academic test?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            A: PTE Academic test scores are valid for 2 years from the date of the result has been issued.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item mt-3 border border-dark">
                                    <h2 className="accordion-header " id="headingFour">
                                        <button className="accordion-button collapsed btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                                            Q: What is a good PTE Score?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            A: Different universities will have different requirements for PTE depending on the course. A candidate should check the official institute's website to see the minimum requirements of PTE score.<br /><br />  However, a minimum of 58 points is needed by most institutes in PTE Academic for study purpose.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item mt-3 border border-dark">
                                    <h2 className="accordion-header" id="headingFive">
                                        <button className="accordion-button collapsed  btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                                            Q: What is PTE Young Learners Test?
                                        </button>
                                    </h2>
                                    <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            A: PTE Young Learners is a fun English language assessment for students between the age group of 6 years to 13 years, delivered by Edexcel, the UK's largest examining body. PTE Young learners is not recognized for the purposes of immigration.
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item mt-3 border border-dark">
                                    <h2 className="accordion-header " id="headingSix">
                                        <button className="accordion-button collapsed btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                                            Q: How can I check my PTE results?
                                        </button>
                                    </h2>
                                    <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            A: The PTE test scores can be viewed online. When the result is available, you will be notified via mail. You can then log into Pearson VUE and view your score by clicking on View Score.
                                        </div>
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

export default Pte
