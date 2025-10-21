import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

export default function PaginaServicio() {
  const location = useLocation();
  const { servicio, clienteId } = location.state || {};
  const navigate = useNavigate();

  function convertirFecha(fechaTexto) {
    const meses = {
      Enero: "01",
      Febrero: "02",
      Marzo: "03",
      Abril: "04",
      Mayo: "05",
      Junio: "06",
      Julio: "07",
      Agosto: "08",
      Septiembre: "09",
      Octubre: "10",
      Noviembre: "11",
      Diciembre: "12",
    };

    const [dia, mesNombre, anio] = fechaTexto.split(" ");
    const mes = meses[mesNombre];
    return `${anio}-${mes}-${dia.padStart(2, "0")}`;
  }

  // Estados
  const [fecha, setFecha] = useState(convertirFecha(servicio.fecha));
  const [metodo, setMetodo] = useState(servicio.metodo_pago || "Efectivo");
  const [estado, setEstado] = useState(servicio.estado_pago || "Completo");
  const [tipo, setTipo] = useState(servicio.tipo)
  const [precio, setPrecio] = useState(servicio.precio)
  const [comentario, setComentario] = useState(servicio.comentario)
  const [guardar, setGuardar] = useState(false)

  // Handlers
  const handleFechaChange = (e) => setFecha(e.target.value);
  const handleMetodoChange = (e) => setMetodo(e.target.value);
  const handleEstadoChange = (e) => setEstado(e.target.value);
  const handleTipoChange = (e) => setTipo(e.target.value);

  //Functions
  const handleGuardar = () => {
    setGuardar(true);

    setTimeout(() => {
        toast.success("Cambios guardados.")
        setGuardar(false);
        navigate(`/cliente/${clienteId}`)
    }, 1500);
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <NavBar />
      <SideBar />
      <main className="lg:ml-52 mt-12 p-6">
        <section className="bg-white rounded-2xl shadow p-6 lg:max-w-5xl">
          <div className="space-y-5 text-gray-700">
            
            {/* Fecha */}
            <div>
              <p className="text-sm text-gray-500 mb-1">Fecha</p>
              <input
                type="date"
                value={fecha}
                onChange={handleFechaChange}
                className="font-medium w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 
                           focus:border-blue-400 focus:outline-none transition-colors"
              />
            </div>

            {/* Tipo de servicio */}
            <div>
              <p className="text-sm text-gray-500 mb-1">Tipo de servicio</p>
              <input
                type="text"
                className="font-medium w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 
                           focus:border-blue-400 focus:outline-none transition-colors"
                value={tipo}
                onChange={handleTipoChange}
              />
            </div>

            {/* Método de Pago */}
            <div className="relative">
                <p className="text-sm text-gray-500 mb-1">Método de pago</p>
                <select
                    value={metodo}
                    onChange={handleMetodoChange}
                    className="appearance-none font-medium w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700
                            focus:border-blue-400 focus:outline-none transition-colors bg-white pr-10"
                >
                    <option value="Efectivo">Efectivo</option>
                    <option value="Cheque">Cheque</option>
                    <option value="Tarjeta">Tarjeta</option>
                    <option value="Transferencia">Transferencia</option>
                    <option value="Otro">Otro</option>
                </select>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400 pointer-events-none absolute right-3 top-1/2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </div>

            {/* Estado de Pago */}
            <div className="relative">
                <p className="text-sm text-gray-500 mb-1">Estado de pago</p>
                <select
                    value={estado}
                    onChange={handleEstadoChange}
                    className="appearance-none font-medium w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700
                            focus:border-blue-400 focus:outline-none transition-colors bg-white pr-10"
                >
                    <option value="Completo">Completo</option>
                    <option value="Incompleto">Incompleto</option>
                </select>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400 pointer-events-none absolute right-3 top-1/2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
            </div>

            {/* Precio */}
            <div>
              <p className="text-sm text-gray-500 mb-1">Precio</p>
              <input
                type="text"
                className="font-medium w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 
                           focus:border-blue-400 focus:outline-none transition-colors"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
              />
            </div>

            {/* Comentario */}
            <div>
              <p className="text-sm text-gray-500 mb-1">Notas</p>
              <textarea
                type="text"
                className="font-medium w-full border border-gray-300 rounded-lg px-3 py-2 text-gray-700 
                           focus:border-blue-400 focus:outline-none transition-colors"
                value={comentario}
                onChange={(e) => setComentario(e.target.value)}
              />
            </div>

            {/* Botón azul para guardar cambios */}
            <button 
            className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2.5 sm:px-7 sm:py-2.5 rounded-lg shadow-md transition-colors text-sm sm:text-md"
            onClick={handleGuardar}
            disabled={guardar}
            >
                {guardar ? "Guardando..." : "Guardar"}
            </button>

          </div>
        </section>
      </main>
    </div>
  );
}
