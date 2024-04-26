"use client";
import { useState, useEffect } from "react";
import { updateDestination, getDestinationId } from "../../services/axios";
import { useAuthContext } from "../../../contexts/authContext";
import axios from "axios";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";


const EditDestinationForm = ({ title }) => {

    const router = useRouter()
    const { getAuthToken } = useAuthContext();
    const pathname = usePathname().split("/");

    const [formData, setFormData] = useState({
        title: "",
        location: "",
        image: null,
        description: "",
    });

    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");
    const destinationId = pathname[3]

    useEffect(() => {
        const fetchDestination = async () => {
            try {

                const response = await getDestinationId(destinationId);

                setFormData({
                    title: response.attributes.title,
                    location: response.attributes.location,
                    image: response.attributes.image,
                    description: response.attributes.description,
                });
                setLoading(false);
            } catch (error) {
                console.error("Error fetching destination:", error);
            }
        };
        fetchDestination();
    }, [destinationId]);

    const handleImageChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        const formDataToSend = new FormData();
        formDataToSend.append("title", formData.title);
        formDataToSend.append("location", formData.location);
        formDataToSend.append("description", formData.description);
        formDataToSend.append("image", formData.image);

        updateDestination(destinationId, formDataToSend).then((res) => {

            router.push('/');
        })
            .catch((error) => {
                console.error(error.response);

                const errorMessage = error.response?.data?.message || "An error occurred.";
                console.error(errorMessage);
                setErrorMessage(errorMessage);
            });
    };

    return (
        <div className="border-4 rounded-3xl border-yellow-100 p-4 h-auto flex flex-col items-center justify-center mt-2 w-full">
            <h1 className="text-center text-2xl md:text-4xl text-pink-500">{title}</h1>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center border-t-2 border-pink-500 w-full my-3 mx-5 md:flex-row md:justify-center rounded-b-xl pr-1 text-lg"
            >
                <div className="w-full p-2">
                    <div className="md:mr-7">
                        <label
                            htmlFor="title"
                            className="block mb-2 text-xl text-blue-500 dark:text-white font-semibold font-jaldi"
                        >
                            Título
                        </label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}

                            id="title"
                            className="block w-full p-1.5 rounded-full bg-yellow-100 text-xs input-height shadow-[inset_0px_4px_4px_#00000040] placeholder:text-blue-500 placeholder:text-lg placeholder:font-light" placeholder="Escribe tu nombre..."
                            style={{ paddingTop: "15px", paddingLeft: "20px" }}
                        />

                        <label
                            htmlFor="location"
                            className="block mb-2 text-xl font-semibold text-blue-500 dark:text-white mt-2 font-jaldi"
                        >
                            Ubicación
                        </label>
                        <input
                            type="text"
                            name="location"
                            value={formData.location}
                            onChange={handleChange}

                            id="location"
                            className="block w-full p-1.5 rounded-full bg-yellow-100 text-xs input-height shadow-[inset_0px_4px_4px_#00000040] placeholder:text-blue-500 placeholder:text-lg placeholder:font-light"
                            placeholder="Escribe tu nombre..."
                            style={{ paddingTop: "15px", paddingLeft: "20px" }}
                        />
                        <label
                            htmlFor="image"
                            className="block pt-3 text-xl font-semibold text-blue-500 dark:text-white font-jaldi"
                        >
                            Imagen
                        </label>
                        <div className="relative inline-block h-auto w-full ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="absolute top-1/2 left-0 transform translate-y-[-1.3rem] fill-current text-white text-center text-xl bg-blue-600 rounded-l-full pl-2.5 pt-2 h-10 shadow-r-lg"
                                width="20%"
                                height="94%"
                                viewBox="0 0 24 24"
                                strokeWidth="1.6"
                                stroke="#fff"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path
                                    transform="scale(1.1) translate(-3, -4)"
                                    d="M5 4h4l3 3h7a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-11a2 2 0 0 1 2 -2"
                                />
                            </svg>
                            <input
                                id="image"
                                type="file"
                                name="image"
                                onChange={handleImageChange}

                                placeholder="Selecciona una imagen..."
                                className="bg-yellow-100 w-full h-10 rounded-full text-blue-500 p-0 shadow-[inset_0px_4px_4px_#00000040]"
                            />

                        </div>

                        <div className="hidden md:flex flex-row mt-8 gap-1">

                            <button
                                type="submit"
                                text="Aceptar"
                                className="text-bg-color bg-primary px-8 py-1 rounded-full cursor-pointer text-xl hover:bg-opacity-80 transition-colors duration-300 flex"
                            >
                                Aceptar
                            </button>
                            <Link href={`/`}>
                                <button
                                    className="text-bg-color bg-secondary px-8 py-1 rounded-full cursor-pointer text-xl hover:bg-opacity-80 transition-colors duration-300 flex"
                                >
                                    Cancelar
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="m-0 w-full">
                    <label
                        htmlFor="description"
                        className="block my-2 text-xl font-semibold font-jaldi text-blue-500 dark:text-white m-1.5 mt-3.5"
                    >
                        ¿Por qué quieres viajar allí?
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}

                        rows="3"
                        className="pt-2 pl-4 my-6 mt-1 h-80 w-full text-sm text-text-color bg-yellow-100 rounded-3xl shadow-[inset_0px_4px_4px_#00000040] textarea-height font-jaldi placeholder:text-blue-500 placeholder:text-lg placeholder:font-light"
                        placeholder="descripcion..."
                    ></textarea>
                </div>
                <div className=" md:hidden flex flex-row gap-2 mt-6">
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

export default EditDestinationForm;
