function Navbar() {
    return (
      <nav className="fixed w-full bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          <h1 className="font-bold text-xl">TuNombre</h1>
          <div className="space-x-4">
            <a href="#about" className="hover:underline">About</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </div>
        </div>
      </nav>
    );
  }
  export default Navbar;
  