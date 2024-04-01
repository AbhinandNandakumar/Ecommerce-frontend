import React from 'react';
import './styles/Main.css';
import { CgSmileSad } from "react-icons/cg";
const Cart = (props) => {
  const handleRemove = (productRmv) => {
    props.setAdd(prev => prev.filter((product) => product !== productRmv ));
    alert(`${productRmv.pname} removed from cart`)
  };
  const added = [...props.add].reverse();
  const handleBuy = () => {
    alert('Some network issues')
  }

  return (
    <div className='w-1/2 mt-20'>
      {props.add.length !== 0 ? (
        added.map((product) => (
          <div key={product.id} className='bg-slate-950 flex flex-col m-3 rounded-md border-2 border-slate-500 shadow-inner card'>
            <div className='m-2 text-gray-400'>{product.pname}</div>
            <div className='flex flex-row justify-between'>
              <div className='m-2 text-gray-400'>{product.des}</div>
              <div>
                <button className='bg-slate-800 pl-2 pr-2 rounded m-1 text-gray-400' onClick={() => handleRemove(product)}>Remove</button>
                <button className='bg-slate-800 pl-2 pr-2 rounded ml-1 mb-1 mt-1 mr-3 text-gray-400' onClick={handleBuy}>Buy for ${product.prize}</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className='text-gray-400 text-center flex flex-row justify-center items-center h-16'>
  <div className=' mr-2 text-2xl'>The cart is empty</div>
  <div className=' h-full flex justify-center items-center text-2xl'>
    <CgSmileSad className='h-full' />
  </div>
</div>


      )}
    </div>
  );
};

export default Cart;
