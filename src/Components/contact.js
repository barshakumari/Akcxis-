import React, { useEffect, useState } from 'react'
import img1 from "../Components/images/contact.png"
import img from './images/AVTAR.png'
import services from "../backend/services";
import "./contact.css"
import { Link } from 'react-router-dom'
import Modal from './modal'
import { BiMap } from 'react-icons/bi';
import { FiPhone } from 'react-icons/fi'
import { AiOutlineMail } from 'react-icons/ai'
import { FaWhatsapp } from 'react-icons/fa'


const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
  });

  const [countryData, setCountryData] = useState({ countryCode: "", countryName: '' })
  const [country, setCountry] = useState([])
  const [error, setError] = useState({ error: false, msg: '' })
  const submitForm = async (e) => {
    e.preventDefault();
    if (!userData.email || !userData.city || !userData.name || !userData.phone) {
      return setError({ error: true, msg: 'Please fill all input feilds.' })
    }
    if (userData.phone.length < 10 || userData.phone.length > 10) {
      return setError({ error: true, msg: 'Invalid phone number.' });
    }
    let data = { namne: userData.name, phone: userData.phone, email: userData.email, city: userData.city, countryCode: countryData.countryCode }
    await services
      .postCountries(data)
      .then(() => {
        setError({ error: false, msg: 'Your form is submitted.' })
      })
      .catch((error) => {
        setError({ error: true, msg: error.message })
      });
  };

  useEffect(() => {
    getCountryData()
    console.log(country)
  }, [])

  const getCountryData = async () => {
    await services.getCountries().then(data => {
      setCountry(data.docs.map(doc => ({ ...doc.id }, doc.data())));
    }).catch(err => console.log(err))
  }
  return (
    <>
      {/* section32 */}
      <div className='section12'>
        <img src={img1} alt="" className='img-fluid w-100' />
      </div>

      {/* go to home page */}
      <div className='heading-linking'>
        <div className='container'>
          <ol>
            <li>
              <a href='/'>Home</a>
            </li>
            <li>
              <a href='/contact'>Contact</a>
            </li>
          </ol>
        </div>
      </div>

      {/* section33 */}
      {/* <div className="section33 py-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h5 className='text-center fw-semibold text-uppercase'>Get In Touch </h5>
              <div className='contact-form mt-4'>
                <div className='row py-5 border'>
                  <div className='col-lg-8 '>
                    {error.msg && <div className={`alert alert-${error.error ? 'danger' : 'success'} alert-dismissible fade show`} role="alert">{error.msg}
                      <button onClick={() => { setError({ error: false, msg: '' }) }} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
                    </div>
                    }
                    <form onSubmit={submitForm}>
                      <div>
                        <div className="form-floating mb-3">
                          <input value={userData.name}
                            onChange={(e) => {
                              setUserData({
                                ...userData,
                                name: e.target.value,
                              });
                            }} type="text" className="form-control" id="floatingInput" placeholder="Name" />
                          <label htmlFor="floatingInput">Name</label>
                        </div>
                        <div className='form-group input-group phone h-50 mb-3'>
                          <select onChange={e => setCountryData({ ...countryData, countryCode: e.target.value })} className='form-select select' name="" id="">
                            <option value="">+91</option>
                            {country.map(data => data.countries.map(code => <option value={code.countryCode} id={code.countryCode} key={code.countryCode}>+{code.countryCode}</option>))}
                          </select>
                          <input value={userData.phone}
                            onChange={(e) => {
                              setUserData({
                                ...userData,
                                phone: e.target.value,
                              });
                            }} type="text" className="form-control" id="floatingInput" placeholder="Phone Number" />
                        </div>
                        <div className="form-floating mb-3">
                          <input value={userData.city}
                            onChange={(e) => {
                              setUserData({
                                ...userData,
                                city: e.target.value,
                              });
                            }} type="text" className="form-control" id="floatingInput" placeholder="City" />
                          <label htmlFor="floatingInput">City</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input value={userData.email}
                            onChange={(e) => {
                              setUserData({
                                ...userData,
                                email: e.target.value,
                              });
                            }} type="email" className="form-control" id="floatingInput" placeholder="Email" />
                          <label htmlFor="floatingInput">Email</label>
                        </div>
                      </div>
                      <button type='submit' className='btn btn-dark fs-5 fw-bolder w-75 '>Let's Connect</button>
                    </form>
                  </div>
                  <div className='col-lg-4'>
                    <img src={img} alt="" className='img-fluid w-100 mt-5' />
                  </div>
                </div>

              </div>

            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-center">
              <div>
                <div className='border bg-light  p-4 mt-54'>
                  <h6 className='text-uppercase'>Corporate Office Address:</h6>
                  <p className='text-secondary fw-semibold'>Main Road, Opp. New DMC, Civil Lines, Ludhiana-141001</p>
                  <h6><AiOutlineMail className='fs-5' />&nbsp; Email: <a href='mailto:info@akcxis.com' className='text-secondary'>info@akcxis.com</a></h6>
                  <h6><FiPhone className='fs-5' />&nbsp; Phone: <a href='tel:+91-98727-33369' className='text-secondary'>+91-98727-33369</a></h6>
                  <h6><FaWhatsapp className='fs-5' />&nbsp; Whatsapp: <a href='https://api.whatsapp.com/message/A475MHX2ZGQGO1?autoload=1&app_absent=0' className='text-secondary'>+91-9872833369 </a></h6>
                </div>
              </div>
            </div>
          </div >
        </div>
      </div > */}

      <div className='contact-detail py-5 bg-light'>
        <div className='container'>
          <div className='form-detail border shadow-lg p-5 mb-5 bg-body rounded'>-
            <h1 className='text-center mb-5 fw-bold'>Get In Touch With Us</h1>
            <form className='' >
              <div className='row'>
                <div className='col-lg-6 mb-4'>
                  <label htmlFor="exampleInputEmail1" className="form-label">First Name*</label>
                  <input
                    type="text" className="form-control" placeholder='Enter First Name' id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className='col-lg-6 mb-4'>
                  <label htmlFor="exampleInputEmail1" className="form-label">Last Name*</label>
                  <input
                    type="text" className="form-control" id="exampleInputEmail1" placeholder='Enter Last Name' aria-describedby="emailHelp" />
                </div>
                <div className='col-lg-6 mb-4'>
                  <label htmlFor="exampleInputEmail1" className="form-label">Phone Number*</label>
                  <input type="text" className="form-control" id="exampleInputEmail1" placeholder='Enter Phone Number' aria-describedby="emailHelp" />
                </div>
                <div className='col-lg-6 mb-4'>
                  <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="exampleInputEmail1" placeholder='Enter Email' aria-describedby="emailHelp" />
                </div>

                <div className=" mb-4 col-lg-6 col-sm-12">
                <label htmlFor="exampleInputEmail1" className="form-label">Select Country</label>
                  <select class="form-select" aria-label="Where are you from">
                    <option selected value="">Select</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                    <option value="aus">Australia</option>
                    <option value="other">Others</option>
                  </select>
                </div>

                <div className=" mb-4 col-lg-6 col-sm-12">
                <label htmlFor="exampleInputEmail1" className="form-label">Where are you from</label>
                  <select class="form-select" aria-label="Where are you from">
                    <option selected value="">Where are you from</option>
                    <option value="Ludhiana">Ludhiana</option>
                    <option value="chandigarh">Chandigarh</option>
                    <option value="Bathinda">Bathinda</option>
                    <option value="Amritsar">Amritsar</option>
                    <option value="Other">Others</option>
                  </select>
                </div>


                <div className=" mb-4 col-lg-6 col-sm-12">
                <label htmlFor="exampleInputEmail1" className="form-label">Select Visa</label>
                  <select class="form-select" aria-label="Where are you from">
                    <option selected value="">Visa Type</option>
                    <option value="Study visa">Study visa</option>
                    <option value="Work visa">Work visa</option>
                    <option value="PR">PR</option>
                    <option value="Visitor visa">Visitor visa</option>
                  </select>
                </div>
                <div className="mb-4 col-lg-6 col-sm-12">
                <label htmlFor="exampleInputEmail1" className="form-label ">Language test given</label>
                  <select class="form-select" aria-label="Where are you from">
                    <option selected value="">Language test given</option>
                    <option value="IELTS">IELTS</option>
                    <option value="PTE">PTE</option>
                    <option value="TOEFL">TOEFL</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className=" mb-4 col-lg-12 col-sm-12">
                <label htmlFor="exampleInputEmail1" className="form-label">Preferred Consultation Type</label>
                  <select class="form-select" aria-label="Where are you from">
                    <option selected value="">Preferred Consultation Type</option>
                    <option value="Phone Consultation">Phone Consultation (15 Minutes)</option>
                    <option value="Video Consultation">Video Consultation (Upto 60 Minutes)</option>
                    <option value="In-Person Consultation">In-Person Consultation (Over a Coffee)</option>
                  </select>
                </div>

                <div className="col-lg-12 mb-4">
                  <label htmlFor="floatingTextarea2">Message</label>
                  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: 100 }} defaultValue={""} />
                </div>
              </div>
              <div className='button text-center mt-3'>
                <button type="submit" className="btn fs-5 fw-bold rounded-5 px-5 py-3 btn-outline-dark">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* map */}
      <div className='container-fluid'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.21929105382!2d75.8454672760796!3d30.880525878474142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa58d9dd6a30e953b%3A0x596bc6d72f9bedba!2sAkcxis%20Immigrations%2C%20India!5e0!3m2!1sen!2sin!4v1715235549546!5m2!1sen!2sin" height={500} style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='w-100'></iframe>
      </div>

    </>
  )
}

export default Contact

