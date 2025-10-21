import { useState } from "react";
import { Edit, Trash2, ChevronUp, ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function TablaServicios({ clienteId }) {
  const navigate = useNavigate();

  const [sortDesc, setSortDesc] = useState(true); // Descendente por defecto

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

  // Función para convertir fecha de texto a Date
  const parseFecha = (fechaStr) => {
    // Convertimos "28 Septiembre 2025" a "28 September 2025" para Date()
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

  // Ordenar servicios según la fecha
  const serviciosOrdenados = [...servicios].sort((a, b) => {
    const fechaA = parseFecha(a.fecha);
    const fechaB = parseFecha(b.fecha);
    return sortDesc ? fechaB - fechaA : fechaA - fechaB;
  });

  return (
    <div className="bg-white border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm text-gray-700">
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
                    state: { servicio, clienteId: clienteId },
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
    </div>
  );
}
