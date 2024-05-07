import React from 'react'
import img1 from "../Components/images/about1.jpg"
import img2 from "../Components/images/about2.png"
import img4 from "../Components/images/visionimg.png"
import tropy from '../Components/images/akcxis trofy.png'
import vidhataGroup from '../Components/images/vidhata group.png'

import interwood from '../Components/images/interwood.png'
import kia from '../Components/images/kia.png'
import akcStore from '../Components/images/akc.png'
import ashoka from '../Components/images/ashoka.png'
import cc from '../Components/images/cc.png'
import excel from '../Components/images/excel.png'
import spinning from '../Components/images/spinning.png'
import akcxisSnap from '../Components/images/akcxisSnap.jpg'

import "./about.css"
import { Link } from 'react-router-dom'
import video from "./images/video.MP4"
import team from "./images/akcxis team.png"
import akcxistravel from './images/akcxistravel.png'
import akcxistech from './images/akcxistechnology.png'

// import Form from './form'
import Modal from './modal'
const About = () => {

  return (
    <>
      {/* section12 */}
      <div className='section12'>
        <img src={img1} alt="" className='img-fluid w-100 bg-img' />
        <div className='about1'>
          <h1 className='fw-bold text-center text-light display-2'>About Us</h1>
        </div>
        {/* <div className='position-sticy end-0 fix-1'>
          <Form/>
        </div> */}
      </div>

      {/* go to home page */}
      <div className='direct py-2 d-flex justify-content-center align-items-center '>
        <div className='d-flex justify-content-between align-items-center'>
          <Link to="/" className='text-dark fs-6 fw-semibold border-end border-white pe-3 text-decoration-none '>Home</Link>
          <Link to="/contact" className='text-dark fs-6 fw-semibold  ps-3 text-decoration-none'>Contact Us</Link>
        </div>
      </div>
      {/* section15 */}
      <div className="section15 py-4 bg-light">
        <div className="container">

          <div className="row g-3">

            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <div>
                <div className='heading-title2'>
                  <h1 className=''>ABOUT THE GROUP</h1>
                </div>
                <h5 className=' text-start text-uppercase fw-semibold'>50+ Years of Your Trust
                  and Recommendation
                </h5>
                <p className='mt-3'>Vidhata, since it's inception in 1971, has a rich and a trust worthy history. Our focus as a group has always been to bring human insight to business and deliver beyond expectations. Started with humble beginnings, as a typical Indian family run business, the group has over a period of time diversified and distinguished itself in infrastructure and car retail sectors. The group has spread its wings into travels, education and consultancy vertical under Akcxis. Vidhata is well known for its expertise and excellence in the service sector.
                </p>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <img src={vidhataGroup} alt="" className='img-fluid ' />
            </div>
          </div>
        </div>
      </div>

      {/* all groups */}
      <div className='container py-5'>
        <div className='row gy-5'>
          <div className='col-lg-6 d-flex justify-content-center align-items-center'>
            <img src={akcStore} className='img-fluid' />
          </div>
          <div className='col-lg-6 d-flex justify-content-center align-items-center'>
            <div>
              <div className='heading-title2'>
                <h1 className=''>Akc store</h1>
              </div>
              <h5 className=' text-start  fw-semibold text-uppercase'>Sanitary Ware & Floorings
              </h5>
              <p className='mt-3'>
                AKC is Vidhata's stellar retail chain of some of the world's leading bath fittings, modular kitchens and home accesso- ries brands. Exemplifying high end luxury and redefining customer experience, AKC is the ambassador of choice for almost 20 International brands (imported from all across the globe) and 25 National brands present across various categories of home building, construction, bath- room ware, designer kitchens etc. AKC's rich profile of products and brand associations is an epitome of the trust that Vidhata merits amongst the leading players in the industry, regionally and globally.
              </p>
            </div>
          </div>
          <div className='col-lg-6 d-flex justify-content-center align-items-center'>
            <div>
              <div className='heading-title2'>
                <h1 className=''>InterWood</h1>
              </div>
              <h5 className='text-uppercase fw-semibold  mb-3'>Plywood and Doors</h5>
              <p>The world-class Plywood & Door manufacturing unit spread over 7 acres, is located in Ludhiana, Punjab (India) having the installed capacity of about 36 million sq. ft. The manufacturing unit is equipped for making the complete range of Plywood along with the special expertise for manufacturing Fire-Retardant Plywood, Fire-Rated Doors and Engineered Decorative Premium Textured Laminated Doors. We are a proud Indian company selling under Make In India initiative, to national and international market.
              </p>
            </div>
          </div>
          <div className='col-lg-6 d-flex justify-content-center align-items-center'>
            <img src={interwood} className='img-fluid' />
          </div>
          <div className='col-lg-6 d-flex justify-content-center align-items-center'>
            <img src={ashoka} className='img-fluid' />
          </div>
          <div className='col-lg-6 d-flex justify-content-center align-items-center'>
            <div>
              <div className='heading-title2'>
                <h1 className=''>Ashoka Associates</h1>
              </div>
              <h5 className='text-uppercase fw-semibold  mb-3'>Tax and Legal Consultancy</h5>
              <p>Ashoka Associates is a renowned name in the field of taxation from last 45 years having its registered office at Civil Lines,Ludhiana. The firm specializes in consultancy of Income Tax, GST, VAT, TDS etc. Ashoka Associates is professionally managed firm working under the leadership of its Chief Consultant - Sh. Ashok Kumar Juneja - M.Com, LL.B (Gold medalist in Law, Punjab University, Chandigarh). His team includes experienced and dedicated Tax Advocates, Charted Accountants and Tax Consultants. The firm provides services like Litigation, Representation, Audit Assignments, Retainership, Statutory Compliance, Tax Planning and Configuration of Tax-Effecient Business Model.
              </p>
            </div>
          </div>
          <div className='col-lg-6 d-flex justify-content-center align-items-center'>
            <div>
              <div className='heading-title2'>
                <h1 className=''>Vidhata Kia</h1>
              </div>
              <h5 className='text-uppercase fw-semibold  mb-3'></h5>
              <p>Vidhata Kia is another State of the Art - Sales & Service Facility. Vidhata Kia is in pipeline and will soon be operational in Ludhiana in summer 2023. Kia is a maker of world-class quality vehicles. It is Korea's oldest manufacturer of automobiles. Vidhata Kia dealership inspired form its parent company aims to provide exciting and inspiring experiences that go beyond customer expectation Vidhata Kia.
              </p>
            </div>
          </div>
          <div className='col-lg-6 d-flex justify-content-center align-items-center'>
            <img src={kia} className='img-fluid' />
          </div>
          <div className='col-lg-6 d-flex justify-content-center align-items-center'>
            <img src={spinning} className='img-fluid' />
          </div>
          <div className='col-lg-6 d-flex justify-content-center align-items-center'>
            <div>
              <div className='heading-title2'>
                <h1 className=''>Spinning and Textiles</h1>
              </div>
              <h5 className='text-uppercase fw-semibold  mb-3'></h5>
              <p>With a legacy of over 40 years of yam manufacturing and over 16000 spindle capacity state of art manufacturing unit backing us - we have foryaed into manufacturing, sourcing and reselling of cotton, polyester, acrylic and fancy yarn. Located in Ludhiana, Punjab (India), We have been constantly evolving and innovating to give the best to our customers.
              </p>
            </div>
          </div>
          <div className='col-lg-6 d-flex justify-content-center align-items-center'>
            <div>
              <div className='heading-title2'>
                <h1 className=''>Excel</h1>
              </div>
              <h5 className='text-uppercase fw-semibold  mb-3'>Packaging Solutions</h5>
              <p>Providing packaging solutions in the form of Corrugated Boxes made in an engineered plant facility located in Ludhiana, Punjab (India), spread out in over 2 acres. With an experience of more than 30 years, the plant is equipped with the production capacity of about 10,000 boxes a day, serving its main clients across Punjab and Himachal Pradesh.
              </p>
            </div>
          </div>
          <div className='col-lg-6 d-flex justify-content-center align-items-center'>
            <img src={excel} className='img-fluid' />
          </div>

          <div className='col-lg-6 d-flex justify-content-center align-items-center'>
            <img src={cc} className='img-fluid' />
          </div>
          <div className='col-lg-6 d-flex justify-content-center align-items-center'>
            <div>
              <div className='heading-title2'>
                <h1 className=''>Creative Concepts</h1>
              </div>
              <h5 className='text-uppercase fw-semibold  mb-3'>Gifting Solutions</h5>
              <p>Creative concepts, as the name suggests provides creative, innovative solutions for all your gifting needs. Looking for corporate gifts or for family or to put a smile on a child's face. They have it all. In a market lacking good quality innovative products, Creative Concepts has set a benchmark in customized and personalized gifting solutions. Fastidiousness for detail, high quality and unique designs have helped them to carve a niche for themselves in the growing market of personalised products. They offer specially curated gifts and print solutions suited to all occasions and has spread their presence online through amazon. They just don't create gifts. They help you to create memories.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* section13 */}
      <div className='section13 py-5'>
        <div className='container'>
          <div className="cardMain">
            <Modal title="Get in Touch" className="ms-1 fw-bold fs-5" />
          </div>
          <div className='row'>
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <div>
                <div className='heading-title2'>
                  <h1 className=' '>Akcxis Immigrations</h1>
                </div>
                <p className=''>
                  Akcxis International Services is the Education and Consultancy vertical of Vidhata Group. Our primary goal is to assist students, individuals, families, entrepreneurs and investors from all over the world to relocate and succeed in the country of their choice. We are dedicated to establish the path for you and your families future.  We help our clients navigate through their Study Visa, Spouse Visa, Work Permit, Business Visa and Immigration Services with ease and in a hassle-free environment. We are on a mission to provide excellence.
                </p>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <img src={akcxisSnap} width={450} className='img-fluid' />
            </div>
          </div>
        </div>
      </div>

      {/* Akcxis Travel */}
      <div className="section13 py-4 bg-light">
        <div className='container'>
          <div className="row  g-3">
            <div className="col-lg-6 d-flex justify-content-center">
              <img src={akcxistravel} alt="" className='img-fluid  ' />
            </div>
            <div className="col-lg-6  d-flex justify-content-center align-items-center">
              <div>
                <div className='heading-title2'>
                  <h1 className=' '>AKCXIS TRAVELS</h1>
                </div>

                {/* <h5 className=' text-start text-white fw-semibold  text-uppercase mt-3'>We Are a Team of Experienced Consultants
              </h5> */}
                <p className=' mt-3'> Welcome to Akcxis Travels, where every journey is a story waiting to be
                  told. With our expertise and dedication to personalized service, we're here
                  to turn your travel dreams into unforgettable adventures. Whether you're
                  seeking luxury retreats, cultural explorations, or adrenaline-filled
                  escapades, we've got you covered.
                </p>
                <p className=' mt-3'>From the moment you reach out to us, until you return home with
                  memories to cherish, we'll take care of every detail. So, why wait? Let's
                  embark on your next unforgettable journey together. We are your one-stop destination management company.</p>
                <p>Akcxis Travel arranges all travel requirements, from services related to car booking to air booking or private jets, whether it's for your business trips or luxury holiday.  Choose Akcxis Travels and let the adventure begin.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* akcxis technologies */}
      <div className="section13 py-4 ">
        <div className='container'>
          <div className="row  g-3">

            <div className="col-lg-6  d-flex justify-content-center align-items-center">
              <div>
                <div className='heading-title2'>
                  <h1 className=' '>AKCXIS TECHNOLOGIES</h1>
                </div>
                {/* <h5 className=' text-start text-white fw-semibold  text-uppercase mt-3'>We Are a Team of Experienced Consultants
              </h5> */}
                <p className=' mt-3'> Akcxis Technologies is a cutting-edge digital marketing company that specializes in providing a comprehensive range of marketing solutions to businesses of all size. We understand that in today's fast-paced world, digital marketing is the key to success. That's why we leverage the latest technologies and strategies to help our clients achieve their marketing goals. From Instagram to Facebook to LinkedIn, Akcxis Technology is a one-stop tech solution for all digital marketing and web-related services.
                </p>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center">
              <img src={akcxistech} alt="" width={400} className='img-fluid  ' />
            </div>
          </div>.
        </div>
      </div>
      {/* section14 */}
      <div className="section14 py-4 bg-light">
        <div className='container'>
          <div className="row  g-3">
            <div className="col-lg-6 d-flex justify-content-center">
              <img src={img2} alt="" height={400} className='img-fluid  ' />
            </div>
            <div className="col-lg-6  d-flex justify-content-center align-items-center">
              <div>
                <div className='heading-title2'>
                  <h1 className='text-left'>WHY CHOOSE US</h1>
                </div>
                <h5 className='text-start  fw-semibold  text-uppercase  mb-3'>We Are a Team of Experienced Consultants
                </h5>
                <p className='mt-3'> We care about you and understand your needs, goals and aspirations. We have a team which specializes and is proficient in delivering a tailor made step-by-step approach to make the entire application process a hassle-free experience. We believe that your success is our success.</p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
      {/* vision */}
      <div className="VISION py-4">
        <div className="container ">

          <div className="row g-3">
            <div className="col-lg-6  d-flex justify-content-center align-items-center">
              <div>
                <div className='heading-title2'>
                  <h1 className=''>OUR VISION</h1>
                </div>
                <h5 className='mt-3 text-uppercase fw-semibold'>We Confer Wings to Your Dreams of Going Abroad</h5>
                <p className=' mt-3 '>To Globally Earn the Tag of Being Recognised as a Credible Advisory by Empowering Clients and their Families in the entire process of being a Global Citizen.</p>
              </div>
            </div>
            <div className="col-lg-6  d-flex justify-content-center align-items-center">
              <img src={img4} alt="" className='img-fluid' />
            </div>
          </div>
        </div>
      </div>

      {/* team */}
      <div className='section9 py-5'>
        <div className='container text-center'>
          <div className='heading-title2'>
            <h1 className='mb-4'>OUR TEAM OF EXPERTS</h1>
          </div>
          <img src={team} alt="" className='img-fluid w-50 ' />
        </div>
      </div>
    </>
  )
}

export default About
