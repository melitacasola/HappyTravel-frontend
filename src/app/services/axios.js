import axios from "axios";

const urlAPI = "http://localhost:8000/api";

export const getDestinations = async () => {
  try {
    const response = await axios.get(`${urlAPI}/destinations`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

