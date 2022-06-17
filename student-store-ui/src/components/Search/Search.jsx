import "./Search.css"
export default function Search() {
    return (
        <form className="Search-form">
            <label>
                <input type="text" placeholder="Search" name="Search" />
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
  }