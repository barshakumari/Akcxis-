import React from 'react'
import { FiPhone } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import { ImClock } from 'react-icons/im'
import poland from '../linkImage/poland.png'
const PolandWork = () => {
  return (
    <>
      {/*Poland*/}
      <div className="PTE2">
        <img src={poland} alt="" className='img-fluid w-100' />
      </div>

      <div className='heading-linking'>
                <div className='container'>
                    <ol>
                        <li>
                            <a href='/'>Home</a>
                        </li>
                        <li>
                            <a href='/work'>Work</a>
                        </li>
                        <li>
                            <a >Poland</a>
                        </li>
                    </ol>
                </div>
            </div>
      {/* content */}
      <div className='main-section py-5'>
        <div className='container'>
          <div className='row g-3'>
            <div className='col-lg-9 shadow p-4 mb-5 bg-body rounded'>


              {/*Poland work visa*/}
              <div className='pb-3'>
                <h3 className='mb-3'>Poland Work Visa?</h3>
                <p>Everyone who is not an EU/EEA or Swiss citizen needs a visa to work in Poland. If you are an EU/EEA/Swiss citizen and want to work in Poland for longer than three months, you only have to register your stay in a local registration office. Registering your stay is not a visa application process; it is more of a notifying method to let Polish authorities know that you would like to stay and work in Poland for longer.</p>
              </div>




              {/* requirements  */}
              <div className='pb-3'>
                <h3 className='mb-3'>Poland Work Visa Requirements </h3>
                <ul>
                  <li>Valid passport</li>
                  <li>Visa application form</li>
                  <li>Coloured photos of yourself</li>
                  <li>Flight itinerary</li>
                  <li>Proof of travel health insurance</li>
                  <li>Proof of accommodation</li>
                  <li>Original and copied version of the work permit</li>
                  <li>Employment letter</li>
                  <li>Work experience certificate or CV</li>
                  <li>Police clearance certificate</li>
                </ul>
              </div>

              {/*  Benefits */}
              <div className='pb-3'>
                <h3 className='mb-3'>Benefits of Poland Work Visa </h3>
                <ul>
                  <li>Legally work in Poland</li>
                  <li>Legalize your stay in the country</li>
                  <li>Do the work defined in the work permit</li>
                  <li>Sign a work contract with your employer</li>
                </ul>
              </div>
              {/* How to get  */}
              {/* <div className='pb-3'>
                <h3 className='mb-3'>How to Apply for Poland Work Visa</h3>
                <p className='fw-bold'>Step 1: Find a Job in Belgium</p>
                <p>As the first step in the process, you naturally need to have a job. You can look for work online in Belgian job portals. EURES, the European Job Mobility Portal, is a great place to start. After securing a job, your employer must provide you with a work contract in Belgium before you can apply for the work permit.</p>

                <p className='fw-bold'>Step 2: Apply for the Work Permit</p>
                <p>After you have been employed, you have the right to apply for a work permit. You can apply personally at the Belgium embassy or consulate in your home country, or your employer can apply for you in their local residence authority.</p>

                <p className='fw-bold'>Step 3: Apply for a Work Visa</p>
                <p>The work permit allows you to live and work in Belgium, but you will need a D visa to enter. You need to apply for a long-stay visa before you move to Belgium, while your employer applies for your work permit to the immigration office in Belgium.</p>

                <p className='fw-bold'>Step 4: Travel to Belgium</p>
                <p>Once you get the job and your long-stay visa, you can travel to Belgium and visit the local town hall to receive your work and residence permit. Then, after living in Belgium for four to five years, you will have the right to reside in Belgium permanently.</p>

              </div> */}
              {/* process time */}
              <div className='pb-3'>
                <h3 className='mb-3'>Processing Time for a Poland Work Visa</h3>
                <p>The processing time for Poland work permits can take anywhere from 6 – 12 weeks</p>
              </div>
            </div>

            <div className='col-lg-3 '>
              <div className='border py-4 mb-3 fixtext'>
                <h3 className='text-center fw-bold text-white'>Poland Work Visa</h3>

              </div>
              <div class="list-group mb-4 bg-primary">
                <a href="/UkWork" class="list-group-item list-group-item-action py-3">UK </a>
                <a href="/UsaWork" class="list-group-item list-group-item-action py-3 ">USA</a>
                <a href="/AusWork" class="list-group-item list-group-item-action py-3">Australia </a>
                <a href="/CanadaWork" class="list-group-item list-group-item-action py-3 ">Canada </a>
                <a href="/NzWork" class="list-group-item list-group-item-action py-3">New Zealand </a>
                <a href="/SingaporeWork" class="list-group-item list-group-item-action py-3 ">Singapore </a>
                <a href="/GermanyWork" class="list-group-item list-group-item-action py-3 ">Germany </a>
                <a href="/maltaWork" class="list-group-item list-group-item-action py-3 ">Malta </a>
                <a href="/franceWork" class="list-group-item list-group-item-action py-3 ">France</a>
                <a href="/belgiumWork" class="list-group-item list-group-item-action py-3 ">Belgium </a>



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

export default PolandWork
