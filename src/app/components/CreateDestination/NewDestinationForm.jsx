"use client";
import React, { useState } from "react";
import Button from "@/app/components/Button/Button";
import { FaFolder } from "react-icons/fa";

const NewDestinationForm = () => {
    return (
        <div className="w-full sm:w-72 sm:h-9/11 lg:w-96 lg:h-9/11 xl:w-full xl:h-9/11 bg-gray-300 border-2 rounded-xl border-yellow-500">
            <h1 className="text-2xl text-center text-pink-500">Crear Destino</h1>
            <div className="flex flex-row items-center justify-center bg-white h-full rounded-xl">
                <div className="bg-white h-full w-1/2">
                    <div className="m-6">
                        <label
                            htmlFor="small-input"
                            className="block mb-2 text-sm text-blue-500 dark:text-white font-semibold mt-2"
                        >
                            Título
                        </label>
                        <input
                            type="text"
                            id="small-input"
                            className="block h-full w-full p-2 text-blue-500 border border-gray-300 rounded-full  bg-yellow-100 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 input-height"
                        />

                        <label
                            htmlFor="small-input-2"
                            className="block mb-2 text-sm font-semibold text-blue-500 dark:text-white mt-2"
                        >
                            Ubicación
                        </label>
                        <input
                            type="text"
                            id="small-input-2"
                            className="block w-full p-2 text-blue-500 border border-gray-300 rounded-full bg-yellow-100 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 input-height"
                        />

                        <label
                            htmlFor="multiple_files"
                            className="block mb-1 text-sm font-semibold text-blue-500 dark:text-white mt-2"
                        >
                            Upload multiple files
                        </label>
                        <input
                            className="input-file"
                            id="multiple_files"
                            type="file"
                            multiple
                        />

                        <div className="flex flex-row mt-9">
                            <Button type="submit" text="Aceptar" isPrimary={true} />
                            <Button text="Cancelar" isPrimary={false} />
                        </div>
                    </div>
                </div>
                <div className="w-1/2 bg-white h-96 p-2 rounded-xl">
                    <label
                        htmlFor="message"
                        className="block my-2 text-sm font-semibold text-blue-500 dark:text-white m-1.5"
                    >
                        ¿Por qué quieres viajar allí?
                    </label>
                    <textarea
                        id="message"
                        rows="4"
                        className=" p-2 my-0 h-80 w-full text-sm text-gray-900 bg-yellow-100 rounded-2xl border  border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-yellow-200 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 textarea-height"
                        placeholder="Escribe tu mensaje aquí..."
                    ></textarea>
                </div>
            </div>
        </div>
    );
};

export default NewDestinationForm;
