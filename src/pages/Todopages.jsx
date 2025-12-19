import { useState } from "react";

function Todopages()
{
    const[input,setInput] = useState("");
    const[items,setItems] = useState([]);
    function handleAdd()
    {
        if(input.trim()!=" ")
        {
            items.push(input + " ")
            setItems([...items])
            setInput("");
        }
    }
    return(
        <>
            <main>
                <h1>Welcome to ToDo</h1>
                <section>
                    <input value={input} onChange={(e) => setInput(e.target.value)}  type="text"/>
                    <button onClick = {()=>handleAdd()}>add</button>
                </section>
                <section>
                    <ol>
                    {
                        items.map((val,idx)=>{
                            return <li>{val}</li>
                        })
                    }
                    </ol>
                </section>
            </main>
        </>
    )
};
export default Todopages;