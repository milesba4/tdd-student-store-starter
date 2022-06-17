import "./Search.css"
export default function Search({UserInput,setUserInput}) {
    return (
        <form className="Search-form">
            <label>
                <input type="text" placeholder="Search" name="Search" value={UserInput} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
  }