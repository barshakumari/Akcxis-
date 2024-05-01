import React, { useEffect, useState } from 'react'
import img from './images/AVTAR.png'
import services from '../backend/services';
import './modal.css'

const Modal = ({ title, className }) => {
    const [userData, setUserData] = useState({
        name: "",
        phone: "",
        email: "",
        city: "",
    });

    const [countryData, setCountryData] = useState({ countryCode: "", countryName: '' })

    const [country, setCountry] = useState([])
const [error, setError]=useState({error:false,msg:''})
    const submitForm = async (e) => {
        e.preventDefault();
        if(!userData.email || !userData.city || !userData.name || !userData.phone){
            return setError({error:true, msg:'Please fill all input feilds.'})
        }
        if (userData.phone.length < 10 || userData.phone.length > 10) {
            return setError({error:true,msg:'Invalid phone number.'});
        }
        let data = { namne: userData.name, phone: userData.phone, email: userData.email, city: userData.city, countryCode: countryData.countryCode }
        await services
            . postCountries(data)
            .then(() => {
              setError({error:false,msg:'Your form is submitted.'})
            })
            .catch((error) => {
                setError({error:true,msg:error.message})
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
          <div>
      {/* Button trigger modal */}
      <button type="button" className={`btn ${className} applyNow-btn`} data-bs-toggle="modal" data-bs-target="#exampleModal">
        {title}
      </button>
      {/* Modal */}
      <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header ">
              <h3 className="modal-title text-center w-100 fw-bold" id="exampleModalLabel">Get in Touch</h3>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
            </div>
            <div className="modal-body">
              <div className='row m-1'>
                <div className="col-lg-8 ">
                {error.msg && <div className={`alert alert-${error.error?'danger':'success'} alert-dismissible fade show`} role="alert">{error.msg }
                            <button onClick={()=>{setError({error:false,msg:''})}} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" />
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
      </div>
    </div>



        </>
    )
}

export default Modal
