import { useState } from "react";

export default function CommentsForm() {
    let [formData, setFormData] = useState({
        username : "",
        remarks : "",
        rating : 5,
    });

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return{...currData, [event.target.name]: event.target.value}
         });
    }

    let handleSubmit = (event) => {
        console.log(formData)
        event.preventDefault();
        setFormData({
        username : "",
        remarks : "",
        rating : 5,
        })

    }

    return(
    <div>
        <h3>Give a Comment!</h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <br></br>
            <input 
            placeholder="username" 
            type="text"
            value={formData.username}
            onChange={handleInputChange}
            name="username"
            id="username"
            />
            <br></br> <br></br>

            <label htmlFor="remark">Remark</label>
            <br></br>
            <textarea 
            value={formData.remarks}
            placeholder="Add a remark"
            onChange={handleInputChange}
            name="remarks"
            id="remarks"
            >
               Remarks
            </textarea>
            <br></br> <br></br>
             
            <label htmlFor="rating">Rating</label>
            <br></br>
            <input
            placeholder="rating"
            type="number" min={1} max={5}
            value={formData.rating}
            onChange={handleInputChange}
            name="rating"
            id="rating"
            />
            <br></br> <br></br>

            <button>Add Comment</button>
            
        </form>
    </div>
    );
}