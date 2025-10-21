import { PencilSquareIcon } from "@heroicons/react/24/outline";
import SideBar from "../components/SideBar";
import NavBar from "../components/NavBar";

export default function MyInfo() {
  return (
    <div>
      <NavBar />
      <SideBar />

      <main className="lg:ml-52 mt-12 p-6 font-sans bg-gray-50 min-h-screen ml-0">
        <h1 className="text-xl font-semibold mb-6 text-gray-800">Mi Información</h1>

        <div className="relative lg:max-w-md bg-white shadow-md rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-200">
          {/* Botón editar */}
          <button
            title="Editar información"
            className="absolute top-4 right-4 text-gray-500 hover:text-blue-600 transition-colors duration-200"
          >
            <PencilSquareIcon className="h-6 w-6" />
          </button>

          {/* Información */}
          <div className="mb-4">
            <p className="text-sm text-gray-500">Nombre</p>
            <p className="text-lg font-medium text-gray-800">Carlos Díaz</p>
          </div>

          <div className="mb-4">
            <p className="text-sm text-gray-500">Dirección</p>
            <p className="text-lg font-medium text-gray-800">
              Calle Los Almendros #124, San Salvador, El Salvador
            </p>
          </div>

          <div className="mb-4">
            <p className="text-sm text-gray-500">Teléfono</p>
            <p className="text-lg font-medium text-gray-800">7890 6543</p>
          </div>

          <div>
            <p className="text-sm text-gray-500">Correo electrónico</p>
            <p className="text-lg font-medium text-gray-800">carlos.diaz@email.com</p>
          </div>
        </div>
      </main>
    </div>
  );
}
