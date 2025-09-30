import type { Task } from "../types"

interface TaskItemProps {
  task: Task;
  onDelete: (id: Task['id']) => void;
  onComplete: (id: Task['id']) => void;
}
const TaskItem = ({task, onDelete, onComplete}: TaskItemProps) => {
  const isDone = task.completed;
  return (
      <article className={`flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 md:gap-2 mx-auto rounded-xl py-3 px-4 ${isDone? "bg-slate-700/60" : "bg-slate-950"}  mb-4 shadow-[0_2px_10px_-5px_rgba(59,130,246,0.6)]`}>
        <p className={`${isDone ? "line-through text-gray-500 decoration-gray-600 decoration-2" : "text-gray-200"} flex-1 min-w-0 text-left break-words break-all`}>{task.title}</p>
        <div className="flex flex-col sm:flex-row justify-end gap-2 w-full lg:w-auto shrink-0">
          {!isDone &&(
            <button type="button" onClick={() => onComplete(task.id)} className="h-10 w-full lg:max-w-40 bg-blue-500 font-bold  px-6 py-2 rounded-xl shadow-xl hover:bg-blue-700 cursor-pointer">Completar</button>
          )}
          <button type="button" onClick={() => onDelete(task.id)} className="h-10 w-full lg:max-w-40 bg-red-500 font-bold  px-6 py-2 rounded-xl shadow-xl hover:bg-red-700 cursor-pointer">Eliminar</button>
        </div>
        
      </article>
    
  )
}

export default TaskItem