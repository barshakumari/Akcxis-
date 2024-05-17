import React from 'react'
import { useLocation } from 'react-router-dom'
import img from "../Components/images/footer.png"
import "./nav.css"


const Footer = () => {
  
const location=useLocation()
console.log(location)
  return (
    <>
      <footer className="footer bg-dark text-white" style={{display:location.pathname==='/travelhome'?'none':'block'}}>
        {/* Grid container */}
        <div className="container p-5">
          {/*Grid row*/}
          <div className="row ">
            {/*Grid column*/}
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0 mb-4 d-flex justify-content-center ">
              <div>
                <h4 className="text-uppercase mb-4 fw-bold">
                  our information
                </h4>
                <h5 className='mb-3 fs-4'>Akcxis International Services</h5>
                <p className='mb-4 fs-5'>
                  Akcxis has forayed its wings in to Travel, Study Visa, Coaching and Consultancy business. Our experienced team ensures a seamless process for all travel related requirements of our clients, and assist students to achieve their goal of studying at international level.
                </p>
              </div>


            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0 mb-4 links d-flex justify-content-center align-items-center">
              <div className='quick-link'>
                <h4 className="text-uppercase mb-4 fw-bold">
                  Quick Links
                </h4>
                {/* <p>
                  <a href="/" className="text-white">Home</a>
                </p> */}
                <p>
                  <a href="/about" className="text-white">About</a>
                </p>
                <p>
                  <a href="/coaching" className="text-white">Coaching</a>
                </p>
                <p>
                  <a href="/studyabroad" className="text-white">Study Abroad</a>
                </p>
                <p>
                  <a href="/work" className="text-white">Work</a>
                </p>
                <p>
                  <a href="migrate" className="text-white">Migrate/PR</a>
                </p>
                <p>
                  <a href="/visit" className="text-white">Visit</a>
                </p>
                <p>
                  <a href="/career" className="text-white">Career</a>
                </p>
                <p>
                  <a href="/contact" className="text-white">Contact Us</a>
                </p>
              </div>
            </div>
            {/*Grid column*/}
            {/*Grid column*/}
            <div className="col-lg-3 col-md-6 mb-4 mb-md-0 mb-4  d-flex justify-content-center ">
              <div>
                <h4 className="text-uppercase  mb-4 fw-bold">Contact Us</h4>
                {/* <p className='fs-5'><i className="fas fa-home me-3 fs-5" />209-B, Ground Floor, Block D, Model Town Extension, Dugri Road, Ludhiana-141002 </p> */}
                <p className='fs-5'>
                  <i className="fas fa-envelope me-3 fs-5" />info@akcxis.com
                </p>
                <p className='fs-5'><i class="bi bi-whatsapp me-3 fs-5"></i>+91-98728-33369</p>
                <p className='fs-5'><i className="fas fa-phone me-3 fs-5" />+91-98727-33369</p>
                {/* <p className='fs-5'><i className="fa-brands fa-whatsapp me-3 fs-5"></i>+91-98727-33369</p> */}
                <div className='icons py-3 links'>
                  <h4 className='mb-3 fw-bold'>FOLLOW US:</h4>
                  <a className="btn btn-outline-light btn-floating m-1" href="https://www.instagram.com/akcxis.immigrations/" role="button"><i className="fab fa-instagram" /></a>

                  <a className="btn btn-outline-light btn-floating m-1" href="https://www.facebook.com/akcxisimmigration/?locale=hi_IN" role="button"><i className="fab fa-facebook-f" /></a>

                  <a className="btn btn-outline-light btn-floating m-1" href="https://twitter.com/akcxis" role="button"><i className="fab fa-twitter" /></a>

                  <a className="btn btn-outline-light btn-floating m-1" href="https://in.linkedin.com/in/akcxis-immigrations-431662268" role="button"><i className="fab fa-linkedin-in"></i></a>

                  <a className="btn btn-outline-light btn-floating m-1" href="https://www.youtube.com/channel/UCasY-vAYFfDITb-OpSRweGQ" role="button"><i className="fab fa-youtube"></i></a>
                </div>
              </div>
            </div>
            {/*Grid column*/}
          </div>
          {/*Grid row*/}
        </div>


        {/* Copyright */}
        <div className="text-center fw-bold p-4 bg-light" >
          <a href="/privacypolicy" className='text-dark text-decoration-none'> <span className=' border-end me-2 border-dark  '> Privacy policy </span></a>
          <a href="/termcondition" className='text-dark text-decoration-none'><span className=' border-end me-2 border-dark '> Terms & condition </span></a>
          <a href="/refundpolicy" className='text-dark text-decoration-none'><span className=' border-light  '> Cancellation/Refund policy </span></a>
        </div>
      </footer>


    </>
  )
}

export default Footer
