import { Sweets } from "./Sweets";
import { sweet } from "../dataSet/sweets";

export function SweetsList (props) {
   const { handlBuy = Function.prototype } = props;


   return (
      <div id="zakuski" className="xl:w-[1300px] lg:w-[1000px] md:w-[800px] sm:w-[550px] w-[300px] m-auto">
         <div className="font-opensans flex md:mt-20 mt-10 ">
            <div id="pizza_1" className="flex justify-start md:text-5xl text-6xl ml-5">Закуски</div>
         </div>
         <div className="m-2 mt-14 grid gap-y-16 gap-x-16 grid-cols-[repeat,300px]  xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-1 xl:grid-rows-[auto-fill,1fr)">
         {sweet.map(item => (
               <Sweets key={item.id} handlBuy={handlBuy} {...item} />
            ))}
         </div>
         <div className=" bg-gradient-rainbow h-[2px] w-[100%] mt-14"></div>
      </div>
   )

}