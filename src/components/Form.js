import { useForm } from "react-hook-form";

function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit =(data) =>{
    console.log(data)

  }

  return (
    <div>
      <form method="post" className="d-flex justify-content-center" noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group shadow-lg p-4 mb-5 bg-light rounded w-30">
          <div>
            <h2 className="text-center">Add Contact</h2>
          </div>
          <label for="inputEmail3" className="col-sm-2 col-form-label">
            Name
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              {...register("name", {
                required: "Name is required", // JS only: <p>error message</p> TS only support string
              })}
              className="form-control"
              placeholder="First name"
            ></input>
           {errors.name && (<small className="text-danger">{errors.name.message}</small>)}
          </div>

          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input type="email"
              {...register("email", {
                required: "Email is required", pattern : {
                  value: /^([A-Za-z]|[0-9])+$ /,
                  message: "Invalid Email address"
                } // JS only: <p>error message</p> TS only support string
              })}
              
              className="form-control"
              placeholder="Email"
            ></input>
           
            {errors.email && (<small className="text-danger">{errors.email.message}</small>)}
          </div>

          <label for="inputEmail3" class="col-sm-2 col-form-label">
            Phone
          </label>
          <div className="col-sm-10">
            <input
              {...register("phone", {
                required: "phone is required", pattern : {
                    value: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
                    message: "Invalid Phone address"
                  } 
                })} 
              
              type="phone"
              className="form-control"
              placeholder="Phone"
            ></input>
             {errors.phone && (<small className="text-danger">{errors.phone.message}</small>)}
          </div>
          <br></br>

          <button type="submit" className="btn btn-outline-success">
            Add Contact
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
