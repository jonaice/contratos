'use client';

import React from "react";
import Square from "@/components/shared/square"; // Asegúrate de importar tu logo

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="relative flex justify-center items-center">
        {/* Círculo giratorio */}
        <div className="absolute w-32 h-32 border-4 border-t-transparent border-primary rounded-full animate-spin"></div>

        {/* Logo en el centro */}
        <div className="relative z-10">
          <Square />
        </div>
      </div>
    </div>
  );
};

export default Spinner;
