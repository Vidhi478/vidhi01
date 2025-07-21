import TaskItem from './TaskItem';

function TaskList({ tasks, setTasks }) {
  return (
    <div>
      <h2>📋 All Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks yet.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem key={task.id} task={task} tasks={tasks} setTasks={setTasks} />
        ))
      )}
    </div>
  );
}

export default TaskList;
