import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experience';
import Technologies from './components/Technologies';
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={isDarkMode ? 'dark-theme' : 'light-theme'}>
      <Sidebar />
      <main className="flex-1 p-4 md:ml-96">
        <button
          onClick={toggleTheme}
          className="mb-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          {isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
        </button>
        <Hero />
        <About />
        <Projects />
        <Technologies />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;