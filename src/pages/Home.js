import Contact from "../components/Contact"
import Form from "../components/Form"


function Home({formSub,contacts,deleteContact,favToggle}) {
  console.log(contacts)
  return (
    <div>
        <div className="container my-4 ">
            <div className="row justify-content-sm-center  my-2">
            <Form formSub={formSub} /></div>
      <div className=" d-flex flex-wrap  justify-content-around">
       {contacts.map((singleContact)=>{
          return <div className="mt-3"> <Contact key={singleContact.id} favToggle={favToggle} contact={singleContact} deleteContact={deleteContact}  /></div>
        })}
{contacts.length === 0 && <div>No Contacts to show</div>}

</div>
     
    
            </div>
        </div>
       
  )
}

export default Home