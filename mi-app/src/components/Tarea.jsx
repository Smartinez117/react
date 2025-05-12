function Tarea({ tarea, index, completarTarea, eliminarTarea }) {
  return (
    <li style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}>
      {tarea.texto}
      <button onClick={() => completarTarea(index)}>✔</button>
      <button onClick={() => eliminarTarea(index)}>🗑</button>
    </li>
  );
}

export default Tarea;
