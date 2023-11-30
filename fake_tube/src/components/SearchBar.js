import { useState } from "react"
import { useNavigate } from "react-router-dom";


export default function SearchBar() {

  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSearch(query){
    navigate(`result/${query}`);
  }

  return (
    <>
        <div>
            <input type="text" value={query} onChange={(e)=>{setQuery(e.target.value)}}/>
            <button onClick={()=>{handleSearch(query)}}>Szukaj</button>
        </div>
    </>
  )
}

