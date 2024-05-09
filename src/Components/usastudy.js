import React from 'react'
import usastudy from '../Components/linkImage/usastudy.png'
import { FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { ImClock } from 'react-icons/im'
import "./pte.css"
import { Link } from 'react-router-dom'
import Modal from './modal'
import './canadastudy.css'
const Usastudy = () => {
    return (

        <>
            {/* PTE2 */}
            <div className="PTE2">
                <img src={usastudy} alt="" className='img-fluid w-100' />
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
{/* 
            <div className='py-4'>
                <div className='container'>
                    <ul className='linking-page'>
                        <li className='link-name'><a href='/'>Home</a>
                        <span className='link-icon'></span></li>
                        <li className='link-name'><a href='/'>Study Abroad</a>
                        <span className='link-icon'></span></li>
                        <li className='link-name'><a href='/'>USA</a>
                        </li>
                    </ul>
                </div>
            </div> */}

            {/* content */}
            <div className='main-section py-5'>
                <div className='container'>
                    <div className='row '>
                        <div className='col-lg-9 shadow p-4 mb-5 bg-body rounded'>

                            {/* study canada */}
                            <div className='pb-3'>
                                <h3 className='mb-3'>Study in USA</h3>
                                <p className='fs-6'>United States of America, the top destination for many searching’s for economic growth with best facilities possible has always opened its doors for seekers of knowledge. Most of the universities in United States are considered the best in the world. These universities give enough room for the enthusiastic students to research in the field of their interest. The reason why universities of USA are most sought after, are because of the opportunities that these colleges provide. Beyond this is the exposure and knowledge that one gets from these universities.</p>
                            </div>

                            {/* benefits */}
                            <div className='pb-3'>
                                <h3 className='mb-3'>Benefits of Studying in USA</h3>
                                <ol>
                                    <li> The USA boasts of some of the top-most-ranking universities in the world.</li>
                                    <li> USA offers an excellent support system for international students.</li>

                                    <li> American colleges and universities offer a flexible education structure. A student can choose from variety of courses and can change his/her major after the start of the course. </li>
                                    <li> USA has a multicultural environment giving the student an exposure to variety of customs, languages, art and cuisines.</li>
                                    <li> USA being an English-speaking country allows for honing English language skills and thus, better employment opportunities.</li>
                                    <li> The country offers a vibrant and lively campus life with a strong Indian Alumni network.</li>
                                    <li> US universities have a strong research focus.
                                    </li>
                                    <li> US degree can help a student can launch a successful career, with some of the top companies as recruiters.</li>

                                </ol>
                            </div>

                            {/* intake */}
                            <div className='pb-3'>
                                <h3 className='mb-3'>Intakes in USA </h3>
                                <p>There are three intakes in USA for international students:</p>
                                <ul>
                                    <li><b>Spring Intake:</b> January - May</li>
                                    <li><b>Summer Intake:</b> May - September</li>
                                    <li><b>Fall Intake:</b> September - December</li>
                                </ul>
                            </div>
                            {/* university */}
                            <div className='pb-3'>
                                <h3 className='mb-3'>Top Universities in USA</h3>
                                <div className="container">
                                    <table className="table table-striped table-bordered">
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
                                                <td>1</td>
                                                <td>Massachusetts Institute of Technology</td>

                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>4</td>
                                                <td>Harvard University</td>

                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>5</td>
                                                <td>Stanford University</td>

                                            </tr>

                                            <tr>
                                                <th scope="row">4</th>
                                                <td>10</td>
                                                <td>University of California, Berkeley (UCB)</td>

                                            </tr>
                                            <tr>
                                                <th scope="row">5</th>
                                                <td>11</td>
                                                <td>University of Chicago</td>

                                            </tr>
                                            <tr>
                                                <th scope="row">6</th>
                                                <td>12</td>
                                                <td>University of Pennsylvania</td>

                                            </tr>
                                            <tr>
                                                <th scope="row">7</th>
                                                <td>13</td>
                                                <td>Cornell University</td>

                                            </tr>
                                            <tr>
                                                <th scope="row">8</th>
                                                <td>15</td>
                                                <td>California Institute of Technology (Caltech)</td>

                                            </tr>
                                            <tr>
                                                <th scope="row">9</th>
                                                <td>16</td>
                                                <td>Yale University</td>

                                            </tr>
                                            <tr>
                                                <th scope="row">10</th>
                                                <td>17</td>
                                                <td>Princeton University</td>

                                            </tr>

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                                {/*Cost of Study in Canada */}
                                <div className='pb-3'>
                                <h3 className='mb-3'>Cost of Study in USA</h3>
                                <ul>
                                    <li>Undergraduate Bachelor Degree - $15,000 to $50,000 per year</li>
                                    <li>Graduate programs - $20,000 to $50,000 per year </li>
                                    <li>Doctoral Degree - $20,000 to $55,000 per year</li>
                                
                                </ul>
                            </div>
                            {/* courses */}
                            <div className='pb-3'>
                                <h3 className='mb-3'>Top Courses to Study in USA</h3>
                                <ol className=' '>
                                    <li> Engineering</li>
                                    <li> Information Technology & Computer Science </li>
                                    <li> Data Science & Business Analytics</li>
                                    <li> Pharmacy</li>
                                    <li> Business</li>
                                </ol>
                            </div>
                                {/* university and program */}
                                <div className='pb-3'>
                                <h3 className='mb-3'>Universities and Programs</h3>
                                <table className="table table-striped table-bordered">
                                    <thead>
                                        <tr>

                                            <th scope="col">Universities List</th>
                                            <th scope="col">Programs</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Anderson School of Management</td>
                                            <td>MBA</td>
                                        </tr>
                                        <tr>
                                            <td>Boston University</td>
                                            <td>Masters</td>
                                        </tr>
                                        <tr>
                                            <td>Brown University</td>
                                            <td>Masters</td>
                                        </tr>
                                        <tr>
                                            <td>California Institute of Technology</td>
                                            <td>
                                            Bachelors, Masters, Btech
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Carnegie Mellon University</td>
                                            <td>Btech, Masters</td>
                                        </tr>
                                        <tr>
                                            <td>Columbia Business School</td>
                                            <td>MBA</td>
                                        </tr>
                                        <tr>
                                            <td>Cornell University</td>
                                            <td>MBA, Masters</td>
                                        </tr>
                                        <tr>
                                            <td>Darden School of Business</td>
                                            <td>MBA</td>
                                        </tr>
                                        <tr>
                                            <td>Duke University</td>
                                            <td>Masters</td>
                                        </tr>
                                        <tr>
                                            <td>Georgia Institute of Technology</td>
                                            <td>Btech, Masters</td>
                                        </tr>
                                        <tr>
                                            <td>Goizueta Business School</td>
                                            <td>MBA</td>
                                        </tr>
                                        <tr>
                                            <td>Harvard Business School</td>
                                            <td>MBA</td>
                                        </tr>
                                        <tr>
                                            <td>New York University</td>
                                            <td>Masters</td>
                                        </tr>
                                        <tr>
                                            <td>Purdue University</td>
                                            <td>Masters</td>
                                        </tr>
                                        <tr>
                                            <td>Yale University</td>
                                            <td>Bachelors, Masters, MBA</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* document */}
                            <div className='pb-3'>
                                <h3 className='mb-3'>USA Student Visa Requirements </h3>
                                <p>Check the requirements for USA student visa application.</p>
                                <ul>
                                    <li>  Requisite application form duly filled and signed</li>
                                    <li>I-20 showing that you are enrolled in a US universities</li>
                                    <li>Valid passport for at least 6 months beyond the period of stay</li>

                                    <li>Receipt of payment of visa processing fees</li>
                                    <li>Confirmation page of DS-160</li>
                                    <li>Documents to show you are a bonafide student</li>
                                    <li>Certificates of extracurricular achievements</li>
                                    <li>Payment of application fee for SEVIS</li>
                                    <li>DLI has to confirm every LOA submitted (applicant outside Canada)</li>
                                    <li>Documents to show sponsorship</li>
                                    <li>Documents to show availability of funds</li>

                                </ul>
                            </div>

                            {/* how to apply */}
                            <div className='pb-3'>
                                <h3 className='mb-3'>How to Apply for a USA Student Visa?</h3>
                                <p> Step 1: Check your eligibility for a US Visa.</p>
                                <p>Step 2: Get ready with all the required documents. </p>
                                <p>Step 3: Apply for a USA visa online.</p>
                                <p>Step 4: Wait for the approval status.
                                </p>
                                <p>Step 5:  Fly to the USA for your education. </p> 
                            </div>

                         {/* process time */}
                            <div className='pb-3'>
                                <h3 className='mb-3'>Processing Time for a USA Student Visa</h3>
                                <p>The processing time for a US student visa depends on the visa type you apply for. F-1 student visa processing may take 3-6 weeks but can extend up to 4 months if the submitted documents are inaccurate. Make sure to check all the documents clearly before applying for the US Study Visa. After applying, you can track your visa status on the embassy's portal. </p>

                            </div>
                        </div>



                        <div className='col-lg-3 '>
                            <div className='border py-4 mb-3 fixtext'>
                                <h3 className='text-center fw-bold text-white'>USA</h3>

                            </div>
                            <div className="list-group mb-4 bg-primary">
                                <a href="/canadastudy" className="list-group-item list-group-item-action py-3 " aria-current="true">
                                    Canada Study
                                </a>
                                <a href="/ukstudy" className="list-group-item list-group-item-action py-3">UK Study</a>
                                <a href="/australiastudy" className="list-group-item list-group-item-action py-3">Australia Study</a>
                                <a href="newzealandstudy" className="list-group-item list-group-item-action py-3">New Zealand Study</a>

                                <a href="/singaporestudy" className="list-group-item list-group-item-action py-3 ">Singapore Study</a>
                                <a href="/germanystudy" className="list-group-item list-group-item-action py-3 ">Germany Study</a>
                     
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

export default Usastudy
