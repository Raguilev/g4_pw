import jsPDF from "jspdf";
import "jspdf-autotable";

interface ExportarPDFProps {
  data: any[];
  filename?: string;
}

const ExportarPDF = (props: ExportarPDFProps) => {
  const { data, filename = "documento.pdf" } = props;

  const handleExportPDF = () => {
    const pdf = new jsPDF();
    pdf.text("Reporte de Egresos", 10, 10);

    // Convertir los datos a un formato adecuado para la tabla
    const tableData = data.map(item => [item.fecha, item.monto, item.descripcion]);

    // Agregar la tabla al PDF
    (pdf as any).autoTable({
      head: [["Fecha", "Monto", "Descripción"]],
      body: tableData
    });

    pdf.save(filename);
  };

  return (
    <button onClick={handleExportPDF} className="btn btn-danger">
      Exportar a PDF
    </button>
  );
};

export default ExportarPDF;
