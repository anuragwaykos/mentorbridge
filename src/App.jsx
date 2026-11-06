
import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Mentor from "./pages/Mentor.jsx";
import Login from "./pages/Login.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import MyProfile from "./pages/MyProfile.jsx";
import MyApp from "./pages/MyApp.jsx";
import Appointment from "./pages/Appointment.jsx";
import Nav from "./components/nav/Nav.jsx";

function App() {


  return (

      <div className= 'mx-4 sm:mx-[10%]'>
          <Nav/>

          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/mentor' element={<Mentor/>}/>
              <Route path='/mentor/:speciliality' element={<Mentor/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='/contact' element={<Contact/>}/>
              <Route path='/my-profile' element={<MyProfile/>}/>
              <Route path='/my-app' element={<MyApp/>}/>
              <Route path='/app/:docId' element={<Appointment/>}/>
          </Routes>
      </div>

  )
}

export default App
