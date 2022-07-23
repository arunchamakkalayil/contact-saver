
import Form from "../components/Form";

function Home({ formSub, contacts}) {
  console.log(contacts);
  return (
    <div>
      <div className="container my-4 ">
        <div className="row justify-content-sm-center  my-2">
          <Form formSub={formSub} />
        </div>

        
      </div>
    </div>
  );
}

export default Home;
