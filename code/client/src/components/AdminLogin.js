import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import logo from "../images/edulink_logo (2).png";

const Adminlogin = () => {

  const navigate = useNavigate();

const  [email, setEmail] =useState('')
const [password, setPassword] = useState('')


  const loginUser = async (e) => {
    e.preventDefault();
 

    const res = await fetch("/signin", {

      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email, password
      })

    });

    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert("Invalid Login")
      console.log("invalid")
    }
    else {
      window.alert("Login Successfully")

      console.log("valid")

      navigate('/admin');
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
          <h1 className="heading--primary">   Welcome EduLink Admin.</h1>
          <h2 className="heading--secondary">Education for everyone</h2>
        </div>
        <div className="thumbnail__links">
          <ul className="list-inline m-b-0 text-center">
            <li><a href="http://alexdevero.com/" ><i className="fa fa-globe" /></a></li>
            <li><a href="https://www.behance.net/alexdevero" ><fa className="fa fa-behance" /></a></li>
            <li><a href="https://github.com/alexdevero" ><i className="fa fa-github" /></a></li>
            <li><a href="https://twitter.com/alexdevero" ><i className="fa fa-twitter" /></a></li>
          </ul>
        </div>
        <div className="signup__overlay" />
      </div>
      <div className="container__child signup__form">
        <form method='POST'>

          <div className="form-group">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <label htmlFor="email">Email</label>
            <br></br>
            <input className="form-control" type="text" name="email" id="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input className="form-control" type="password" name="password" id="password" 
             value={password}
             onChange={(e) => setPassword(e.target.value)}
            required />
            <br></br>
            <br></br>
          </div>

          <div className="m-t-lg">
            <ul className="list-inline">
              <li>
                <input className="btn btn--form" type="submit" 
                onClick={loginUser}
                defaultValue="Register" />
              </li>
             
            </ul>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Adminlogin