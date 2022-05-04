import "../../App.css";
import Signup from "../../component/InternRegister";
function Home() {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-md-5">
          <Signup />
        </div>
        <div className="col-md-7  d-flex justify-content-center flex-column ms-auto ">
          <div className="mt-5 d-flex img mb-4">
            <h1 className="text-secondary">Intern Time Sheet</h1>
          </div>
          <div className="d-flex img">
            <img
              className="img-fluid"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrRygnqfpBFGkJNR7O_a_B3zIDcf229phzDg&usqp=CAU"
              alt="demo"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
