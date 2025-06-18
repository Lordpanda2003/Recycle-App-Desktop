import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Orders from './pages/order';
import Login from './pages/login';
import Sidebar from './components/Sidebar';
import RequireAuth from './components/RequireAuth';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={
            <RequireAuth>
              <div className="flex">
                <Sidebar />
                <main className="ml-48 p-6 overflow-y-auto"></main>
                <div className="flex-1 bg-gray-100 min-h-screen p-4">
                  <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/orders" element={<Orders />} />
                    {/* Autres routes protégées */}
                  </Routes>
                </div>
              </div>
            </RequireAuth>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
