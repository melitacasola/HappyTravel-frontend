import axios from "axios";


const urlAPI = "http://localhost:8000/";

axios.defaults.withCredentials=true;

axios.defaults.baseURL= urlAPI;

// axios.interceptors.request.use(config => {
//   const token = obtenerTokenDeLocalStorage(); // Obtén el token de localStorage o cookies
//   if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// }, error => {
//   return Promise.reject(error);
// });


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

export const logoutUser = async(token)=>{
  let config ={
      headers:{
        'Authorization' : `Bearer ${token}`,
      },
  };
  try {
    const response = await axios.delete('api/logout', config);
    
    return response.data; 
  } catch (error) {
      
      console.error('Error al realizar la solicitud de cierre de sesión:', error);
      throw error; 
  }
}




export const createDestination = async (destinationData, authToken) => {
  try {
  
    
    const response = await axios.post('/api/destinations', destinationData, {
      headers: {
        'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN'), // Incluye el token CSRF en el encabezado
        'Authorization': `Bearer ${authToken}` // Incluye el token de autenticación en el encabezado
      }
    })

    console.log(response,"response del axios")

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

