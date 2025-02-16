'use client';

import React from 'react';

const IconFull = () => {
  return (
    <div className="flex items-center bg-[#0A1A40] p-2">
      {/* Logo */}
      <div className="relative w-20 h-16 flex justify-center items-center">
        {/* Borde exterior ovalado */}
        <div className="absolute w-full h-full border-4 border-white rounded-2xl flex justify-center items-center bg-[#0A1A40]">
          {/* Área interna */}
          <div className="w-4/5 h-3/5 bg-[#0A1A40] rounded-md flex justify-center items-center"></div>
        </div>

        {/* Rectángulos laterales */}
        <div className="absolute left-3 w-6 h-8 bg-[#0A1A40] border-4 border-white rounded-md"></div>
        <div className="absolute right-3 w-6 h-8 bg-[#0A1A40] border-4 border-white rounded-md"></div>

        {/* Rectángulo central */}
        <div className="absolute w-9 h-9 bg-[#0A1A40] border-4 border-white rounded-md flex justify-center items-center">
          {/* Cuadro interno */}
          <div className="w-4 h-4 bg-[#0A1A40] border-4 border-white rounded-sm"></div>
        </div>
      </div>
    </div>
  );
};

export default IconFull;