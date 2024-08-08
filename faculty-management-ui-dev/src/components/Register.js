import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import { useNavigate } from "react-router-dom";

import AuthService from "../services/auth.service";
import { toast } from "react-toastify";

const required = (value) => {
  if (!value) {
    return (
      <div className="invalid-feedback d-block">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="invalid-feedback d-block">
        This is not a valid email.
      </div>
    );
  }
};

const vuserName = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="invalid-feedback d-block">
        The userName must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="invalid-feedback d-block">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const Register = (props) => {
  const form = useRef();
  const checkBtn = useRef();
  const navigate = useNavigate();
  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmedPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeuserName = (e) => {
    const userName = e.target.value;
    setuserName(userName);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangeConfirmPassword = (e) => {
    const confirmPassword = e.target.value;
    if (confirmPassword === password) {
      setConfirmedPassword(confirmPassword);
    }
  }

  const handleRegister = (e) => {
    e.preventDefault();
  
    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(userName, email, password).then(
        (response) => {
          if(response.data.success){
          toast.success(response.data.message);
          setSuccessful(true);
          navigate("/login");
          // window.location.reload();
          }


        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };

  return (
    <>
      <div className="login-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <Form onSubmit={handleRegister} ref={form} id="register-form" className="white-popup-block">
                <div className="col-md-6 login-social">
                  <img src="assets/img/registerNow.jpg" style={{width: "100%", height: "40vh", objectFit: 'cover' }} alt="Thumb" />
                </div>
                <div className="col-md-6 login-custom">
                  <h4>Register a new account</h4>
                  <div className="col-md-12">
                    <div className="row">
                      <div className="form-group">
                        <Input
                          type="email"
                          className="form-control"
                          placeholder="Email*"
                          name="email"
                          value={email}
                          onChange={onChangeEmail}
                          validations={[required, validEmail]}
                          style={{ fontSize: '1.5rem' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="row">
                      <div className="form-group">
                        <Input
                          type="text"
                          className="form-control"
                          name="userName"
                          placeholder="Username*"
                          value={userName}
                          onChange={onChangeuserName}
                          validations={[required, vuserName]}
                          style={{ fontSize: '1.5rem' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="row">
                      <div className="form-group">
                        <Input
                          type="password"
                          className="form-control"
                          name="password"
                          placeholder="Password*"
                          value={password}
                          onChange={onChangePassword}
                          validations={[required, vpassword]}
                          style={{ fontSize: '1.5rem' }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="row">
                      <div className="form-group">
                        <Input
                          type="password"
                          className="form-control"
                          name="confirmPassword"
                          placeholder="Repeat Password*"
                          value={confirmPassword}
                          onChange={onChangeConfirmPassword}
                          validations={[required, vpassword]}
                          style={{ fontSize: '1.5rem' }}
                        />
                      </div>
                    </div>
                  </div>
                  {message && (
                    <div className="row">
                      <div
                        className={
                          successful ? "alert alert-success" : "alert alert-danger"
                        }
                        role="alert"
                      >
                        {message}
                      </div>
                    </div>
                  )}
                  <div className="col-md-12">
                    <div className="row">
                      <button type="submit">
                        Sign up
                      </button>
                      <CheckButton style={{ display: "none" }} ref={checkBtn} />
                    </div>
                  </div>
                  <p className="link-bottom">Are you a member? <a href="/login">Login now</a></p>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
