import "./Search.css"
export default function Search({UserInput,setUserInput}) {
    return (
        <form className="Search-form">
            <label>
                <input type="text" placeholder="Search" name="Search" value={UserInput} onChange={evt=>setUserInput(evt.target.value)}/>
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
  }