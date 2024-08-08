import axios from "axios";

const API_URL = "http://localhost:7000/api/";

const register = (userName, email, password) => {
  return axios.post(API_URL + "signup", {
    userName,
    email,
    password,
  });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.username) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const adminLogin = (email, password) => {
  return axios
    .post(API_URL + "admin/signIn", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.username) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
 
  return axios.post(API_URL + "logout", {},{ headers: {
    "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token'))}`
  } } )
 
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
  adminLogin
}

export default AuthService;
