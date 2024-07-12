import React from 'react'
import './Css/Login.css'


function Login() {
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
      formData.append("access_key", "c95d77c0-d37b-4b68-b6d8-e5f386fff22f");
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
  
      if (data.success) {
        setResult("Successful");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
   <div className="login">
    <div className="login-container">
    <div className="login-field">
        <form onSubmit={onSubmit}>
          <div>
          <label>Name</label>
          <input type="text" name="name" placeholder='Enter Your Name'  required/>
          </div>
          <div>
          <label>Email</label>
          <input type="email" name="email" placeholder='Enter Your email'  required/>
          </div>
          <div>
          <label>Pswrd</label>
          <input type="password" name="" id="" required placeholder='Enter password' />
          </div>
          <button type='submit' className='button dark-btn'>Submit</button>
        </form>
        <h6>{result}</h6>
    </div>
   </div>
   </div>
  )
}

export default Login;