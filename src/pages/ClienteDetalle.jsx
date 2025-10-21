import { useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import clientes from "../data/clientes.json";
import TablaServicios from "../components/detalles-cliente/TablaServicios";
import Notas from "../components/detalles-cliente/Notas";

export default function ClienteDetalle() {
  const { id } = useParams();
  const location = useLocation();
  const cliente = location.state?.cliente || clientes[parseInt(id)];

  const [activeTab, setActiveTab] = useState("servicios");

  if (!cliente) {
    return (
      <div className="min-h-screen bg-gray-50 font-sans text-sm sm:text-base">
        <NavBar />
        <SideBar />
        <main className="lg:ml-52 mt-12 p-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            Cliente no encontrado
          </h1>
          <p className="mt-2 text-gray-600">
            No se pudo encontrar la información del cliente solicitado.
          </p>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-sm sm:text-base">
      <NavBar />
      <SideBar />
      <main className="lg:ml-52 mt-12 p-6">
        {/* Información principal */}
        <section className="bg-white rounded-2xl shadow p-6 lg:max-w-2xl">
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
            {cliente.nombre}
          </h1>

          <div className="space-y-4 text-gray-700">
            <div>
              <p className="text-gray-500">Dirección</p>
              <p className="font-medium">{cliente.direccion}</p>
            </div>
            <div>
              <p className="text-gray-500">Teléfono</p>
              <p className="font-medium">{cliente.telefono}</p>
            </div>
            <div>
              <p className="text-gray-500">Email</p>
              <p className="font-medium">{cliente.email}</p>
            </div>
          </div>
        </section>

        {/* Pestañas */}
        <div className="mt-8 bg-white rounded-2xl shadow p-6 lg:max-w-5xl">
          <div className="flex border-b border-gray-200 mb-4">
            <button
              onClick={() => setActiveTab("servicios")}
              className={`py-2 px-4 font-medium transition-colors duration-200 ${
                activeTab === "servicios"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Servicios
            </button>
            <button
              onClick={() => setActiveTab("notas")}
              className={`py-2 px-4 font-medium transition-colors duration-200 ${
                activeTab === "notas"
                  ? "border-b-2 border-blue-600 text-blue-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Notas
            </button>
          </div>

          {/* Contenido de cada pestaña */}
          <div>
            {activeTab === "servicios" && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Últimos servicios
                  </h2>

                  {/* Botón azul para agregar servicio */}
                  <button className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2.5 sm:px-4 sm:py-1.5 rounded-lg shadow-md transition-colors text-sm sm:text-md">
                    <span className="hidden sm:flex items-center gap-2">
                      <span className="text-lg font-bold">+</span>
                      Agregar Servicio
                    </span>
                    <span className="sm:hidden">+</span>
                  </button>
                </div>
                <TablaServicios clienteId={id} />
              </div>
            )}

            {activeTab === "notas" && (
              <div>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-semibold text-gray-800">
                    Notas
                  </h2>

                  {/* Botón azul para agregar nota */}
                  <button className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2.5 sm:px-4 sm:py-1.5 rounded-lg shadow-md transition-colors text-sm sm:text-md">
                    <span className="hidden sm:flex items-center gap-2">
                      <span className="text-lg font-bold">+</span>
                      Agregar Nota
                    </span>
                    <span className="sm:hidden">+</span>
                  </button>
                </div>
                <Notas />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
