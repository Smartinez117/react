import Tarea from './Tarea';

function ListaTareas({ tareas, completarTarea, eliminarTarea }) {
  return (
    <ul>
      {tareas.map((tarea, index) => (
        <Tarea
          key={index}
          tarea={tarea}
          index={index}
          completarTarea={completarTarea}
          eliminarTarea={eliminarTarea}
        />
      ))}
    </ul>
  );
}

export default ListaTareas;
