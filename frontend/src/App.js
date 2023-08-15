import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
// pages and components
import CreateBlog from './pages/CreateBlog';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
// import Signup from './pages/Signup';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import ViewBlogs from './pages/ViewBlogs';
import Home from './pages/Home';
import HitMeUp from './pages/HitMeUp';
import About from './pages/About';


function App() {
  const {state:{user}} = useAuthContext();

  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/hmu" element={<HitMeUp />} />
            <Route exact path ="/blogs" element={<ViewBlogs />}/>
            <Route exact path="/createBlog" element={user ? <CreateBlog /> : <Navigate to="/login"/>} />
            {/* <Route exact path="/signup" element={!user ? <Signup /> : <Navigate to="/"/>} /> */}
            <Route exact path="/login" element={!user ? <Login /> : <Navigate to="/"/>} />
            <Route path='*' element={<NotFound />}/> 
          </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
