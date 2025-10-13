export default function Maintenance() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 px-4 text-center">
      
      {/* Título */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-4">
        Página en mantenimiento
      </h1>

      {/* Descripción */}
      <p className="text-gray-600 text-base sm:text-lg md:text-xl mb-6 max-w-xl">
        Estamos realizando tareas de mejora para brindarte una mejor experiencia. 
        Volveremos muy pronto.
      </p>

      {/* Botón para recargar */}
      <button
        onClick={() => window.location.reload()}
        className="px-6 py-3 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold rounded-lg shadow-md transition-colors"
      >
        Actualizar página
      </button>

      {/* Mensaje pequeño */}
      <p className="text-sm text-gray-400 mt-4">
        (Solo el personal autorizado puede acceder temporalmente)
      </p>
    </div>
  );
}
