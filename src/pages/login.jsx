import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'; // Assure-toi d'avoir un logo dans /assets/

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('loggedIn', 'true');
      navigate('/');
    } else {
      alert("Identifiants incorrects");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-100 to-white">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-sm space-y-5 border border-green-200">
        <div className="flex justify-center">
          <img src={logo} alt="Recycle Logo" className="w-20 h-20 object-contain" />
        </div>
        <h2 className="text-2xl font-bold text-center text-green-700">Connexion SmartWaste</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
          >
            Se connecter
          </button>
        </form>
        <p className="text-center text-gray-500 text-xs">
          ♻️ Une initiative pour un monde plus propre.
        </p>
      </div>
    </div>
  );
}
