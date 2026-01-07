import Header from "./Components/Header"
import RegionDropdown from "./Components/RegionDropDown"
import SearchInput from "./Components/SearchInput"


function App() {

  return (
    <>
      <div className="container px-5 bg-white py-7 shadow-md">
        <Header/>
      </div>
      <div className="container px-5 my-9">
        <SearchInput />
        <RegionDropdown />
      </div>
    </>
  )
}

export default App
