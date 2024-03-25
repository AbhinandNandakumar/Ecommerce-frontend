import React from 'react';
import '../styles/Main.css'
import { FaRegStar } from "react-icons/fa";

const Pcard = (props) => {
  
  

  const handleAdd = () =>{
    const isAlreadyAdded = props.add.some(item => item.id === props.product.id);
    const name = props.product.pname.toLowerCase()
    if (!isAlreadyAdded) {
      alert(`Your ${name} is added to cart...`)
    props.setAdd(prev => [...prev,props.product])
    }
    else {
      alert(`${name} is already added to cart`);
    }
  } 
  return (
    <div key={props.id} className='bg-slate-950 p-4 m-3  rounded-md flex justify-between flex-col card w-1/4 h-80'>
      <div className='w-full  h-1/2'>
      <img src={props.img} alt={props.pname} style={{ width: '100%', height: '100%' }}></img>
      </div>
      <div className=' text-xl decoration-4 text-gray-400'>
          {props.name}
        </div>
      
      <div className=''>
        <div className='mb-1 text-gray-600'>
          {props.product.des}
        </div>
          <div className='text-gray-400 flex gap-2 text-center'>
          <FaRegStar />
            {props.rate}
          </div>
        <div className='flex justify-between '>
          <div className='text-gray-400'>
            ${props.prize}
          </div>
          <div>
            <button className=' bg-slate-800 pl-3 pr-3 rounded-md btn text-gray-400' onClick={handleAdd}>
              ADD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pcard;
