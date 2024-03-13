import axios from "axios";
import { getSessionData } from "../utils/sessionsUtils";

const urlAPI = "http://localhost:8000/api";

const api = axios.create({
  baseURL: urlAPI,
  withCredentials: true, // Habilitar el envío de cookies en las solicitudes
});

export const getDestinations = async (page) => {
  try {
    const response = await api.get(`/destinations?page=${page}`);

    return response.data.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await api.post(`/register`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const loginUser = async (userData) => {
  try {
    const response = await api.post(`/login`, userData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const createDestination = async (destinationData) => {
  try {
    const authToken = await getSessionData(); // Obteniendo directamente el token de acceso
    console.log(authToken, 'auth token');
    
    if (!authToken) {
      throw new Error("Token de autenticación no encontrado en la sesión.");
    }
    const response = await api.post(`/destinations`, destinationData, {
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    });
    console.log(response.data, 'response.data');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const updateDestination = async (destinationId, destinationData) => {
  try {
    const response = await api.post(`/destinations/${destinationId}`, destinationData);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// delete destination

export const deleteDestination = async (destinationId) => {
  try {
    const response = await api.delete(`/destinations/${destinationId}`);
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};
