import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, List, Map, MapPin, Settings, Menu } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { to: '/', label: 'Accueil', icon: <Home size={18} /> },
    { to: '/orders', label: 'Commandes', icon: <List size={18} /> },
    { to: '/map', label: 'Carte', icon: <Map size={18} /> },
    { to: '/sub-map', label: 'Sous-carte', icon: <MapPin size={18} /> },
  ];

  return (
    <>
      {/* Mobile toggle button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-white p-2 rounded shadow"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu size={24} />
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-white border-r shadow-sm p-6 z-40 flex flex-col`}
      >
        {/* Title */}
        <div className="text-2xl font-bold text-blue-600 mb-10 tracking-wide">
          ♻️ Recyto
        </div>

        {/* Main Navigation */}
        <nav className="flex flex-col space-y-2 flex-grow">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-all 
                ${
                  location.pathname === item.to
                    ? 'bg-blue-100 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
            >
              {item.icon}
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Settings at bottom */}
        <div className="pt-6 border-t">
          <Link
            to="/settings"
            onClick={() => setIsOpen(false)}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm font-medium transition-all 
              ${
                location.pathname === '/settings'
                  ? 'bg-blue-100 text-blue-600'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
          >
            <Settings size={18} />
            Paramètres
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
