'use client'
import { createContext, useContext, useState } from 'react';
import axios from '../services/axios';


const AuthContent = createContext({
	user: null,
	setUser: () => {},
	csrfToken: () => {},
	can: () => false,
    hasRole: () => false,
});

export const AuthProvider = ({ children }) => {
	const [user, _setUser] = useState(
		JSON.parse(localStorage.getItem('user')) || null
	);

	const getToken = () => {
		return localStorage.getItem('token');
	};
	

	
	const setUser = (userData) => {
		if (userData) {
			const { token, ...user } = userData;
			localStorage.setItem('user', JSON.stringify(user));
			localStorage.setItem('token', token);
			_setUser(user);
		} else {
			localStorage.removeItem('user');
			localStorage.removeItem('token'); // Elimina el token del localStorage al cerrar sesión
            _setUser(null);
		}
	};

	const can = (permission) => {
        return (user?.permissions || []).includes(permission);
    };

    const hasRole = (role) => {
        return (user?.roles || []).includes(role);
    };

	const csrfToken = async () => {
		await axios.get('http://localhost:8000/sanctum/csrf-cookie');
		return true;
	};

	return (
		<AuthContent.Provider value={{ user, setUser, csrfToken, can, hasRole, getToken }}>
			{children}
		</AuthContent.Provider>
	);
};

export const useAuth = () => {
	return useContext(AuthContent);
};