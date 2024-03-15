"use client";
import { useState } from "react";
import { createDestination } from "../../services/axios";
import { useAuthContext } from "../../../contexts/authContext";
import axios from "axios";
import { useRouter } from "next/navigation";

const NewDestinationMobile = ({ title }) => {
    const router = useRouter()
    const { getAuthToken } = useAuthContext();

    const [formData, setFormData] = useState({
        title: "",
        location: "",
        image: null,
        reason: ""
    });

    const [errorMessage, setErrorMessage] = useState("");

    const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const [fileAdded, setFileAdded] = useState(false); // Estado para controlar si se ha añadido un archivo

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
        setFileAdded(true); // Establecer que se ha añadido un archivo
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authToken = getAuthToken();
        console.log(authToken, 'authToken new destination,,, anda el Get');

        await axios
            .get("/sanctum/csrf-cookie")
            .then(async (response) => {

                try {
                    const formDataToSend = new FormData();
                    formDataToSend.append("title", formData.title);
                    formDataToSend.append("location", formData.location);
                    formDataToSend.append("image", formData.image);
                    formDataToSend.append("description", formData.description);

                    const responseData = await createDestination(formDataToSend, authToken);
                    setFileAdded(false)
                    router.push('/');
                    router.refresh()

                } catch (error) {

                    setErrorMessage("Error al crear el destino. Por favor, inténtalo de nuevo más tarde.");
                }
            })
            .catch((error) => {
                console.error(error);

                setErrorMessage("Error al obtener el token CSRF. Por favor, inténtalo de nuevo más tarde.");
            });
    };

    return (
        <div className="border-4 rounded-3xl border-yellow-100 p-4 h-auto flex flex-col items-center justify-center mt-2">
            <h1 className="text-2xl text-center text-pink-500 font-jaldi">{title}</h1>
            <form onSubmit={handleSubmit} className="flex flex-col items-center border-t-2 border-pink-500 w-full my-3 mx-5">
                <div className="w-full p-2">
                    <label
                        htmlFor="small-input"
                        className="block mb-2 text-xl text-blue-500 dark:text-white font-semibold font-jaldi mt-2"
                    >
                        Título
                    </label>
                    <input
                        type="text"
                        id="small-input"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className="block w-full p-3 rounded-full bg-yellow-100 text-xs input-height shadow-[inset_0px_4px_4px_#00000040] placeholder:text-blue-500 placeholder:text-lg placeholder:font-light"
                        placeholder="Escribe tu nombre..."
                    />

                    <label
                        htmlFor="small-input-2"
                        className="block mb-2 text-xl font-semibold text-blue-500 dark:text-white mt-2 font-jaldi"
                    >
                        Ubicación
                    </label>
                    <input
                        type="text"
                        id="small-input-2"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="block w-full p-3 rounded-full bg-yellow-100 text-xs input-height shadow-[inset_0px_4px_4px_#00000040] placeholder:text-blue-500 placeholder:text-lg placeholder:font-light"
                        placeholder="Escribe tu nombre..."
                    />

                    <label
                        htmlFor="small-input-2"
                        className="block pt-3 text-xl font-semibold text-blue-500 dark:text-white font-jaldi">
                        Imagen
                    </label>
                    <div className="relative inline-block h-auto w-full">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute top-1/2 left-0 transform translate-y-[-0.2rem] fill-current text-white text-center text-xl bg-blue-600 rounded-l-full pl-2.5 pt-2 h-10 shadow-r-lg"
                            width="25%"
                            height="98%"
                            viewBox="0 0 24 24"
                            strokeWidth="1.6"
                            stroke="#fff"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path transform="scale(1.2) translate(-2, -5)" d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2" />
                        </svg>
                        <input
                            id="image"
                            type="file"
                            name="image"
                            onChange={handleImageChange}
                            required
                            placeholder="Selecciona una imagen..."
                            className="bg-yellow-100 w-full h-10 rounded-full text-blue-500 p-0 shadow-[inset_0px_4px_4px_#00000040]"
                        />
                        {fileAdded && <p className="text-green-500 mt-2 text-sm">Archivo añadido correctamente</p>}
                    </div>

                </div>
                <div className="m-0 w-full">
                    <label
                        htmlFor="message"
                        className="block my-2 text-xl font-semibold font-jaldi text-blue-500 dark:text-white m-1.5 mt-3.5"
                    >
                        ¿Por qué quieres viajar allí?
                    </label>
                    <textarea
                        id="message"
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        rows="3"
                        className=" p-4 my-6 mx-0 mt-1 h-72 w-full text-sm text-gray-900 bg-yellow-100 rounded-3xl shadow-[inset_0px_4px_4px_#00000040] textarea-height font-jaldi placeholder:text-blue-500 placeholder:text-lg placeholder:font-light"
                        placeholder="Escribe tu mensaje aquí..."
                    ></textarea>
                </div>

                <div className="flex flex-row gap-2">
                    <button
                        type="submit"
                        text="Aceptar"
                        className="text-bg-color bg-primary px-8 py-1 rounded-full cursor-pointer text-xl hover:bg-opacity-80 transition-colors duration-300 flex"
                    >
                        Aceptar
                    </button>
                    <button
                        text="Cancelar"
                        className="text-bg-color bg-secondary px-8 py-1 rounded-full cursor-pointer text-xl hover:bg-opacity-80 transition-colors duration-300 flex"
                    >
                        Cancelar
                    </button>
                </div>
            </form>
            {errorMessage && <p className="tu-clase-error">{errorMessage}</p>}
        </div>

    );
};

export default NewDestinationMobile;
