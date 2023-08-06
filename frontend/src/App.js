import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// pages and components
import ViewBlogs from './pages/ViewBlogs';
import CreateBlog from './pages/CreateBlog';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route exact path="/" element={<ViewBlogs />} />
            <Route exact path="/createBlog" element={<CreateBlog />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
