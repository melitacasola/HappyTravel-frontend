"use client";
import { useState } from "react";
import { createDestination } from "../../services/axios";
import { useRouter } from "next/navigation";
import Link from "next/link";


const NewDestinationForm = ({ title }) => {

  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    location: "",
    image: null,
    description: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

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
    formDataToSend.append("image", formData.image);
    formDataToSend.append("description", formData.description);

    createDestination(formDataToSend).then((res) => {

      router.push('/');
    })
      .catch((error) => {
        console.error(error.response.data.message);

        setErrorMessage(error.response.data.message);
      });
  };

  return (
    <div className="w-3/12 sm:w-72 sm:h-9/11 lg:w-96 lg:h-9/11 xl:w-full xl:h-9/11 bg-white border-4 rounded-3xl border-yellow-100 p-5">
      <h1 className="text-center text-4xl text-secondary pb-3">{title}</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-row items-center justify-center bg-white h-full rounded-b-xl pr-1 border-t-2 border-secondary text-lg"
      >
        <div className="bg-white h-full w-1/2 ">
          <div className="mr-8">
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
              className="block w-full p-1.5 rounded-full bg-yellow-100 text-lg input-height shadow-[inset_0px_4px_4px_#00000040] placeholder:text-blue-500 placeholder:text-lg placeholder:font-light"
              placeholder="Escribe tu nombre..."
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
              className="block w-full p-1.5 rounded-full bg-yellow-100 text-lg input-height shadow-[inset_0px_4px_4px_#00000040] placeholder:text-blue-500 placeholder:text-lg placeholder:font-light"
              placeholder="Escribe tu localizacion..."
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
                alt='none'
                viewBox="0 0 24 24"
                strokeWidth="1.6"
                stroke="#fff"
                fill="bg-yellow-100"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {/* <path stroke="none" d="M0 0h24v24H0z" fill="none" /> */}
                <path
                  fill="bg-yellow-100"
                  className="border-yellow-100 text-yellow-100"
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

            <div className="flex flex-row flex-wrap items-end mt-12 gap-1">
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
        <div className="w-1/2 bg-white h-96 p-2 rounded-xl">
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
            className="pt-2 pl-4 my-6 mt-1 h-80 w-full text-xl text-text-color bg-yellow-100 rounded-3xl shadow-[inset_0px_4px_4px_#00000040] textarea-height font-jaldi placeholder:text-blue-500 placeholder:text-xl placeholder:font-light"
            placeholder="Escribe tu nombre..."
          ></textarea>
        </div>
      </form>
      {errorMessage && <p className="tu-clase-error">{errorMessage}</p>}
    </div>
  );
};

export default NewDestinationForm;
