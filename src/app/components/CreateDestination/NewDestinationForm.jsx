'use client'
import React, { useState } from 'react';

const NewDestinationForm = () => {

    return (
        <div className='w-96 h-80 sm:w-72 sm:h-96 lg:w-96 lg:h-120 xl:w-full xl:h-144 bg-gray-300 border-2 border-yellow-200 rounded-lg'>
  <h1 className='text-2xl text-center text-pink-500'>Crear Destino</h1>
  <div className="flex flex-row items-center justify-center bg-white h-full">
    <div className="bg-white h-full w-1/2">
      <div className="m-6">
        <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-blue-500 dark:text-white mt-2">
          Small input
        </label>
        <input
          type="text"
          id="small-input"
          className="block w-full p-2 text-blue-500 border border-gray-300 rounded-full  bg-yellow-100 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 input-height"
        />

        <label htmlFor="small-input-2" className="block mb-2 text-sm font-medium text-blue-500 dark:text-white mt-2">
          Small input
        </label>
        <input
          type="text"
          id="small-input-2"
          className="block w-full p-2 text-blue-500 border border-gray-300 rounded-full bg-yellow-100 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 input-height"
        />

        <label htmlFor="multiple_files" className="block mb-2 text-sm font-medium text-blue-500 dark:text-white mt-2">
          Upload multiple files
        </label>
        <input
          className="block w-full text-sm text-gray-900 border border-gray-300 rounded-full cursor-pointer bg-yellow-100 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 input-height"
          id="multiple_files"
          type="file"
          multiple
        />
        <div className='flex items-center justify-around mt-6'>
          <button className='h-5 w-10 text-sm bg-green-400 rounded-full button-height'>Aceptar</button>
          <button className='h-5 w-10 text-sm bg-red-600 rounded-full text-white button-height'>Cancelar</button>
        </div>
      </div>
    </div>
    <div className="bg-slate-600 h-full w-1/2">
      <label htmlFor="message" className="block mb-2 text-sm font-medium  text-gray-900 dark:text-white">Your message</label>
      <textarea
        id="message"
        rows="4"
        className="block p-2.5 w-10/11 text-sm text-gray-900 bg-yellow-100 rounded-lg border m-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-yellow-200 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 textarea-height"
        placeholder="Write your thoughts here..."
      ></textarea>
    </div>
  </div>
</div>


    );
};

export default NewDestinationForm;