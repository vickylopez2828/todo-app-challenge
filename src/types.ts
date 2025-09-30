export interface Task {
    id: string,
    title: string,
    completed: boolean
}

export type TabKey = "todos" | "completadas" | "pendientes";

export type TabDef = { key: TabKey; label: string };
