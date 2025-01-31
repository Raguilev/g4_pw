import React, { useState } from 'react';

const RegistroEgresos: React.FC = () => {
  const [expenses, setExpenses] = useState<{ name: string; amount: number; frequency: string; startDate: string }[]>([]);
  const [form, setForm] = useState({ name: '', amount: '', frequency: 'Mensual', startDate: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setExpenses([...expenses, { name: form.name, amount: Number(form.amount), frequency: form.frequency, startDate: form.startDate }]);
    setForm({ name: '', amount: '', frequency: 'Mensual', startDate: '' });
  };

  const handleDelete = (index: number) => {
    setExpenses(expenses.filter((_, i) => i !== index));
  };

  return (
    <div className="container-box">
      <header>
        <h1>Registro de Egresos Recurrentes</h1>
        <p className="text-muted">Registre sus egresos recurrentes para que se automaticen mes a mes.</p>
      </header>
      <form id="expenseForm" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre del Egreso</label>
          <input type="text" id="name" className="form-control" placeholder="Ej. Alquiler, Spotify" value={form.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">Monto</label>
          <input type="number" id="amount" className="form-control" placeholder="Ej. 500" value={form.amount} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="frequency" className="form-label">Frecuencia</label>
          <select id="frequency" className="form-select" value={form.frequency} onChange={handleChange} required>
            <option value="Mensual">Mensual</option>
            <option value="Trimestral">Trimestral</option>
            <option value="Anual">Anual</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="startDate" className="form-label">Fecha de Inicio</label>
          <input type="date" id="startDate" className="form-control" value={form.startDate} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Registrar Egreso</button>
      </form>
      <section className="mt-4">
        <h2>Egresos Recurrentes Registrados</h2>
        <ul id="expenseList" className="list-group mt-2">
          {expenses.map((expense, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              {`${expense.name} - S/ ${expense.amount} (${expense.frequency}) desde ${expense.startDate}`}
              <button className="btn btn-danger btn-sm" onClick={() => handleDelete(index)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default RegistroEgresos;