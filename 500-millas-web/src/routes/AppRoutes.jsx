import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";

import Home from "../pages/Home";
import History from "../pages/History";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/historia" element={<MainLayout><History /></MainLayout>} />
    </Routes>
  );
}

export default AppRoutes;
