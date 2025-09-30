import { useState } from "react";

interface TaskFormProps {
    onAddTask: (title: string) => void
}

const TaskForm = ({onAddTask}: TaskFormProps) => {
    const [taskInput, setTaskInput] = useState<string>("");
    const [error, setError] = useState<string>("");

    const handleSubmit = (e:  React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        const value = taskInput.trim();
        if (!value) { setError("La tarea no puede estar vacía"); return; }
        onAddTask(value);
        setTaskInput("");
    }

  return (
    <section className="mx-auto mt-10 lg:mt-16 w-full md:max-w-3/4 rounded-xl p-6 bg-slate-900 border border-white/15 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]">
      <form className="flex flex-col sm:flex-row justify-between gap-4 w-full" onSubmit={handleSubmit}>
        <input
          aria-label="Nombre de la tarea"
          aria-invalid={!!error}
          aria-describedby={error ? "task-error" : undefined}
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          className="px-4 py-3 border-2 bg-white rounded-xl shadow-xl w-full text-gray-800"
          placeholder="Nombre de la tarea"
        />
        <button
          type="submit"
          className="bg-blue-700 font-bold  px-12 py-3 rounded-xl shadow-xl hover:bg-blue-900 cursor-pointer"
        >
          Agregar
        </button>
       
      </form> 
      {error && <p id="task-error" className="text-red-500 text-sm mt-1">{error}</p>}
    </section>
  );
};

export default TaskForm;
