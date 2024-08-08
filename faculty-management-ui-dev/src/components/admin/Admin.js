import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { toast } from "react-toastify";
import AuthService from "../../services/auth.service";

const required = (value) => {
  if (!value) {
    return (
      <div className="invalid-feedback d-block">
        This field is required!
      </div>
    );
  }
};

const AdminLogin = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

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
      AuthService.adminLogin(email, password).then(
        (res) => {
          localStorage.setItem("userData", JSON.stringify(res?.userData));
          localStorage.setItem("token", JSON.stringify(res?.token));
          props?.setIsLoggedIn(true);
          toast.success(res?.message);
          navigate("/admin-user");
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
  const userData = localStorage.getItem('userData');
	const userDetails = JSON.parse(userData)

  useEffect(() => {

		// const userData = localStorage.getItem('userData');
		// const userDetails = JSON.parse(userData)
		const token = localStorage.getItem("token")

		const isToken = JSON.parse(token)

		if (isToken && userDetails?.role === 'user') {
      toast.warning("You have loged in as user");
      navigate(-1);
		}
		else {
			return true
		}
	}, [])

  return (

    <div className="login-area default-padding">
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2">
                  <Form onSubmit={handleLogin} ref={form} id="login-form" className="white-popup-block">
                        <div className="col-md-7 login-custom">
                            <h4>Admin Login!</h4>
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
                        <div className="col-md-5 login-social">
                          <img src="assets/img/adminImage.jpg" style={{width: "100%", height: "26vh", objectFit: 'cover' }} alt="Thumb" />
                            
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    </div>
  );
};

export default AdminLogin;
