import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.jsx';
import ProfileForm from './components/CareerRecomendations.jsx';
import Footer from './components/Footer.jsx'; // Импортируем Footer

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://bot.jaicp.com/chatwidget/BEKMTByl:272687699a82d078a96e63928d0a7fb913ebca68/justwidget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        {/* Навигационная панель */}
        <Navbar />
        {/* Основной контент */}
        <main className="flex-grow pt-16 px-4 sm:px-6 lg:px-8">

            <Routes>
              {/* Перенаправление с / на /profile */}
              <Route path="/" element={<Navigate to="/profile" replace />} />
              <Route path="/profile" element={<ProfileForm />} />
              {/* Остальные маршруты для Navbar */}
              <Route path="/about" element={<div className="p-4">О нас</div>} />
              <Route path="/features" element={<div className="p-4">Функционал</div>} />
              <Route path="/auth" element={<div className="p-4">Войти</div>} />
            </Routes>

        </main>
        {/* Футер */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;