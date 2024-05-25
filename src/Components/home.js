import React from 'react'
import akis1 from "./images/akix-1.png"
import akis2 from "./images/akix-2.jpg"
import akis3 from "./images/akix-3.png"
import img1 from "./images/student.avif"
import img2 from "./images/work.jpg"
import img3 from "./images/Business Visa1.avif"
import img4 from "./images/pr.avif"
import img5 from "./images/Tourist & Visitor Visa.avif"
import student from "./images/scholarship-left-1.png"
import { AiOutlineArrowRight } from 'react-icons/ai';
import trofy from "./images/akcxis trofy.png"
import map from "./images/map.png"

import building from "./images/Buildings.jpg"
import skill from "./images/t-skill.png"
// import { FaHeadset } from 'react-icons/fa';
import { Link } from "react-router-dom"

import canada from "./images/canada-flag.png"
import australia from "./images/australia-flag.png"
import newzealand from "./images/newzealand-flag.png"
import uk from "./images/uk-flag.png"
import geremany from "./images/germany-flag.png"
import us from "./images/usa-flag.png"
import singapore from "./images/singapore-flag.png"

import canadaflag from "./images/canada.png"
import australiaflag from "./images/australia.png"
import newzealandflag from "./images/newzealand.png"
import ukflag from "./images/uk.png"
import europflag from "./images/europ.png"
import usflag from "./images/us.png"
import uaeflag from "./images/uae.png"
import singaporeflag from "./images/singapore.png"


import rohan from "./images/testi1.png"
import anjna from "./images/testi2.png"
import sneha from "./images/testi3.png"
import gagan from "./images/testi4.png"
import rahul from "./images/testi5.png"
import sahera from './images/sahera.png'
import pawan from './images/pawan.png'
import mahay from './images/mahay.png'
import bikramjeet from './images/bikramjeet.png'
import mandeep from './images/mandeep.png'
import urmila from './images/urmila.png'


import { FaStar } from "react-icons/fa";
import { IoIosStarOutline } from "react-icons/io";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";

