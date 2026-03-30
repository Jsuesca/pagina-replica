import industria from "../assets/INDUSTRIA.png";

function Footer() {
  return (
    <footer className="bg-[#5a2d1a] text-white px-10 py-6">
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between text-sm">
        
        
        <div className="flex items-center gap-4">
          <img
            src={industria}
            alt="Industria y Comercio"
            className="h-10"
          />
        </div>

        
        <p className="mt-4 md:mt-0 text-white/80">
          Creado por Grupo 7
        
        </p>

      </div>

    </footer>
  );
}

export default Footer;