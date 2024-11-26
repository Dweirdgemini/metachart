
const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md flex items-center justify-between">
      <div className="text-xl font-bold">MetaChart</div>
      <nav className="space-x-4">
        <a href="/" className="hover:text-blue-200">Home</a>
        <a href="/about" className="hover:text-blue-200">About</a>
        <a href="/services" className="hover:text-blue-200">Services</a>
        <a href="/contact" className="hover:text-blue-200">Contact</a>
      </nav>
      <div className="space-x-2">
        <button className="bg-blue-800 px-4 py-2 rounded-md text-white hover:bg-blue-700">Login</button>
        <button className="bg-transparent border-2 border-white px-4 py-2 rounded-md text-white hover:bg-blue-700">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
