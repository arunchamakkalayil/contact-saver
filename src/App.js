import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Favourates from "./pages/Favourates";
import Home from "./pages/Home";
import { addDoc, collection, getDocs, deleteDoc,doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";


function App() {
  const [contacts, setContacts] = useState([]);

  const colRef = collection(db, "contacts");
  useEffect(()=>{
    getContacts();

  },[])

  
  const getContacts =() => {
  const  colRef = collection(db, "contacts");
   getDocs(colRef).then((res)=>{
    
    const allContacts = res.docs.map(doc=>({
      data: doc.data(),
      id: doc.id
    }))
    setContacts(allContacts)
  })
  .catch(error => console.log(error.message))

}

  const formSub = async(data) => {
   await addDoc(colRef, {
      name: data.name,
      phone: data.phone,
      email: data.email,
      id: data.id,
      fav: data.fav,
    });
    

   
  };

 

  const favToggle = (id) => {
  
    const updateRef = doc(db,'contacts',id)   
   
  
    updateDoc(updateRef,{fav:'true'})
   // let updateContact = contacts.map((singleContact) => {
    // return singleContact.id === id
   //    ? { ...singleContact, fav: !singleContact.fav }
   //    : singleContact;
   //});
   
  };

  const deleteContact = (id) => {
    //let newContact = contacts.filter((singleContact) => {
    //  return (colRef, singleContact.id !== id);
    //});
    const delRef = doc(db,'contacts',id)
    deleteDoc(delRef)
   
  };

  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                formSub={formSub}
                favToggle={favToggle}
                contacts={contacts}
                deleteContact={deleteContact}
              />
            }
          ></Route>
          <Route
            path="/favourates"
            element={
              <Favourates
                favToggle={favToggle}
                contacts={contacts}
                deleteContact={deleteContact}
              />
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
