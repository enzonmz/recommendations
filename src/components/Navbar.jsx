import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-4 w-full">
      <div className="flex items-center justify-between relative">
        {/* Логотип слева */}
        <div className="text-2xl font-bold text-indigo-600 z-10">
          <Link to="/">Logo</Link>
        </div>

        {/* Центрированное меню (десктоп) */}
        <div className="hidden md:absolute md:left-1/2 md:transform md:-translate-x-1/2 md:flex space-x-8 text-gray-700 font-medium text-base">
          <Link to="/" className="hover:text-indigo-600 transition whitespace-nowrap">Главная</Link>
          <Link to="/about" className="hover:text-indigo-600 transition whitespace-nowrap">О нас</Link>
          <Link to="/features" className="hover:text-indigo-600 transition whitespace-nowrap">Функционал</Link>
          <Link to="/auth" className="hover:text-indigo-600 transition whitespace-nowrap">Войти</Link>
        </div>

        {/* Бургер-меню (мобилка) */}
        <div className="md:hidden z-10">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-indigo-600 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Мобильное меню (под логотипом) */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2 text-gray-700 font-medium px-4">
          <Link to="/" className="block hover:text-indigo-600" onClick={() => setIsOpen(false)}>Главная</Link>
          <Link to="/about" className="block hover:text-indigo-600" onClick={() => setIsOpen(false)}>О нас</Link>
          <Link to="/features" className="block hover:text-indigo-600" onClick={() => setIsOpen(false)}>Функционал</Link>
          <Link to="/auth" className="block hover:text-indigo-600" onClick={() => setIsOpen(false)}>Войти</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;