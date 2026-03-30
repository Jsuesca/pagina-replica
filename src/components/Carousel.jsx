import { useState, useEffect } from "react";
import pan from "../assets/pan-artesanal.jpeg";
import horneados from "../assets/horneados.jpeg";
import postre from "../assets/postre-chocolate.jpg";

function Carousel() {
  const slides = [
    {
      img: pan,
      title: "Disfruta lo mejor del",
      subtitle: "pan artesanal",
      text: "Tradición, sabor y calidad en cada producto.",
    },
    {
      img: horneados,
      title: "Horneados recién",
      subtitle: "preparados",
      text: "Perfectos para acompañar tu café.",
    },
    {
      img: postre,
      title: "Postres irresistibles",
      subtitle: "para cada ocasión",
      text: "Endulza tu día con nuestras especialidades.",
    },
  ];

  const [current, setCurrent] = useState(0);




  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[550px] overflow-hidden">


      <img
        src={slides[current].img}
        className="absolute w-full h-full object-cover transition-all duration-700"
      />


      <div className="absolute inset-0 bg-black/40"></div>


      <div className="absolute inset-0 flex flex-col justify-center items-end text-right px-16 text-white max-w-xl ml-auto">

        <h2 className="text-5xl font-bold mb-6">
          {slides[current].title}
        </h2>

        <h3 className="text-4xl text-yellow-400 mb-6">
          {slides[current].subtitle}
        </h3>

        <p className="text-3x1 mb-6">
          {slides[current].text}
        </p>

        <button className="bg-orange-500 px-8 py-4 rounded-full text-xl font-semibold hover:bg-orange-800 transition">
          Ver productos
        </button>
      </div>





      <button
        onClick={() =>
          setCurrent((current - 1 + slides.length) % slides.length)
        }
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white/50 text-black w-10 h-10 flex items-center justify-center rounded-full shadow hover:bg-white transition"
      >
        ‹
      </button>

      <button
        onClick={() => setCurrent((current + 1) % slides.length)}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white/50 text-black w-10 h-10 flex items-center justify-center rounded-full shadow hover:bg-white transition"
      >
        ›
      </button>





      <div className="absolute bottom-5 w-full flex justify-center gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${i === current ? "bg-white" : "bg-white/50"
              }`}
          ></div>
        ))}
      </div>

    </section>
  );
}

export default Carousel;