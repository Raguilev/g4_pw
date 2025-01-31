import ExportarCSV from "../Components/ExportarCSV";
import ExportarPDF from "../Components/ExportarPDF";

// Datos iniciales
const datosIniciales = [
  { fecha: "2024-12-05", categoria: "Alimentación", descripcion: "Compras del mes", recurrente: "Sí", monto: 29.99 },
  { fecha: "2024-12-05", categoria: "Servicios", descripcion: "Pago de luz", recurrente: "No", monto: 169.99 },
  { fecha: "2024-12-05", categoria: "Transporte", descripcion: "Gasolina", recurrente: "No", monto: 369.99 }
];

const ExportarPresupuestos = () => {
  return (
    <div className="container mt-4">
      <h2 className="mb-4">Mis gastos</h2>

      {/* Botones superiores */}
      <div className="d-flex justify-content-end mb-3">
        <button className="btn btn-primary me-2">Filtrar</button> {/* Botón sin lógica */}
        <ExportarCSV data={datosIniciales} filename="presupuestos.csv" />
        <ExportarPDF data={datosIniciales} filename="presupuestos.pdf" />
      </div>

      {/* Tabla de gastos */}
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Categoría</th>
            <th>Descripción</th>
            <th>Recurrente</th>
            <th>Monto</th>
          </tr>
        </thead>
        <tbody>
          {datosIniciales.map((item, index) => (
            <tr key={index}>
              <td>{item.fecha}</td>
              <td>{item.categoria}</td>
              <td>{item.descripcion}</td>
              <td>{item.recurrente}</td>
              <td>S/. {item.monto}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExportarPresupuestos;
