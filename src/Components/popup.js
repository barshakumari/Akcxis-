import React, { useEffect, useState } from 'react'
import img from './images/AVTAR.png'
import services from "../backend/services";
import './popup.css'
import { useLocation } from 'react-router-dom';
const Popup = () => {
  const [show, setShow] = useState(false)
  const { pathname } = useLocation()
  
  useEffect(() => {
    let timer;
    if (pathname.startsWith("/") || pathname.startsWith("/coaching") || pathname.startsWith("/studyabroad") || pathname.startsWith("/migrate")) {
      timer = setTimeout(() => {
        setShow(true)
      }, 3200) && !pathname.startsWith("/travelhome")
    }
    return () => {
      clearTimeout(timer)
    }
  }, [pathname])

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
      {
        show && (
          <div className='d-flex justify-content-center align-items-center  buttonForm  '>
            <div className='overlay'></div>
            <div className="card-1  border border-dark border-opacity-25 rounded-4  shadow-lg">
              <div className="card-content ">
                <div className='form-heading'>
                  <div className="d-flex justify-content-evenly align-items-center w-100 pt-3">
                    <h5 className='fw-bold text-center'>Fill the form & Get a call from Expert !</h5>
                    <button className='fs-5 fw-bold  btn  btn-close' onClick={() => { setShow(false) }}></button>
                  </div>
                </div>
                <form className='p-4 row m-0 p-0'>
                  <div className="row col-lg-6 col-sm-12 m-0">
                    <div className="col-sm-12 col-lg-6 mb-2">
                      <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="name" placeholder="John Cena" />
                        <label htmlFor="name">Full name</label>
                      </div>
                    </div>
                    <div className="col-sm-12 col-lg-6 mb-2">
                      <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="contact-number" placeholder="+91-xxx-xxx-xxxx" />
                        <label htmlFor="contact-number">Contact number</label>
                      </div>
                    </div>
                    <div className="col-sm-12 col-lg-6 mb-2">
                      <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="email" placeholder="name@domain.com" />
                        <label htmlFor="email">Email address</label>
                      </div>
                    </div>

                    <div className="col-sm-12 col-lg-6 mb-2">
                      <div className="form-floating mb-3">
                        <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                          <option selected value="">Where are you from</option>
                          <option value="Ludhiana">Ludhiana</option>
                          <option value="chandigarh">Chandigarh</option>
                          <option value="Bathinda">Bathinda</option>
                          <option value="Amritsar">Amritsar</option>
                          <option value="Other">Others</option>
                        </select>
                        <label htmlFor="floatingSelect">City</label>
                      </div>
                    </div>

                    <div className="col-sm-12 mb-2">
                      <div className="form-floating mb-3">
                        <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                          <option selected value="">Select Country</option>
                          <option value="canada">Canada</option>
                          <option value="usa">USA</option>
                          <option value="uk">UK</option>
                          <option value="aus">Australia</option>
                          <option value="other">Others</option>
                        </select>
                        <label htmlFor="floatingSelect">Country want to apply for</label>
                      </div>
                    </div>

                    <div className="col-sm-12 mb-2">
                      <div className="form-floating mb-3">
                        <select className="form-select" id="floatingSelect" aria-label="Floating label select example">
                          <option selected value="">Visa Type</option>
                          <option value="Study visa">Study visa</option>
                          <option value="Work visa">Work visa</option>
                          <option value="PR">PR</option>
                          <option value="Visitor visa">Visitor visa</option>
                        </select>
                        <label htmlFor="floatingSelect">Visa Type</label>
                      </div>
                    </div>

                    <button className="btn btn-primary col-12">Submit</button>
                  </div>

                  <div className="col-lg-6 col-sm-12 mb-2 row">
                    <div className="col-sm-12 mb-2">
                      <div className="form-floating mb-3">
                        <select className="form-select" id="consultation" aria-label="Floating label select example">
                          <option selected value="">Preferred Consultation Type</option>
                          <option value="Phone Consultation">Phone Consultation (15 Minutes)</option>
                          <option value="Video Consultation">Video Consultation (Upto 60 Minutes)</option>
                          <option value="In-Person Consultation">In-Person Consultation (Over a Coffee)</option>
                        </select>
                        <label htmlFor="consultation">Preferred Consultation Type</label>
                      </div>
                    </div>

                    <div className="col-sm-12 mb-2">
                      <div className="form-floating mb-3">
                        <select className="form-select" id="language" aria-label="Floating label select example">
                          <option selected value="">Language test given</option>
                          <option value="IELTS">IELTS</option>
                          <option value="PTE">PTE</option>
                          <option value="TOEFL">TOEFL</option>
                          <option value="Other">Other</option>
                        </select>
                        <label htmlFor="language">Language test given</label>
                      </div>
                    </div>
                    <div>
                      <textarea className="form-control" placeholder="Message/Any specific requirement (optional)" id="floatingTextarea2" style={{ height: 100 }} defaultValue={""} />
                    </div>
                    <div class="form-check ps-5 col-12 mb-3">
                      <input class="form-check-input" type="checkbox" value="" id="terms-conditions" />
                      <label class="form-check-label" for="terms-conditions">
                        I agree to <strong>terms & conditions</strong>
                      </label>
                    </div>
                  </div>

                </form>
              </div>
            </div>
          </div>
        )}
    </>

  )
}

export default Popup