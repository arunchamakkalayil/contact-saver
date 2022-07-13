import Contact from "../components/Contact"
import Form from "../components/Form"


function Home({formSub,contacts,deleteContact}) {
  console.log(contacts)
  return (
    <div>
        <div className="container my-5">
            <div className="row justify-content-sm-center  my-5">
            <Form formSub={formSub} /></div>
      <div className=" d-flex flex-wrap  justify-content-sm-around">
       {contacts.map((singleContact)=>{
          return <div className="mt-3"> <Contact key={singleContact.id} contact={singleContact} deleteContact={deleteContact} /></div>
        })}


</div>
     
    
            </div>
        </div>
       
  )
}

export default Home