import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DashboardAdministrador from './components/DashboardAdministrador';
import HistorialDeAuditoria from './components/HistorialDeAuditoria';
import ListaDeUsuarios from './components/ListaDeUsuarios';
import RegistroEgresos from './components/RegistroEgresos';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardAdministrador />} />
        <Route path="/historial" element={<HistorialDeAuditoria />} />
        <Route path="/usuarios" element={<ListaDeUsuarios />} />
        <Route path="/egresos" element={<RegistroEgresos />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
