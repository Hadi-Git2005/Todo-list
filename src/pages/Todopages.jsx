import { useState } from "react";

function Todopages()
{
    const[input,setInput] = useState("")
    const[items,setItems] = useState([])
    function handleClick(){
        if(input.trim()!="")
        {
            items.push(input + " ")
            setItems([...items])
            setInput("")
        }
        else{
            return
        }
    }
    return(
        <>
        <main className="flex flex-col items-center">
            <h1 className="text-center rounded-md bg-teal-400 w-fit px-3 py-1"><strong>Welcome ToDo List</strong></h1>
            <br></br>
            <section>
                    <input className="text-teal-300" type="text" onChange={(e)=>setInput(e.target.value)} value = {input}/>
                    <button className="bg-teal-300" onClick={handleClick}> add </button>
            </section>
            <section>
                <ol>
                    {
                        items.map((val,idx)=>{return (<li>{idx + 1}. {val}</li>)})
                    }
                </ol>
            </section>
        </main>
        </>
    )
}
export default Todopages