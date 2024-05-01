import React, { useEffect } from 'react'
import './travelhome.css'

import travellogo from '../images/travellogo.png'

import video from '../travel/images/video1.mp4'
import map from '../travel/images/travelmap.png'
import img from '../travel/images/2.png'

import usa from '../travel/images/usa.png'
import japan from '../travel/images/japan.png'
import thailand from '../travel/images/thailand.png'
import dubai from '../travel/images/dubai.png'
import south from '../travel/images/south.png'

import delhi from '../travel/images/DELHI.png'
import kerala from '../travel/images/kerala.png'
import rajasthan from '../travel/images/rajasthan.png'
import gujrat from '../travel/images/gujrat.png'
import tamilnadu from '../travel/images/tamilnadu.png'
import uttarakhand from '../travel/images/uttarakhand.png'
import hp from '../travel/images/HP.png'
import bangalore from '../travel/images/bangalore.png'

import service1 from '../travel/images/service1.png'
import service2 from '../travel/images/service2.png'
import service3 from '../travel/images/service3.png'
import service4 from '../travel/images/service4.png'
import service5 from '../travel/images/service5.png'
import service6 from '../travel/images/service6.png'

import AOS from "aos";
import "aos/dist/aos.css";
const Travelhome = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            {/* navbar */}
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src={travellogo} className='img-fluid' />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link  me-2" aria-current="page" href="#about">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  me-2" href="#service">Things We Do</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link me-2" href="#liners">Cruise Liners</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link me-2" href="#india">Incredible India</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#international">Voyages International</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className='travel-content'>
                {/* travel section1 */}
                <div className='travel-section1'>
                    <video muted autoPlay controls="false" className='video1'>
                        <source src={video} type="video/mp4" />
                    </video>
                </div>

                {/* travel section2 */}
                <div id='about' className='travel-section2 py-5 bg-light'>
                    <div className='container'>
                        <div className='heading-title' data-aos="zoom-in" >
                            <h1 >About Us</h1>
                        </div>
                        <div className='about-content' data-aos="fade-up" data-aos-duration="3000">
                            <p>Welcome to Akcxis Travels, where every journey is a story waiting to be told. With our expertise and dedication to personalized service, we're here to turn your travel dreams into unforgettable adventures. Whether you're seeking luxury retreats, cultural explorations, or adrenaline-filled escapades, we've got you covered.
                            </p>
                            <p>From the moment you reach out to us, until you return home with memories to cherish, we'll take care of every detail. So, why wait? Let's embark on your next unforgettable journey together. Choose Akcxis Travels and let the adventure begin.</p>
                        </div>
                        <div className='about-map' data-aos="fade-up" data-aos-duration="3000">
                            <div className='d-flex justify-content-center'>
                                <img src={map} className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>

                {/* travel section3 */}
                <div id='service' className='travel-service py-5'>
                    <div className='container'>
                        <div className='heading-title' data-aos="zoom-in">
                            <h1>Things We Do</h1>
                        </div>
                        <div className='row gy-4'>
                            <div className='col-lg-4 col-md-6' data-aos="zoom-in" data-aos-duration="1000">
                                <img alt='' src={service1} className='img-fluid' />
                            </div>
                            <div className='col-lg-4 col-md-6' data-aos="zoom-in" data-aos-duration="1000">
                                <img alt='' src={service2} className='img-fluid' />
                            </div>
                            <div className='col-lg-4 col-md-6' data-aos="zoom-in" data-aos-duration="1000">
                                <img alt='' src={service3} className='img-fluid' />
                            </div>
                            <div className='col-lg-4 col-md-6' data-aos="zoom-in" data-aos-duration="1000">
                                <img alt='' src={service4} className='img-fluid' />
                            </div>
                            <div className='col-lg-4 col-md-6' data-aos="zoom-in" data-aos-duration="1000">
                                <img alt='' src={service5} className='img-fluid' />
                            </div>
                            <div className='col-lg-4 col-md-6' data-aos="zoom-in" data-aos-duration="1000">
                                <img alt='' src={service6} className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cruise Liners */}
                <div id='liners' className='Cruise bg-light py-5'>
                    <div className='heading-title' data-aos="zoom-in">
                        <h1>Cruise Liners</h1>
                    </div>
                    <img src={img} className='img-fluid' data-aos="fade-up"
                        data-aos-duration="1000" />
                </div>

                {/* India eye break */}
                <div id='india' className='india py-5'>
                    <div className='container'>
                        <div className='heading-title' data-aos="zoom-in">
                            <h1>Incredible India</h1>
                        </div>
                        <div className='d-flex justify-content-center align-items-center mb-3' data-aos="fade-up"
                            data-aos-duration="3000">
                            <div>
                                <img src={delhi} className='img-fluid' />
                            </div>
                            <div>
                                <img src={gujrat} className='img-fluid' />
                            </div>
                            <div>
                                <img src={bangalore} className='img-fluid' />
                            </div>
                            <div>
                                <img src={hp} className='img-fluid' />
                            </div>
                        </div>
                        <div className='d-flex justify-content-center align-items-center' data-aos="fade-up"
                            data-aos-duration="3000">
                            <div>
                                <img src={tamilnadu} className='img-fluid' />
                            </div>
                            <div>
                                <img src={rajasthan} className='img-fluid' />
                            </div>
                            <div>
                                <img src={uttarakhand} className='img-fluid' />
                            </div>
                            <div>
                                <img src={kerala} className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>

                {/* international */}
                <div id='international' className='india py-5 bg-light'>
                    <div className='container'>
                        <div className='heading-title' data-aos="zoom-in">
                            <h1>Voyages International</h1>
                        </div>
                        <div className='d-flex justify-content-evenly align-items-center mb-4' data-aos="zoom-in" data-aos-duration="1000">
                            <div className=' '>
                                <img width={400} src={usa} className='img-fluid' />
                            </div>
                            <div className=''>
                                <img width={400} src={japan} className='img-fluid' />
                            </div>
                            <div className=' '>
                                <img width={400} src={thailand} className='img-fluid' />
                            </div>

                        </div>
                        <div className='d-flex justify-content-evenly align-items-center mt-3 px-5 mx-5' data-aos="zoom-in" data-aos-duration="1000">
                            <div className=' '>
                                <img src={dubai} className='img-fluid' />
                            </div>
                            <div className=''>
                                <img src={south} className='img-fluid' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Travelhome
