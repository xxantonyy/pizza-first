import { useState } from "react";
import { Header } from "./components/Header";
import SimpleSlider from "./components/News";
import { PizzaList } from "./components/PizzaList";
import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import { ZakuskiList } from "./components/ZakuskiList";
import { DrinkList } from "./components/DrinkList";
import { SweetsList } from "./components/SweetsList";
import { Footer } from "./components/Footer";



function App() {

  const [cartList, setCartList] = useState([]);
  const [counter,setCounter] = useState(0);


  const handlBuy = (props) =>{
    const newItem = { ...props, itemId: uuidv4() }; // генерируем уникальный идентификатор и добавляем его к объекту
    setCartList((prevcartList) => [...prevcartList, newItem]);
  };

  const handleDelete = (itemId) => {
    setCartList((prevCartList) => prevCartList.filter((item) => item.itemId !== itemId));
  };

  const handleQuantityChange = (itemId, operation) => {
    setCartList((prevCartList) =>
      prevCartList.map((item) => {
        if (item.itemId === itemId) {
          const newQuantity = item.quantity + (operation === "increment" ? 1 : -1);
          if (newQuantity === 0) {
            return null; // если количество становится 0, то возвращаем null, чтобы удалить элемент из массива
          } else {
            return { ...item, quantity: newQuantity };
          }
        } else {
          return item;
        }
      }).filter((item) => item !== null) // удаляем элементы с null из массива
    );
  };

  useEffect(() => {
    const total = cartList.reduce((accumulator, item) => accumulator + (item.price * item.quantity), 0);
    setCounter(total);
  }, [cartList]);


  return (
    <div className="App">
        <Header cartList={cartList} handleDelete={handleDelete} handleQuantityChange={handleQuantityChange} counter={counter}/>
        <SimpleSlider/>
        <PizzaList handlBuy={handlBuy}/>
        <ZakuskiList handlBuy={handlBuy}/>
        <DrinkList handlBuy={handlBuy}/>
        <SweetsList handlBuy={handlBuy}/>
        <Footer/>
    </div>
  );
}

export default App;