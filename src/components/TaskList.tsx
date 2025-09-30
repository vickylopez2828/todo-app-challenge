import { useState } from "react";
import type { TabDef, TabKey, Task } from "../types";
import TaskItem from "./TaskItem";
interface TaskListProps {
  tasks: Task[];
  onDelete: (id: Task["id"]) => void;
  onComplete: (id: Task["id"]) => void;
}

const emptyMessages: Record<TabKey, string> = {
  todos: "No tienes tareas aún",
  completadas: "No tienes tareas completadas",
  pendientes: "No tienes tareas pendientes",
};

const tabs: TabDef[] = [
    {
      key: "todos",
      label: "Todas",
    },
    {
      key: "completadas",
      label: "Completadas",
    },
    {
      key: "pendientes",
      label: "Pendientes",
    },
];

const TaskList = ({ tasks, onDelete, onComplete }: TaskListProps) => {
  const [activeTab, setActiveTab] = useState<TabKey>("todos");
  
  const filteredTasks = tasks.filter(task => {
    if (activeTab === 'completadas') return task.completed;
    if (activeTab === 'pendientes') return !task.completed;
    return true;
  });
  return (
    <section className="relative mx-auto mt-8 w-full md:max-w-3/4 min-h-80 rounded-xl py-6 px-8 bg-slate-900 border border-white/15 shadow-2xl">
      <h2 className="text-3xl text-center font-bold mb-6">Lista de tareas</h2>
      <div className="border-b border-gray-600 mb-8">
        <ul className="flex flex-wrap text-sm font-medium text-center" role="tablist">
          {tabs.map((tab) => (
            <li key={tab.key}>
              <button
                id={`tab-${tab.key}`}
                aria-selected={activeTab === tab.key}
                aria-controls={`panel-${tab.key}`}
                className={`inline-block p-4 border-b-2 rounded-t-lg cursor-pointer ${
                  activeTab === tab.key
                    ? "text-blue-500 border-blue-500 font-bold"
                    : "text-gray-500 hover:text-gray-600 hover:border-blue-300"
                }`}
                onClick={() => setActiveTab(tab.key)}
                role="tab"
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <section
        id={`panel-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`tab-${activeTab}`}
      >
        {filteredTasks.length === 0 && (
          <p className="text-gray-500">{emptyMessages[activeTab]}</p>
        )}
        {filteredTasks.map((task: Task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={onDelete}
            onComplete={onComplete}
          />
        ))}
      </section>
    </section>
  );
};

export default TaskList;
