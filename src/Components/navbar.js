import React, { useState } from 'react'

import { useLocation } from 'react-router-dom'
// import { Link } from "react-router-dom"
import img1 from "../Components/images/vidhata logo png.png"
import img2 from "../Components/images/AkcxisLogo1.png"
import travellogo from '../Components/images/AkcxisTravel1.png'
import { BsFillTelephoneFill } from 'react-icons/bs';
import { RiWhatsappFill } from 'react-icons/ri';
import "./nav.css"
const Navbar = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    const location = useLocation()
    console.log(location)

    const handleNavToggle = () => {
        setIsNavExpanded(!isNavExpanded);
    };
    return (
        <>
            {/* navbar1 */}
            <div className='section fixed-top bg-white' style={{ display: location.pathname === '/travelhome' ? 'none' : 'block' }}>
                <div className='navbar1 w-100 container-fluid'>
                    <div className='py-1  d-flex justify-content-between align-items-center'>
                        <div>
                            <a href='/'><img src={img1} alt="" className='img-fluid ' /></a>
                        </div>
                        <div className='text-center'>
                            <h6 className='fw-bolder text-center'><RiWhatsappFill className='' /><a href='https://api.whatsapp.com/message/A475MHX2ZGQGO1?autoload=1&app_absent=0' className='text-black text-decoration-none'> +91-98728-33369  </a>  &nbsp;<BsFillTelephoneFill className='' /><a href='tel:+91-98727-33369' className='text-black text-decoration-none'> +91-98727-33369 </a></h6>
                        </div>
                    </div>
                </div>
                <nav expanded={isNavExpanded} onToggle={handleNavToggle} className="navbar navbar-expand-lg bg-body-tertiary py-0">
                    <div className="container-fluid">
                        <a className="navbar-brand " to="#" href="/">
                            <img src={img2} alt="" className='img-fluid ' />
                        </a>
                        <a className="navbar-brand " to="#" href="/travelhome">
                            <img src={travellogo} alt="" className='img-fluid ' /></a>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse " id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto pe-4 mb-lg-0 text-uppercase fw-bold">
                                <li className="nav-item">
                                    <a className="nav-link active me-1 " aria-current="page" href="/">Home</a>
                                </li>
                                <li className="nav-item dropdown active  me-1">
                                    <a className="nav-link dropdown-toggle active   " href="/about">About us</a>
                                    <ul className="dropdown-menu dropdown-menu-white p-3">
                                        <li><a className="dropdown-item " href="/testimonial">Testimonial</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle active me-1 " href="/coaching">Coaching</a>
                                    <ul className="dropdown-menu dropdown-menu-white p-3">
                                        <li><a className="dropdown-item " href="/ielts">IELTS</a></li>
                                        <li><a className="dropdown-item " href="/Pte">PTE</a></li>
                                        <li><a className="dropdown-item " href="/Toefl">TOEFL</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown active  me-1">
                                    <a className="nav-link dropdown-toggle active " href="/studyabroad">
                                        study abroad
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-white p-3">
                                        <li><a className="dropdown-item " href="/canadastudy">Canada</a></li>
                                        <li><a className="dropdown-item " href="/usastudy">USA</a></li>
                                        <li><a className="dropdown-item " href="/ukstudy">UK</a></li>
                                        <li><a className="dropdown-item " href="/australiastudy">Australia</a></li>
                                        <li><a className="dropdown-item " href="/newzealandstudy">New Zealand</a></li>
                                        <li><a className="dropdown-item " href="/germanystudy">Germany</a></li>
                                        <li><a className="dropdown-item " href="/singaporestudy">Singapore</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown active  me-1">
                                    <a className="nav-link dropdown-toggle  active" href="work">work</a>
                                    <ul className="dropdown-menu dropdown-menu-white p-3">
                                        <li><a className="dropdown-item " href="/UsaWork">USA</a></li>
                                        <li><a className="dropdown-item " href="/CanadaWork">Canada</a></li>
                                        <li><a className="dropdown-item " href="/UkWork">UK</a></li>
                                        <li><a className="dropdown-item " href="/AusWork">Australia</a></li>
                                        <li><a className="dropdown-item " href="/maltaWork">Malta</a></li>
                                        <li><a className="dropdown-item " href="/franceWork">France</a></li>
                                        <li><a className="
                                        dropdown-item " href="/belgiumWork">Belgium</a></li>
                                        <li><a className="dropdown-item " href="/polandWork">Poland</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown active  me-1">
                                    <a className="nav-link dropdown-toggle active" href="migrate">pr</a>
                                    <ul className="dropdown-menu dropdown-menu-white p-3">
                                        <li><a className="dropdown-item " href="/CanadaPr">Canada</a></li>
                                        <li><a className="dropdown-item " href="/AusPr">Austalia</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown active  me-1">
                                    <a className="nav-link dropdown-toggle  active   " href="visit">visit</a>
                                    <ul className="dropdown-menu dropdown-menu-white p-3">
                                        <li><a className="dropdown-item " href="/AusVisit">Australia</a></li>
                                        <li><a className="dropdown-item " href="/UkVisitor">UK</a></li>
                                        <li><a className="dropdown-item " href="/UsaVisit">USA</a></li>
                                        <li><a className="dropdown-item " href="/CanadaVisit">Canada</a></li>
                                        <li><a className="dropdown-item " href="/SingaporeVisit">Singapore</a></li>
                                        <li><a className="dropdown-item " href="/NzVisit">New Zealand</a></li>
                                        <li><a className="dropdown-item " href="/GermanyVisit">Germany</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active  me-1  " href="career">career</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active  " href="contact">contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
