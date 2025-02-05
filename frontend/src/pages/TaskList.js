import { useGetTasksQuery, useDeleteTaskMutation } from '../api/taskApi';
import { Link } from 'react-router-dom';

const TaskList = () => {
  const { data: tasks, isLoading,refetch } = useGetTasksQuery();
  const [deleteTask] = useDeleteTaskMutation();

  if (isLoading) return <p className="text-center text-gray-500">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">Tasks</h2>
        <div className="mb-4">
          <Link to="/add-task" className="text-white bg-indigo-600 hover:bg-indigo-700 py-2 px-4 rounded-md">
            Add Task
          </Link>
        </div>
        <ul className="space-y-4">
          {tasks?.map((task) => (
            <li
              key={task.id}
              className="flex items-center justify-between p-4 bg-gray-100 rounded-md hover:bg-gray-200 transition duration-300"
            >
              <div className="flex items-center space-x-4">
                <span className="text-lg font-medium text-gray-800">{task.title}</span>
                <span className={`px-2 py-1 rounded-full text-sm ${task.status === 'Completed' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}>
                  {task.status}
                </span>
              </div>
              <div className="space-x-3">
                <Link
                  to={`/edit-task/${task._id}`}
                  className="text-indigo-600 hover:text-indigo-800 font-medium"
                >
                  Edit
                </Link>
                <button
                  onClick={() => {deleteTask(task._id);
                  
                  refetch()}}
                  className="text-red-600 hover:text-red-800 font-medium"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
