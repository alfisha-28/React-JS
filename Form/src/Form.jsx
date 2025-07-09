import { useState } from "react";

export default function Form() {
    let [formData, setFormData] = useState({
        fullName : "",
        username : "",
        password : "",
    });

    // For one specific input change like full name
    // let handleNameChange = (event) => {
    //     setFullName(event.target.value);
    // } 

    // For all input change 
    let handleInputChange = (event) => {
        // let fieldName= event.target.name;
        // let newValue = event.target.value;
         setFormData((currData) => {
            return{...currData, [event.target.name]: event.target.value}
         });
    };

    let handleSubmit = (event) => {
         event.preventDefault();
         setFormData({
             fullName: "",
             username: "",
             password: "",
         });
    }

    return(
       <form onSubmit={handleSubmit}>
        <label htmlFor="fullName">Full Name</label>
           <input 
           placeholder="Enter your full name"
           type="text" 
           value={formData.fullName}
           onChange={handleInputChange}
           id="fullName"
           name="fullName"
           />  

           <br></br> <br></br>
           <label htmlFor="username">Username</label>
           <input 
           placeholder="Enter your Username"
           type="text" 
           value={formData.username}
           onChange={handleInputChange}
           id="username"
           name="username"
           />  

           <br></br> <br></br>
           <label htmlFor="password">password</label>
           <input 
           placeholder="Enter password"
           type="password" 
           value={formData.password}
           onChange={handleInputChange}
           id="password"
           name="password"
           />  

           <br></br> <br></br>
           <button>Submit</button>
       </form>
    );
}