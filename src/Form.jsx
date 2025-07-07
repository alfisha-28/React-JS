function handleFormSubmit(){
    event.preventDefault();
    console.log("Form is submitted")
}


export default function Form(){
    return(
        <form onSubmit={handleFormSubmit}>
            <input placeholder="Write something"/>
            <button onClick={handleFormSubmit} >Submit</button>
        </form>
    );
}
