import React,{useState,useEffect} from 'react'
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './Home'
import Cart from './Cart'
import Data from './data/Product'
import Search from './components/Search'

const  Navbar = () => {
  const [products, setProducts] = useState(Data);
  const [add,setAdd] = useState([]);

  useEffect(() => {
    console.log("add state updated:", add); 
  }, [add]);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = Data.filter(product =>
      product.pname.toLowerCase().startsWith(searchTerm)
    );
    setProducts(filteredProducts);
  }
  
  return (
   <Router>
    <div className='fixed top-0 left-0 w-full  z-10 p-4  flex justify-between align-middle bg-slate-950 border-b-2  border-gray-700' >
      <div className=' ml-4 cursor-pointer text-gray-400 text-xl'>FlipZon</div>
      <Search handleSearch={handleSearch} />
      <div className='flex justify-between'>
         <div><button className=' bg-slate-800 pl-2 pr-2 rounded text-gray-400 ml-3'><Link to='/'>Home</Link>
            </button></div>
         <div className='ml-10 mr-10'><button className=' bg-slate-800 pl-2 pr-2 rounded text-gray-400'><Link to='/cart'>Cart</Link>
            </button></div>
      </div>
    </div>
    <Routes>
        <Route path="/" element={<Home handleSearch={handleSearch} products={products} add={add} setAdd={setAdd} />} />
        <Route path="/cart" element={<Cart add={add} setAdd={setAdd} />} />
      </Routes>
    </Router>
  )
}

export default  Navbar