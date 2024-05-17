import React, { useEffect, useState } from 'react'
import './popup.css'
import { useLocation } from 'react-router-dom';
import { useForm } from '../redux/store';
import { useDispatch } from 'react-redux';
import { setInputField } from '../redux/feature/form-slice';
const Popup = () => {
  const [show, setShow] = useState({ class: "", display: "none" })
  const { pathname } = useLocation()

  useEffect(() => {

    const timer = setTimeout(() => {
      if (pathname.startsWith("/coaching") || pathname.startsWith("/ielts") || pathname.startsWith("/pte") || pathname.startsWith("/toefl") || pathname.startsWith("/studyabroad") || pathname.startsWith("/migrate") || pathname.startsWith("/work") || pathname.startsWith("/visit")) {
        setShow({ class: "show", display: "block" })
      } else if (pathname.startsWith("/travelhome") || pathname.includes("/about") || pathname.includes("/contact")) {
        setShow({ class: "", display: "none" })
      } else if (pathname.includes("/")) {
        setShow({ class: "show", display: "block" })
      }
    }, 3200)

    //=======Destroy after component unmount
    return () => {
      clearTimeout(timer)
    }

  }, [pathname])

  const { firstName, lastName, email,
    phoneNumber, country, city,
    visaType, consultationType,
    language, message } = useForm(state => state.formSlice)

  const dispatch = useDispatch()
  const [form, setForm] = useState({
    firstName, lastName, email, phoneNumber, country, city,
    visaType, consultationType,
    language, message
  })

  const [error, setError] = useState({ error: false, message: "" })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmitForm = () => {

    if (!firstName || !email || !phoneNumber || !visaType || !consultationType || !language) {
      setError({ error: true, message: "Please fill all required fields." })
      return
    }

    dispatch(setInputField(form))
    console.log(form);
  }

  return (
    <>
      {show.display === "block" && <div className='buttonForm'>
        <div className='overlay'></div>
      </div>}
      <div className={`modal fade ${show.class}`} id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" aria-modal='true' role='dialog' style={{ display: show.display }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-white">
              <h1 className="modal-title fs-4 text-center" id="exampleModalLabel">Fill the form & Get a call from Expert !</h1>
              <button onClick={() => setShow({ class: "", display: "none" })} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className='row p-0 m-0' onSubmit={handleSubmitForm}>
                <div className="form-group mb-2 col-lg-6 col-sm-12">
                  <input onChange={handleChange} value={form.firstName} type="text" name="firstName" id="firstname" className="form-control" placeholder='First name' />
                </div>
                <div className="form-group mb-2 col-lg-6 col-sm-12">
                  <input onChange={handleChange} value={form.lastName} type="text" name="lastName" id="lastname" className="form-control" placeholder='Last name' />
                </div>
                <div className="form-group mb-2 col-lg-6 col-sm-12">
                  <input onChange={handleChange} value={form.email} type="email" name="email" id="email" className="form-control" placeholder='john@domain.com' />
                </div>
                <div className="form-group mb-2 col-lg-6 col-sm-12">
                  <input onChange={handleChange} value={form.phoneNumber} type="tel" name="phoneNumber" id="phoneNumber" className="form-control" placeholder='+91-xxx-xxx-xxxx' />
                </div>
                <div className="form-group mb-2 col-lg-6 col-sm-12">
                  <select name='country' onChange={handleChange} value={form.country} class="form-select" aria-label="Where are you from">
                    <option selected value="">Select Country</option>
                    <option value="canada">Canada</option>
                    <option value="usa">USA</option>
                    <option value="uk">UK</option>
                    <option value="aus">Australia</option>
                    <option value="other">Others</option>
                  </select>
                </div>
                <div className="form-group mb-2 col-lg-6 col-sm-12">
                  <select name='city' onChange={handleChange} value={form.city} class="form-select" aria-label="Where are you from">
                    <option selected value="">Where are you from</option>
                    <option value="Ludhiana">Ludhiana</option>
                    <option value="chandigarh">Chandigarh</option>
                    <option value="Bathinda">Bathinda</option>
                    <option value="Amritsar">Amritsar</option>
                    <option value="Other">Others</option>
                  </select>
                </div>
                <div className="form-group mb-2 col-lg-6 col-sm-12">
                  <select name='visaType' onChange={handleChange} value={form.visaType} class="form-select" aria-label="Where are you from">
                    <option selected value="">Visa Type</option>
                    <option value="Study visa">Study visa</option>
                    <option value="Work visa">Work visa</option>
                    <option value="PR">PR</option>
                    <option value="Visitor visa">Visitor visa</option>
                  </select>
                </div>
                <div className="form-group mb-2 col-lg-6 col-sm-12">
                  <select onChange={handleChange} value={form.consultationType} name='consultationType' class="form-select" aria-label="Where are you from">
                    <option selected value="">Preferred Consultation Type</option>
                    <option value="Phone Consultation">Phone Consultation (15 Minutes)</option>
                    <option value="Video Consultation">Video Consultation (Upto 60 Minutes)</option>
                    <option value="In-Person Consultation">In-Person Consultation (Over a Coffee)</option>
                  </select>
                </div>
                <div className="form-group mb-2 col-lg-12 col-sm-12">
                  <select onChange={handleChange} value={form.language} class="form-select" aria-label="Where are you from" name='language'>
                    <option selected value="">Language test given</option>
                    <option value="IELTS">IELTS</option>
                    <option value="PTE">PTE</option>
                    <option value="TOEFL">TOEFL</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="col-lg-12 col-sm-12 mb-2">
                  <textarea onChange={handleChange} name='message' value={form.message} className="form-control" placeholder="Message/Any specific requirement (optional)" id="floatingTextarea2" style={{ height: 100, resize: "none" }} />
                </div>
              </form>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              {/* <button onClick={() => setShow({ class: "", display: "none" })} type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
              <button type="button" onClick={handleSubmitForm} className="btn btn-primary">Send Message</button>
            </div>
            {
              error.error && <div class="alert alert-danger alert-dismissible fade show" role="alert">
                {error.message}
                <button onClick={() => setError({ error: false, message: "" })} type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>
            }
          </div>
        </div>
      </div>
    </>

  )
}

export default Popup