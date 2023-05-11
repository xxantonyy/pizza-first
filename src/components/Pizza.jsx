import { useState } from "react"
import { useCallback } from "react";

export function Pizza (props) {

   const {
      id,
      name,
      img,
      descr,
      price,
      handlBuy,

   } = props


   const [isActiveModal,setIsActiveModal] = useState(false)
   const [isActiveSize,setIsActiveSize] = useState([
      {
         id:1,
         active:true,
         multiply:1,
         size:'17 см'
      },
      {
         id:2,
         active:false,
         multiply:1.1,
         size:'20 см'
      },
      {
         id:3,
         active:false,
         multiply:1.2,
         size:'25 см'
      },
      
   ]);
   const [selectedSize, setSelectedSize] = useState(isActiveSize[0]);

   const changeActiveSize = useCallback((prop) => {
  const updatedSizes = isActiveSize.map((item) => {
    if (item.id === prop.id) {
      return {
        ...item,
        active: true,
      };
    } else {
      return {
        ...item,
        active: false,
      };
    }
  });
  setIsActiveSize(updatedSizes);
  setSelectedSize(prop);
}, [isActiveSize]);


   const [isActiveTesto,stiIsActiveTesto] = useState([
      {
         id:10,
         active:true,
         multiply:1,
         testo:"Тонкое тесто"
      },
      {
         id:11,
         active:false,
         multiply:1.2,
         testo:"Толстое тесто"

      },
   ]);

   const [selectedActiveTesto, setSelectedActiveTesto] = useState(isActiveTesto[0]);

   const changeActiveTesto = useCallback((prop)=>{
      const newTesto = isActiveTesto.map(item=>{
        if(item.id === prop.id) {
          return {
            ...item,
            active:true
          }
        } else {
          return {
            ...item,
            active:false
          }
        }
      })
      stiIsActiveTesto(newTesto);
      setSelectedActiveTesto(prop)
    }, [isActiveTesto]);



   const changeActivModal = () => {
      setIsActiveModal(!isActiveModal)
   }


   return <>
      <div className="font-opensans">
         <img className="w-[100%] transition-all duration-300 md:hover:translate-y-2" src={img} alt="pizza" />
         <p className="flex text-2xl text-bold justify-center mr-4 h-20 w-50">{name}</p>
         <p className="pt-5 text-start text-2sm text-dark-grey md:h-[7rem]">{descr}</p>
         <div className="flex justify-between mt-10">
            <p className="text-2xl font-playfair mt-2">от {price} ₽</p>
            <button className="text-xl h-12 w-40 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300  md:hover:scale-110 drop-shadow-xl" onClick={()=> changeActivModal()}>В корзину</button>
         </div>
      </div>
      

      {/* Модальное окно */}

      <div className="z-40 font-opensans fixed inset-0 bg-gray-500 bg-opacity-50 flex items-center justify-center" style={{ display: isActiveModal ? 'flex' : 'none' }}>
      </div>

      <div className="z-50 fixed inset-0 overflow-y-auto" style={{ display: isActiveModal ? 'block' : 'none' }}>
         <div className="flex items-center justify-center h-screen">
            <div className="bg-white rounded-xl p-8 h-[36rem] w-[20rem] md:h-[52rem] md:w-[40rem]">
            <button
                  className="m-0 p-0 flex ml-[95%] tansition-all duration-500  hover:rotate-180"
                  onClick={() => changeActivModal()}
               >
                  <img src="../img/icons8-close.svg" alt="" />
               </button>
               <img className="w-[13rem] mx-auto transition-all duration-300 md:hover:translate-y-2 md:w-[26rem]" src={img} alt="pizza" />
               <p className="flex md:text-3xl text-xl text-bold justify-center mx-auto">{name}</p>
               <p className="pt-3 text-start md:text-xl md:w-[80&] text-dark-grey break-words h-36">{descr}</p>

               {/* Кнопки выбора размера пиццы */}

               <div className="flex mb-3 justify-between border-2 font-opensans bg-grey rounded-full ">
                  <button className={`drop-shadow-lg p-1 rounded-full tansition-all duration-500  w-1/2 ${isActiveTesto[0].active ? "bg-white" : ''}`} onClick={()=>changeActiveTesto(isActiveTesto[0])}>Тонкое тесто</button>
                  <button className={`drop-shadow-lg p-1 rounded-full tansition-all duration-500 w-1/2 ${isActiveTesto[1].active ? "bg-white " : ''}`} onClick={()=>changeActiveTesto(isActiveTesto[1])}>Толстое тесто</button>
               </div>
               <div className="flex justify-between border-2 bg-grey rounded-full font-opensans">
                  <button className={`drop-shadow-lg p-1 transition-all duration-500 rounded-full ${isActiveSize[0].active ? " bg-white" : ''} w-1/3`} onClick={()=>changeActiveSize(isActiveSize[0])}>17 см</button>
                  <button className={`drop-shadow-lg p-1 transition-all duration-500 rounded-full ${isActiveSize[1].active ? "0 bg-white" : ''} w-1/3`} onClick={()=>changeActiveSize(isActiveSize[1])}>20 см</button>
                  <button className={`drop-shadow-lg p-1 transition-all duration-500 rounded-full ${isActiveSize[2].active ? " bg-white" : ''} w-1/3`} onClick={()=>changeActiveSize(isActiveSize[2])}>25 см</button>
               </div>


               {/* Нижняя кнопка в корзину и цена */}
               <div className="flex w-full mx-auto md:mt-3 mt-3">
                  <button className="text-sm md:text-2xl h-10 w-full  rounded-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300  md:hover:scale-105 drop-shadow-xl" onClick={() => 
                  {
                     changeActivModal();
                     handlBuy(
                        {
                           price:Math.round(price * selectedSize.multiply * selectedActiveTesto.multiply),
                           img:img,
                           name:name,
                           id:id,
                           testo:selectedActiveTesto.testo,
                           size:selectedSize.size,
                           quantity:1
                        }
                     );
                  }
                  }>Добавить в корзину за {Math.round(price * selectedSize.multiply * selectedActiveTesto.multiply)} ₽</button>
               </div>
            </div>
         </div>
      </div>
   </>
}