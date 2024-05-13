import React, { useEffect, useState } from 'react'
import services from "../backend/services";
import './popup.css'
import { useLocation } from 'react-router-dom';
const Popup = () => {
  const [show, setShow] = useState({ class: "", display: "none" })
  const { pathname } = useLocation()

  useEffect(() => {

    const timer = setTimeout(() => {
      if (pathname.startsWith("/") || pathname.startsWith("/coaching") || pathname.startsWith("/ielts") || pathname.startsWith("/pte") || pathname.startsWith("/toefl") || pathname.startsWith("/studyabroad") || pathname.startsWith("/migrate") || pathname.startsWith("/work") || pathname.startsWith("/visit")) {
        setShow({ class: "show", display: "block" })
      }
    }, 3200)

    //=======Destroy after component unmount
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
      <div className={`modal fade ${show.class}`} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" aria-modal='true' role='dialog' style={{ display: show.display }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header bg-white">
              <h1 className="modal-title fs-4 text-center" id="exampleModalLabel">Fill the form & Get a call from Expert !</h1>
              <button onClick={() => setShow({ class: "", display: "none" })} type="button" className= "btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className='row p-0 m-0'>
                <div className="form-group mb-2 col-lg-6 col-sm-12">
                  <input type="text" name="firstname" id="firstname" className="form-control" placeholder='First name' />
                </div>
                <div className="form-group mb-2 col-lg-6 col-sm-12">
                  <input type="text" name="lastname" id="lastname" className="form-control" placeholder='Last name' />
                </div>
                <div className="form-group mb-2 col-lg-6 col-sm-12">
                  <input type="email" name="email" id="email" className="form-control" placeholder='john@domain.com' />
                </div>
                <div className="form-group mb-2 col-lg-6 col-sm-12">
                  <input type="tel" name="phone" id="phone" className="form-control" placeholder='+91-xxx-xxx-xxxx' />
                </div>
                <div className="form-group mb-2 col-lg-6 col-sm-12">
                  <select class="form-select" aria-label="Where are you from">
                    <option selected value="">Select Country</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                    <option value="aus">Australia</option>
                    <option value="other">Others</option>
                  </select>
                </div>
                <div className="form-group mb-2 col-lg-6 col-sm-12">
                  <select class="form-select" aria-label="Where are you from">
                    <option selected value="">Where are you from</option>
                    <option value="Ludhiana">Ludhiana</option>
                    <option value="chandigarh">Chandigarh</option>
                    <option value="Bathinda">Bathinda</option>
                    <option value="Amritsar">Amritsar</option>
                    <option value="Other">Others</option>
                  </select>
                </div>
                <div className="form-group mb-2 col-lg-6 col-sm-12">
                  <select class="form-select" aria-label="Where are you from">
                    <option selected value="">Visa Type</option>
                    <option value="Study visa">Study visa</option>
                    <option value="Work visa">Work visa</option>
                    <option value="PR">PR</option>
                    <option value="Visitor visa">Visitor visa</option>
                  </select>
                </div>
                <div className="form-group mb-2 col-lg-6 col-sm-12">
                  <select class="form-select" aria-label="Where are you from">
                    <option selected value="">Preferred Consultation Type</option>
                    <option value="Phone Consultation">Phone Consultation (15 Minutes)</option>
                    <option value="Video Consultation">Video Consultation (Upto 60 Minutes)</option>
                    <option value="In-Person Consultation">In-Person Consultation (Over a Coffee)</option>
                  </select>
                </div>
                <div className="form-group mb-2 col-lg-12 col-sm-12">
                  <select class="form-select" aria-label="Where are you from">
                    <option selected value="">Language test given</option>
                    <option value="IELTS">IELTS</option>
                    <option value="PTE">PTE</option>
                    <option value="TOEFL">TOEFL</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="col-lg-12 col-sm-12 mb-2">
                  <textarea className="form-control" placeholder="Message/Any specific requirement (optional)" id="floatingTextarea2" style={{ height: 100, resize: "none" }} defaultValue={""} />
                </div>
              </form>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              {/* <button onClick={() => setShow({ class: "", display: "none" })} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
              <button type="button" className="btn btn-primary">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Popup