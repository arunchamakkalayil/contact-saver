import Contact from "../components/Contact"
import Form from "../components/Form"


function Home({formSub,contacts}) {
  console.log(contacts)
  return (
    <div>
        <div className="container my-5">
            <div className="row justify-content-sm-center my-5">
            <Form formSub={formSub} />
        <Contact />
    </div>
            </div>
        </div>
       
  )
}

export default Home