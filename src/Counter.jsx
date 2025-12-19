import { useState } from "react";

function Counter()
{
    const [count,setCount] = useState(10);
    const [first,setFirst] = useState('Hadi');
    function handleClick(){
        setCount(count+1);
    }
    return (
        <>
            <button onClick={handleClick}>count {count}</button>
        </>
    );
}
export default Counter;