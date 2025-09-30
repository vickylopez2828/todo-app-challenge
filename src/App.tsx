import Header from "./components/Header"
import TaskForm from "./components/TaskForm"
import TaskList from './components/TaskList';
import Footer from "./components/Footer";
import { useTasks } from "./hooks/useTasks";

function App() {
  const {tasks, addTask, deleteTask, completeTask} = useTasks();

  return (
    <main className="min-h-dvh flex flex-col text-white bg-gradient-to-br from-black via-slate-950 to-blue-950">
      <Header/>
      <section className="px-4 flex-1">
        <TaskForm 
          onAddTask={addTask}
        />
        <TaskList tasks={tasks} onDelete={deleteTask} onComplete={completeTask}/>
      </section>
      <div className="mt-auto">
        <Footer/>
      </div>
    </main>
  )
}

export default App
