import React from 'react';
// import { useState,useEffect } from 'react'
// import Data from './data/Product';
import Pcard from './components/Pcard';
import './styles/Main.css'
// import Search from './components/Search';

const Home = (props) => {
  // const [products, setProducts] = useState(Data);
  // const [add,setAdd] = useState([]);

  // useEffect(() => {
  //   console.log("add state updated:", add); 
  // }, [add]);

  // const handleSearch = (e) => {
  //   const searchTerm = e.target.value.toLowerCase();
  //   const filteredProducts = Data.filter(product =>
  //     product.pname.toLowerCase().startsWith(searchTerm)
  //   );
  //   setProducts(filteredProducts);
  // }
  // {/* <Search handleSearch={props.handleSearch} /> */}
  
  return (
      
      <div className=' flex flex-wrap justify-start w-full h-full mt-20 pl-40 ' >

        {props.products.map((product) => (
          <Pcard key={product.id}
                name={product.pname} 
                rate={product.rating} 
                prize={product.prize}
                img={product.img} 
                product={product} 
                add={props.add}
                setAdd={props.setAdd}/> 
        ))}
    </div>
  );
}

export default Home;
