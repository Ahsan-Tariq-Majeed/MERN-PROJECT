
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Signup = () => {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "", email: "", phone: "", work: "", password: ""
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

    const { name, email, phone, work, password } = user;

    const res = await fetch("/register", {

      method: "POST", 
      headers: { 
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        name, email, phone, work, password
      })

    });

    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("Invalid Registration")
      console.log("invalid")
    }
    else {
      window.alert("Registration Successfully")
      console.log("valid")

      navigate("/login");
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
            <label htmlFor="name">Username</label>
            <br></br>
            <input className="form-control" type="text" name="name" id="name"
              value={user.name}
              onChange={handleInputs}
              placeholder="" required />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <br></br>
            <input className="form-control" type="text" name="email"  id="email" title="Invalid email address"
            pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"  
            
              value={user.email}
              onChange={handleInputs}
               required />
          </div>



          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <br></br>
            <input className="form-control" type="number" name="phone" id="phone"
              value={user.phone}
              onChange={handleInputs}
              placeholder="" required />
          </div>

          <div className="form-group">
            <label htmlFor="work">Work</label>
            <br></br>
            <input className="form-control" type="text" name="work" id="work"
              value={user.work}
              onChange={handleInputs}
              placeholder="" required />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input className="form-control" type="password" name="password" minlength="4" id="password"
              value={user.password}
              onChange={handleInputs}
              placeholder="********" required />
          </div>


          
          <div className="m-t-lg">
            <ul className="list-inline">
              <li>
              <br></br>
                <br></br>
                <input className="btn btn--form" type="submit" defaultValue="Register"
                 onClick={PostData} />
                 
              </li>
              <li>
                <br></br><br></br>
                <a className="signup__link" href="http://localhost:3000/login">I am already a member</a>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup