import React from 'react'
import singaporestudy from '../Components/linkImage/singaporestudy.png'
import { FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { ImClock } from 'react-icons/im'
import "./pte.css"
import { Link } from 'react-router-dom'
import Modal from './modal'
import Form from './form'
import './canadastudy.css'
const Singaporestudy = () => {
    return (
        <>
            {/* PTE2 */}
            <div className="PTE2">
                <div className='section-bg'>
                </div>
                <img src={singaporestudy} alt="" className='img-fluid w-100' />
                <div>
                    {/* <Form /> */}
                </div>
            </div>

            {/* go to home page */}
       
            <div className='heading-linking'>
                <div className='container'>
                    <ol>
                        <li>
                            <a href='/'>Home</a>
                        </li>
                        <li>
                            <a href='/studyabroad'>Study Abroad</a>
                        </li>
                        <li>
                            <a >Singapore</a>
                        </li>
                    </ol>
                </div>
            </div>
            {/* content */}
            <div className='main-section py-5'>
                <div className='container'>
                    <div className='row g-3'>
                        <div className='col-lg-9 shadow p-4 mb-5 bg-body rounded'>

                            {/* study canada */}
                            <div className='pb-3'>
                                <h3 className='mb-3'>Study in Singapore</h3>
                                <p className='fs-6'>If you want to study abroad, Singapore would be your best bet. There is no exaggeration in saying that international studies in Singapore provide some of the best opportunities in the world because the top priority of the citizens and the ministry of education of the country is education. Read along to know more.</p>
                            </div>



                            {/* benefits */}
                            <div className='pb-3'>
                                <h3 className='mb-3'>Benefits of Studying in Singapore</h3>
                                <ol>
                                    <li>  Relatively low cost of living and studying especially compared to western countries.</li>
                                    <li>Singapore is a developed economy with superior geographical location. </li>
                                    <li> Singapore universities are some of the most-highly and internationally recognized.</li>
                                    <li> Singapore is known for its academic excellence around the world.</li>
                                    <li> Singapore is a leading industrial centre with a lot of
                                        multinationals having their Asia headquarters in Singapore.</li>
                                    <li>Singapore being in Asia has a socially tolerant, multi-cultural environment.
                                    </li>
                                    <li>A sound legal system with convenient transportation makes Singapore an attractive destination.</li>
                                    <li> A Singapore degree holds high value amongst the employers worldwide.
                                    </li>

                                </ol>
                            </div>


                            {/* intake */}
                            <div className='pb-3'>
                                <h3 className='mb-3'>Intakes in Singapore </h3>
                                <p>There are three intakes in Singapore for international students:</p>
                                <ul>
                                    <li><b>Fall Intake:</b>August/September</li>
                                    <li><b>Spring Intake:</b>January/February</li>
                                    <li><b>Summer Intake:</b>July</li>
                                </ul>
                            </div>
                            {/* university */}
                            <div className='pb-3'>
                                <h3 className='mb-3'>Top Universities in Singapore</h3>
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
                                                <td>26</td>
                                                <td>National University of Singapore</td>

                                            </tr>
                                            <tr>
                                                <th scope="row">2</th>
                                                <td>27</td>
                                                <td>Nanyang Technological University</td>

                                            </tr>
                                            <tr>
                                                <th scope="row">3</th>
                                                <td>46</td>
                                                <td>Singapore University of Technology & Design</td>

                                            </tr>


                                            <tr>
                                                <th scope="row">4</th>
                                                <td>111</td>
                                                <td>Singapore Management University</td>

                                            </tr>
                                            <tr>
                                                <th scope="row">5</th>
                                                <td>126</td>
                                                <td>Singapore University of Social Sciences</td>

                                            </tr>
                                            <tr>
                                                <th scope="row">6</th>
                                                <td>140</td>
                                                <td>LASALLE College of Arts</td>

                                            </tr>
                                            <tr>
                                                <th scope="row">7</th>
                                                <td>149</td>
                                                <td>Nanyang Academy of Fine Arts</td>

                                            </tr>
                                            <tr>
                                                <th scope="row">8</th>
                                                <td>170</td>
                                                <td>National Institute of Education</td>

                                            </tr>
                                            <tr>
                                                <th scope="row">9</th>
                                                <td>230</td>
                                                <td>S.Rajaratnam School of International Studies</td>

                                            </tr>
                                            <tr>
                                                <th scope="row">10</th>
                                                <td>235</td>
                                                <td>Singapore Institute of Technology</td>
                                            </tr>
                                           
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            {/*Cost of Study in singapore */}
                            <div className='pb-3'>
                                <h3 className='mb-3'>Cost of Study in Singapore</h3>
                                <ul>                           
                                    <li>Bachelors - 10,000 to 20,000 SGD</li>                          
                                    <li>Masters (MS/MBA) - 35,000 to 45,000 SGD</li>
                                </ul>
                            </div>
                            {/* courses */}
                            <div className='pb-3'>
                                <h3 className='mb-3'>Top Courses to Study in Singapore</h3>
                                <ol className=' '>
                                    <li>Marine Biology</li>
                                    <li>Business and Management </li>
                                    <li>Banking and finance </li>
                                    <li>IT and Computing</li>
                                    <li>Engineering </li>
                                    <li>Tourism and Hospitality </li>
                                    <li>Architecture</li>
                                    <li>Medicine</li>
                                    <li>Law</li>
                                </ol>
                            </div>

                         
                            {/* document */}
                            <div className='pb-3'>
                                <h3 className='mb-3'>Canada Student Visa Requirements </h3>
                                <p>Check the requirements for Canada student visa application.</p>
                                <ul>
                                    <li>Valid Passport</li>
                                    <li>ID Card</li>
                                    <li>Photographs (Passport-size) </li>
                                    <li>Medical Certificate</li>
                                    <li>Approval Letter from the Indian Government</li>
                                    <li>Birth Certificate</li>
                                    <li>Academic Certificates</li>
                                    <li>Proof of Funds</li>
                                   
                                </ul>
                            </div>

                            {/* how to apply */}
                            <div className='pb-3'>
                                <h3 className='mb-3'>How to Apply for a Singapore Student Visa?</h3>
                                <p>Step 1: Check your eligibility for a Singapore student visa.</p>
                                <p>Step 2: Arrange the checklist of documents.</p>
                                <p>Step 3: Apply for the visa online.</p>
                                <p>Step 4: Wait for the status.
                                </p>
                                <p>Step 5:  Fly to study in Singapore.</p>
                            </div>

                            {/* process time */}
                            <div className='pb-3'>
                                <h3 className='mb-3'>Processing Time for a Singapore Student Visa</h3>
                                <p>Singapore study visa applications are usually processed swiftly. In most cases, if you have complied with all the Singapore study visa requirements, you may get your visa within 15 days to a month. However, sometimes the immigration officers may need more information.</p>

                            </div>
                        </div>



                        <div className='col-lg-3 '>
                            <div className='border py-4 mb-3 fixtext'>
                                <h3 className='text-center fw-bold text-white'>SINGAPORE</h3>

                            </div>
                            <div className="list-group mb-4 bg-primary">
                                <a href="/usastudy" className="list-group-item list-group-item-action py-3 " aria-current="true">
                                    USA Study
                                </a>
                                <a href="/ukstudy" className="list-group-item list-group-item-action py-3">UK Study</a>
                                <a href="/australiastudy" className="list-group-item list-group-item-action py-3">Australia Study</a>
                                <a href="/newzealandstudy" className="list-group-item list-group-item-action py-3">New Zealand Study</a>
                                <a href="/canadastudy" className="list-group-item list-group-item-action py-3 ">Canada Study</a>
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

export default Singaporestudy
