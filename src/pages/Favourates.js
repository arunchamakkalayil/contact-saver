import Contact from "../components/Contact"



function Favourates({contacts,favToggle,deleteContact}) {
  
  return <>
   
<div className=" d-flex flex-wrap  justify-content-around">
  
      
{contacts.map((singleContact)=>{
          return(singleContact.fav && (<div className="mt-3"> <Contact key={singleContact.id} favToggle={favToggle} contact={singleContact} deleteContact={deleteContact}  /></div>))
        })}
        {contacts.filter(single=>single.fav).length === 0 && <h2 className="pt-3">No Favorate Contact</h2>}

</div>
  
  </>
}

export default Favourates