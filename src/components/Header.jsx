import React, { useEffect, useState } from 'react';
import { CartList } from './CartList';
import { CartPrice } from './CartPrice';


export function Header(props) {
   const {cartList = [],counter,handleDelete = Function.prototype,handleQuantityChange = Function.prototype} = props;


   const [isOpen, setIsOpen] = useState(false);
   const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

   const toggleCart = () => {
      setIsOpen(!isOpen);
      if (!isOpen) {
         document.body.style.overflow = 'hidden';
      } else {
         document.body.style.overflow = 'auto';
      }
   };

   const toggleMobileMEnu =()=> {
      setIsOpenMobileMenu(!isOpenMobileMenu)
   }

   const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.01) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const fixedMenu =()=>{
   setIsFixed(!isFixed);
   toggleCart();
 }
   

   return <>
      <div className={`w-[100%] justify-center mx-auto font-opensans items-center flex text-black h-24 text-2xl transition-all duration-1000 ${isFixed ? 'md:fixed md:top-0 md:z-10 md:bg-gray-100 md:bg-opacity-75 md:transition-all md:duration-1000' : ''}`}>
         <div className="grid grid-cols-[3.5rem,14rem] gap-2 grid-row-[2rem]">
            <img className=" h-14" src="../img/free-icon-pizza-3132693.png" alt="pizza_logo" />
            <div className=''>
               <p className="text-black text-3xl">Tony Pizza</p>
               <p className="text-sm text-yellow">Сеть пиццерий №1 в России</p>
            </div>
         </div>
        <div className='md:flex md:justify-center md:gap-2 hidden'>
        <a className="flex justify-center md:hover:text-opaque-black items-center h-16 w-28" href="!#">Главная</a>
         <a className="flex justify-center md:hover:text-opaque-black items-center h-16 w-28" href="#pizza_1">Пицца</a>
         <a className="flex justify-center md:hover:text-opaque-black items-center h-16 w-28" href="#zakuski"> Закуски</a>
         <a className="flex justify-center md:hover:text-opaque-black items-center h-16 w-28" href="#drink">Напитки</a>
         <a className="flex justify-center items-center h-16 w-28 md:hover:text-opaque-black" href="#sweets">Десерты</a>
         <a className="flex justify-center text-white items-center h-16 w-36 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full ml-10 hover:transform hover:scale-125 transition-all duration-500 drop-shadow-xl" href="!#" onClick={() => toggleCart()}>Корзина</a>
        </div>
      </div>

      {/* Мобильное меню - Кнопка*/}
      <div className=' md:hidden fixed top-2 right-2' onClick={()=> toggleMobileMEnu()}   >
         <img  className='h-10'  src="../img/icons8-menu.svg" alt=""  />
      </div>
      <div className='md:hidden fixed bottom-8 right-3' onClick={()=>toggleCart()}>
         <img className='h-9' src="img/icons8-shopping-cart-24.png " alt="" />
      </div>

      {/* Мобильное меню */}

      <div className='z-20 border-4 transition-all duration-300  md:hidden fixed top-0  right-0 bg-white h-full w-[90vw]' style={{ transform: isOpenMobileMenu ? 'translateX(0)' : 'translateX(100%)' }}>
         <div className='text-4xl'>
            <button  className='text-white transform scale-150 absolute top-5 right-5' onClick={()=> toggleMobileMEnu()}>
               <img src="../img/icons8-close.svg" alt="" />
            </button>
            <ul className='text-blackborder-2 text-opensans mt-24 relative h-[70vh] flex flex-col justify-between items-center'>
               <a href="!#" className='border-2 w-48 h-14 flex justify-center rounded-full' > Главная</a>
               <a href="#pizza_1" className='border-2 w-48 h-14 flex justify-center rounded-full' onClick={()=> toggleMobileMEnu()}>Пицца</a>
               <a href="#zakuski" className='border-2 w-48 h-14 flex justify-center rounded-full' onClick={()=> toggleMobileMEnu()}> Закуски</a>
               <a href="#drink" className='border-2 w-48 h-14 flex justify-center rounded-full' onClick={()=> toggleMobileMEnu()}> Напитки</a>
               <a href="#sweets" className='border-2 w-48 h-14 flex justify-center rounded-full' onClick={()=> toggleMobileMEnu()}> Десерты</a>
            </ul>
         </div>
      </div>

      {/* Корзина */}

      <div className=" z-10 fixed right-0 top-0 h-full w-[80vw] md:w-[30vw] bg-white shadow-lg transform transition-transform duration-300 ease-in-out"
         style={{ transform: isOpen ? 'translateX(0)' : 'translateX(100%)', maxHeight: '100vh', overflowY: 'auto' }}>
         <div className="flex justify-between h-[6vh] items-center px-4 py-2 bg-grey">
            <h2 className="text-black font-opensans mx-auto md:text-2xl text-2xl ">Корзина</h2>
            <button className="text-black md:relative md:mb-8 md:transition-all md:duration-500 md:transform md:hover:rotate-180 md:top-4 absolute right-6 " onClick={() => fixedMenu()} style={{ opacity: isOpen ? '1' : '0' }}>
               <img src="../img/icons8-close.svg" alt="" />
            </button>
         </div>
         <div className="px-4 py-2 md:text-xl">
            <CartList cartList={cartList} handleDelete={handleDelete} handleQuantityChange={handleQuantityChange} />
            {/* Вставь здесь содержимое корзины */}
         </div>
         <CartPrice counter={counter}/>
      </div>

   </>
}