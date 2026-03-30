import cafe from "../assets/cafe.webp";
import capuccino from "../assets/capuccino.webp";
import donas from "../assets/donas.jpg";
import especial from "../assets/especial-del-dia.webp";
import galletas from "../assets/galletas.jpg";
import horneados from "../assets/horneados.jpeg";
import latte from "../assets/latte.webp";
import muffin from "../assets/muffin.jpg";
import panArtesanal from "../assets/pan-artesanal.jpeg";
import panIntegral from "../assets/pan-integral.jpeg";
import panQueso from "../assets/pan-de-queso.jpg";
import postreChocolate from "../assets/postre-chocolate.jpg";
import tortaChocolate from "../assets/torta-de-chocolate.jpg";

function Products() {
  const productos = [
    { nombre: "Pan artesanal", precio: "$5.000", img: panArtesanal },
    { nombre: "Capuccino", precio: "$4.000", img: capuccino },
    { nombre: "Postre de chocolate", precio: "$8.000", img: postreChocolate },
    { nombre: "Café", precio: "$3.000", img: cafe },

    { nombre: "Pan integral", precio: "$6.000", img: panIntegral },
    { nombre: "Donas", precio: "$3.500", img: donas },
    { nombre: "Torta de chocolate", precio: "$9.000", img: tortaChocolate },
    { nombre: "Horneados", precio: "$4.500", img: horneados },

    { nombre: "Pan de queso", precio: "$4.000", img: panQueso },
    { nombre: "Muffin", precio: "$3.000", img: muffin },
    { nombre: "Galletas", precio: "$2.500", img: galletas },
    { nombre: "Latte", precio: "$4.000", img: latte },

    { nombre: "Especial del día", precio: "$10.000", img: especial },
  ];

  return (
    <section className="py-12 bg-[#f5f5f5] text-center">

      
      <h2 className="text-5xl font-bold text-[#5a2d1a] mb-4">
        Menú
      </h2>

      
      <div className="w-3/4 h-[2px] bg-[#5a2d1a] mx-auto mb-10"></div>

      
      <div className="grid md:grid-cols-4 gap-10 max-w-7xl mx-auto px-6">
        {productos.slice(0, 12).map((p, i) => (
          <div key={i} className="group cursor-pointer">

            
            <div className="overflow-hidden rounded-md">
              <img
                src={p.img}
                alt={p.nombre}
                className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            
            <h3 className="mt-4 text-xl font-bold text-[#5a2d1a] uppercase tracking-wide group-hover:text-orange-500 transition">
              {p.nombre}
            </h3>

          </div>
        ))}
      </div>

      
      <div className="flex justify-center mt-14">
        <div className="group cursor-pointer w-80">

          <div className="overflow-hidden rounded-md">
            <img
              src={productos[12].img}
              alt={productos[12].nombre}
              className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <h3 className="mt-4 text-xl font-bold text-[#5a2d1a] uppercase tracking-wide group-hover:text-orange-500 transition">
            {productos[12].nombre}
          </h3>

        </div>
      </div>

    </section>
  );
}

export default Products;