import axios from "axios";

const API_URL = "http://localhost:7000/api/";

const token = JSON.parse(localStorage.getItem('token'));

const updateProfile = (reqPayload) => {
  return axios.post(API_URL + "update-profile", reqPayload, { headers: {
    "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token'))}`
  } });
};

const getAllPublications = (reqPayload) => {
  return axios.get(API_URL + "getAllPublications", reqPayload);
}

const getPublicationByUser = (id, reqPayload) => {
  return axios.get(API_URL + `get-Publication/${id}`, {
    params: reqPayload,
    headers: {
      "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
  });
}

const changeUserStatus = (id, reqPayload) => {
  return axios.patch(API_URL + `change-Status/${id}`,   reqPayload,{
   
    headers: {
      "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
  });
}

const getUsersDetails = (reqPayload) => {
  return axios.get(API_URL + `get-users`, {
    params: reqPayload,
    headers: {
      "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
  });
}
const getUserById = (id) => {
  return axios.get(API_URL + `user/${id}`, {
    params: {},
    headers: {
      "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
  });
}

const getFacultyDetails = (reqPayload) => {
  return axios.get(API_URL + `get-faculty`, {
    params: reqPayload,
    headers: {
      "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
  });
}

const savePublication = (reqPayload) => {
  return axios.post(API_URL + `add-publication`, reqPayload, {
    headers: {
      "Authorization": `Bearer ${JSON.parse(localStorage.getItem('token'))}`
    }
  })
}

const uploadBulkPublications = (reqPayload) => {
  return axios.post(API_URL + "import-Publication", reqPayload,{ headers: {"Authorization" : `Bearer ${JSON.parse(localStorage.getItem('token'))}`} });
}

const UserService = {
  updateProfile,
  getAllPublications,
  uploadBulkPublications,
  getPublicationByUser,
  getUsersDetails,
  changeUserStatus,
  getFacultyDetails,
  savePublication,
  getUserById
}

export default UserService;
