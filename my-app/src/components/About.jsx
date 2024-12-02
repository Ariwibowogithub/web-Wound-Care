// eslint-disable-next-line no-unused-vars
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";

const About = () => {
  return (
    <div>
      <section className="flex bg-gray-50 py-20 px-10 ">
      <div className="container mx-auto max-w-7xl text-center">
        <p className="text-2xl text-backgroundColor mt-8">
          Tentang Kami
        </p>
        <h2 className="text-bold mb-3">Our mission is to provide modern and professional health services.</h2>
        <div className="flex justify-center gap-12">
          <div className="w-1/2">
            <img
              src="https://via.placeholder.com/500"
              alt="About Image"
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="w-1/2 text-left">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Kami adalah perusahaan yang inovatif.
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Kami menyediakan solusi terbaik dalam teknologi dan layanan untuk membantu
              memajukan bisnis Anda. Dengan pengalaman lebih dari 10 tahun, kami terus
              berinovasi untuk memberikan yang terbaik.
            </p>
            <p className="text-lg text-gray-600">
              Dengan tim yang berdedikasi dan penuh semangat, kami selalu siap untuk
              menghadapi tantangan baru dan mencapai keberhasilan bersama klien kami.
            </p>
          </div>
        </div>
      </div>
    </section>

    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Title Section */}
        <h2 className="text-4xl font-semibold text-gray-800">Nilai Perusahaan</h2>
        <p className="mt-4 text-lg text-gray-600">Kami berkomitmen untuk memberikan yang terbaik dengan nilai-nilai berikut yang kami pegang teguh dalam setiap langkah kami.</p>

        {/* Section Value Columns */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-500 ease-in-out transform hover:scale-105 hover:opacity-90">
            <div className="flex justify-center mb-4">
              <i className="fas fa-handshake text-4xl text-blue-500"></i> {/* Icon Integritas */}
            </div>
            <h3 className="text-xl font-semibold text-gray-700">Integritas</h3>
            <p className="mt-4 text-gray-500">Kami percaya bahwa integritas adalah dasar dari setiap keputusan dan tindakan yang kami ambil. Kami selalu berusaha untuk jujur dan transparan dalam segala hal.</p>
          </div>
          
          {/* Column 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-500 ease-in-out transform hover:scale-105 hover:opacity-90">
            <div className="flex justify-center mb-4">
              <i className="fas fa-lightbulb text-4xl text-yellow-500"></i> {/* Icon Inovasi */}
            </div>
            <h3 className="text-xl font-semibold text-gray-700">Inovasi</h3>
            <p className="mt-4 text-gray-500">Kami mendorong inovasi dalam segala hal yang kami lakukan, dengan terus mencari cara-cara baru untuk meningkatkan kualitas dan memberikan solusi terbaik kepada pelanggan kami.</p>
          </div>
          
          {/* Column 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-500 ease-in-out transform hover:scale-105 hover:opacity-90">
            <div className="flex justify-center mb-4">
              <i className="fas fa-users text-4xl text-green-500"></i> {/* Icon Kolaborasi */}
            </div>
            <h3 className="text-xl font-semibold text-gray-700">Kolaborasi</h3>
            <p className="mt-4 text-gray-500">Kami percaya bahwa kerja sama tim yang solid adalah kunci kesuksesan. Kami selalu berusaha untuk saling mendukung dan bekerja bersama untuk mencapai tujuan bersama.</p>
          </div>

          {/* Column 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-500 ease-in-out transform hover:scale-105 hover:opacity-90">
            <div className="flex justify-center mb-4">
              <i className="fas fa-leaf text-4xl text-green-700"></i> {/* Icon Keberlanjutan */}
            </div>
            <h3 className="text-xl font-semibold text-gray-700">Keberlanjutan</h3>
            <p className="mt-4 text-gray-500">Kami berkomitmen untuk menciptakan solusi yang berkelanjutan dan ramah lingkungan, serta memberikan dampak positif bagi masyarakat dan planet ini.</p>
          </div>

          {/* Column 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-500 ease-in-out transform hover:scale-105 hover:opacity-90">
            <div className="flex justify-center mb-4">
              <i className="fas fa-check-circle text-4xl text-blue-600"></i> {/* Icon Kualitas */}
            </div>
            <h3 className="text-xl font-semibold text-gray-700">Kualitas</h3>
            <p className="mt-4 text-gray-500">Kami selalu berusaha untuk mencapai standar kualitas tertinggi dalam produk dan layanan kami, demi kepuasan pelanggan yang maksimal.</p>
          </div>

          {/* Column 6 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-500 ease-in-out transform hover:scale-105 hover:opacity-90">
            <div className="flex justify-center mb-4">
              <i className="fas fa-globe-americas text-4xl text-indigo-500"></i> {/* Icon Tanggung Jawab Sosial */}
            </div>
            <h3 className="text-xl font-semibold text-gray-700">Tanggung Jawab Sosial</h3>
            <p className="mt-4 text-gray-500">Kami berusaha untuk menjadi perusahaan yang bertanggung jawab, memberikan kontribusi positif bagi masyarakat dan mendukung berbagai program sosial yang bermanfaat.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
 
  );
};

export default About;
