// eslint-disable-next-line no-unused-vars
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import image from "";

const Service = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
        <div className="flex flex-col lg:flex-row">
          {/* Bagian Gambar */}
          <div className="flex-1">
            <img
              src={image}
              alt="Service"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bagian Konten */}
          <div className="flex-1 p-6 flex flex-col justify-between">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Layanan Kami
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Kami menyediakan layanan yang inovatif dan berkualitas untuk
              memenuhi kebutuhan Anda. Dengan pengalaman bertahun-tahun, kami
              siap memberikan solusi terbaik untuk setiap masalah yang Anda
              hadapi.
            </p>
            <button className="self-start bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
