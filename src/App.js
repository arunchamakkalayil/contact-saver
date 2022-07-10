
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Favourates from "./pages/Favourates";
import Home from "./pages/Home";

function App() {

  const [contacts,setContacts] = useState([])

  const formSub = (data) =>{

   // console.log(data)
    setContacts([...contacts,data])

  }

  return (
    <div>
      <Router>
      <Nav />
        <Routes>
        
          <Route exact path="/" element={<Home formSub={formSub} contacts={contacts} />}></Route>
          <Route path="/favourates" element={<Favourates />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
