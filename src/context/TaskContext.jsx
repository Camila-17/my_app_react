import { createContext, useState, useEffect } from "react";
import { tasks_data as data } from "../data/task"; //Importo el objeto con las tareas acceder a su información - ui components tree y utilizo as para ponerle un alias

export const TaskContext = createContext(); //El nombre de mi contexto o contenedor global que contiene los datos que es exportado individualmente

//Este es mi contenedor global que va a contener el resto de los componentes y es exportado inidividualmente
export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]); //Uso un useState para almacenar la data

  //Esta funcion para crear espera recibir los datos del componente FormTask en un objeto y los agrega al array de objetos de tareas
  function createTask(task) {
    setTasks([
      ...tasks, //Los tres puntos recopilan todo lo que hay en el array, capturo todos los valores que ya tiene el array y le agrego la nueva tarea con estructura de objeto
      {
        id: tasks.length,
        title: task.title,
        description: task.description,
      },
    ]);
  }

  //Funcion para eliminar una tarea
  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId)); //Filtro las tareas y elimino la tarea que coincida con el id, esto se establece en el estado
  }

  //Utilizo el useEffect para despues de inicializada la data, pasarla al useState
  useEffect(() => {
    setTasks(data); //Le paso la data al useState
  }, []);

  return (
    <>
      <TaskContext.Provider value={{ tasks, createTask, deleteTask }}>
        {props.children}
      </TaskContext.Provider>
    </>
  );
}
