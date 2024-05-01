import React from 'react'
import germanystudy from '../Components/linkImage/germanystudy.png'
import { FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { ImClock } from 'react-icons/im'
import "./pte.css"
import { Link } from 'react-router-dom'
import Modal from './modal'
import Form from './form'
import './canadastudy.css'
const Germanystudy = () => {
    return (
        <>
            {/* PTE2 */}
            <div className="PTE2">
                <div className='section-bg'>
                </div>
                <img src={germanystudy} alt="" className='img-fluid w-100' />
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

                            {/* study Germany */}
                            <div className='pb-3'>
                                <h3 className='mb-3'>Study in Germany</h3>
                                <p className='fs-6'>Germany, which is also popularly known as Deutschland, has a rich history with stunning countryside, awesome culture, and a country dotted with abbeys and palaces. If you are planning to pursue higher studies abroad, look no further than Germany. A large number of international students in this fabulous European country is proof that Germany is the first choice for anyone looking to get top-quality education..</p>
                            </div>
                            {/* benefits */}
                            <div className='pb-3'>
                                <h3 className='mb-3'>Benefits of Studying in Germany</h3>
                                <ol>
                                    <li>German public universities do not charge any tuition fee. Only a small administrative charge has to be paid per semester making Germany a very affordable study destination.</li>
                                    <li> German universities are known for their curriculum and infrastructure. </li>
                                    <li> A German degree is internationally recognized, increasing the job prospects.</li>
                                    <li>Most of the bachelor's programs require students to learn German, giving them a chance to pick up another language. 6. Studying in Germany offers students access to 26 Schengen countries.</li>
                                    <li>The tuition fee in Canada is affordable as compared to other countries.</li>
                                    <li>Private Universities in Germany provide massive scholarships for International students.</li>
                                    <li>A student is eligible for provincial health care facilities with a valid study visa.</li>
                                    <li>It can help enhance a student's network by building invaluable relations with varied people.
                                    </li>
                                </ol>
                            </div>
                            {/* intake */}
                            <div className='pb-3'>
                                <h3 className='mb-3'>Intakes in Germany </h3>
                                <p>The general timelines for application submission are as follows:</p>
                                <ul>
                                    <li><b>Summer Intake:</b> Submit your application before January 15th</li>
                                    <li><b>Winter Intake:</b> Submit your application before July 15th</li>
                                </ul>
                            </div>
                            {/* university */}
                            <div className='pb-3'>
                                <h3 className='mb-3'>Top Universities in Germany</h3>
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
                                                <td>37</td>
                                                <td>Technical University of Munich</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>54</td>
                                                <td>Ludwig-Maximillians-Universität München</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>87</td>
                                                <td>Universität Heidelberg</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">4</th>
                                                <td>98</td>
                                                <td>Freie-Universität Berlin</td>+
                                            </tr>
                                            <tr>
                                                <th scope="row">5</th>
                                                <td>106</td>
                                                <td>RWTH Aachen University</td>

                                            </tr>
                                            <tr>
                                                <th scope="row">6</th>
                                                <td>119</td>
                                                <td>KIT, Karlsruher-Institut für Technologie</td>

                                            </tr>
                                            <tr>
                                                <th scope="row">7</th>
                                                <td>120</td>
                                                <td>Humboldt-Universität zu Berlin</td>

                                            </tr>
                                            <tr>
                                                <th scope="row">8</th>
                                                <td>154</td>
                                                <td>Technische Universität Berlin (TU Berlin)</td>

                                            </tr>
                                            <tr>
                                                <th scope="row">9</th>
                                                <td>192</td>
                                                <td>Albert-Ludwigs-Universtaet Freiburg</td>

                                            </tr>
                                            <tr>
                                                <th scope="row">10</th>
                                                <td>205</td>
                                                <td>Universität Hamburg</td>
                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            {/*Cost of Study in Germany*/}
                            <div className='pb-3'>
                                <h3 className='mb-3'>Cost of Study in Germany</h3>
                                <ul>
                                    <li>Bachelors -  Public universities: 150 to 1500 Euro/Semester (6 months) - Private universities: 11,000 to 15,000 Euros per annum (approximately)</li>
                                    <li>Masters (MS/MBA) -  Public universities: 150 to 1500 Euro/Semester (6 months) - Private universities: 11,000 to 15,000 Euros per annum (approximately)</li>

                                </ul>
                            </div>
                            {/* courses */}
                            <div className='pb-3'>
                                <h3 className='mb-3'>Top Courses to Study in Geramny</h3>
                                <p>There are several course options for pursuing an MS in Canada. Following are the most popular course programs among students in Canada.</p>
                                <ol className=' '>
                                    <li>Engineering</li>
                                    <li>Management Studies </li>
                                    <li>Arts and Humanities</li>
                                    <li>Computer and IT</li>
                                    <li>Social Sciences</li>
                                </ol>
                            </div>

                            {/* university and program */}
                            <div className='pb-3'>
                                <h3 className='mb-3'>Universities and Programs</h3>
                                <table class="table table-striped table-bordered">
                                    <thead>
                                        <tr>
                                            <th scope="col">Universities List</th>
                                            <th scope="col">Programs</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Albert Ludwig University of Freiburg</td>
                                            <td>Masters</td>
                                        </tr>
                                        <tr>
                                            <td>EU Business School</td>
                                            <td>MBA</td>
                                        </tr>
                                        <tr>
                                            <td>Frankfurt School of Finance and Management</td>
                                            <td>MBA</td>
                                        </tr>
                                        <tr>
                                            <td>Free University of Berlin</td>
                                            <td>Bachelors

                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Heidelberg University</td>
                                            <td>Masters</td>
                                        </tr>
                                        <tr>
                                            <td>Humboldt University</td>
                                            <td>Bachelors, Masters</td>
                                        </tr>
                                        <tr>
                                            <td>University of Ottawa</td>
                                            <td>Bachelors, Masters</td>
                                        </tr>
                                        <tr>
                                            <td>Johannes Gutenberg University Mainz</td>
                                            <td>MBA</td>
                                        </tr>
                                        <tr>
                                            <td>Karlsruhe Institute of Technology</td>
                                            <td>Bachelors, Btech, Masters</td>
                                        </tr>
                                        <tr>
                                            <td>Leipzig University</td>
                                            <td>MBA</td>
                                        </tr>
                                        <tr>
                                            <td>Ludwig Maximilian University of Munich</td>
                                            <td>Masters</td>
                                        </tr>
                                        <tr>
                                            <td>RWTH Aachen University</td>
                                            <td>Bachelors, Masters, MBA</td>
                                        </tr>
                                        <tr>
                                            <td>Technical University of Berlin</td>
                                            <td>Masters</td>
                                        </tr>
                                        <tr>
                                            <td>University of Bayreuth</td>
                                            <td>MBA</td>
                                        </tr>
                                        <tr>
                                            <td>Technical University of Berlin</td>
                                            <td>Bachelors</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* document */}
                            <div className='pb-3'>
                                <h3 className='mb-3'>Geramny Student Visa Requirements </h3>
                                <p>Check the requirements for Canada student visa application.</p>
                                <ul>
                                    <li>Transcripts and certificates of your academics.</li>
                                    <li>An interview with the corresponding university.</li>
                                    <li>Must clear the GRE or GMAT exams. </li>
                                    <li>Any of the English language proficiency tests, IELTS, TOEFL, or PTE, if you are a non-native English speaker</li>
                                    <li>If your language medium is German, you must clear Testdaf (German language test).</li>
                                    <li>Go through the university's official portal for information regarding the additional requirements.</li>

                                </ul>
                            </div>

                            {/* how to apply */}
                            <div className='pb-3'>
                                <h3 className='mb-3'>How to Apply for a Germany Student Visa?</h3>
                                <p>Step 1: Check your eligibility for a German student Visa.</p>
                                <p>Step 2: Arrange all the required documents.</p>
                                <p>Step 3: Apply for a German visa online.</p>
                                <p>Step 4: Wait for the approval status.
                                </p>
                                <p>Step 5:  Fly to Germany for your education.</p>
                            </div>

                            {/* process time */}
                            <div className='pb-3'>
                                <h3 className='mb-3'>Processing Time for a Germany Student Visa</h3>
                                <p>The Germany student visa application process takes about 6-12 weeks for a long-stay visa. And for the short-stay visa usually takes around 15-30 days. </p>

                            </div>
                        </div>
                        <div className='col-lg-3 '>
                            <div className='border py-4 mb-3 fixtext'>
                                <h3 className='text-center fw-bold text-white'>Geramny</h3>

                            </div>
                            <div class="list-group mb-4 bg-primary">
                                <a href="/usastudy" class="list-group-item list-group-item-action py-3 " aria-current="true">
                                    USA Study
                                </a>
                                <a href="/ukstudy" class="list-group-item list-group-item-action py-3">UK Study</a>
                                <a href="/australiastudy" class="list-group-item list-group-item-action py-3">Australia Study</a>
                                <a href="/newzealandstudy" class="list-group-item list-group-item-action py-3">New Zealand Study</a>
                                <a href="/canadastudy" class="list-group-item list-group-item-action py-3 ">Canada Study</a>
                                <a href="/singaporestudy" class="list-group-item list-group-item-action py-3 ">Singapore Study</a>
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

export default Germanystudy
