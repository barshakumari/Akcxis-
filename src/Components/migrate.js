import React from 'react'
import img1 from "../Components/images/migrate1.jpg"
import canada from "./images/canada.png"
import australia from "./images/australia.png"
import uk from "./images/uk.png"
import us from "./images/us.png"
import uae from "./images/uae.png"
import germany from './images/Germany.png'
import step1 from './images/step2.png'
import "./migrate.css"
import { Link } from 'react-router-dom'
import Modal from './modal'
import { BsCheck2Square } from 'react-icons/bs'
import Form from './form'
const Migrate = () => {
  return (
    <>
      {/* section28 */}
      <div className='section28 '>
        <img src={img1} alt="" className='img-fluid w-100 bg-img' />
        <div className='migrate1'>
          <h1 className='fw-bold text-center text-light display-2'>Migrate/PR</h1>
        </div>
        {/* <div className='position-sticy end-0 fix-1'>
          <Form />
        </div> */}
      </div>

      {/* go to home page */}
      <div className='direct py-1 d-flex justify-content-center align-items-center '>
        <div className='d-flex justify-content-between align-items-center'>
          <Link to="/" className='text-dark fw-semibold border-end border-white pe-3 text-decoration-none fs-6'>Home</Link>
          <Modal title="Book an Appointment" className="ms-1 fw-semibold fs-6" />
        </div>
      </div>

      {/* maigrate-heading */}
      <div className='migrate-heading py-5'>
        <div className='container'>
          <div className='heading-title1'>
            <h1>NEW BEGINNINGS</h1>
          </div>
          <h5 className=' fw-semibold text-uppercase mb-3'>SETTLE ABROAD</h5>
          <p className=''>Looking to gain new experiences and build a better future for themselves and their families, more and more young adults are choosing to migrate overseas for study, work or to settle abroad. According to UN, India had the largest diaspora population in the world with nearly 18 million people from the country living outside their homeland in 2020. As many as 1,63,370 Indians renounced their citizenship to become citizens of other countries in 2021, according to the government data.</p>
        </div>
      </div>

      {/* migrate benefits */}
      <div className='migrate-benefit bg-light py-4'>
        <div className='container'>
          <div className="cardMain">
            <Modal title="Apply Now" className="ms-1 fw-semibold fs-5" />
          </div>
          <div className='heading-title1'>
            <h1>EXPAND YOUR REACH</h1>
          </div>
          <h5 className=' fw-semibold text-uppercase mb-3'>Benefits of Migrating</h5>
          <p className=''>Settling abroad can be a life changing experience. Yet, most people who choose to relocate, do so to gain an opportunity for their growth, both socially and economically. The most popular reasons, why people choose to migrate are:</p>

          <ul>
            <li>Improved job prospects and higher salaries</li>
            <li>More stable political environment</li>
            <li>Multicultural Environment</li>
            <li>Business Opportunities</li>
            <li>Superior and free healthcare</li>
            <li>Free education for children</li>
            <li>International Passport</li>
            <li>Better Growth Opportunities </li>
          </ul>
        </div>
      </div>
      {/* how migrate */}
      <div className='migrate-how py-5'>
        <div className='container'>
          <div className='heading-title1'>
            <h1>FIND THE RIGHT SOLUTION</h1>
          </div>
          <h5 className=' fw-semibold text-uppercase  mb-3 '>HOW TO MIGRATE?</h5>
          <p>Depending on the countries immigration policies, a person can apply for direct Permanent Residency (PR), if he/she fulfils the required criteria. If not, an applicant can choose any one of the following pathways which may eventually allow the applicant to stay on in the country and become eligible to apply for different immigration pathways of that country.</p>
          <ul>
            <li><b>Study -</b> Most countries allow a student to extend his/her stay after completing the course for post study work options.</li>
            <li><b>Work pathway -</b> many countries have a skill in demand list to fill their labour shortage. An applicant can apply for work permit under the listed category.</li>
            <li><b>Investor or Business pathway -</b> Some countries allow you to invest in a business or property as a pathway to citizenship.</li>
          </ul>
          <p>The criteria to apply under any program varies from country to country and needs to be carefully matched with the applicant's profile, before an applicant shortlists and finalizes the right pathway.</p>

        </div>
      </div>
      {/* section30 */}
      <div className="section30 py-5 bg-light">
        <div className="container">
          <div className='heading-title1'>
            <h1>CITIZEN IN THE WORLD</h1>
          </div>
          <h5 className=' fw-semibold text-uppercase  mb-3'>TOP COUNTRIES TO MIGRATE</h5>
          <p className=' '>Canada with its easy immigration pathways and appealing work opportunities, has become one of the most popular destinations over the last few years for Indian migrants. This is closely followed by the US, Australia and the UK, in particularly for Indian students. Lately, Germany has also slowly gained grounds as more and more Indians are choosing Germany for work and study.</p>
          <div className='countryimg1 d-flex justify-content-evenly align-items-center mt-4'>
            <div className='box border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center '>
                <img src={canada} alt='' className='img-fluid w-50 pt-3' />
              </div>
              <h6 className='text-center fw-bold '>CANADA</h6>
            </div>
            <div className='box  border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center'>
                <img src={us} alt='' className='img-fluid w-50 pt-3' />
              </div>
              <h6 className='text-center fw-bold'>USA</h6>
            </div>
            <div className='box  border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center'>
                <img src={australia} alt='' className='img-fluid w-50 pt-3' />
              </div>
              <h6 className='text-center fw-bold'>AUSTRALIA</h6>
            </div>
          </div>
          <div className='countryimg1 d-flex justify-content-evenly align-items-center '>
            <div className='box  border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center'>
                <img src={uk} alt='' className='img-fluid w-50 pt-3' />
              </div>
              <h6 className='text-center fw-bold'>UK</h6>
            </div>
            <div className='box border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center '>
                <img src={germany} alt='' className='img-fluid w-50 pt-3' />
              </div>
              <h6 className='text-center fw-bold'>GERMANY</h6>
            </div>
            <div className='box border-dark border-opacity-25 rounded-3 shadow-lg'>
              <div className='d-flex justify-content-center '>
                <img src={uae} alt='' className='img-fluid w-50 pt-3' />
              </div>
              <h6 className='text-center fw-bold'>UAE</h6>
            </div>
          </div>
        </div>
      </div>
      {/* section29 */}
      <div className='migrate-requirement py-4 '>
        <div className='container'>
          <div className='heading-title1'>
            <h1>Basic Requirements</h1>
          </div>
          <p className=' mt-4'><BsCheck2Square className=' fs-5' />&nbsp;&nbsp;Valid passport </p>
          <p className=' '><BsCheck2Square className=' fs-5' />&nbsp;&nbsp;Proof of educational qualifications </p>
          <p className=' '><BsCheck2Square className=' fs-5 ' />&nbsp;&nbsp;Standardized Tests (like IELTS, PTE etc.) </p>
          <p className=' '><BsCheck2Square className=' fs-5 ' />&nbsp;&nbsp;Certificates of Medical Fitness </p>
          <p className=' '><BsCheck2Square className=' fs-5 ' />&nbsp;&nbsp;Police Clearance Certificate </p>
          <p className=' '><BsCheck2Square className=' fs-5 ' />&nbsp;&nbsp;Work Experience (if applicable) </p>
          <p className=' '><BsCheck2Square className=' fs-5 ' />&nbsp;&nbsp;Job Offer (if applicable)</p>
          <p className=' '><BsCheck2Square className=' fs-5 ' />&nbsp;&nbsp;Marriage Certificate </p>
          <p className=' '><BsCheck2Square className=' fs-5 ' />&nbsp;&nbsp;Proof of Funds</p>
        </div>
      </div>
      <div className='migrate-apply py-4 bg-light'>
        <div className='container'>
          <div className='heading-title1'>
            <h1>STEPS TO APPLY</h1>
          </div>
          <h5 className=' fw-semibold text-uppercase text-center mb-3'>SETTLING ABROAD JOURNEY WITH Akcxis Immigrations</h5>
          <div className='d-flex justify-content-center'>
            <img src={step1} alt='' className='img-fluid ' />
          </div>
          <p className=' mt-3'>At Akcxis Immigrations, our expert counsellors will help you identify the country and the pathway which is the right fit for you. We will guide you step-by-step and make the entire end-to-end process, smooth and hassle free for you. We believe your success is our success.</p>
        </div>
      </div>



      {/* section31 */}
      <div className='section31 py-5'>
        <div className='container'>
          <h5 className=' fw-semibold '>FAQs</h5>
          <div className="accordion my-3" id="accordionExample">
            <div className="accordion-item border border-dark">
              <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  Q: Which country is the easiest to get a PR?
                </button>
              </h2>
              <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  A: European countries like Malta, Portugal, Cyprus, Greece have immigration policies which makes it easier to get PR. Canada also serves as one of the leading countries for Indians for easy PR.
                </div>
              </div>
            </div>
            <div className="accordion-item mt-3 border border-dark">
              <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  Q: How long does it take to migrate?
                </button>
              </h2>
              <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  A: The time taken to migrate to a country depends on the immigration pathway and the country’s immigration policies. An average period of 9 - 18 months should be kept in mind while opting for migration.
                </div>
              </div>
            </div>
            <div className="accordion-item mt-3 border border-dark">
              <h2 className="accordion-header  " id="headingThree">
                <button className="accordion-button collapsed btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  Q: What are the benefits if I get permanent resident card?
                </button>
              </h2>
              <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  A: Depending on the country, there can be several benefits of obtaining a Permanent Residency of a country. These benefits could be in the form of: <br /> <br />
                  <b>.</b> Free healthcare for you and your family <br />
                  <b>.</b> Free education for children  <br />
                  <b>.</b> Domestic tuition fee at University/college level for children <br />
                  <b>.</b> Benefits of Social Services <br />
                  <b>.</b> You can move and work anywhere within the country freely <br />
                  <b>.</b> It is a pathway for that country's citizenship <br />

                </div>
              </div>
            </div>
            <div className="accordion-item mt-3 border border-dark">
              <h2 className="accordion-header " id="headingFour">
                <button className="accordion-button collapsed btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  Q: Which country allows family migration?
                </button>
              </h2>
              <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  A: Almost all countries have family immigration programs. Depending on the visa you apply, your spouse and children can get a residential status or be just allowed on visitor visa. The UAE, USA, Canada, UK, Australia, Malta, Portugal, Greece, Spain, New Zealand are some of the top choices for Indians seeking to migrate with their families.
                </div>
              </div>
            </div>

            <div className="accordion-item mt-3 border border-dark">
              <h2 className="accordion-header " id="headingFive">
                <button className="accordion-button collapsed btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                  Q: Does a Master's degree benefit my chances for PR?
                </button>
              </h2>
              <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  A: Having a Master's degree improves your skill assessment or points when seeking to migrate. Educational qualification reflects on the contribution you can make to a country's economy and thus, benefits your chances of PR. <br /><br />
                  If you have a good command over a native language of the destination, e.g., French in case of Canada; it will contribute in you getting better job opportunities and also increase chances of visa success.
                </div>
              </div>
            </div>

            <div className="accordion-item mt-3 border border-dark">
              <h2 className="accordion-header " id="headingSix">
                <button className="accordion-button collapsed btn btn-warning" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                  Q: How much money do you need to move abroad?
                </button>
              </h2>
              <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                  A: There is no minimum amount for migrating abroad. The money needed will depend on the choice of destination country and the pathway opted to migrate there. It is suggested to keep a minimum budget of $5000-$1000 USD per person to move abroad. <br />

                  You must review some key areas to calculate the right budget for you.<br /><br />
                  <b>.</b>  Cost of Living<br />
                  <b>.</b> Lifestyle you desire<br />
                  <b>.</b> Healthcare and Insurance Costs<br />
                  <b>.</b> Proof of Funds required for Visa<br />
                  <b>.</b>  Emergency Fund<br /><br />
                  A minimum of 6 months funds should ideally be there, considering all the factors above while planning to move abroad.
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  )
}

export default Migrate
