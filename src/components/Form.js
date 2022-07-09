

function Form() {
  return (
    <div>
<form className="d-flex justify-content-center" >
   
<div className="form-group shadow-lg p-4 mb-5 bg-light rounded w-30">
<div><h2 className="text-center">Add Contact</h2></div>
<label for="inputEmail3" className="col-sm-2 col-form-label">Name</label>
    <div className="col-sm-10">
    <input type="text" className="form-control" placeholder="First name"></input>
    <small className="text-danger">Name is required</small>
    </div>

<label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control"  placeholder="Email"></input>
      <small className="text-danger" >Email is required</small>
    </div>

    <label for="inputEmail3" class="col-sm-2 col-form-label">Phone</label>
    <div className="col-sm-10">
      <input type="phone" className="form-control"  placeholder="Phone"></input>
      <small className="text-danger" >Phone is required</small>
    </div><br></br>

    <button type="submit" className="btn btn-outline-success">Add Contact</button>
   
    
</div>
</form>

    </div>
    
  )
}

export default Form