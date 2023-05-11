export function CartItem (props) {
   const {quantity,name,img,price,size,testo,handleDelete,handleQuantityChange} = props;
   return <>
      <div className="block font-opensans">
         <button className="m-0" onClick={()=> handleDelete(props.itemId)}>
            <img className="fixed right-4" src="../img/icons8-close.svg" alt="" />
         </button>
         <img src={img} alt="" className="flex md:w-1/2 mx-auto w-[80%] mt-2"/>
         <p className={`text-xl font-bold flex justify-center items-center mb-1 `} style={{marginLeft: name === 'Чизкейк Банановый с шоколадным печеньем' ? '60px': ''}}>{name}</p>
         <div className="flex justify-between mx-12 md:justify-center">
            <p className="md:mr-4">{size}</p>
            -
            <p className="md:ml-4">{testo}</p>
         </div>
         <p className=" font-semibold text-2xl flex justify-center mb-2">{price * quantity}₽ - {quantity}шт. </p>
         <div className="flex justify-around font-playfair w-28 mx-auto text-grey-200 text-2xl rounded-full bg-grey mb-2">
            <button onClick={() => handleQuantityChange(props.itemId, "decrement")}>-</button>
            <span>{quantity}</span>
            <button onClick={() => handleQuantityChange(props.itemId, "increment")}>+</button>
         </div>
         <div className=" bg-gradient-rainbow h-[2px] w-[100%]"></div>

      </div>
   
   </>
}