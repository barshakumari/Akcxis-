import React from 'react'
import canadastudy from '../Components/linkImage/canadastudy.png'
import { FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { ImClock } from 'react-icons/im'
import "./pte.css"
import { Link } from 'react-router-dom'
import Modal from './modal'
import Form from './form'
import './canadastudy.css'

const Canadastudy = () => {
    return (
        <>
            {/* PTE2 */}
            <div className="PTE2">
                <div className='section-bg'>
                </div>
                <img src={canadastudy} alt="" className='img-fluid w-100' />
                <div>
                    {/* <Form /> */}
                </div>
            </div>

            {/* go to home page */}
            {/* <div className='direct d-flex justify-content-center align-items-center '>
                <div className='d-flex justify-content-between align-items-center'>
                    <Link to="/" className='text-dark fs-5 fw-semibold border-end border-white pe-3 text-decoration-none'>Home</Link>
                    <Modal title="Book a Free Demo " className="ms-1 fw-semibold fs-5" />
                </div>
            </div> */}

            {/* content */}
            <div className='main-section py-5'>
                <div className='container'>
                    <div className='row g-3'>
                        <div className='col-lg-9 shadow p-4 mb-5 bg-body rounded'>

                            {/* study canada */}
                            <div className='pb-3'>
                                <h2 className='mb-3'>Study in Canada</h2>
                                <p className='fs-6'>Canada education is renowned for being a global leader in research and academic rigor while at the same time continuing to be accessible to people from different backgrounds. The higher education programs in Canada are more flexible and student-friendly than most programs across the world. Many students appreciate this flexibility and opt for Canada for their masters, making it one of the most popular destinations for international education all over the world.</p>
                            </div>



                            {/* benefits */}
                            <div className='pb-3'>
                                <h2 className='mb-3'>Benefits of Studying in Canada</h2>
                                <ol>
                                    <li> Canada is known for offering flexible, high quality education with ample research opportunities.</li>
                                    <li> Canada is a culturally diverse society which is open and safe. </li>
                                    <li> Canada is ranked globally at third place for best quality of life.</li>
                                    <li> Canadian education offers scholarships and lots of work opportunities like Co-op work placements, offering affordable education to international students.</li>
                                    <li> 	The tuition fee in Canada is affordable as compared to other countries.</li>
                                    <li> Students studying from DLIs can opt for Post-Graduation Work Permit (PGWP) program which allows them to stay back and work in the country.</li>
                                    <li> A student is eligible for provincial health care facilities with a valid study visa.</li>
                                    <li> 	Canada degree is recognized globally and increases job prospects of the student.
                                    </li>

                                </ol>
                            </div>


                            {/* intake */}
                            <div className='pb-3'>
                                <h2 className='mb-3'>Intakes in Canada </h2>
                                <p>There are three intakes in Canada for international students:</p>
                                <ul>
                                    <li><b>Fall Intake:</b> September</li>
                                    <li><b>Winter Intake:</b> January</li>
                                    <li><b>Summer Intake:</b> April</li>
                                </ul>
                            </div>
                            {/* university */}
                            <div className='pb-3'>
                                <h2 className='mb-3'>Top Universities in Canada</h2>
                                <div className="container">
                                    <table class="table table-striped table-bordered">
                                        <thead>
                                            <tr>

                                                <th scope="col">Serial No.</th>
                                                <th scope="col">Global Rank</th>
                                                <th scope="col">Name of University</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row">1</th>
                                                <td>26</td>
                                                <td>University of Toronto</td>

                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>27</td>
                                                <td>McGill University</td>

                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>46</td>
                                                <td>University of British Columbia</td>

                                            </tr>


                                            <tr>
                                                <th scope="row">4</th>
                                                <td>111</td>
                                                <td>Université de Montréal</td>

                                            </tr>
                                            <tr>
                                                <th scope="row">5</th>
                                                <td>126</td>
                                                <td>University of Alberta</td>

                                            </tr>
                                            <tr>
                                                <th scope="row">6</th>
                                                <td>140</td>
                                                <td>McMaster University</td>

                                            </tr>
                                            <tr>
                                                <th scope="row">7</th>
                                                <td>149</td>
                                                <td>University of Waterloo</td>

                                            </tr>
                                            <tr>
                                                <th scope="row">8</th>
                                                <td>170</td>
                                                <td>Western University</td>

                                            </tr>
                                            <tr>
                                                <th scope="row">9</th>
                                                <td>230</td>
                                                <td>University of Ottawa</td>

                                            </tr>
                                            <tr>
                                                <th scope="row">10</th>
                                                <td>235</td>
                                                <td>University of Calgary</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">11</th>
                                                <td>235</td>
                                                <td>Queen's University at Kingston</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">12</th>
                                                <td>235</td>
                                                <td>Dalhousie University</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">13</th>
                                                <td>235</td>
                                                <td>Simon Fraser University</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">14</th>
                                                <td>235</td>
                                                <td>University of Victoria (UVic)</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">15</th>
                                                <td>235</td>
                                                <td>Université Laval</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">16</th>
                                                <td>235</td>
                                                <td>University of Saskatchewan</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">17</th>
                                                <td>235</td>
                                                <td>York University</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">18</th>
                                                <td>235</td>
                                                <td>Concordia University</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">19</th>
                                                <td>235</td>
                                                <td>University of Guelph</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">20</th>
                                                <td>235</td>
                                                <td>Université du Québec</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            {/*Cost of Study in Canada */}
                            <div className='pb-3'>
                                <h2 className='mb-3'>Cost of Study in Canada</h2>
                                <ul>
                                    <li>Undergraduate Diploma & Advanced Diploma: 13,000 CAD </li>
                                    <li>Advanced Diploma: 13,000 CAD </li>
                                    <li>Bachelors: 13,000 - 20,000 CAD</li>
                                    <li>PG Diploma/Graduation Certificate: 13,000 CAD</li>
                                    <li>Masters (MS/MBA): 17,000 - 20,000 CAD</li>
                                </ul>
                            </div>
                            {/* courses */}
                            <div className='pb-3'>
                                <h2 className='mb-3'>Top Courses to Study in Canada</h2>
                                <p>There are several course options for pursuing an MS in Canada. Following are the most popular course programs among students in Canada.</p>
                                <ol className=' '>
                                    <li>MBA</li>
                                    <li>Masters </li>
                                    <li>B.Tech</li>
                                    <li>Diploma</li>
                                    <li>Bachelors</li>
                                </ol>
                            </div>

                            {/* university and program */}
                            <div className='pb-3'>
                                <h2 className='mb-3'>Universities and Programs</h2>
                                <table class="table table-striped table-bordered">
                                    <thead>
                                        <tr>

                                            <th scope="col">Universities List</th>
                                            <th scope="col">Programs</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>McGill University</td>
                                            <td>B-Tech, Bachelors, Masters, MBA, MBA - Business Analytics</td>
                                        </tr>
                                        <tr>
                                            <td>McMaster University</td>
                                            <td>B-Tech, Bachelors, Masters, MBA</td>
                                        </tr>
                                        <tr>
                                            <td>Queen's University</td>
                                            <td>B-Tech, Bachelors, MBA</td>
                                        </tr>
                                        <tr>
                                            <td>University of Alberta</td>
                                            <td>B-Tech, Bachelors, Masters, MBA

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>University of British Columbia</td>
                                            <td>B-Tech, Bachelors, Masters, MBA</td>
                                        </tr>
                                        <tr>
                                            <td>University of Calgary</td>
                                            <td>Bachelors, Masters</td>
                                        </tr>
                                        <tr>
                                            <td>University of Ottawa</td>
                                            <td>Bachelors, Masters, MBA</td>
                                        </tr>
                                        <tr>
                                            <td>University of Toronto</td>
                                            <td>B-Tech, Bachelors, Masters, MBA</td>
                                        </tr>
                                        <tr>
                                            <td>University of Waterloo</td>
                                            <td>B-Tech, Bachelors, Masters</td>
                                        </tr>
                                        <tr>
                                            <td>University of Western Ontario</td>
                                            <td>Bachelors</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* document */}
                            <div className='pb-3'>
                                <h2 className='mb-3'>Canada Student Visa Requirements </h2>
                                <p>Check the requirements for Canada student visa application.</p>
                                <ul>
                                    <li>Educational Transcripts</li>
                                    <li>Proof of English Proficiency </li>
                                    <li>Academic references</li>
                                    <li>Employer references</li>
                                    <li>Proof of financial funds</li>
                                    <li>SOP (Statement of Purpose)</li>
                                    <li>An acceptance letter from your educational institution</li>
                                    <li>Proof of payment</li>
                                    <li>Study Permit Application</li>                                
                                    <li>DLI has to confirm every LOA submitted (applicant outside Canada)</li>                           
                                    <li>Attestation Letter from the province or territory where you plan to study </li>                               
                                </ul>
                            </div>

                            {/* how to apply */}
                            <div className='pb-3'>
                                <h2 className='mb-3'>How to Apply for a Canada Student Visa?</h2>
                                <p>Step 1: Check your eligibility for a Canada student visa.</p>
                                <p>Step 2: Arrange the checklist of documents.</p>
                                <p>Step 3: Apply for the visa online.</p>
                                <p>Step 4: Wait for the status.
                                </p>
                                <p>Step 5:  Fly to study in Canada.</p>
                            </div>

                            {/* process time */}
                            <div className='pb-3'>
                                <h2 className='mb-3'>Processing Time for a Canadian Student Visa</h2>
                                <p>It takes 2 to 4 Months to process a Canada student visa. </p>

                            </div>
                        </div>



                        <div className='col-lg-3 '>
                            <div className='border py-4 mb-3 fixtext'>
                                <h3 className='text-center fw-bold text-white'>CANADA</h3>
                               
                            </div>
                            <div class="list-group mb-4 bg-primary">
                                    <a href="/usastudy" class="list-group-item list-group-item-action py-3 " aria-current="true">
                                     USA Study
                                    </a>
                                    <a href="/ukstudy" class="list-group-item list-group-item-action py-3">UK Study</a>
                                    <a href="/australiastudy" class="list-group-item list-group-item-action py-3">Australia Study</a>
                                    <a href="/newzealandstudy" class="list-group-item list-group-item-action py-3">New Zealand Study</a>
                                    <a href="/singaporestudy"  class="list-group-item list-group-item-action py-3 ">Singapore Study</a>
                                    <a href="/germanystudy"  class="list-group-item list-group-item-action py-3 ">Germany Study</a>
                              
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

export default Canadastudy
