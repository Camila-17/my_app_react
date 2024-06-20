import TaskList from "./components/TaskList";
import FormTask from "./components/FormTask";

function App() {
  return (
    <main className="bg-slate-500 h-screen">
      <div className="container mx-auto p-10">
        <FormTask />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
