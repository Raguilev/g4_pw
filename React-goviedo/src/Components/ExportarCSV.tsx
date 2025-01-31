import { CSVLink } from "react-csv";

interface ExportarCSVProps {
  data: any[];
  filename?: string;
}

const ExportarCSV = (props: ExportarCSVProps) => {
  const { data, filename = "data.csv" } = props;

  const headers = Object.keys(data[0] || {}).map(key => ({ label: key, key }));

  return (
    <CSVLink data={data} headers={headers} filename={filename} className="btn btn-primary">
      Exportar a CSV
    </CSVLink>
  );
};

export default ExportarCSV;
