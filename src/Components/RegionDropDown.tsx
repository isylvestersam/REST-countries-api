import { useState } from "react";

type IsOpen = boolean


const RegionDropdown = () => { 
  const [isOpen, setIsOpen] = useState<IsOpen>(false)
  const regions: string[] = [ 'Africa', 'America', 'Asia', 'Europe', 'Oceania' ]



  return ( <div className="mt-12 relative"> 
    <button 
      onClick={() => setIsOpen(prev => !prev)}
      className="bg-white w-65 px-8 py-5 rounded-lg shadow-md hover:scale-[1.02] animate">
      <span className="flex justify-between items-center">
        <p className="font-medium">Filter by Region</p>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </span>
    </button>

    {
      isOpen && (
        <div className="absolute top-18 flex flex-col gap-3 items-start py-5 px-8 bg-white w-65 rounded-lg shadow-md ">
          {
            regions.map((reg) => (
              <button 
                key={reg}  
                className="w-full text-left hover:text-red-500 animate"> {reg} </button>
            ))
          }
        </div>
      )
    }

  </div> );
}
 
export default RegionDropdown;