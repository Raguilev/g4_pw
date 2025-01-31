import React, { useState, useRef } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  role: 'Admin' | 'User';
}

const ListaDeUsuarios: React.FC = () => {
  const [users, setUsers] = useState<User[]>([
    { id: '001', name: 'Jessica', email: 'jess@taxes.com', password: '12345', role: 'Admin' },
    { id: '002', name: 'Jhon', email: 'jon@taxes.com', password: '6789', role: 'User' },
    { id: '003', name: 'Ana', email: 'ana@taxes.com', password: '7890', role: 'User' },
    { id: '004', name: 'Pedro', email: 'pedro@taxes.com', password: '4567', role: 'Admin' },
  ]);

  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [filterRole, setFilterRole] = useState<string>('');
  const editModalRef = useRef<HTMLDivElement>(null);
  const filterModalRef = useRef<HTMLDivElement>(null);

  const openEditModal = (user: User) => {
    setEditingUser(user);
    if (editModalRef.current) editModalRef.current.style.display = 'flex';
  };

  const closeEditModal = () => {
    setEditingUser(null);
    if (editModalRef.current) editModalRef.current.style.display = 'none';
  };

  const openFilterModal = () => {
    if (filterModalRef.current) filterModalRef.current.style.display = 'flex';
  };

  const closeFilterModal = () => {
    if (filterModalRef.current) filterModalRef.current.style.display = 'none';
  };

  const applyFilter = (role: string) => {
    setFilterRole(role);
    closeFilterModal();
  };

  const saveEdit = () => {
    if (!editingUser) return;
    setUsers(users.map(user => (user.id === editingUser.id ? editingUser : user)));
    closeEditModal();
  };

  return (
    <div className="d-flex">
      <div className="sidebar">
        <div className="profile">
          <img src="https://via.placeholder.com/100" alt="Foto de perfil" />
          <h4>Jessica Straus</h4>
        </div>
        <nav>
          <ul className="list-unstyled">
            <li><a href="#">Dashboard</a></li>
            <li><a href="#">Usuarios</a></li>
            <li><a href="#">Historial</a></li>
            <li><a href="#">Configuración</a></li>
            <li><a href="#">Salir</a></li>
          </ul>
        </nav>
      </div>

      <div className="main-content">
        <div className="container-box">
          <header>
            <h1>Mis usuarios</h1>
            <div className="actions mb-3">
              <button className="btn btn-primary" onClick={openFilterModal}>Filtrar por rol</button>
              <button className="btn btn-success">Agregar</button>
            </div>
          </header>
          <table className="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Password</th>
                <th>Rol</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {users.filter(user => !filterRole || user.role === filterRole).map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.role}</td>
                  <td>
                    <button className="btn btn-sm btn-warning" onClick={() => openEditModal(user)}>✏️</button>
                    <button className="btn btn-sm btn-danger">🗑️</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal para editar */}
      <div className="modal" ref={editModalRef} style={{ display: 'none' }}>
        <div className="modal-content">
          <h2>Editar Usuario</h2>
          <input type="text" value={editingUser?.name || ''} onChange={e => setEditingUser(prev => prev ? { ...prev, name: e.target.value } : null)} className="form-control" />
          <input type="email" value={editingUser?.email || ''} onChange={e => setEditingUser(prev => prev ? { ...prev, email: e.target.value } : null)} className="form-control mt-2" />
          <input type="password" value={editingUser?.password || ''} onChange={e => setEditingUser(prev => prev ? { ...prev, password: e.target.value } : null)} className="form-control mt-2" />
          <select value={editingUser?.role || ''} onChange={e => setEditingUser(prev => prev ? { ...prev, role: e.target.value as 'Admin' | 'User' } : null)} className="form-select mt-2">
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
          <div className="modal-actions mt-3">
            <button className="btn btn-secondary" onClick={closeEditModal}>Cancelar</button>
            <button className="btn btn-success" onClick={saveEdit}>Guardar</button>
          </div>
        </div>
      </div>

      {/* Modal para filtrar */}
      <div className="modal" ref={filterModalRef} style={{ display: 'none' }}>
        <div className="modal-content">
          <h2>Filtrar por rol</h2>
          <select value={filterRole} onChange={e => applyFilter(e.target.value)} className="form-select">
            <option value="">Todos</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
          <div className="modal-actions mt-3">
            <button className="btn btn-secondary" onClick={closeFilterModal}>Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListaDeUsuarios;
