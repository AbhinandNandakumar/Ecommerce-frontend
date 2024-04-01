import React,{useRef} from 'react'
import { FaSearchengin } from "react-icons/fa6";

const Search = (props) => {
  const inpRef = useRef(null);
  const handleIcon = () => {
    inpRef.current.focus();

  }
  return (
   <div className='flex justify-center'>
     <input type='text' placeholder='Search' className=' p-1 rounded-l bg-slate-800  card text-gray-400 border-none focus:outline-none' onChange={props.handleSearch} ref={inpRef} ></input>
     <div className='flex justify-center pt-2 pl-1 text-gray-400 bg-slate-800 rounded-r w-8 text-xl cursor-pointer' 
     onClick={handleIcon}>
     <FaSearchengin />
     </div>
     
 </div>
  )
}

export default Search