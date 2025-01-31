import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HistorialDeAuditoria.css"; // Archivo CSS para estilos personalizados

const HistorialDeAuditoria: React.FC = () => {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Jessica Straus</h2>
        <nav>
          <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Usuarios</a></li>
            <li className="active"><a href="#">Historial</a></li>
            <li><a href="#">Configuración</a></li>
            <li><a href="#">Salir</a></li>
          </ul>
        </nav>
      </aside>

      {/* Contenedor principal */}
      <div className="container-box">
        <header>
          <h2>Historial</h2>
        </header>

        {/* Tabla de auditoría */}
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Fecha</th>
              <th>Hora</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>001</td>
              <td>Jessica</td>
              <td>jess@taxes.com</td>
              <td>12/12/2024</td>
              <td>17:50</td>
              <td><button className="btn btn-danger">Borrar</button></td>
            </tr>
            <tr>
              <td>002</td>
              <td>Jhon</td>
              <td>jon@taxes.com</td>
              <td>17/12/2024</td>
              <td>19:50</td>
              <td><button className="btn btn-success">Agregar</button></td>
            </tr>
            <tr>
              <td>003</td>
              <td>Diego</td>
              <td>diego@taxes.com</td>
              <td>22/12/2024</td>
              <td>14:20</td>
              <td><button className="btn btn-warning">Editar</button></td>
            </tr>
            <tr>
              <td>004</td>
              <td>Juan</td>
              <td>juan@taxes.com</td>
              <td>02/12/2024</td>
              <td>13:50</td>
              <td><button className="btn btn-danger">Borrar</button></td>
            </tr>
            <tr>
              <td>005</td>
              <td>Luis</td>
              <td>luis@taxes.com</td>
              <td>07/12/2024</td>
              <td>12:50</td>
              <td><button className="btn btn-danger">Borrar</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default HistorialDeAuditoria;
