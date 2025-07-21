function TaskItem({ task, tasks, setTasks }) {
  const updateStatus = (newStatus) => {
    const updated = tasks.map((t) =>
      t.id === task.id ? { ...t, status: newStatus } : t
    );
    setTasks(updated);
  };

  const deleteTask = () => {
    const updated = tasks.filter((t) => t.id !== task.id);
    setTasks(updated);
  };

  return (
    <div style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p><strong>Priority:</strong> {task.priority}</p>
      <p><strong>Status:</strong> {task.status}</p>

      <button onClick={() => updateStatus('Pending')}>Pending</button>
      <button onClick={() => updateStatus('In Progress')}>In Progress</button>
      <button onClick={() => updateStatus('Completed')}>Completed</button>
      <button onClick={deleteTask}>Delete</button>
    </div>
  );
}

export default TaskItem;
