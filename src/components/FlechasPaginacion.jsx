export default function FlechasPaginacion({ clientes, paginaActual, setPaginaActual, clientesPorPagina }) {

    const totalPaginas = Math.ceil(clientes.length / clientesPorPagina);

    const paginaAnterior = () => {
        if (paginaActual > 1) setPaginaActual(paginaActual - 1);
    };

    const paginaSiguiente = () => {
        if (paginaActual < totalPaginas) setPaginaActual(paginaActual + 1);
    };

    return (
        <div className="mt-4 flex justify-center items-center gap-2">

          {/* Flecha izquierda */}
          <button 
          className="px-3 py-1 border rounded bg-white text-black disabled:opacity-50 hover:bg-gray-50"
          disabled={paginaActual === 1}
          onClick={paginaAnterior}
          >
            &lt;
          </button>

          {/* Números*/}
          <div className="flex gap-1">
            {Array.from({ length: totalPaginas }, (_, i) => i + 1).map((num) => ( //We create an array
              <button
                key={num}
                className={`px-3 py-1 border rounded
                  ${paginaActual === num ? "bg-sky-100 text-blue-600 font-semibold" : "bg-white text-black hover:bg-gray-50"}`}
                onClick={() => setPaginaActual(num)}
              >
                {num}
              </button>
            ))}
          </div>

          {/* Flecha derecha */}
          <button 
          className="px-3 py-1 border rounded bg-white text-black disabled:opacity-50 hover:bg-gray-50"
          disabled={paginaActual === totalPaginas}
          onClick={paginaSiguiente}
          >
            &gt;
          </button>
        </div>
    )
}
