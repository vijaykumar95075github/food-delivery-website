import React, { useContext, useCallback } from 'react';
import Nav from '../components/Nav';
import categories from '../Category';
import Card from '../components/Card';
import { food_items } from "../food";
import { dataContext } from '../context/UserContext';
import { RxCrossCircled } from "react-icons/rx";
import Card2 from '../components/Card2';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

function Home() {
  const { cate, setCate, input, showCart, setShowCart } = useContext(dataContext);

  // Optimized filtering function
  const filter = useCallback((category) => {
    if (category === "All") {
      setCate(food_items);
    } else {
      setCate(food_items.filter(item => item.food_category === category));
    }
  }, [setCate]);

  // Retrieve cart items from Redux store
  const items = useSelector(state => state.cart);

  // Price calculations
  const subtotal = items.reduce((total, item) => total + item.qty*item.price, 0);
  const deliveryFee = 20;
  const taxes = (subtotal * 0.5) / 100;
  const total = Math.floor(subtotal + deliveryFee + taxes).toFixed(2);

  return (
    <div className="bg-slate-200 w-full min-h-screen">
      <Nav />

      {/* Category Filter Section */}
      {!input && (
        <div className="flex flex-wrap justify-center items-center gap-5 w-full">
          {categories.map((item, index) => (
            <div 
              key={index} 
              className="w-[120px] h-[130px] bg-white flex flex-col items-start gap-5 p-5 justify-start 
              text-[20px] font-semibold text-gray-600 rounded-lg shadow-xl 
              hover:bg-green-200 cursor-pointer transition-all duration-200"
              onClick={() => filter(item.name)}
            >
              {item.icon}
              {item.name}
            </div>
          ))}
        </div>
      )}

      {/* Food Items Section */}
      <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8'>

      {cate.length>1?cate.map((item) => (
          <Card key={item.id} name={item.food_name} image={item.food_image} price={item.price} id={item.id} type={item.food_type} />
        )):<div className='text-center text-2xl text-green-500'>No dish Found</div>}
        
      </div>

      {/* Cart Sidebar */}
      <div className={`w-full md:w-[40vw] h-full fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 
        flex flex-col items-center overflow-auto ${showCart ? "translate-x-0" : "translate-x-full"}`}>

        {/* Cart Header */}
        <header className='w-full flex justify-between items-center'>
          <span className='text-green-400 text-[18px] font-semibold'>Order Items</span>
          <RxCrossCircled 
            className='w-[20px] h-[30px] text-green-400 text-[18px] font-semibold cursor-pointer hover:text-gray-600' 
            onClick={() => setShowCart(false)} 
          />
        </header>
          {items.length>0?<>

{/* Cart Items */}
<div className='w-full mt-9 flex flex-col gap-8'>

 
  {items.map((item) => (
    <Card2 key={item.id} name={item.name} price={item.price} image={item.image} id={item.id} qty={item.qty} />
  ))}
</div>

{/* Price Details */}
<div className='w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-2 p-8'>
  <div className='w-full flex justify-between items-center'>
    <span className='text-lg text-gray-600 font-semibold'>Subtotal</span>
    <span className='text-green-400 font-semibold text-lg'>Rs {subtotal}/-</span>
  </div>
  <div className='w-full flex justify-between items-center'>
    <span className='text-lg text-gray-600 font-semibold'>Delivery Fee</span>
    <span className='text-green-400 font-semibold text-lg'>Rs {deliveryFee}/-</span>
  </div>
  <div className='w-full flex justify-between items-center'>
    <span className='text-lg text-gray-600 font-semibold'>Taxes</span>
    <span className='text-green-400 font-semibold text-lg'>Rs {taxes}/-</span>
  </div>
</div>

{/* Total Price */}
<div className='w-full flex justify-between items-center p-9'>
  <span className='text-2xl text-gray-600 font-semibold'>Total</span>
  <span className='text-green-400 font-semibold text-2xl'>Rs {total}/-</span>
</div>

{/* Place Order Button */}
<button className='w-[80%] p-3 rounded-lg bg-green-500 text-white hover:bg-green-400 transition-all' onClick={()=>{
  toast.success("Order placed")
}}>
  Place Order
</button>
</>: <div className='text-center text-2xl text-green-500 font-semibold pt-5'>Empty Cart</div>}
        
      </div>
    </div>
  );
}

export default Home;
