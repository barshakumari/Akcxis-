import React from 'react'
import anjna from "./images/testi2.png"
import sneha from "./images/testi3.png"
import gagan from "./images/testi4.png"
import sahera from './images/sahera.png'
import urmila from './images/urmila.png'
import pawan from './images/pawan.png'
import mahay from './images/mahay.png'
import bikramjeet from './images/bikramjeet.png'
import mandeep from './images/mandeep.png'
import './testimonial.css'

const Testimonial = () => {
    const handleToggleReadMore = () => {
        document.querySelectorAll(".testimonial-para")
            .forEach(para => {
                if (para) {
                    para.classList.toggle("testimonial-para")
                }
            })
    }
    return (
        <>
            <div className='section1 testimonial py-5'>
                <div className='container'>
                    <div className='heading-title1'>
                        <h1>What Our Clients Say about us</h1>
                    </div>
                    <div className='row g-3'>
                        <div className='col-lg-4  col-md-6 col-sm-12'>
                            <div className='border border-dark border-opacity-25 rounded-3 shadow-lg p-3'>
                                <div className='d-flex justify-content-center pt-3'>
                                    <img src={sahera} className='img-fluid ' alt='' />
                                </div>
                                <h4 className='text-center mt-3 fw-bold'>Sahera Thaman</h4>
                                <p className='text-center text-danger  fw-bold'>UK Study Visa</p>
                                <p className='testimonial-para'>Hey everyone, Sahera Thaman here! Just wanted to share some exciting news — I've been granted my UK study visa, and I achieved a solid 7 band in IELTS! Big shoutout to Akcxis Immigrations for their incredible support and guidance throughout. They made the process smooth and stress-free. Can't wait to embark on this new adventure in the UK! </p>
                                {/* <button type="button" onClick={() => handleToggleReadMore()} className="read-more btn btn-sm btn-info">Read more</button> */}
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12'>
                            <div className='border border-dark border-opacity-25 rounded-3 shadow-lg p-3'>
                                <div className='d-flex justify-content-center pt-3'>
                                    <img src={mahay} className='img-fluid ' alt='' />
                                </div>
                                <h4 className='text-center mt-3 fw-bold'>Bhupinder Singh Mahay</h4>
                                <p className='text-center text-danger fw-bold'>Canada Tourist visa</p>
                                <p className='testimonial-para'>Your expertise and dedicated support were crucial to our successful Canada Tourist visas. Your proactive guidance led us seamlessly through each step. We deeply appreciate your exceptional service and invaluable counsel for my family. Thank you for opening doors to exciting new possibilities in the Canada! </p>
                                {/* <button type="button" onClick={() => handleToggleReadMore()} className="read-more btn btn-sm btn-info">Read more</button> */}
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12'>
                            <div className='border border-dark border-opacity-25 rounded-3 shadow-lg p-3'>
                                <div className='d-flex justify-content-center pt-3'>
                                    <img src={pawan} className='img-fluid ' alt='' />
                                </div>
                                <h4 className='text-center mt-3 fw-bold'>Pawandeep Kaur</h4>
                                <p className='text-center text-danger  fw-bold'>Canada study visa</p>
                                <p className='testimonial-para'>"I'm thrilled to have received my Canada study visa with the help of Akcxis Immigrations. Their dedicated team, provided invaluable support throughout the process. Thanks to them, I'm now pursuing my academic dreams in Canada. Highly recommend their services!"</p>
                                {/* <button type="button" onClick={() => handleToggleReadMore()} className="read-more btn btn-sm btn-info">Read more</button> */}
                            </div>
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12 '>
                            <div className='border border-dark border-opacity-25 rounded-3 shadow-lg p-3'>
                                <div className='d-flex justify-content-center pt-3'>
                                    <img src={bikramjeet} className='img-fluid ' alt='' />
                                </div>
                                <h4 className='text-center mt-3 fw-bold'>Bikramjeet Singh</h4>
                                <p className='text-center text-danger fw-bold'>UK Spouse Visa</p>
                                <p className='testimonial-para'>I am incredibly grateful for the expertise and dedication of Akcxis Immigrations in successfully securing my UK spouse visa after four previous refusals. Their meticulous approach, deep understanding of immigration laws, and unwavering support were invaluable throughout the process. I highly recommend their services to anyone navigating complex visa applications. </p>
                                {/* <button type="button" onClick={() => handleToggleReadMore()} className="read-more btn btn-sm btn-info">Read more</button> */}
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-6 col-sm-12 '>
                            <div className='border border-dark border-opacity-25 rounded-3 shadow-lg p-3'>
                                <div className='d-flex justify-content-center pt-3'>
                                    <img src={urmila} className='img-fluid' alt='' />
                                </div>
                                <h4 className='text-center mt-3 fw-bold'>Urmila</h4>
                                <p className='text-center text-danger fw-bold'>UK study visa</p>
                                <p className='testimonial-para'>Hello, I'm Urmila. I'm thrilled to share that I've obtained my UK study visa through Akcxis Immigration. Their team provided exceptional support and guidance throughout the process, keeping me motivated and informed every step of the way. Overall, my experience with Akcxis Immigration was outstanding!</p>
                                {/* <button type="button" onClick={() => handleToggleReadMore()} className="read-more btn btn-sm btn-info">Read more</button> */}
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-6 col-sm-12 '>
                            <div className='border border-dark border-opacity-25 rounded-3 shadow-lg p-3'>
                                <div className='d-flex justify-content-center pt-3'>
                                    <img src={anjna} className='img-fluid' alt='' />
                                </div>
                                <h4 className='text-center mt-3 fw-bold'>Aanjney Vig</h4>
                                <p className='text-center text-danger fw-bold'>Singapore Tourist Visa</p>
                                <p className='testimonial-para'> I really appreciate Akcxis Immigrations for getting my first international multi-entry tourist visa within 10 days, at the age of 48. Thank you so much for making this dream come true for me. </p>
                                {/* <button type="button" onClick={() => handleToggleReadMore()} className="read-more btn btn-sm btn-info">Read more</button> */}
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-6 col-sm-12 '>
                            <div className='border border-dark border-opacity-25 rounded-3 shadow-lg p-3'>
                                <div className='d-flex justify-content-center pt-3'>
                                    <img src={mandeep} className='img-fluid ' alt='' />
                                </div>
                                <h4 className='text-center mt-3 fw-bold'>Mandeep</h4>
                                <p className='text-center text-danger fw-bold'>UK study visa</p>
                                <p className='testimonial-para'>Hey everyone, it's Mandeep Kaur here. I just wanted to share some great news—I got my UK study visa with the awesome support from Akcxis Immigration! They were so helpful and made the whole process easy for me. Now, I can't wait to pursue my dreams in the UK thanks to them! </p>
                                {/* <button type="button" onClick={() => handleToggleReadMore()} className="read-more btn btn-sm btn-info">Read more</button> */}
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-6 col-sm-12 '>
                            <div className='border border-dark border-opacity-25 rounded-3 shadow-lg p-3'>
                                <div className='d-flex justify-content-center pt-3'>
                                    <img src={sneha} className='img-fluid ' alt='' />
                                </div>
                                <h4 className='text-center mt-3 fw-bold'>Sneha Sharma</h4>
                                <p className='text-center text-danger fw-bold'>Canada PR</p>
                                <p className='testimonial-para'>I am Sneha Sharma and right now I am a permanent resident in Canada and my whole process was completed under the supervision of Akcxis Immigrations. I am really thankful to the PR visa team of Akcxis Immigrations who guided and helped me look for a job and handle my entire process of filing so well. </p>
                                {/* <button type="button" onClick={() => handleToggleReadMore()} className="read-more btn btn-sm btn-info">Read more</button> */}
                            </div>
                        </div>

                        <div className='col-lg-4 col-md-6 col-sm-12 '>
                            <div className='border border-dark border-opacity-25 rounded-3 shadow-lg p-3'>
                                <div className='d-flex justify-content-center pt-3'>
                                    <img src={gagan} className='img-fluid' alt='' />
                                </div>
                                <h4 className='text-center mt-3 fw-bold'>Gagandeep Singh</h4>
                                <p className='text-center text-danger fw-bold'>Canada study visa</p>
                                <p className='testimonial-para'>Hello, I am Gagandeep Singh and I am thankful to the Akcxis Immigrations from the bottom of my heart as they helped me to get my Canadian study visa after two refusals. I had lost all hope but they were true to their word and I am going to Canada for a two year study course in the month of May. Thank you so much Akcxis Immigrations.</p>
                                {/* <button type="button" onClick={() => handleToggleReadMore()} className="read-more btn btn-sm btn-info">Read more</button> */}
                            </div>
                        </div>

                        {/* <div className='col-lg-4 col-md-6 col-sm-12 '>
                            <div className='border border-dark border-opacity-25 rounded-3 shadow-lg p-3'>
                                <div className='d-flex justify-content-center pt-3'>
                                    <img src={rahul} className='img-fluid ' alt='' />
                                </div>
                                <h4 className='text-center mt-3 fw-bold'>Kanav</h4>
                                <p className='text-center text-danger fw-bold'>Australia Study Visa</p>
                                <p className=' '>Hi…my name is Kanav and currently I am studying in Australia. I processed my whole study visa process from Akcxis Immigrations. I really thank them for helping me to reach here within six months and fulfilling my dream to study in Australia. </p>
                            </div>
                        </div> */}

                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial
