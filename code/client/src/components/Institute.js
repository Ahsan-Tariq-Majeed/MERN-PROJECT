
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Institute = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",refnum:"" ,phone: "", fees: "", work: ""
  });

  let name, value;

  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  }

  const PostData = async (e) => {
    e.preventDefault();

    const { name, refnum, phone, fees, work } = user;

    const res = await fetch("/institute", {

      method: "POST", 
      headers: { 
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        name, refnum, phone, fees, work
      })

    });

    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("Fill the data")
      console.log("invalid")
    }
    else {
      window.alert("Successfully")
      console.log("valid")

      navigate("/instituteProfile");


    }
    

  }

  return (

    <div className="signup__container">
      <div className="container__child signup__thumbnail">
        <div className="thumbnail__logo">
        

        </div>
        <div className="thumbnail__content text-center">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <h1 className="heading--primary">Welcome to EduLink.</h1>
          <h2 className="heading--secondary">Education for everyone</h2>
        </div>
        <div className="thumbnail__links">
          <ul className="list-inline m-b-0 text-center">
            <li><a href="http://alexdevero.com/" ><i className="fa fa-globe" /></a></li>
            <li><a href="https://www.behance.net/alexdevero"><fa className="fa fa-behance" /></a></li>
            <li><a href="https://github.com/alexdevero" ><i className="fa fa-github" /></a></li>
            <li><a href="https://twitter.com/alexdevero" ><i className="fa fa-twitter" /></a></li>
          </ul>
        </div>
        <div className="signup__overlay" />
      </div>
      <div className="container__child signup__form">
        <form method='POST'>

          <div className="form-group">
            <label htmlFor="name">Institute Name</label>
            <br></br>
            <input className="form-control" type="text" name="name" id="name"
              value={user.name}
              onChange={handleInputs}
              placeholder="" required />
          </div>

          <div className="form-group">
            <label htmlFor="refnum">Refernce Number</label>
            <br></br>
            <input className="form-control" type="number" name="refnum" id="refnum"
              value={user.refnum}
              onChange={handleInputs}
              placeholder="" required />
          </div>



          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <br></br>
            <input className="form-control" type="number" name="phone" id="phone"
              value={user.phone}
              onChange={handleInputs}
              placeholder="" required />
          </div>

          <div className="form-group">
            <label htmlFor="fees">Fees</label>
            <br></br>
            <input className="form-control" type="number" name="fees" id="fees"
              value={user.fees}
              onChange={handleInputs}
              placeholder="" required />
          </div>

          <div className="form-group">
            <label htmlFor="work">Desipline</label>
            <br></br>
            <input className="form-control" type="text" name="work" id="work"
              value={user.work}
              onChange={handleInputs}
              placeholder="" required />
          </div>


          
          <div className="m-t-lg">
            <ul className="list-inline">
              <li>
              <br></br>
                <br></br>
                <input className="btn btn--form" type="Register" defaultValue="Register"
                 onClick={PostData} />
                 
              </li>
              <li>
                <br></br>
                <br></br>
                <a className="signup__link" href="http://localhost:3000">Back to home</a>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Institute