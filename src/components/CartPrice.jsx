export function CartPrice (props) {

   const {counter} = props
   return <>
      <div className="relative font-opensans bottom-0 w-full h-32 bg-grey ">
         <p className="flex font-bold pt-4 text-2xl underline justify-center items-center w-full">Общая цена: {counter} ₽</p>
         <button className="mt-4 font-semibold h-10 text-xl bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto w-3/4 drop-shadow-xl transition-all duration-500 md:hover:scale-105"> К оформлению заказа</button>
      </div>
   </>
}