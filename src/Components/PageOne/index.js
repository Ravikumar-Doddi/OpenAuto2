import { useState } from "react";
import { ImFacebook, ImTwitter, ImYoutube, ImLinkedin } from "react-icons/im";
import Axios from "axios";
import { BsInstagram } from "react-icons/bs";
import Logo from "../../Assets/Pickup_Illustration.png";

const PageOne = () => {
  const initialState = { name: "", email: "" };
  const [formVal, setForm] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...formVal, [name]: value });
  };

  const register = (e) => {
    e.preventDefault();
   
    setFormErrors(validate(formVal));
    
    Axios.post("http://localhost:9000/register",{userName:formVal.name,userEmail : formVal.email})
    

  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "UserName is Required";
    }
    if (!values.email) {
      errors.email = "Email is Required";
    } else if (!regex.test(values.email)) {
      errors.email = "This Email is not valid";
    }
    else{
      setForm({name : "",email : ""})
    }

    return errors;
  };


  return (
    <div>
    <div className=" bg-[#202124] text-white h-auto p-5 lg:p-10 flex flex-col">
      <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:items-center lg:text-start">
        <div className="">
          <h1 className="font-sans lg:text-5xl font-bold mb-4 text-4xl">
            Vehicle Maintenance <br /> From The Comfort of <br /> Your Home
          </h1>
          <p className="mb-4">
            Open Auto Smoothes the hassels of maintaining your vehicle and helps
            you deal with unexpected repairs worry-free
          </p>

          <form className="flex flex-col gap-2" onSubmit={register}>
            <input
              className="p-2 rounded-2xl text-white bg-transparent border w-auto lg:w-2/5"
              type="text"
              name="name"
              value={formVal.name}
              placeholder="Enter Your Name"
              onChange={handleChange}
            />
            <p className="text-red-600">{formErrors.name}</p>
            <input
              className="p-2 rounded-2xl text-white bg-transparent border w-auto lg:w-2/5"
             
              name="email"
              value={formVal.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
            />
            <p className="text-red-600">{formErrors.email}</p>
            <button
              className="border w-auto lg:w-2/5 p-2 rounded-2xl hover:bg-indigo-700"
              type="submit font-sans"
            >
              Submit
            </button>
          </form>
        </div>

        <img src={Logo} alt="" className="w-auto lg:w-2/4 mt-5" />
      </div>

      <div className="flex gap-5 self-center lg:self-end mt-5">
        <ImFacebook className="lg:text-2xl text-xl" />{" "}
        <ImTwitter className="lg:text-2xl text-xl" />{" "}
        <ImYoutube className="lg:text-2xl text-xl" />{" "}
        <ImLinkedin className="lg:text-2xl text-xl" />{" "}
        <BsInstagram className="lg:text-2xl text-xl" />{" "}
      </div>

    </div>
    <hr/>
    </div>
  );
};

export default PageOne;
