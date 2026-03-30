function Navbar() {
  return (
    <nav className="bg-[#5a2d1a] text-white flex items-center justify-between px-10 py-5">
      
      
      <div className="flex items-center gap-2">
        <span className="text-5xl font-bold">Hornitos</span>
      </div>

      
      <ul className="hidden md:flex gap-16 text-4xl font-semibold">
        <li className="cursor-pointer hover:underline">Menú</li>
        <li className="cursor-pointer hover:underline">Pedidos Programados</li>
        <li className="cursor-pointer hover:underline">Visítanos</li>
        <li className="cursor-pointer hover:underline">Contáctanos</li>
      </ul>

      
      <div className="hidden md:flex items-center bg-white rounded-full px-4 py-1">
        <input
          type="text"
          placeholder="¿Tengo antojos de...?"
          className="outline-none text-black px-2 w-48"
        />
        <span className="text-black">🔍</span>
      </div>

    </nav>
  );
}

export default Navbar;