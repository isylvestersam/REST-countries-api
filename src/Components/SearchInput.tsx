import {  useState } from "react";


const SearchInput = () => {
  const [ value, setValue ] = useState<string>('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }


  return ( <div className="bg-white px-7 py-5 flex items-center gap-5 rounded-lg shadow-sm">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2}  className="size-6 stroke-gray-400">
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
    <input 
      type="text"
      value={value}
      onChange={handleChange}
      className="placeholder:text-gray-300 focus:outline-none" placeholder="Search for a country..."/>

  </div> );
}
 
export default SearchInput;