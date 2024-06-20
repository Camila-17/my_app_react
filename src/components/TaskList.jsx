import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext"; //Importo el contexto que contiene los datos de las tareas

export default function TaskList() {
  const { tasks } = useContext(TaskContext); //Uso el contexto para acceder a las tareas

  //Verifico que task tenga datos
  if (tasks.length == 0) {
    return (
      <div>
        <h1 className="text-white text-4xl font-bold text-center ">NO HAY TAREAS</h1>
      </div>
    );
  }

  return (
    //Uso map para mappear los datos y mostrarlos accediendo a sus propiedades.
    <div className="grid grid-cols-5 gap-2">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}
