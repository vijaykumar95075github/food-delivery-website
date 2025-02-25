import React, { useContext, useEffect } from 'react';
import { IoFastFood } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { FiShoppingBag } from "react-icons/fi";
import { food_items } from '../food';
import { dataContext } from '../context/UserContext';
import { useSelector } from 'react-redux';

function Nav() {
  let { input, setInput, cate, setCate, showCart, setShowCart } = useContext(dataContext);

  useEffect(() => {
    let newlist = food_items.filter((item) =>
      item.food_name.toLowerCase().includes(input.toLowerCase()) // Fix case-sensitivity
    );
    setCate(newlist);
  }, [input]); // Ensure useEffect dependencies are correct

  let items = useSelector(state=>state.cart)

  return (
    <div className="w-full h-[100px] flex justify-between items-center px-5 md:px-8">
      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl">
        <IoFastFood className="w-[30px] h-[30px] text-green-500" />
      </div>

      <form
        className="w-[45%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-md md:w-[70%]"
        onSubmit={(e) => e.preventDefault()} // Fixed parentheses
      >
        <IoMdSearch className="text-green-500 w-[20px] h-[20px] shadow-md" />
        <input
          type="text"
          placeholder="Search Items..."
          className="w-[100%] outline-none text-[16px] md:text-[20px]"
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </form>

      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative" onClick={()=>{
      setShowCart(true)
        }}>
        <span className="absolute top-0 right-2 text-green-500 font-bold text-[18px]">
          {items.length}
        </span>
        <FiShoppingBag className="w-[30px] h-[30px] text-green-500 cursor-pointer" />
      </div>
    </div>
  );
}

export default Nav;
