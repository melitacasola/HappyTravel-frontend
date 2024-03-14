import axios from "axios";

const urlAPI = "http://localhost:8000/";

axios.defaults.withCredentials=true;
axios.defaults.baseURL= urlAPI
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

export const createDestination = async (destinationData) => {
  try {
    console.log(destinationData);
    const response = await axios.post(`api/destinations`, destinationData);
    console.log(response,"response en el axios")
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateDestination = async (destinationId, destinationData) => {
  try {
    const response = await axios.post(`api/destinations/${destinationId}`, destinationData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// delete destination

export const deleteDestination = async (destinationId) => {
  try {
    const response = await axios.delete(`api/destinations/${destinationId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

