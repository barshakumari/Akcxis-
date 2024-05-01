import React, { useEffect, useState } from 'react'
import img1 from "../Components/images/contact.jpg"
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
    if (!userData.email || !userData.city || !userData.name ||!userData.phone) {
        return setError({ error: true, msg: 'Please fill all input feilds.' })
    }
    if (userData.phone.length < 10 || userData.phone.length > 10) {
        return  setError({ error: true, msg: 'Invalid phone number.' });
    }
 
    let data = { namne: userData.name, phone: userData.phone, email: userData.email, city: userData.city, countryCode: countryData.countryCode }
    await services
        .postCountries(data)
        .then(() => {
            setError({ error: false, msg: 'Your form is submitted.' })
        })
        .catch((error) => {
            setError({ error: true, msg:error.message })
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
      <div className='section32'>
        <img src={img1} alt="" className='img-fluid w-100' />
        <div className='contact1'>
          <h1 className='fw-bold text-center text-light display-2'>Contact</h1>
        </div>
      </div> 


      {/* go to home page */}
      <div className='direct py-1 d-flex justify-content-center align-items-center'>
        <div className='d-flex justify-content-between align-items-center'>
          <Link to="/" className='text-dark fw-semibold border-end border-white pe-3 text-decoration-none fs-6'>Home</Link>
          <Modal title="Contact Us" className="ms-1 fw-semibold fs-6" />
        </div>
      </div>  
      {/* section33 */}
      <div className="section33 py-3">
        <div className="container">
          <div className="row"> 
            <div className="col-lg-6">
              <h5 className='text-center fw-semibold text-uppercase'>Get In Touch </h5>
              <div className='contact-form mt-4'>
                <div className='row py-5 border'>
                  <div className='col-lg-8 '>
                     {error.msg && <div className={`alert alert-${error.error?'danger':'success'} alert-dismissible fade show`} role="alert">{error.msg }
                            <button onClick={()=>{setError({error:false,msg:''})}} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
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
      </div >

      {/* section34 */}
      < div className="section34 py-3" >
        <div className="container  ">
          <h5 className='fw-semibold text-uppercase text-center'>OUR OFFICES NETWORK</h5>
          <div>
            <ul className="nav nav-tabs" id="myTab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Ludhiana</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Bhatinda </button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Kurukshetra</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="preet-tab" data-bs-toggle="tab" data-bs-target="#preet-tab-pane" type="button" role="tab" aria-controls="preet-tab-pane" aria-selected="false">Faridkot</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="nepal-tab" data-bs-toggle="tab" data-bs-target="#nepal-tab-pane" type="button" role="tab" aria-controls="nepal-tab-pane" aria-selected="false">Nepal</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="dubai-tab" data-bs-toggle="tab" data-bs-target="#dubai-tab-pane" type="button" role="tab" aria-controls="dubai-tab-pane" aria-selected="false">Dubai</button>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active mt-2" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex={0}>
                <div className='border border-dark border-opacity-25 rounded-3 shadow-lg p-2 '>
                  <h6>Akcxis Immigartions</h6>
                  <p className='fw-semibold text-secondary mt-3'><BiMap className='fs-4 text-dark' />&nbsp;&nbsp;209-B, Ground Floor, Block D, Model Town Extension, Dugri Road, Ludhiana-141002</p>
                  <p className='text-secondary'><FiPhone className='fs-5 text-dark' />&nbsp;&nbsp; <a href='tel:+91-98727-33369' className='text-dark'>+91-98727-33369</a> </p>
                </div>
              </div>
              <div className="tab-pane fade mt-2" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex={0}>
                {/* <div className='border border-dark border-opacity-25 rounded-3 shadow-lg p-2 w-25'>
                  <h6>Bhatinda  Branch Office</h6>
                  <p className='fw-semibold text-secondary mt-3'><BiMap className='fs-4 text-dark' />&nbsp;&nbsp;Ghorewala Chowk, Near IOB Bank, Bhatinda, Punjab - 151005</p>
                  <p className='text-secondary'><FiPhone className='fs-5 text-dark' />&nbsp;&nbsp;+91 98722-66128</p>
                </div> */}
              </div>
              <div className="tab-pane fade mt-2" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex={0}>

                {/* <div className='border border-dark border-opacity-25 rounded-3 shadow-lg p-2 w-25'>
                  <h6>Kurukshetra Branch Office</h6>
                  <p className='fw-semibold text-secondary mt-3'><BiMap className='fs-4 text-dark' />&nbsp;&nbsp;209-B, Ground Floor, Block D, Model Town Extension, Dugri Road, Ludhiana-141002</p>
                  <p className='text-secondary'><FiPhone className='fs-5 text-dark' />&nbsp;&nbsp;+91-98727-33369</p>
                </div> */}
              </div>

              <div className="tab-pane fade mt-2" id="preet-tab-pane" role="tabpanel" aria-labelledby="preet-tab" tabIndex={0}>
                {/* <div className='border border-dark border-opacity-25 rounded-3 shadow-lg p-2 w-25'>
                  <h6>Faridkot Branch Office</h6>
                  <p className='fw-semibold text-secondary mt-3'><BiMap className='fs-4 text-dark' />&nbsp;&nbsp;209-B, Ground Floor, Block D, Model Town Extension, Dugri Road, Ludhiana-141002</p>
                  <p className='text-secondary'><FiPhone className='fs-5 text-dark' />&nbsp;&nbsp;+91-98727-33369</p>
                </div> */}
              </div>

              <div className="tab-pane fade mt-2" id="nepal-tab-pane" role="tabpanel" aria-labelledby="nepal-tab" tabIndex={0}>
                {/* <div className='border border-dark border-opacity-25 rounded-3 shadow-lg p-2 w-25'>
                  <h6>Nepal Branch Office</h6>
                  <p className='fw-semibold text-secondary mt-3'><BiMap className='fs-4 text-dark' />&nbsp;&nbsp;209-B, Ground Floor, Block D, Model Town Extension, Dugri Road, Ludhiana-141002</p>
                  <p className='text-secondary'><FiPhone className='fs-5 text-dark' />&nbsp;&nbsp;+91-98727-33369</p>
                </div> */}
              </div>

              <div className="tab-pane fade mt-2" id="dubai-tab-pane" role="tabpanel" aria-labelledby="dubai-tab" tabIndex={0}>
                {/* <div className='border border-dark border-opacity-25 rounded-3 shadow-lg p-2 w-25'>
                  <h6>Dubai Branch Office</h6>
                  <p className='fw-semibold text-secondary mt-3'><BiMap className='fs-4 text-dark' />&nbsp;&nbsp;209-B, Ground Floor, Block D, Model Town Extension, Dugri Road, Ludhiana-141002</p>
                  <p className='text-secondary'><FiPhone className='fs-5 text-dark' />&nbsp;&nbsp;+91-98727-33369</p>
                </div> */}
              </div>

            </div>
          </div>

        </div>
      </div >

    </>
  )
}

export default Contact

