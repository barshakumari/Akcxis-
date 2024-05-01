import React from 'react'
import australiastudy from '../Components/linkImage/australiastudy.png'
import { FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { ImClock } from 'react-icons/im'
import "./pte.css"
import { Link } from 'react-router-dom'
import Modal from './modal'
import './canadastudy.css'
const Australiastudy = () => {
  return (
    <>
      {/* PTE2 */}
      <div className="PTE2">
        <img src={australiastudy} alt="" className='img-fluid w-100' />
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
                <h3 className='mb-3'>Study in Australia</h3>
                <p className='fs-6'>Australia is counted among the most popular destinations for studying abroad for students from all over the world. Australia is home to some of the best universities and student cities in the world. They provide excellent academic standards combined with cutting-edge research infrastructure leading to the best post-study work opportunities and degrees that are respected all over the world. In terms of universities and courses, Australia offers a diverse selection to meet the interests of each student.</p>
              </div>

              {/* benefits */}
              <div className='pb-3'>
                <h3 className='mb-3'>Benefits of Studying in Australia</h3>
                <ol>
                  <li> Australia is amongst the most popular study destination for
                    international students because of it's safe and welcoming
                    environment.
                  </li>
                  <li> 38 of Australian Universities rank amongst the QS World
                    University Rankings.
                  </li>
                  <li> Australia boasts of multicultural diversity and rich University
                    experience.
                  </li>
                  <li> The academic programs are career focused and designed to
                    give quality education to students.
                  </li>
                  <li> 	Australia offers post-study work visa for upto 4 years which
                    is a pathway to Australian PR.
                  </li>
                  <li>  Australia has a strong Indian alumni network.
                  </li>
                  <li> Australian degree makes an attractive resume for
                    international employers.
                  </li>
                  <li> According to QS World Graduate Employment Rankings,
                    The University of Sydney and University of Melbourne rank
                    in the top 10.
                  </li>

                </ol>

              </div>

              {/* intake */}
              <div className='pb-3'>
                <h3 className='mb-3'>Intakes in Australia </h3>
                <p>There are three intakes in Australia for international students:</p>
                <ul>
                  <li><b>Fall Intake:</b> November</li>
                  <li><b>Winter Intake:</b> February</li>
                  <li><b>Summer Intake:</b> July</li>
                </ul>
              </div>
              {/* university */}
              <div className='pb-3'>
                <h3 className='mb-3'>Group of 8 Universities in Australia</h3>
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
                        <td>30</td>
                        <td>Australian National University</td>

                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>33</td>
                        <td>University of Melbourne</td>

                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>41</td>
                        <td>University of Sydney</td>

                      </tr>

                      <tr>
                        <th scope="row">4</th>
                        <td>45</td>
                        <td>University of New South Wales</td>

                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td>50</td>
                        <td>University of Queensland</td>

                      </tr>
                      <tr>
                        <th scope="row">6</th>
                        <td>57</td>
                        <td>Monash University</td>

                      </tr>
                      <tr>
                        <th scope="row">7</th>
                        <td>90</td>
                        <td>University of Western Australia</td>

                      </tr>
                      <tr>
                        <th scope="row">8</th>
                        <td>109</td>
                        <td>University of Adelaide</td>

                      </tr>
                  

                    </tbody>
                  </table>
                </div>
              </div>
              {/*Cost of Study in Australia */}
              <div className='pb-3'>
                <h3 className='mb-3'>Cost of Study in Australia</h3>
                <ul>
                  <li>Bachelors: 20,000 - 25,000 AUD </li>
                  <li>Masters (MS/MBA): 20,000 - 25,000 AUD</li>

                </ul>
              </div>
              {/* courses */}
              <div className='pb-3'>
                <h3 className='mb-3'>Top Courses to Study in Australia</h3>

                <ol className=' '>
                <li>Automotive</li>
                  <li>Architecture</li>
                  <li>Bachelor’s in Accounting</li>
                  <li>Computer Science Engineering </li>
                  <li>Cybersecurity</li>
                  <li>data Analyst</li>
                  <li>Nursing</li>
                  <li>Psychology</li>
                  <li>Tourism and Hospitality Management</li>
                  <li>Teaching</li>
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
                      <td>Australian National University</td>
                      <td> 	Bachelors, Masters, MBA, Btech</td>
                    </tr>
                    <tr>
                      <td>Monash University</td>
                      <td>	Bachelors, Btech, Masters, MBA</td>
                    </tr>
                    <tr>
                      <td>University of Adelaide</td>
                      <td>	Bachelors, Btech, Masters</td>
                    </tr>
                    <tr>
                      <td>University of Melbourne</td>
                      <td>
                        Bachelors, Btech, Masters
                      </td>
                    </tr>
                    <tr>
                      <td>University of New South Wales</td>
                      <td>	Bachelors, Btech, Masters</td>
                    </tr>
                    <tr>
                      <td>University of Queensland:</td>
                      <td>Bachelors, Masters, MBA</td>
                    </tr>
                    <tr>
                      <td>University of Sydney</td>
                      <td>	Bachelors, Btech, Masters</td>
                    </tr>
                    <tr>
                      <td>University of Technology Sydney</td>
                      <td>	Masters, MBA</td>
                    </tr>
                    <tr>
                      <td>University of Western Australia</td>
                      <td>Bachelors, Btech, Masters, MBA</td>
                    </tr>
                    <tr>
                      <td>University of Wollongong</td>
                      <td>Masters, MBA</td>
                    </tr>
                    <tr>
                      <td>Australian Graduate School of Management</td>
                      <td>	MBA</td>
                    </tr>
                    <tr>
                      <td>RMIT University</td>
                      <td>	Btech</td>
                    </tr>
                    <tr>
                      <td>Macquarie University</td>
                      <td>	MBA</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* document */}
              <div className='pb-3'>
                <h3 className='mb-3'>Australia Student Visa Requirements </h3>
                <p>Check the requirements for Australia student visa application.</p>
                <ul>
                  <li>Proof of English Proficiency</li>
                  <li>Letter of Offer</li>
                  <li>Confirmation of Enrolment (CoE) </li>
                  <li>Genuine Temporary Entrant (GTE) Requirement</li>
                  <li>Proof of Funds</li>
                  <li>Overseas Student Health Cover (OSHC)</li>
                  <li>	Health Requirement</li>
                  <li>Character Requirement </li>

                </ul>
              </div>
              {/* how to apply */}
              <div className='pb-3'>
                <h3 className='mb-3'>How to Apply for a Australia Student Visa?</h3>
                <p> Step 1: Check your eligibility for an Australian student Visa.</p>
                <p>Step 2: Arrange the checklist of documents.</p>
                <p>Step 3: Apply for the visa online.</p>
                <p>Step 4: Wait for the status.
                </p>
                <p>
                  Step 5:  Fly to study in Australia.  </p>

              </div>

              {/* process time */}
              <div className='pb-3'>
                <h3 className='mb-3'>Processing Time for a Australia Student Visa</h3>
                <p>The processing time for an Australian Student Visa is usually four weeks. You can apply for the visa 124 days before the start of your course, and you can travel to the country 90 days before the commencement of your course. </p>
              </div>

            </div>

            <div className='col-lg-3 '>
              <div className='border py-4 mb-3 fixtext'>
                <h3 className='text-center fw-bold text-white'>Australia</h3>

              </div>
              <div class="list-group mb-4 bg-primary">
                <a href="#" class="list-group-item list-group-item-action py-3 " aria-current="true">
                  USA Study
                </a>
                <a href="/ukstudy" class="list-group-item list-group-item-action py-3">UK Study</a>
                <a href="/canadastudy" class="list-group-item list-group-item-action py-3">Canada Study</a>
                <a href="/newzealandstudy" class="list-group-item list-group-item-action py-3">New Zealand Study</a>
                <a href="/germanystudy" class="list-group-item list-group-item-action py-3 ">Germany Study</a>
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

export default Australiastudy
