import { useEffect, useState } from "react";
import type { Task } from "../types";

const STORE_KEY = "tasks";

export const useTasks = () =>{

    const [tasks, setTasks] = useState<Task[]>(() => {
        const storedTasks = localStorage.getItem(STORE_KEY);
        return storedTasks ? JSON.parse(storedTasks) : []
    });

    useEffect(() =>{
        localStorage.setItem(STORE_KEY, JSON.stringify(tasks))
    },[tasks])
    
    const addTask = (title: string) => {
        const clean = title.trim();
        if (!clean) return;
        const newTask: Task = {id: crypto.randomUUID(), title: clean, completed: false}
        setTasks(prev => [newTask, ...prev])
    }
    const deleteTask = (id: Task['id']) => {
        setTasks(prev => prev.filter(task => task.id !== id))
    }
    const completeTask = (id: Task['id']) =>{
        setTasks(prev => prev.map(t => t.id === id ? {...t, completed: true} : t))
    }

    return {
        tasks,
        addTask,
        deleteTask,
        completeTask
    }
}