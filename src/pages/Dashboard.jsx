import { useState } from "react";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";
import clientes from "../data/clientes.json";
import FlechasPaginacion from "../components/FlechasPaginacion";
import { UserPlusIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const [paginaActual, setPaginaActual] = useState(1);

  const clientesPorPagina = 15;
  const indicePrimerCliente = (paginaActual - 1) * clientesPorPagina;
  const indiceUltimoCliente = paginaActual * clientesPorPagina;

  return (
    <div>
      <NavBar />
      <SideBar />
      <main className="lg:ml-52 mt-12 p-6 font-sans bg-gray-50 min-h-screen ml-0 text-sm sm:text-base">
        <h1 className="text-base sm:text-xl font-semibold mb-6 text-gray-800">
          Clientes
        </h1>

        <div className="mb-6 flex flex-row items-center justify-between gap-4">
          {/* Barra de búsqueda */}
          <input
            type="text"
            placeholder="Buscar cliente..."
            className="w-2/3 sm:w-1/2 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-400 text-gray-700 text-sm sm:text-base"
          />

          <button className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-3 py-2.5 sm:px-4 sm:py-1.5 rounded-lg shadow-md transition-colors text-sm sm:text-base">
            <UserPlusIcon className="block sm:hidden h-5 w-5" />
            <span className="hidden sm:flex items-center gap-2">
              <span className="text-lg font-bold">+</span>
              Nuevo Cliente
            </span>
          </button>
        </div>

        <div className="bg-white border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full border border-gray-200 text-sm sm:text-base">
              <thead className="bg-gray-100 text-gray-700 font-semibold">
                <tr>
                  <th className="py-2 px-3 sm:py-3 sm:px-4 border-b border-gray-300 text-left">
                    Nombre
                  </th>
                  <th className="py-2 px-3 sm:py-3 sm:px-4 border-b border-gray-300 text-left">
                    Teléfono
                  </th>
                  <th className="py-2 px-3 sm:py-3 sm:px-4 border-b border-gray-300 text-left">
                    Email
                  </th>
                </tr>
              </thead>
              <tbody>
                {[...clientes]
                  .sort((a, b) => a.nombre.localeCompare(b.nombre))
                  .slice(indicePrimerCliente, indiceUltimoCliente)
                  .map((cliente) => (
                    <tr
                      key={cliente.id}
                      onClick={() =>
                        navigate(`/cliente/${cliente.id}`, { state: { cliente } })
                      }
                      className="hover:bg-blue-50 text-gray-800 transition-colors"
                    >
                      <td className="py-2 px-3 sm:py-3 sm:px-4 border-b border-gray-200">
                        {cliente.nombre}
                      </td>
                      <td className="py-2 px-3 sm:py-3 sm:px-4 border-b border-gray-200">
                        {cliente.telefono}
                      </td>
                      <td className="py-2 px-3 sm:py-3 sm:px-4 border-b border-gray-200">
                        {cliente.email}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-4">
          <FlechasPaginacion
            clientes={clientes}
            paginaActual={paginaActual}
            setPaginaActual={setPaginaActual}
            clientesPorPagina={clientesPorPagina}
          />
        </div>
      </main>
    </div>
  );
}
