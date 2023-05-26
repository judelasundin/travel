import {FiSearch} from 'react-icons/fi'

const SearchBar = () => {
  return (
    <div className="flex items-center h-[40%]">
        <div className=" p-4 rounded-full w-60 bg-slate-950 opacity-40 absolute left-[40.75%] right-[40.75%] bottom-[40%]">
            <h2 className='text-white opacity-100'>Tour and Services</h2>
            </div>
        <div className="flex items-center w-full bg-white p-8 rounded-lg shadow-lg relative">
        <input type="text" placeholder="Destination" className="border border-gray-700 rounded-l-lg px-2 py-4 w-2/5  flex-1 " />
        <input type="text" placeholder="Search activities or attractions" className="border border-gray-700 rounded-none px-2 py-4 w-full flex-1 " />
        <div className=' bg-green-500 rounded-r-lg flex-none text-white h-full p-4 hover:bg-green-600'>
        <FiSearch size={26}/>
        </div>
        </div>
      
    </div>
  )
}

export default SearchBar
