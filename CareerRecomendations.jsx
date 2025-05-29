import { useState } from 'react';
import { motion } from 'framer-motion';

const CareerRecommendations = () => {
  const [formData, setFormData] = useState({
    skills: '',
    interests: '',
    experience: '',
  });
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const query = new URLSearchParams(formData).toString();
      const response = await fetch(`/recommendations?${query}`);
      const data = await response.json();
      setRecommendations(data.recommendations || []);
    } catch (err) {
      console.error('Ошибка при получении рекомендаций:', err);
      setRecommendations([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white p-6 sm:p-8 lg:p-10 rounded-2xl shadow-2xl w-full max-w-5xl mx-auto"
      >
        <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-center text-gray-800">
          Получение рекомендаций по профессиям
        </h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="sm:col-span-2 lg:col-span-3">
            <label className="block text-sm font-medium text-gray-700 mb-1">Навыки</label>
            <input
              type="text"
              name="skills"
              placeholder="Введите навыки через запятую (например, Java, Python)"
              value={formData.skills}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Интересы</label>
            <input
              type="text"
              name="interests"
              placeholder="Например: ИИ, веб-разработка"
              value={formData.interests}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Опыт</label>
            <input
              type="text"
              name="experience"
              placeholder="Например: 2 года работы, колледж"
              value={formData.experience}
              onChange={handleChange}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-200"
            />
          </div>

          <div className="sm:col-span-2 lg:col-span-3 text-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 transition duration-200"
            >
              {loading ? 'Загрузка...' : 'Получить рекомендации'}
            </button>
          </div>
        </form>

        {recommendations.length > 0 && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">
              Рекомендованные профессии:
            </h2>
            <ul className="list-disc list-inside text-lg text-gray-700">
              {recommendations.map((job, index) => (
                <li key={index}>{job}</li>
              ))}
            </ul>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default CareerRecommendations;
