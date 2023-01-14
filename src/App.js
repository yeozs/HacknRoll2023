import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import Chatbot from './components/Chatbot';



function App() {
  /*useEffect(() => {
      socket.on("connect", () => {
        console.log("hi")
      })
    })*/

  return (
    <BrowserRouter>

      <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Chatbot" element={<Chatbot />} />
    </Routes>
    </BrowserRouter>



  );
}

export default App;

//ui semantics link: https://cdnjs.com/libraries/semantic-ui
//localhost image icon: https://www.vecteezy.com/vector-art/441080-vector-chat-icon
//Boilerplate code for socket io from https://socket.io/get-started/chat



//https://www.youtube.com/watch?v=uyVz6LA3Eho
