import { CartItem } from "./CartItem"

export function CartList (props) {
   
   const {cartList,handleDelete = Function.prototype,handleQuantityChange = Function.prototype} = props


   return (
      cartList.map(item => (
         <CartItem key={item.itemId} handleDelete={handleDelete} handleQuantityChange={handleQuantityChange} {...item}/>
      ))
   
   )
      
}