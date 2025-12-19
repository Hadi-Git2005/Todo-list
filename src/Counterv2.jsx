import { useState } from "react";

function Counterv2()
{
    const[count,setCount] = useState(0);
    function inc()
    {
        return setCount(count+1);
    }
    function dec()
    {
        return setCount(count-1);
    }
	return (
        <>
        <div className="rounded-md shadow-lg shadow-gray-400 text-center bg-blend-hue w-fit p-10 m-20 font-mono bg-red-600">
            <button className="transition-all duration-150 rounded-sm shadow-gray-500 active:shadow-lg bg-black px-4 m-4 text-white"onClick={()=>setCount(count+1)}>Increment</button>
            <span className="rounded-sm text-black-400 bg-white px-4 m-4">count</span>
            <button className="tranistion-all duration-150 rounded-sm shadow-gray-500 active:shadow-md bg-black text-white px-4 m-4"onClick={()=>setCount(count-1)}>Decrement</button>
            <br></br>
            <h2 className="text-balck bg-white w-fit text-center">{count}</h2>
        </div>
        </>
    );
}
export default Counterv2;