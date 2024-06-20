import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext"; //Importo el contexto que contiene los datos de las tareas

export default function FormTask() {
  //Con useState creo dos estados para el titulo y la descripcion de la tarea, almacenando su valor
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext); //Uso el contexto para acceder a la funcion createTask

  //Funcion que se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({ title, description }); //Los datos alnmacenados en el useState los paso en un objeto
    setTitle(""); //Reseteo el valor del titulo despues de enviado el formulario
    setDescription(""); //Reseteo el valor de la descripcion despues de enviado el formulario
  };

  return (
    <div className="max-w-md mx-auto ">
      {/* //El form captura los datos y por medio del evento onSubmit ejecuta la
      funcion handleSubmit */}
      <form onSubmit={handleSubmit} className="bg-cyan-900 p-10 mb-4 rounded-md">
        <h1 className="text-2xl font-bold text-white m-10 text-center">Añadir tarea</h1>
        <input
          placeholder="Escribe el titulo de la tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title} /* El campo será el valor del title */
          autoFocus
          className="bg-slate-300 p-3 w-full mb-4 rounded-md"
        />

        <textarea
          placeholder="Escribe la descripcion de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description} /* El campo será el valor de la descripcion */
          className="bg-slate-300 p-3 w-full mb-4 rounded-md"
        ></textarea>

        <button className="bg-blue-300 px-3 py-1 rounded-md">Agregar tarea</button>
      </form>
    </div>
  );
}
