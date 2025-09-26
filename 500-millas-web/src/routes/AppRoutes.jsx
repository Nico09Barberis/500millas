import { Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";

import Home from "../pages/Home";
import History from "../pages/History";
import Product from "../pages/Products";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/historia" element={<MainLayout><History /></MainLayout>} />
      <Route path="/productos" element={<MainLayout><Product /></MainLayout>} />
    </Routes>
  );
}

export default AppRoutes;
