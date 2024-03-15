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
    //console.log("authToken:", authToken);

    const response = await axios.post("/api/logout", authToken, {
      headers: {
        "X-XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
        Authorization: `Bearer ${authToken}`,
      },
    });

    //console.log(response, "response del axios para hacer delete");

    if (response && response.data) {
      console.log("RESPONSE response.data del delete:", response.data);
      return response.data;
    } else {
      //console.error("La respuesta no contiene datos:", response);
      throw new Error("La respuesta no contiene datos");
    }
  } catch (error) {
    //console.error("Error al realizar la solicitud de cierre de sesión:", error);
    throw error;
  }
};

export const createDestination = async (destinationData, authToken) => {
  try {
    console.log("destinationData: comienzo del axios", destinationData);
    console.log("authToken: comienzo del axios,  token", authToken);

    const response = await axios.post("/api/destinations", destinationData, {
      headers: {
        "X-XSRF-TOKEN": Cookies.get("XSRF-TOKEN"),
        Authorization: `Bearer ${authToken}`,
      },
    });

    console.log(response, "response del axios... aca no entra....");

    if (response && response.data) {
      console.log("RESPONSE ?? qué llega?:", response.data);
      return response.data;
    } else {
      console.error("La respuesta no contiene datos:", response);
      throw new Error("La respuesta no contiene datos");
    }
  } catch (error) {
    console.error("Error al crear el destino:", error);
    throw error; // Asegúrate de lanzar correctamente el error para que sea capturado en la función handleSubmit
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
    console.error("Error al eliminar el destino:", error);
    throw error;
  }
};
