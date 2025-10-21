import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import MyInfo from './pages/MyInfo';
import ClienteDetalle from './pages/ClienteDetalle';
import PaginaServicio from './pages/PaginaServicio';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

function App() {
  const navigate = useNavigate(); 

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Bienvenido</h1>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 font-sm font-sans font-semibold"
        onClick={() => navigate("/dashboard")} 
      >
        Ir al Dashboard
      </button>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <BrowserRouter>
      {/* ToastContainer visible en toda la app */}
      <ToastContainer 
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/my-info" element={<MyInfo />} />
        <Route path="/cliente/:id" element={<ClienteDetalle />} />
        <Route path="/servicio/:id" element={<PaginaServicio />} />
      </Routes>
    </BrowserRouter>
  );
}
