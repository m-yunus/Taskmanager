import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';


import ProtectedRoute from './components/ProtectedRoute';
import Navbar from './components/Navbar';
import TaskList from './pages/TaskList';
import AddTask from './pages/AddTask';
import EditTask from './pages/EditTask';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/" element={<ProtectedRoute>
          <TaskList /></ProtectedRoute>} />
          <Route path="/add-task" element={<ProtectedRoute>
            <AddTask /></ProtectedRoute>} />
            <Route path="/edit-task/:taskId" element={<ProtectedRoute>
              <EditTask /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
};

export default App;