import React, { useEffect, useState } from 'react'
import img from './images/AVTAR.png'
import services from "../backend/services";
import './popup.css'
const Popup = () => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true)
    }, 4000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

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
                    <h4 className='fw-bold text-center'>Get Free Counselling!</h4>
                    <button className='fs-5 fw-bold  btn  btn-close' onClick={() => { setShow(false) }}></button>
                  </div>
                </div>
                <div className='row mx-2 my-1'>
                  <div className="col-lg-8 ">
                    {error.msg && <div className={`alert alert-${error.error ? 'danger' : 'success'} alert-dismissible fade show`} role="alert">{error.msg}
                      <button onClick={() => { setError({ error: false, msg: '' }) }} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
                    </div>
                    }
                    <form onSubmit={submitForm}>
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
                      <div className='form-group input-group phone h-50 mb-3 mt-3'>
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
                      <div class="form-floating mb-3">
                        <select class="form-select" aria-label="Default select example">
                          <option selected>Select Category</option>
                          <option value="1">IELTS/PTE</option>
                          <option value="2">Study Visa</option>
                          <option value="3">Work Visa</option>
                          <option value="4">Tourist Visa</option>
                          <option value="5">PR</option>
                        </select>
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
                      <div className='mt-3'>
                        <button type='submit' className='btn btn-dark fs-5 fw-bolder w-75 '>Submit</button>
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-4  ">
                    <img src={img} alt="" className='img-fluid w-100 ' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          // </div>
        )}
    </>

  )
}

export default Popup