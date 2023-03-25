import React, { useRef } from 'react';
import { Link } from "react-router-dom";
import { ErrorToast, isEmail, isEmpty, isMobile, SuccessToast } from '../../helper/FormHelper';

const Registration = () => {
  let emailRef, firstNameRef, lastNameRef, mobileRef, passwordRef = useRef();

  const onRegistartion = () => {
    const email = emailRef.value;
    const firstName = firstNameRef.value;
    const lastName = lastNameRef.value;
    const mobile = mobileRef.value;
    const password = passwordRef.value;

    if (isEmail(email)) {
      ErrorToast("Valid Email Address Required !")
    }
    else if (isEmpty(firstName)) {
      ErrorToast("First Name Required !")
    }
    else if (isEmpty(lastName)) {
      ErrorToast("Last Name Required !")
    }
    else if (!isMobile(mobile)) {
      ErrorToast("Valid Mobile  Required !")
    }
    else if (isEmpty(password)) {
      ErrorToast("Password Required !")
    } else {
      SuccessToast('all done');
    }
  }

  return (
    <div className="container">
      <div className="row  justify-content-center">
        <div className="col-md-7 col-lg-6 center-screen">
          <div className="card animated fadeIn w-90 p-3">
            <div className="card-body">
              <h4>Sign Up</h4>
              <hr />
              <div className="container m-0 p-0">
                <div className="row m-0 p-0">
                  <div className="col-12 p-2">
                    <label>Email Address</label>
                    <input ref={(input) => emailRef = input} placeholder="User Email" className="form-control animated fadeInUp" type="email" />
                  </div>
                  <div className="col-12 p-2">
                    <label>First Name</label>
                    <input ref={(input) => firstNameRef = input} placeholder="First Name" className="form-control animated fadeInUp" type="text" />
                  </div>
                  <div className="col-12 p-2">
                    <label>Last Name</label>
                    <input ref={(input) => lastNameRef = input} placeholder="Last Name" className="form-control animated fadeInUp" type="text" />
                  </div>
                  <div className="col-12 p-2">
                    <label>Mobile Number</label>
                    <input ref={(input) => mobileRef = input} placeholder="Mobile" className="form-control animated fadeInUp" type="mobile" />
                  </div>
                  <div className="col-12 p-2">
                    <label>Password</label>
                    <input ref={(input) => passwordRef = input} placeholder="User Password" className="form-control animated fadeInUp" type="password" />
                  </div>

                </div>
                <div lassName="row mt-2 p-0">
                  <div className="col-12 p-2">
                    <span className='text-center d-block'>
                      <Link to="/login">Login</Link>
                    </span>
                    <button onClick={onRegistartion} className="btn mt-3 w-100 float-end btn-primary animated fadeInUp">Submit</button>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Registration;