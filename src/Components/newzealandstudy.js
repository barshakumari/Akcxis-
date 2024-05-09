import React from 'react'
import newzealandstudy from '../Components/linkImage/newzealandstudy.png'
import { FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { ImClock } from 'react-icons/im'
import "./pte.css"
import { Link } from 'react-router-dom'
import Modal from './modal'
import './canadastudy.css'
const Newzealandstudy = () => {
    return (
        <>
            {/* PTE2 */}
            <div className="PTE2">
                <img src={newzealandstudy} alt="" className='img-fluid w-100' />
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
                    <div className='row '>
                        <div className='col-lg-9 shadow p-4 mb-5 bg-body rounded'>                          
                                {/* study canada */}
                                <div className='pb-3'>
                                <h3 className='mb-3'>Study in New Zealand</h3>
                                <p className='fs-6'>New Zealand, proclaimed to be one of the safest countries to live in, has ranked second on the Global Peace Index 2022. A world-class educational system, internationally recognized credentials, and an unrivalled lifestyle are all some of the significant characteristics of New Zealand. Studying in New Zealand gives you an adventurous experience as it offers an abundance of natural beauty, breath-taking landscapes, and stunning coastlines.</p>
                                </div>
                                {/* benefits */}
                                <div className='pb-3'>
                                <h3 className='mb-3'>Benefits of Studying in New Zealand</h3>
                                <ol>
                                    <li> Every single University in New Zealand is included in QS World University Rankings.</li>
                                    <li> New Zealand education system is heavily based on British education system.</li>
                                    <li> New Zealand has very low tuition fees.</li>
                                    <li> New Zealand institutes offer lots of scholarships to international students.</li>
                                    <li> New Zealand is one of the world's most celebrated country for its natural beauty.</li>
                                    <li> New Zealand is blessed with rich cultural heritage with influences from the British and indigenous Maori people.</li>
                                    <li> Kiwis are the most laid back and friendly people.</li>
                                    <li> New Zealand with it's close proximity to Australia offers a lot of job opportunities.
                                    </li>
                                </ol>
                                </div>                      
                            {/* intake */}
                            <div className='pb-3'>
                            <h3 className='mb-3'>Intakes in New Zealand </h3>
                            <p>There are three intakes in Canada for international students:</p>
                            <ul>
                                <li><b>Fall Intake:</b> September - October</li>
                                <li><b>Winter Intake:</b> November - February</li>
                                <li><b>Summer Intake:</b> July - August</li>
                            </ul>
                            </div>
                            {/* university */}
                            <div className='pb-3'>
                            <h3 className='mb-3'>Top Universities in New Zealand</h3>
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
                                            <td>68</td>
                                            <td>The University of Auckland</td>

                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>206</td>
                                            <td>University of Otagoy</td>

                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>239</td>
                                            <td>Massey University</td>

                                        </tr>

                                        <tr>
                                            <th scope="row">4</th>
                                            <td>241</td>
                                            <td>Victoria University of Wellington</td>

                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>250</td>
                                            <td>University of Waikato</td>

                                        </tr>
                                        <tr>
                                            <th scope="row">6</th>
                                            <td>256</td>
                                            <td>University of Canterbury | Te Whare Wānanga o Waitaha</td>

                                        </tr>
                                        <tr>
                                            <th scope="row">7</th>
                                            <td>362</td>
                                            <td>Lincoln University</td>

                                        </tr>
                                        <tr>
                                            <th scope="row">8</th>
                                            <td>407</td>
                                            <td>Auckland University of Technology (AUT)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            </div>
                              {/*Cost of Study in New Zealand */}
                              <div className='pb-3'>
                                <h3 className='mb-3'>Cost of Study in New Zealand</h3>
                                <ul>
                                    <li>Bachelors - 22,000 NZD</li>
                                    <li>Masters (MS/MBA) - 26,000 NZD </li>
                                </ul>
                            </div>
                            {/* courses */}
                            <div className='pb-3'>
                            <h3 className='mb-3'>Top Courses to Study in New Zealand</h3>
                            <ol className=' '>
                                <li> Masters in Artificial Intelligence </li>
                                <li> Master of Professional Accounting </li>
                                <li> PG Diploma in Agricultural Science</li>
                                <li> Master of Business Administration</li>
                                <li> Master of Tourism</li>
                                <li> Master of Cyber Security</li>
                                <li> Master of Sport and Leisure Studies</li>
                                <li> Master of Computer Graphic Design</li>
                            </ol>
                            </div>
                            {/* document */}
                            <div className='pb-3'>
                            <h3 className='mb-3'>New Zealand Student Visa Requirements </h3>
                            <p>Check the requirements for New Zealand student visa application.</p>
                            <ul>
                                <li>Your valid passport</li>
                                <li>Offer Letter from New Zealand University</li>
                                <li>Proof for sufficient funds </li>
                                <li>Proof of Funds for Tuition Fee</li>
                                <li>Financial Status Proof</li>
                                <li>Scholarship Letter (If applicable)</li>
                                <li>Certificates of extracurricular achievements</li>
                                <li>Medical Insurance</li>
                                <li>Medical Certificate </li>
                                <li>Police Verification</li>
                                <li>Fee Receipts</li>
                            </ul>
                            </div>
                            {/* how to apply */}
                            <div className='pb-3'>
                            <h3 className='mb-3'>How to Apply for a New Zealand Student Visa?</h3>
                            <p>Step 1: Check if you can apply for a New Zealand Visa.</p>
                            <p>Step 2: Get ready with all the required documents.</p>
                            <p>Step 3: Apply for a New Zealand visa online.</p>
                            <p>Step 4: Wait for the approval status.
                            </p>
                            <p>Step 5:  Fly to New Zealand for your education.</p>
                            </div>
                            {/* process time */}
                            <div className='pb-3'>
                            <h3 className='mb-3'>Processing Time for a New Zealand Student Visa</h3>
                            <p>New Zealand student visa processing time is approximately 30 week days, excluding all public holidays. On average, New Zealand processes student visa applications within 18 weekdays. Around 90% of New Zealand student visa applications are processed within 66 weekdays. </p>
                            </div>
                        </div>
                        <div className='col-lg-3 '>
                            <div className='border py-4 mb-3 fixtext'>
                                <h3 className='text-center fw-bold text-white'>New Zealand</h3>

                            </div>
                            <div className="list-group mb-4 bg-primary">
                                <a href="usastudy" className="list-group-item list-group-item-action py-3 " aria-current="true">
                                    USA Study
                                </a>
                                <a href="/ukstudy" className="list-group-item list-group-item-action py-3">UK Study</a>
                                <a href="/australiastudy" className="list-group-item list-group-item-action py-3">Australia Study</a>
                                <a href="/newzealandstudy" className="list-group-item list-group-item-action py-3">New Zealand Study</a>
                          
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

export default Newzealandstudy
