import { FaFacebookF, FaInstagram, FaTiktok, FaPinterest } from "react-icons/fa";

function Contact() {
  return (
    <section className="bg-[#5a2d1a] text-white px-10 py-10">
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">

        {/* 🔹 IZQUIERDA */}
        <div>

          <p className="mb-4 text-sm">
            Contiene sustancias o productos que pueden causar alergias o intolerancias:
          </p>

          <div className="flex gap-6 mb-6 text-center text-xs">
            <div>🌾<p>Trigo</p></div>
            <div>🥛<p>Lácteos</p></div>
            <div>🥜<p>Maní</p></div>
            <div>🥚<p>Huevo</p></div>
            <div>🌰<p>Frutos secos</p></div>
          </div>

          <div className="text-sm space-y-1">
            <p className="font-bold mb-2">CONTÁCTANOS</p>
            <p>RAZÓN SOCIAL: LOS HORNITOS</p>
            <p>PASTELERÍA Y PANADERÍA S.A.S</p>
            <p>NIT 900.121.964-9</p>
            <p>DIRECCIÓN: AV. AMÉRICAS #44 - 23</p>
            <p>BOGOTÁ COLOMBIA</p>
            <p>TEL: (601)7561515</p>
            <p>servicioalcliente@hornitos.co</p>
          </div>

        </div>

        {/* 🔹 DERECHA */}
        <div className="flex flex-col items-end justify-start gap-4">
          
          <h3 className="text-orange-400 text-xl font-semibold">
            Síguenos
          </h3>

          <div className="flex gap-4 text-xl">
            <FaPinterest className="cursor-pointer hover:text-orange-400" />
            <FaTiktok className="cursor-pointer hover:text-orange-400" />
            <FaFacebookF className="cursor-pointer hover:text-orange-400" />
            <FaInstagram className="cursor-pointer hover:text-orange-400" />
          </div>

          <div className="text-sm text-right">
            <p>¿Problemas con tu domicilio?</p>
            <p>Llámanos al (601)7561515</p>
          </div>

        </div>
      </div>

      

    </section>
  );
}

export default Contact;