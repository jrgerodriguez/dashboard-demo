import { useState } from "react";
import { Edit, Trash2, ChevronUp, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function TablaServicios({ clienteId }) {
  const navigate = useNavigate();
  const [sortDesc, setSortDesc] = useState(true);

  const servicios = [
    {
      fecha: "28 Septiembre 2025",
      tipo: "Reparación de teléfono",
      precio: "150",
      comentario: "Se reparo la entrada de carga, estaba quemada.",
      metodo_pago: "Efectivo",
      estado_pago: "Completo",
    },
    {
      fecha: "15 Octubre 2025",
      tipo: "Limpieza de laptop",
      precio: "80",
      comentario: "Se cambio la pasta termica y se instalo una nueva bateria.",
      metodo_pago: "Transferencia",
      estado_pago: "Completo",
    },
  ];

  const parseFecha = (fechaStr) => {
    const meses = {
      Enero: "January",
      Febrero: "February",
      Marzo: "March",
      Abril: "April",
      Mayo: "May",
      Junio: "June",
      Julio: "July",
      Agosto: "August",
      Septiembre: "September",
      Octubre: "October",
      Noviembre: "November",
      Diciembre: "December",
    };
    const [dia, mesEsp, año] = fechaStr.split(" ");
    const mes = meses[mesEsp];
    return new Date(`${mes} ${dia}, ${año}`);
  };

  const serviciosOrdenados = [...servicios].sort((a, b) => {
    const fechaA = parseFecha(a.fecha);
    const fechaB = parseFecha(b.fecha);
    return sortDesc ? fechaB - fechaA : fechaA - fechaB;
  });

  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden text-sm sm:text-base lg:text-base">
      {/* Tabla en pantallas medianas y grandes */}
      <div className="hidden sm:block overflow-x-auto">
        <table className="min-w-full text-gray-700">
          <thead className="bg-gray-50 text-gray-800">
            <tr>
              <th
                className="py-3 px-4 text-left font-semibold cursor-pointer"
                onClick={() => setSortDesc(!sortDesc)}
              >
                Fecha{" "}
                {sortDesc ? (
                  <ChevronDown className="inline-block w-4 h-4" />
                ) : (
                  <ChevronUp className="inline-block w-4 h-4" />
                )}
              </th>
              <th className="py-3 px-4 text-left font-semibold">Servicio</th>
              <th className="py-3 px-4 text-left font-semibold">Precio</th>
              <th className="py-3 px-4 text-center font-semibold">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {serviciosOrdenados.map((servicio, index) => (
              <tr
                key={index}
                onClick={() =>
                  navigate(`/servicio/${index}`, {
                    state: { servicio, clienteId },
                  })
                }
                className="border-t hover:bg-gray-50 transition-colors"
              >
                <td className="py-3 px-4 whitespace-nowrap">{servicio.fecha}</td>
                <td className="py-3 px-4 whitespace-nowrap">{servicio.tipo}</td>
                <td className="py-3 px-4 whitespace-nowrap">${servicio.precio}</td>
                <td className="py-3 px-4 text-center">
                  <div className="flex justify-center gap-3">
                    <button className="text-gray-500 hover:text-blue-600 transition-colors">
                      <Edit size={18} />
                    </button>
                    <button className="text-gray-500 hover:text-red-600 transition-colors">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Versión móvil tipo card, sin bordes extra */}
      <div className="sm:hidden divide-y divide-gray-200">
        {serviciosOrdenados.map((servicio, index) => (
          <div
            key={index}
            onClick={() =>
              navigate(`/servicio/${index}`, {
                state: { servicio, clienteId },
              })
            }
            className="p-4"
          >
            <div className="flex justify-between items-center mb-1">
              <span className="font-medium text-gray-800">{servicio.tipo}</span>
              <span className="text-gray-500 text-xs">{servicio.fecha}</span>
            </div>
            <p className="text-gray-700">
              Precio: <span className="font-semibold">${servicio.precio}</span>
            </p>
            <div className="flex justify-end gap-3 mt-2">
              <button className="text-gray-500 hover:text-blue-600 transition-colors">
                <Edit size={16} />
              </button>
              <button className="text-gray-500 hover:text-red-600 transition-colors">
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
