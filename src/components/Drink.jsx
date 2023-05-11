
export function Drink (props) {

   const {
      name,
      img,
      descr,
      price,
      handlBuy,

   } = props


   return <>
      <div className="font-opensans">
         <img className="w-[100%] transition-all duration-300 md:hover:translate-y-2" src={img} alt="pizza" />
         <p className="flex text-2xl text-bold justify-center mt-4 mr-4 h-20 w-50">{name}</p>
         <div className="flex justify-between mt-10">
            <p className="text-2xl font-playfair mt-2">от {price} ₽</p>
            <button className="text-xl h-12 w-40 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 transition-all duration-300  md:hover:scale-110 drop-shadow-xl" onClick={()=> handlBuy(
               {
                  price:price,
                  img:img,
                  name:name,
                  quantity:1
               }
            )}>В корзину</button>
         </div>
      </div>
   </>
}