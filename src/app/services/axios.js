import axios from "axios";
import Cookies from "js-cookie";

const urlAPI = "http://localhost:8000/";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = urlAPI;
axios.defaults.withXSRFToken = true;

export const getDestinations = async (page) => {
  try {
    const response = await axios.get(`api/destinations?page=${page}`);

    return response.data.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`api/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`api/login`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const logoutUser = async (authToken) => {
  try {

    const response = await axios.post("/api/logout", {}, {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    });
  } catch (error) {
    console.error(error.response.data);
  }
};

export const getDestinationId = async (destinationId) => {
  try {
    const response = await axios.get(`api/destinations/${destinationId}`);

    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};


export const createDestination = async (destinationData) => {
  try {
    const token = Cookies.get('laravel_session')
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data'
    }
    const response = await axios.post("/api/destinations", destinationData, {
      headers
    });

    return response.data;

  } catch (error) {
    console.error("Error al crear el destino:", error);
    throw error;
  }
};

export const updateDestination = async (destinationId, destinationData) => {
  try {
    const token = Cookies.get('laravel_session')
    const headers = {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data'
    }

    const response = await axios.post(`api/destinations/${destinationId}`, destinationData, {
      headers
    });
    return response.data;

  } catch (error) {
    console.error("Error al crear el destino:", error.response.data.message);
    throw error;
  }
};


export const deleteDestination = async (destinationId, authToken) => {
  try {
    const response = await axios.delete(`api/destinations/${destinationId}`, {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    });
    return response.data;
  } catch (error) {
    console.error("Error al eliminar el destino:", error);
    throw error;
  }
};
