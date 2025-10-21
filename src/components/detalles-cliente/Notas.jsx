import { Edit, Trash2 } from "lucide-react";

export default function Notas() {
    return (
        <div className="space-y-4">
            {/* Comentario individual */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
                <div className="flex justify-between items-start mb-2">
                    <div>
                    <p className="text-sm text-gray-500">Fecha</p>
                    <p className="text-sm text-gray-600 font-medium">
                        28 Septiembre 2025
                    </p>
                    </div>

                    {/* Botones de acción */}
                    <div className="flex items-center gap-2">
                    <button className="text-gray-500 hover:text-blue-600 transition-colors">
                        <Edit size={18} />
                    </button>
                    <button className="text-gray-500 hover:text-red-600 transition-colors">
                        <Trash2 size={18} />
                    </button>
                    </div>
                </div>

                <p className="text-sm text-gray-500">Comentario</p>
                <p className="text-gray-700 mt-1">
                    El vidrio venía quebrado, se le enviaron fotos al cliente.
                </p>
            </div>

            {/* Otro ejemplo */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 hover:shadow-sm transition-shadow">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <p className="text-sm text-gray-500">Fecha</p>
                        <p className="text-sm text-gray-600 font-medium">
                            5 Octubre 2025
                        </p>
                    </div>

                    {/* Botones de acción */}
                    <div className="flex items-center gap-2">
                        <button className="text-gray-500 hover:text-blue-600 transition-colors">
                            <Edit size={18} />
                        </button>
                        <button className="text-gray-500 hover:text-red-600 transition-colors">
                            <Trash2 size={18} />
                        </button>
                    </div>
                </div>

                <p className="text-sm text-gray-500">Comentario</p>
                <p className="text-gray-700 mt-1">
                    Cliente confirmó que el problema quedó resuelto satisfactoriamente.
                </p>
            </div>
        </div>
    )
}