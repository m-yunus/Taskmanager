import { useState } from 'react';
import { useUpdateTaskMutation } from '../api/taskApi';
import { useNavigate, useParams } from 'react-router-dom';

const EditTask = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('pending');
  const [updateTask] = useUpdateTaskMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateTask({ id, data: { title, status } });
    navigate('/');
  };

  return (
    <div>
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
        <button type="submit">Update Task</button>
      </form>
    </div>
  );
};

export default EditTask;
