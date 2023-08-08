import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// pages and components
import ViewBlogs from './pages/ViewBlogs';
import CreateBlog from './pages/CreateBlog';
import Navbar from './components/Navbar';
import Signup from './pages/Signup';
import Login from './pages/Login';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route exact path="/" element={<ViewBlogs />} />
            <Route exact path="/createBlog" element={<CreateBlog />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
