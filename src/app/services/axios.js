import axios from "axios";
import Cookies from "js-cookie";

const urlAPI = "http://localhost:8000/";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = urlAPI;

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
    const response = await axios.post("/api/logout", authToken, {
      headers: {
        "X-XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
        Authorization: `Bearer ${authToken}`,
      },
    });

    if (response && response.data) {
      return response.data;
    } else {
      throw new Error("La respuesta no contiene datos");
    }
  } catch (error) {
    throw error;
  }
};

export const createDestination = async (destinationData, authToken) => {
  try {
    const response = await axios.post("/api/destinations", destinationData, {
      headers: {
        "X-XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
        Authorization: `Bearer ${authToken}`,
      },
    });
    if (response && response.data) {
      return response.data;
    } else {
      throw new Error("La respuesta no contiene datos");
    }
  } catch (error) {
    throw error;
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

export const deleteDestination = async (destinationId, authToken) => {
  try {
    const response = await axios.delete(`api/destinations/${destinationId}`, destinationId, {
      headers: {
        "X-XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
        Authorization: `Bearer ${authToken}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
