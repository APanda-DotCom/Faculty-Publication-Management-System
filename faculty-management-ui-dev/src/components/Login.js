import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

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

const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  console.log('props',props);

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(email, password).then(
        (res) => {
          localStorage.setItem("userData", JSON.stringify(res?.data?.userDetails));
          localStorage.setItem("token", JSON.stringify(res?.data?.userDetails?.token));
          props?.setIsLoggedIn(true);
          toast.success(res?.message);
          navigate("/profile");
          // window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

            toast?.error(resMessage)
          setLoading(false);
          
        }
      );
    } else {
      setLoading(false);
    }
  };

  return (

    <div className="login-area default-padding">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                  <Form onSubmit={handleLogin} ref={form} id="login-form" className="white-popup-block">
                        <div className="col-md-4 login-social">
                          <img src="assets/img/loginImage.png" style={{width: "100%", height: "26vh", objectFit: 'cover' }} alt="Thumb" />
                            {/* <h4>Login with social</h4>
                            <ul>
                                <li className="facebook">
                                    <a href="#">
                                        <i className="fab fa-facebook-f"></i>
                                    </a>
                                </li>
                                <li className="twitter">
                                    <a href="#">
                                        <i className="fab fa-twitter"></i>
                                    </a>
                                </li>
                                <li className="linkedin">
                                    <a href="#">
                                        <i className="fab fa-linkedin-in"></i>
                                    </a>
                                </li>
                            </ul> */}
                        </div>
                        <div className="col-md-8 login-custom">
                            <h4>login to your registered account!</h4>
                            <div className="col-md-12">
                                <div className="row">
                                    <div className="form-group">
                                      <Input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        placeholder="Email*"
                                        value={email}
                                        onChange={onChangeEmail}
                                        validations={[required]}
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
                                        validations={[required]}
                                        style={{ fontSize: '1.5rem' }}
                                      />
                                    </div>
                                </div>
                            </div>
                            
                            {/* <div className="col-md-12">
                                <div className="row">
                                    <label for="login-remember"><input type="checkbox" id="login-remember">Remember Me</label>
                                    <a title="Lost Password" href="#" className="lost-pass-link">Lost your password?</a>
                                </div>
                            </div> */}
                            <div className="col-md-12">
                              <div className="row">
                                <button type="submit" disabled={loading}>
                                  {loading && (
                                    <span className="spinner-border spinner-border-sm"></span>
                                )}
                                  <span>Login</span>
                                </button>
                                <CheckButton style={{ display: "none" }} ref={checkBtn} />
                                </div>
                            </div>
                            <p className="link-bottom">Not a member yet? <a href="/register">Register now</a></p>
                            {message && (
                              <div className="col-md-12">
                                <div className="row">
                                  <div className="alert alert-danger" role="alert">
                                    {message}
                                  </div>
                              </div>
                              </div>
                            )}
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Login;
