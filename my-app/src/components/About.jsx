// eslint-disable-next-line no-unused-vars
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";

const About = () => {
  return (
  <div>
  <section className="flex bg-gray-50 py-20 px-10">
  <div className="container mx-auto max-w-7xl text-center">
    <p className="font-sans font-semibold text-zinc-950 text-xl mt-8">
      Tentang Kami
    </p>
    <h2 className="font-bold mb-4 text-4xl text-backgroundColor leading-tight">
      Our Mission is to <span className="text-yellow-400"> Provide Modern and Professional </span> Health Services.
    </h2>
    <div className="flex flex-col md:flex-row justify-center gap-12">
      <div className="w-full md:w-1/2">
        <img
          src="src/assets/img/gbr_hero2.png"
          alt="About Image"
          className="w-full h-auto object-cover rounded-lg shadow-lg"
        />
      </div>

      <div className="w-full md:w-1/2 text-left">
        <h3 className="font-bold text-gray-700 mb-4">
          Fams Care adalah Klinik Kesehatan <span className="text-red-400 font-bold"> No.1 </span> Yang Modern dan Canggih di Semarang.
        </h3>
        <p className="text-lg text-gray-600 mb-6">
          Klinik Fams Care adalah klinik kesehatan yang mengutamakan inovasi dan kualitas dalam memberikan layanan medis kepada masyarakat. Dengan menggabungkan teknologi terkini dan pendekatan medis berbasis bukti, Klinik Fams Care hadir sebagai pilihan utama untuk perawatan kesehatan yang canggih dan modern. <br /> <br />
          <span className="font-bold">Layanan Unggulan: Perawatan Luka Modern </span> <br />
          Salah satu layanan unggulan di Klinik Fams Care adalah Perawatan Luka Modern, yang dirancang untuk memberikan hasil optimal bagi pasien dengan berbagai jenis luka, termasuk luka kronis, luka diabetik, luka pasca operasi, dan luka bakar. Perawatan ini menggunakan teknologi mutakhir, termasuk terapi Hyperbaric Oxygen Therapy (HBOT), laser terapi, serta teknik canggih lainnya yang terbukti secara klinis dapat mempercepat proses penyembuhan dan mengurangi risiko infeksi.
        </p>
        <p className="text-lg text-gray-600">
          Dengan tim yang berdedikasi dan penuh semangat, kami selalu siap untuk
          menghadapi tantangan baru dan mencapai keberhasilan bersama klien kami.
        </p>
      </div>
    </div>
  </div>
</section>


<section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            MARI BERGABUNG DENGAN MENJADI BAGIAN DARI KAMI !!!
          </h2>
          <p className="mb-8 text-lg">
            Fams Care adalah Klinik Kesehatan Umum yang Menyediakan Berbagai
            Layanan Kesehatan Untuk Masyarakat Dengan Mengutamakan Pelayanan
            Yang Profesional, Modern dan Canggih.
          </p>
        </div>
</section>

<section>    <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-gray-800">KEUNGGULAN KLINIK KESEHATAN FAMS CARE</h2>
        <p className="mt-4 text-lg text-gray-600">Kami berkomitmen untuk memberikan yang pelayanan terbaik dengan nilai-nilai berikut yang kami pegang teguh dalam setiap langkah kami.</p>

        
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-500 ease-in-out transform hover:scale-105 hover:opacity-90">
            <div className="flex justify-center mb-4">
              <i className="fas fa-handshake text-4xl text-blue-500"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-700">Integritas</h3>
            <p className="mt-4 text-gray-500">Kami percaya bahwa integritas adalah dasar dari setiap keputusan dan tindakan yang kami ambil. Kami selalu berusaha untuk jujur dan transparan dalam segala hal.</p>
          </div>
          
          
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-500 ease-in-out transform hover:scale-105 hover:opacity-90">
            <div className="flex justify-center mb-4">
              <i className="fas fa-lightbulb text-4xl text-yellow-500"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-700">Inovasi</h3>
            <p className="mt-4 text-gray-500">Kami mendorong inovasi dalam segala hal yang kami lakukan, dengan terus mencari cara-cara baru untuk meningkatkan kualitas dan memberikan solusi terbaik kepada pasien kami.</p>
          </div>
          
          
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-500 ease-in-out transform hover:scale-105 hover:opacity-90">
            <div className="flex justify-center mb-4">
              <i className="fas fa-users text-4xl text-green-500"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-700">Profesional</h3>
            <p className="mt-4 text-gray-500">Kami percaya bahwa kerja sama tim yang solid adalah kunci kesuksesan. Kami selalu berusaha untuk saling mendukung dan bekerja bersama untuk mencapai tujuan bersama.</p>
          </div>

         
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-500 ease-in-out transform hover:scale-105 hover:opacity-90">
            <div className="flex justify-center mb-4">
              <i className="fas fa-leaf text-4xl text-green-700"></i>
            </div>
            <h3 className="text-xl font-semibold text-gray-700">Keberlanjutan</h3>
            <p className="mt-4 text-gray-500">Kami berkomitmen untuk menciptakan solusi yang berkelanjutan dan ramah lingkungan, serta memberikan dampak positif bagi masyarakat.</p>
          </div>

          
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-500 ease-in-out transform hover:scale-105 hover:opacity-90">
            <div className="flex justify-center mb-4">
              <i className="fas fa-check-circle text-4xl text-blue-600"></i> 
            </div>
            <h3 className="text-xl font-semibold text-gray-700">Kualitas</h3>
            <p className="mt-4 text-gray-500">Kami selalu berusaha untuk mencapai standar kualitas tertinggi dalam produk dan layanan kami, demi kepuasan pasien yang maksimal.</p>
          </div>

         
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-500 ease-in-out transform hover:scale-105 hover:opacity-90">
            <div className="flex justify-center mb-4">
              <i className="fas fa-globe-americas text-4xl text-indigo-500"></i> 
            </div>
            <h3 className="text-xl font-semibold text-gray-700">Tanggung Jawab</h3>
            <p className="mt-4 text-gray-500">Kami berusaha untuk menjadi perusahaan yang bertanggung jawab, memberikan kontribusi positif bagi masyarakat dan mendukung berbagai program sosial yang bermanfaat.</p>
          </div>
        </div>
      </div>
    </div>
    </section>

    
    </div>
    
 
  );
};

export default About;
