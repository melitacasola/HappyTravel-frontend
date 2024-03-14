'use server'
import { cookies } from 'next/headers';

const encrypt = (data) => {
    const encryptedData = btoa(data);
    return encryptedData;
};

const decrypt = (encryptedData) => {
    const decryptedData = atob(encryptedData);
    return decryptedData;
};

export const setSessionCookie = (sessionData) => {
    const encryptedSessionData = JSON.stringify(sessionData); 
    console.log(sessionData, 'sesion data');
    
    cookies().set('authTokens', encryptedSessionData, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        maxAge: 60 * 60 * 24 * 7, 
        path: '/',
    });

};



export const getSessionData = () => {
    const encryptedSessionData = cookies().get('authTokens');
    if (encryptedSessionData) {
      const sessionData = JSON.parse(decrypt(encryptedSessionData));
      return sessionData;
    }
    return null;
  };
  

export const logout = (req) => {
    cookies(req).delete('authTokens')
};