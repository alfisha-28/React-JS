import { useEffect, useState } from "react";

export default function CounterE() {
    let [count, setCount] = useState(0);
    
    let incCount = () => {
        setCount((currCount) => currCount + 1);
    };

    useEffect(
        function printSomething() {
            console.log("This is side-effect")
        }
    );

    return(
    <div>
        <h3>Count = {count}</h3>
        <button onClick={incCount}>Increase count</button>
    </div>
    );
}