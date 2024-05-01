import React from 'react'
import ukstudy from '../Components/linkImage/ukstudy.png'
import { FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { ImClock } from 'react-icons/im'
import "./pte.css"
import { Link } from 'react-router-dom'
import Modal from './modal'
import './canadastudy.css'
const Ukstudy = () => {
    return (

        <>
            {/* PTE2 */}
            <div className="PTE2">
                <img src={ukstudy} alt="" className='img-fluid w-100' />
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
                                <h3 className='mb-3'>Study in UK</h3>
                                <p className='fs-6'>UK Universities are ranked among the best in the world time and again. Hence, many students from India look no further than the UK when it comes to pursuing higher education. Students who choose to study in a great country like the United Kingdom meet individuals from other nationalities. Also, they take delight in exchanging their multicultural backgrounds.</p>

                                </div>
                                {/* benefits */}
                                <div className='pb-3'>
                                <h3 className='mb-3'>Benefits of Studying in UK</h3>
                                <ol>
                                    <li> UK is known for its academic excellence. 4 out of top 10
                                        universities according to QS World ranking are in UK.
                                    </li>
                                    <li> UK offers shorter and more intensive course structures.
                                    </li>
                                    <li> International students in UK have access to free medical
                                        treatment through NHS.
                                    </li>
                                    <li> UK universities are known for their standard of education
                                        along with their thrust on research.
                                    </li>
                                    <li>UK boasts of strong Indian alumni.
                                    </li>
                                    <li> Scholarships are provided to international students making
                                        UK education cost-effective
                                        .</li>
                                    <li> UK has diverse and fascinating culture. It’s close ties to
                                        Indian culture makes it easier to adapt to the country.
                                    </li>
                                    <li> 	International students can apply for upto 2 years of work
                                        permit in UK after completion of graduation or
                                        post-graduation.
                                    </li>

                                </ol>

                                </div>
                            {/* intake */}
                            <div className='pb-3'>
                            <h3 className='mb-3'>Intakes in UK </h3>
                            <p>There are three intakes in UK for international students:</p>
                            <ul>
                                <li><b>Fall Intake:</b> September - December</li>
                                <li><b>Winter Intake:</b> 	January – April</li>

                            </ul>
                            </div>
                            {/* university */}
                            <div className='pb-3'>
                            <h3 className='mb-3'>Top Universities in UK</h3>
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
                                            <td>2</td>
                                            <td>Cambridge University</td>

                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>3</td>
                                            <td>Oxford University</td>

                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>6</td>
                                            <td>Imperial College London</td>

                                        </tr>

                                        <tr>
                                            <th scope="row">4</th>
                                            <td>9</td>
                                            <td>University College London (UCL)</td>

                                        </tr>
                                        <tr>
                                            <th scope="row">5</th>
                                            <td>22</td>
                                            <td>The University of Edinburgh</td>

                                        </tr>
                                        <tr>
                                            <th scope="row">6</th>
                                            <td>32</td>
                                            <td>The University of Manchester</td>

                                        </tr>
                                        <tr>
                                            <th scope="row">7</th>
                                            <td>40</td>
                                            <td>King's College London</td>

                                        </tr>
                                        <tr>
                                            <th scope="row">8</th>
                                            <td>45</td>
                                            <td>London School of Economics and Political Science (LSE)</td>

                                        </tr>
                                        <tr>
                                            <th scope="row">9</th>
                                            <td>55</td>
                                            <td>University of Bristol</td>

                                        </tr>
                                        <tr>
                                            <th scope="row">10</th>
                                            <td>67</td>
                                            <td>The University of Warwick</td>

                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                            </div>
                                  {/*UK Student Visa Cost */}
                                  <div className='pb-3'>
                                <h3 className='mb-3'>Cost of Study in UK</h3>
                                <ul>
                                    <li>Bachelors - 11,000 GBP </li>
                                    <li>Masters (MS/MBA) - 15,000 GBP </li>
                                  
                                </ul>
                            </div>
                            {/* courses */}
                            <div className='pb-3'>
                            <h3 className='mb-3'>Top Courses to Study in UK</h3>

                            <ol className=' '>
                                <li>Business & administrative studiesasters </li>
                                <li>Engineering and technology</li>
                                <li> Social studies</li>
                                <li>Creative arts and design</li>
                                <li>Biological Sciences</li>
                                <li>Computer Science</li>
                                <li>Law</li>
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
                                            <td>Cambridge University</td>
                                            <td>Bachelors</td>
                                        </tr>
                                        <tr>
                                            <td>Imperial College London</td>
                                            <td>Bachelors, Btech,</td>
                                        </tr>
                                        <tr>
                                            <td>King's College London</td>
                                            <td>Bachelors, Masters</td>
                                        </tr>
                                        <tr>
                                            <td>London School of Economics</td>
                                            <td>
                                            Bachelors, Masters
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>University College London</td>
                                            <td>Bachelors, Btech, Masters, MBA</td>
                                        </tr>
                                        <tr>
                                            <td>University of Cambridge</td>
                                            <td>Bachelors, Btech, Masters, MBA</td>
                                        </tr>
                                        <tr>
                                            <td>University of Edinburgh</td>
                                            <td>Bachelors, Btech, Masters</td>
                                        </tr>
                                        <tr>
                                            <td>University of Manchester</td>
                                            <td>Bachelors, Btech, Masters,</td>
                                        </tr>
                                        <tr>
                                            <td>University of Oxford</td>
                                            <td>	Bachelors, Btech, Masters, MBA</td>
                                        </tr>
                                        <tr>
                                            <td>University of Sheffield</td>
                                            <td>Bachelors</td>
                                        </tr>
                                        <tr>
                                            <td>University of Warwick</td>
                                            <td>Bachelors, Masters, MBA</td>
                                        </tr>
                                        <tr>
                                            <td>University of Bristol</td>
                                            <td>Btech, Masters, MBA</td>
                                        </tr>
                                        <tr>
                                            <td>University of Nottingham</td>
                                            <td>Btech</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {/* document */}
                            <div className='pb-3'>
                            <h3 className='mb-3'>UK Student Visa Requirements </h3>
                            <p>Check the requirements for UK student visa application.</p>
                            <ul>
                                <li>Your valid passport </li>
                                <li>Latest Bank statement stating that you have enough funds to support your stay during your courses</li>
                                <li>
                                    Confirmation of Acceptance for Studies (CAS)</li>

                                <li>Your passport size color photographs</li>
                                <li>
                                    If required, need to screen a tuberculosis test</li>
                                <li>Your profile assessment document</li>
                                <li>Academic Technology Approval Scheme (ATAS), Clearance Certificate (if required)</li>
                                <li>Additional documents are required if you are under the age of 18 or have dependents accompanying</li>
                            </ul>
                            </div>

                            {/* how to apply */}
                            <div className='pb-3'>
                            <h3 className='mb-3'>How to Apply for a UK Student Visa?</h3>
                            <p> Step 1: Check if you can apply for the UK Visa.</p>
                            <p>Step 2: Get ready with all the required documents.</p>
                            <p>Step 3: Apply for a UK visa online.</p>
                            <p>Step 4: Wait for the approval status.
                            </p>
                            <p>Step 5:  Fly to the UK for your education.</p>
                            </div>
                            {/* process time */}
                            <div className='pb-3'>
                            <h3 className='mb-3'>Processing Time for a UK Student Visa</h3>
                            <p>UK study visas are issued within 3 to 6 weeks </p>
                            </div>

                        </div>


                        <div className='col-lg-3 '>
                            <div className='border py-4 mb-3 fixtext'>
                                <h3 className='text-center fw-bold text-white'>UK</h3>
                               
                            </div>
                            <div class="list-group mb-4 bg-primary">
                                    <a href="usastudy" class="list-group-item list-group-item-action py-3 " aria-current="true">
                                     USA Study
                                    </a>
                                    <a href="/canadastudy" class="list-group-item list-group-item-action py-3">Canada Study</a>
                                    <a href="/australiastudy" class="list-group-item list-group-item-action py-3">Australia Study</a>
                                    <a href="/newzealandstudy" class="list-group-item list-group-item-action py-3">New Zealand Study</a>
                   
                                    <a href="/singaporestudy"  class="list-group-item list-group-item-action py-3 ">Sinngapore Study</a>
                                    <a href="germanystudy"  class="list-group-item list-group-item-action py-3 ">Germany Study</a>
                        
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

export default Ukstudy
