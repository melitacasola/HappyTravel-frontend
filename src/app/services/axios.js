import axios from "axios";

const urlAPI = "http://localhost:8000/api";

export const getDestinations = async () => {
  try {
    const response = await axios.get(`${urlAPI}/destinations`);
    return response.data;
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    } else if (error.request) {
      throw "Network error. Please check your internet connection.";
    } else {
      throw "An unexpected error occurred. Please try again later.";
    }
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${urlAPI}/register`, userData);
    return response.data;
  } catch (error) {
    if (error.response) {
      
      throw error.response.data;
    } else if (error.request) {
      
      throw "Network error. Please check your internet connection.";
    } else {
      
      throw "An unexpected error occurred. Please try again later.";
    }
  }
};


export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${urlAPI}/login`, userData);
    return response.data;
  } catch (error) {
    if (error.response) {
      
      throw error.response.data;
    } else if (error.request) {
      
      throw "Network error. Please check your internet connection.";
    } else {
      
      throw "An unexpected error occurred. Please try again later.";
    }
  }
};


export const createDestination = async (destinationData) => {
  try {
      const response = await axios.post(`${BASE_URL}/destinations`, destinationData);
      return response.data;
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    } else if (error.request) {
      throw "Network error. Please check your internet connection.";
    } else {

      throw "An unexpected error occurred. Please try again later.";
    }
  }
};

export const updateDestination = async (destinationId, destinationData) => {
  try {
      const response = await axios.post(`${BASE_URL}/destinations/${destinationId}`, destinationData);
      return response.data;
  } catch (error) {
    if (error.response) {
      throw error.response.data;
    } else if (error.request) {
      throw "Network error. Please check your internet connection.";
    } else {
      throw "An unexpected error occurred. Please try again later.";
    }
  }
};