import 'aos/dist/aos.css';
import "./home.css"
import Modal from './modal'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      {/*section1 slider */}
      <div className="section1 ">
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval='3000'>
              <img src={akis1} className="d-block w-100 img1" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval='5000'>
              <img src={akis2} className="d-block w-100 img1" alt="..." />
            </div>
            <div className="carousel-item" data-bs-interval='5000'>
              <img src={akis3} className="d-block w-100 img1" alt="..." />
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* <div className="fix-1 position-sticy   end-0 ">
          <Form />
        </div> */}
      </div>
      {/* section 2 */}

      <div className='section2  fs-6 text-center fw-bolder py-2 '>
        <a href="/coaching" className='text-dark text-decoration-none'> <span className=' border-end pe-3 border-light '>IELTS </span> &nbsp;&nbsp;&nbsp;</a>
        <a href="/studyabroad" className='text-dark text-decoration-none'><span className=' border-end pe-3 border-light '>STUDY ABROAD</span>&nbsp;&nbsp;&nbsp;&nbsp;</a>
        <a href="migrate" className='text-dark text-decoration-none'><span className=' border-light  '>GLOBAL IMMIGRATION</span>&nbsp;&nbsp;&nbsp;&nbsp;</a>
      </div>

      {/* section3 */}
      <div className="section3  pt-4 pb-5 ">
        <div className="cardMain">
          <Modal title="Get in Touch" className=" fw-bold fs-5 " />
        </div>
        <div className='heading-title1'>
          <h1 className='text-center '>CHOOSE YOUR COUNTRY</h1>
        </div>
        <div className='d-flex justify-content-between align-items-center country px-0'>
          <div className='cardbox border border-dark border-opacity-25 rounded-3 shadow-lg country'>
            <div className='d-flex justify-content-center'>
              <img src={canada} alt="" className="img-fluid  w-100" />
            </div>
            <h5 className="text-center mt-2">
              <span>CANADA
                <Link to={'/CanadaPr'} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">
                  PR
                  <span className="visually-hidden">unread messages</span>
                </Link>
              </span>
            </h5>
            <ul type="disc" className='country-list'>
              <li ><a href='/canadastudy' className='lh-base'>Study Visa</a></li>
              <li><a href='/CanadaWork'>Work Visa</a></li>
              <li><a href='/canadaVisit'>Visitor Visa</a></li>
            </ul>
          </div>

          <div className="cardbox border border-dark border-opacity-25 rounded-3 shadow-lg">
            <div className='d-flex justify-content-center'>
              <img src={australia} alt="" className="img-fluid w-100 " />
            </div>
            <h5 className="  text-center mt-2">
              <span>AUSTRALIA
                <Link to={'/AusPr'} className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">
                  PR
                  <span className="visually-hidden">unread messages</span>
                </Link>
              </span>
            </h5>
            <ul type="disc" className='country-list'>
              <li><a href='/australiastudy' className=''>Study Visa</a></li>
              <li><a href='/AusWork'>Work Visa</a></li>
              <li><a href='/AusVisit'>Visitor Visa</a></li>
            </ul>
          </div>
          <div className="cardbox border border-dark border-opacity-25 rounded-3 shadow-lg">
            <div className='d-flex justify-content-center'>
              <img src={newzealand} alt="" className="img-fluid w-100" />
            </div>
            <h5 className=" text-center mt-2">
              NEW ZEALAND
            </h5>
            <ul type="disc" className='country-list'>
              <li><a href='/newzealandstudy' className=''>Study Visa</a></li>
              <li><a href='/NzWork'>Work Visa</a></li>
              <li><a href='/Nzvisit'>Visitor Visa</a></li>
            </ul>
          </div>

          <div className="cardbox border border-dark border-opacity-25 rounded-3 shadow-lg">
            <div className='d-flex justify-content-center'>
              <img src={us} alt="" className="img-fluid w-100" />
            </div>
            <h5 className="text-center mt-2">USA</h5>
            <ul type="disc" className='country-list'>
              <li><a href='/usastudy' className=''>Study Visa</a></li>
              <li><a href='/UsaWork'>Work Visa</a></li>
              <li><a href='/UsaVisit'>Visitor Visa</a></li>
            </ul>
          </div>
          <div className="cardbox border border-dark border-opacity-25 rounded-3 shadow-lg">
            <div className='d-flex justify-content-center'>
              <img src={uk} alt="" className="img-fluid w-100" />
            </div>
            <h5 className="text-center mt-2">UK</h5>
            <ul type="disc" className='country-list'>
              <li><a href='/ukstudy' className=''>Study Visa</a></li>
              <li><a href='/UkWork'>Work Visa</a></li>
              <li><a href='/UkVisitor'>Visitor Visa</a></li>
            </ul>
          </div>
          <div className="cardbox border border-dark border-opacity-25 rounded-3 shadow-lg">
            <div className='d-flex justify-content-center'>
              <img src={geremany} alt="" className="img-fluid w-100" />
            </div>
            <h5 className="  text-center mt-2 ">GERMANY</h5>
            <ul type="disc" className='country-list'>
              <li><a href='/germanystudy' className=''>Study Visa</a></li>
              <li><a href='/GermanyWork'>Work Visa</a></li>
              <li><a href='/GermanyVisit'>Visitor Visa</a></li>
            </ul>
          </div>

          <div className="cardbox border border-dark border-opacity-25 rounded-3 shadow-lg">
            <div className='d-flex justify-content-center'>
              <img src={singapore} alt="" className="img-fluid w-100" />
            </div>
            <h5 className="  text-center mt-2">SINGAPORE</h5>
            <ul type="disc" className='country-list'>
              <li><a href='/singaporestudy' className=''>Study Visa</a></li>
              <li><a href='/SingaporeWork'>Work Visa</a></li>
              <li><a href='/SingaporeVisit'>Visitor Visa</a></li>
            </ul>
          </div>
        </div>
      </div>


      {/* section4 */}

      <div className="section4 px-3 pt-4 pb-5">
        <div className="row p-0 m-0 row-cols-lg-5 ">
          <div className="col-lg-12 text-center mb-3">
            <div className='heading-title1'>
              <h1 className=' '>FEATURED SERVICES</h1>
            </div>
          </div>
          <div className="col-md-6 col-sm-12  mb-5">
            <div className="card border border-dark border-opacity-25 rounded-3 shadow-lg">
              <img src={img1} alt="" className='img-fluid' />
              <a href='/studyabroad' className='text-decoration-none'>
                <div className="card-body">
                  <div className="card-title fs-4 fw-semibold">
                    Student Visa
                  </div>
                  <p className='text-secondary'>Student visa is a form of official immigrations authorization provided by a Consulate General or an Embassy that enables you to lawfully pursue your studies.</p>
                </div>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-sm-12  mb-5">
            <div className="card border border-dark border-opacity-25 rounded-3 shadow-lg">
              <img src={img2} alt="" className='img-fluid' />
              <a href='/work' className='text-decoration-none'>
                <div className="card-body">
                  <div className="card-title fs-4 fw-semibold">
                    Work Visa
                  </div>
                  <p className='text-secondary'>Work visa is a legal imprint in your passport that grants you permission to visit, stay and work in that particular nation for a specified period of time mention in the visa.</p>
                </div>
              </a>

            </div>
          </div>
          <div className="col-md-6 col-sm-12  mb-5">
            <div className="card border border-dark border-opacity-25 rounded-3 shadow-lg">
              <img src={img4} alt="" className='img-fluid' />
              <a href='/migrate' className='text-decoration-none'>
                <div className="card-body">
                  <div className="card-title fs-4 fw-semibold">
                    PR
                  </div>
                  <p className='text-secondary'>Permanent Resident visa permits the holder to travel, work and settle in a foreign nation with his or her family. It is a path way for citizenship for that country.</p>
                </div>
              </a>

            </div>
          </div>
          <div className="col-md-6 col-sm-12  mb-5">
            <div className="card border border-dark border-opacity-25 rounded-3 shadow-lg">
              <img src={img3} alt="" className='img-fluid' />
              <a href='/career' className='text-decoration-none'>
                <div className="card-body">
                  <div className="card-title fs-4 fw-semibold">
                    Business Visa
                  </div>
                  <p className='text-secondary'>Business visa is a sort of travel authorisation that enables a person to go to another country for a specified amount of time to conduct business there.</p>
                </div>
              </a>

            </div>
          </div>
          <div className="col-md-6 col-sm-12  mb-5">
            <div className="card border border-dark border-opacity-25 rounded-3 shadow-lg">
              <img src={img5} alt="" className='img-fluid' />
              <a href='/visit' className='text-decoration-none'>
                <div className="card-body">
                  <div className="card-title fs-4 fw-semibold">
                    Visitor Visa
                  </div>
                  <p className='text-secondary'>Visitor visa is a temporary visa that permits the holder to travel to and remain in a foreign nation solely for tourist and leisure purposes.</p>
                </div>
              </a>

            </div>
          </div>
        </div>
      </div>


      {/* section5 */}
      <div className="section5 bg-dark ">
        <div className="container ">
          <div className="row ">
            <div className="col-lg-6 ">
              <img src={student} alt="" className="img-fluid" />
            </div>
            <div className="col-lg-6 mt-5 text-light d-flex justify-content-center align-items-center" >
              <div>
                <h4 className=" lh-sm text-center ">
                  Affiliated with 300+ Universities across the Globe
                </h4>
                <p className="mt-4">
                  Studying abroad is about experiencing a foreign country,
                  developing new skills being self reliant and enhancing your
                  networks.
                </p>
                <div className="row py-3 text-center ">
                  <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <img src={canadaflag} alt="" className="img-fluid img-bounce" />
                    <h6>Canada</h6>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <img src={australiaflag} alt="" className="img-fluid img-bounce" />
                    <h6>Australia</h6>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <img src={newzealandflag} alt="" className="img-fluid img-bounce" />
                    <h6>New Zealand</h6>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-6">
                    <img src={ukflag} alt="" className="img-fluid img-bounce" />
                    <h6>UK</h6>
                  </div>
                </div>
                <div className="row text-center ">
                  <div className="col-lg-3 col-md-3 col-sm-6 col-6 ">
                    <img src={europflag} alt="" className="img-fluid  img-bounce" />
                    <h6>Europe</h6>
                  </div>
                  <div className="col-lg-3 col-md-3  col-sm-6 col-6 ">
                    <img src={usflag} alt="" className="img-fluid img-bounce" />
                    <h6>US</h6>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-6 ">
                    <img src={uaeflag} alt="" className="img-fluid img-bounce" />
                    <h6>UAE</h6>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-6 col-6 ">
                    <img src={singaporeflag} alt="" className="img-fluid img-bounce" />
                    <h6>Singapore</h6>
                  </div>
                </div>
                <div className="text-center">
                  <a href="studyabroad">
                    {" "}
                    <button className="btn my-5 px-4 py-3 ms-3">
                      APPLY NOW &nbsp;
                      <AiOutlineArrowRight />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* section5 */}
      <div className='section6 py-4 '>
        <div className='container'>
          <div className='heading-title1'>
            <h1 className=''>ABOUT AKCXIS IMMIGRATIONS</h1>
          </div>
          <div className='row '>
            <div className='col-lg-6 d-flex justify-content-center align-items-center'>
              <div>
                <h4 className='  fw-bold mb-3'>A VIDHATA GROUP VERTICAL</h4>
                <h5 className='fw-semibold  '>Building Your Dreams With Genuine Passion</h5>
                <p className='text-secondary py-4 '>Our primary goal is to assist students, individuals, families, entrepreneurs and investors from all over the world to relocate and succeed in the country of their choice. We are dedicated to establish the path for you and your families future.</p>
                <a href="about"><button className='btn  px-4 py-3'>READ MORE &nbsp;
                  <AiOutlineArrowRight /></button></a>
              </div>
            </div>
            <div className='col-lg-6 d-flex justify-content-center align-items-center'>
              <img src={trofy} alt="" className='img-fluid w-100' />
            </div>
          </div>
        </div>
      </div>

      {/* section6 */}

      <div className='section7 pt-5'>
        <div className='container'>
          <div className='heading-title1'>
            <h1 className=' '>Become a global citizen </h1>
          </div>
          <div className='row '>
            <div className='col-lg-6 d-flex justify-content-center align-items-center'>
              <div>
                <h5 className='fw-semibold  text-uppercase   '>Gain a New Perspective and Enrich your Life by Moving Abroad </h5>
                <p className='text-secondary py-3 '>Moving abroad is a wonderful experience but also brings with it documentation, protocols, stress and fear. At Akcxis Immigrations we assist our customers by providing them consultation and filing services, to make their journey of settling abroad as smooth as possible.</p>
                <a href="migrate"><button className='btn  px-4 py-3'>KNOW MORE &nbsp;
                  <AiOutlineArrowRight /></button></a>
              </div>
            </div>
            <div className='col-lg-6 d-flex justify-content-center align-items-center'>
              <img src={map} alt="" className='img-fluid ' />
            </div>
          </div>
        </div>
      </div>

      {/* section7 */}
      <div className='section8'>
        <img src={building} alt="" className='img-fluid w-100 banner' />
        <div className='d-flex justify-content-evenly align-items-center detail'>
          <img src={skill} alt="" className='img-fluid' />
          <h3 className='text-light fw-bold text-center'>Get a skilled job with our expert consultancy</h3>
          <a href="work"><button className='btn btn-outline-light px-4 py-3'>APPLY NOW &nbsp;
            <AiOutlineArrowRight /></button></a>
        </div>
      </div>


      {/* section8 */}
      {/* <div className='section9 pb-4'>
        <div className='container text-center'>
          <div className='heading-title1'>
          <h1 className=''>OUR TEAM OF EXPERTS</h1>
          </div>

          <img src={team} alt="" className='img-fluid w-50 ' />
        </div>
      </div> */}

      {/* section9 */}
      <div className='section10 py-5 '>
        <div className='heading-title1'>
          <h1 className=''>TESTIMONIALS</h1>
        </div>
        <div className='container py-3'>
          <div>
            <Slider {...settings}>
              <div>
                <div className='d-flex justify-content-center'>
                  <img src={sahera} className='img-fluid ' alt='' />
                </div>
                <h4 className='text-center mt-3 fw-bold'>Sahera Thaman</h4>
                <p className='text-center text-warning fs-4'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                <p className=' text-center '> <RiDoubleQuotesL className='fs-3 mb-3 icon' />Hey everyone, Sahera Thaman here! Just wanted to share some exciting news — I've been granted my UK study visa, and I achieved a solid 7 band in IELTS! Big shoutout to Akcxis Immigrations for their incredible support and guidance throughout. They made the process smooth and stress-free. Can't wait to embark on this new adventure in the UK! <RiDoubleQuotesR className='fs-3 mt-1 icon' /></p>
              </div>
              <div>
                <div className='d-flex justify-content-center'>
                  <img src={pawan} className='img-fluid ' alt='' />
                </div>
                <h4 className='text-center mt-3 fw-bold'>Pawandeep Kaur</h4>
                <p className='text-center text-warning fs-4'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                <p className=' text-center '> <RiDoubleQuotesL className='fs-3 mb-3 icon' />"I'm thrilled to have received my Canada study visa with the help of Akcxis Immigrations. Their dedicated team, provided invaluable support throughout the process. Thanks to them, I'm now pursuing my academic dreams in Canada. Highly recommend their services!"<RiDoubleQuotesR className='fs-3 mt-1 icon' /></p>
              </div>
              <div>
                <div className='d-flex justify-content-center'>
                  <img src={anjna} className='img-fluid' alt='' />
                </div>
                <h4 className='text-center mt-3 fw-bold'>Aanjney Vig</h4>
                <p className='text-center text-warning fs-4'><FaStar /><FaStar /><FaStar /><FaStar /><IoIosStarOutline /></p>
                <p className=' text-center '><RiDoubleQuotesL className='fs-3 mb-3 icon' /> I really appreciate Akcxis Immigrations for getting my first international multi-entry tourist visa within 10 days, at the age of 48. Thank you so much for making this dream come true for me. <RiDoubleQuotesR className='fs-3 mt-1 icon' /></p>
              </div>
              <div>
                <div className='d-flex justify-content-center'>
                  <img src={bikramjeet} className='img-fluid' alt='' />
                </div>
                <h4 className='text-center mt-3 fw-bold'>Bikramjeet Singh</h4>
                <p className='text-center text-warning fs-4'><FaStar /><FaStar /><FaStar /><FaStar /><IoIosStarOutline /></p>
                <p className=' text-center '><RiDoubleQuotesL className='fs-3 mb-3 icon' /> I am incredibly grateful for the expertise and dedication of Akcxis Immigrations in successfully securing my UK spouse visa after four previous refusals. Their meticulous approach, deep understanding of immigration laws, and unwavering support were invaluable throughout the process. I highly recommend their services to anyone navigating complex visa applications.  <RiDoubleQuotesR className='fs-3 mt-1 icon' /></p>
              </div>
              <div>
                <div className='d-flex justify-content-center'>
                  <img src={mahay} className='img-fluid' alt='' />
                </div>
                <h4 className='text-center mt-3 fw-bold'>Bhupinder Singh Mahay</h4>
                <p className='text-center text-warning fs-4'><FaStar /><FaStar /><FaStar /><FaStar /><IoIosStarOutline /></p>
                <p className=' text-center '><RiDoubleQuotesL className='fs-3 mb-3 icon' />Your expertise and dedicated support were crucial to our successful Canada Tourist visas. Your proactive guidance led us seamlessly through each step. We deeply appreciate your exceptional service and invaluable counsel for my family. Thank you for opening doors to exciting new possibilities in the Canada! </p>
           
              </div>
              <div>
                <div className='d-flex justify-content-center'>
                  <img src={mandeep} className='img-fluid ' alt='' />
                </div>
                <h4 className='text-center mt-3 fw-bold'>Mandeep Kaur</h4>
                <p className='text-center text-warning fs-4'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                <p className=' text-center '> <RiDoubleQuotesL className='fs-3 mb-3 icon' />Hey everyone, it's Mandeep Kaur here. I just wanted to share some great news—I got my UK study visa with the awesome support from Akcxis Immigration! They were so helpful and made the whole process easy for me. Now, I can't wait to pursue my dreams in the UK thanks to them! <RiDoubleQuotesR className='fs-3 mt-1 icon' /></p>
              </div>

              <div>
                <div className='d-flex justify-content-center '>
                  <img src={urmila} className='img-fluid ' alt='' />
                </div>
                <h4 className='text-center mt-3 fw-bold'>Urmila</h4>
                <p className='text-center text-warning fs-4'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                <p className=' text-center'><RiDoubleQuotesL className='fs-3 mb-3 icon' /> Hello, I'm Urmila. I'm thrilled to share that I've obtained my UK study visa through Akcxis Immigration. Their team provided exceptional support and guidance throughout the process, keeping me motivated and informed every step of the way. Overall, my experience with Akcxis Immigration was outstanding! <RiDoubleQuotesR className='fs-3 mt-1 icon' /></p>
              </div>
              <div>
                <div className='d-flex justify-content-center'>
                  <img src={gagan} className='img-fluid' alt='' />
                </div>
                <h4 className='text-center mt-3 fw-bold'>Gagandeep Singh</h4>
                <p className='text-center text-warning fs-4'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
                <p className=' text-center '><RiDoubleQuotesL className='fs-3 mb-3 icon' /> Hello, I am Gagandeep Singh and I am thankful to the Akcxis Immigrations from the bottom of my heart as they helped me to get my Canadian study visa after two refusals. I had lost all hope but they were true to their word and I am going to Canada for a two year study course in the month of May. Thank you so much Akcxis Immigrations. <RiDoubleQuotesR className='fs-3 mt-1 icon' /></p>
              </div>
              <div>
                <div className='d-flex justify-content-center'>
                  <img src={rohan} width={160} className='img-fluid ' alt='' />
                </div>
                <h4 className='text-center mt-3 fw-bold'>Rahul Verma</h4>
                <p className='text-center text-warning fs-4'><FaStar /><FaStar /><FaStar /><FaStar /><IoIosStarOutline /></p>
                <p className=' text-center '><RiDoubleQuotesL className='fs-3 mb-3 icon' /> My name is Rahul Verma. Currently I am in UK. I came from a government school. All thanks to the teachers of Akcxis Immigrations who helped me to reach here by getting 6.5 bands in IELTS. The teachers are very hard working and were always there to motivate me and solve my problems.<RiDoubleQuotesR className='fs-3 mt-1 icon' /></p>
              </div>
            </Slider>
          </div>
        </div>
      </div>

    </>

  )
}

export default Home