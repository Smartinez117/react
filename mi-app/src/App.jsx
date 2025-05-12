import { useState } from 'react';
import FormTarea from './components/FormTarea';
import ListaTareas from './components/ListaTareas';

function App() {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = (texto) => {
    setTareas([...tareas, { texto, completada: false }]);
  };

  const completarTarea = (index) => {
    const nuevas = [...tareas];
    nuevas[index].completada = !nuevas[index].completada;
    setTareas(nuevas);
  };

  const eliminarTarea = (index) => {
    const nuevas = tareas.filter((_, i) => i !== index);
    setTareas(nuevas);
  };

  return (
    <div>
      <h1>Mi Lista de Tareas</h1>
      <FormTarea agregarTarea={agregarTarea} />
      <ListaTareas
        tareas={tareas}
        completarTarea={completarTarea}
        eliminarTarea={eliminarTarea}
      />
    </div>
  );
}

export default App;
