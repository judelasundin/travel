import {FiSearch} from 'react-icons/fi'

const SearchBar = () => {
  return (
    <div className="flex items-center">
        <div className=" p-4 rounded-lg bg-slate-950 opacity-40">
            <h2 className='text-white opacity-100'>Tour and Services</h2>
            </div>
        <div className="flex items-center w-full">
        <input type="text" placeholder="Destination" className="px-2 py-4 w-2/5 rounded-l-lg flex-1" />
        <input type="text" placeholder="Search activities or attractions" className="px-2 py-4 w-full flex-1" />
        <FiSearch className='flex-none text-white bg-green-600 p-8' />
        </div>
      
    </div>
  )
}

export default SearchBar
