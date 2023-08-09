import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
// pages and components
import ViewBlogs from './pages/ViewBlogs';
import CreateBlog from './pages/CreateBlog';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Login from './pages/Login';



function App() {
  const {state:{user}} = useAuthContext();

  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route exact path="/" element={user ? <ViewBlogs /> : <Navigate to="/login"/>} />
            <Route exact path="/createBlog" element={user ? <CreateBlog /> : <Navigate to="/login"/>} />
            <Route exact path="/signup" element={!user ? <Signup /> : <Navigate to="/"/>} />
            <Route exact path="/login" element={!user ? <Login /> : <Navigate to="/"/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
