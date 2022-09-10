import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.min.js";
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home'
import SinglePost from './Pages/singlePost/SinglePost';
import Write from './Pages/Write/Write';
import Settings from './Pages/Settings/Settings';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register'
import { useContext } from 'react';
import { Context } from './contextApi/Context';
import About from './Pages/About/About';
import Footer from './Components/Footer/Footer';

function App() {
const {user} = useContext(Context)

  return (
    <>
      <Navbar />
      <Routes>
        <Route>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={user ? <About/> : <Login />} />
          <Route path='/register' element={user ? <Home /> : <Register />} />
          <Route path='/login' element={user ? <Home/> : <Login />}/>
          <Route path='/post/:postId' element={<SinglePost/>} />
          <Route path='/write' element={user ? <Write/> : <Register />} />
          <Route path='/settings' element={user ? <Settings /> : <Register />} />
        </Route>
      </Routes>
    <Footer />
    </>
  );
}

export default App;
