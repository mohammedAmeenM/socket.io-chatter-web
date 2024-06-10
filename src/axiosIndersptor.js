import axios from "axios";

const api = axios.create({
    baseURL:"http://localhost:4000/api"
});

api.interceptors.request.use(function (request) {
    const token = localStorage.getItem('token');
    if (token) {
        request.headers['authorization'] = `${token}`;
    }else {
        console.warn("No token found, redirecting to login.");
         window.location.href = '/login';
    }
    return request;
  }, function (error) {
    return Promise.reject(error);
  });

api.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    if (error.response && error.response.status === 403) {
        console.error("Token verification failed, redirecting to login.");
         window.location.href = '/login'; 
    }
    return Promise.reject(error);
  });

  export default api ; 