import { useState } from 'react';

function TaskForm({ tasks, setTasks }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Low');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = {
      id: Date.now(),
      title,
      description,
      priority,
      status: 'Pending'
    };

    setTasks([...tasks, newTask]);

    setTitle('');
    setDescription('');
    setPriority('Low');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <br />
      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <br />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
