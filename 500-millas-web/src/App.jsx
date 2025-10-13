import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import ScrollToTop from "./components/layout/ScrollToTop";
import Maintenance from "./components/common/Maintenance";

function App() {
  // 1️⃣ Leer variable de entorno: ¿modo mantenimiento activado?
  const maintenanceMode = import.meta.env.VITE_MAINTENANCE_MODE === "true";

  // 2️⃣ Leer clave secreta desde el .env (por ejemplo: "12345secreto")
  const secretKey = import.meta.env.VITE_BYPASS_KEY;

  // 3️⃣ Revisar si la URL incluye la clave correcta (ej: ?access=12345secreto)
  const params = new URLSearchParams(window.location.search);
  const userKey = params.get("access");

  const hasBypass = secretKey && userKey === secretKey;

  // 4️⃣ Si está en mantenimiento y no tiene acceso → mostrar pantalla
  const isMaintenance = maintenanceMode && !hasBypass;

  if (isMaintenance) {
    return <Maintenance />;
  }

  // 5️⃣ Render normal de tu app
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
