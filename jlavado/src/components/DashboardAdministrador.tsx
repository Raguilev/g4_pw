import { useEffect } from "react";
import Chart from "chart.js/auto";
import "bootstrap/dist/css/bootstrap.min.css";
import "./DashboardAdministrador.css";

const DashboardAdministrador = () => {
  useEffect(() => {
    const ctx = document.getElementById("userChart") as HTMLCanvasElement | null;
    if (ctx) {
      const chartContext = ctx.getContext("2d");
      if (chartContext) {
        const userChart = new Chart(chartContext, {
          type: "bar",
          data: {
            labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
            datasets: [
              {
                label: "Usuarios nuevos por mes",
                data: [1000, 500, 700, 900, 1200, 600, 800, 1100, 950, 1000, 850, 700],
                backgroundColor: "rgba(54, 162, 235, 0.5)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 1,
              },
            ],
          },
          options: {
            responsive: true,
            plugins: {
              legend: {
                display: true,
              },
            },
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        });

        return () => {
          userChart.destroy();
        };
      }
    }
  }, []);

  return (
    <div className="d-flex">
      <aside className="sidebar">
        <h2>Jessica Straus</h2>
        <nav>
          <ul>
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Usuarios</a></li>
            <li><a href="#">Historial</a></li>
            <li><a href="#">Configuración</a></li>
            <li><a href="#">Salir</a></li>
          </ul>
        </nav>
      </aside>
      <div className="container-box">
        <header>
          <h1>Dashboards</h1>
          <div className="total-users">
            <h2>Usuarios totales: <span id="totalUsers">12</span></h2>
          </div>
        </header>
        <div className="chart-container">
          <h2>Usuarios nuevos por mes</h2>
          <canvas id="userChart"></canvas>
        </div>
      </div>
    </div>
  );
};

export default DashboardAdministrador;
