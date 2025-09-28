const TaskForm = () => {
  return (
    <section className="mx-auto mt-20 max-w-2/3 rounded-xl p-6 bg-white/5 backdrop-blur-md backdrop-saturate-150 border border-white/15 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]">
      <form action="" className="flex justify-between gap-4 w-full">
        <input
          type="text"
          className="px-4 py-2 border-2 bg-white rounded-xl shadow-xl w-full text-gray-800"
          placeholder="Nombre de la tarea"
        />
        <button
          type="submit"
          className="bg-blue-500 px-4 py-2 rounded-xl shadow-xl"
        >
          Agregar
        </button>
      </form>
    </section>
  );
};

export default TaskForm;
