import heart from '../heart.svg'
import heartfill from '../heart-fill.svg'


function Contact({contact,deleteContact,favToggle}) {
  

  return (
    <div>
<div className='container p-2 border  shadow-lg p-3 mb-5 bg-white rounded'>
<div class="row p-1">
  <div class="col-10">Name : {contact.data.name}</div>
 
  <div onClick={()=>{favToggle(contact.id)}} class="col-2"> {contact.fav?<img src={heartfill}  alt="heart"></img>:<img src={heart}  alt="heart"></img>}</div>
</div>
<div className='p-1'>
  <div class="col-12">Email : {contact.data.email}</div>
  <div class="col-12">Phone : {contact.data.phone}</div><br></br>
  <div className='row'>
 <div className='col-8'></div>
 <div className='col-4'><button type="button" onClick={()=>{deleteContact(contact.id)}} class="btn btn-outline-success btn-sm">Delete</button></div>
 </div>
</div>
</div>


    </div>
  )
}

export default Contact