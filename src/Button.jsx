function HelloWorld() {
    console.log("Hello!");
}


function HelloWorld2() {
    console.log("Bye!");
}


export default function Button(){
    return (
       <div>
           <button onClick={HelloWorld}>Click me!</button>
           <p onMouseOver={HelloWorld2}>Hover the mouse over me</p>
       </div>
    );
}


