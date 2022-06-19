import "./Search.css"
export default function Search({UserInput,setUserInput}) {
    return (
            <label className="Search-form">
                <input type="text" placeholder="Search" name="Search" value={UserInput} onChange={evt=>setUserInput(evt.target.value)}/>
            </label>

    )
  }