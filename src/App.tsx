import Header from "./Components/Header"
import SearchInput from "./Components/SearchInput"


function App() {

  return (
    <>
      <div className="container px-5 bg-white py-7 shadow-md">
        <Header/>
      </div>
      <div className="container px-5 my-9">
        <SearchInput />
      </div>
    </>
  )
}

export default App
