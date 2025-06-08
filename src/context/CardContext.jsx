import { createContext, useState, useContext } from "react";
import { allProducts } from "../assets/data";

const CardContext = createContext();
const CardProvider = ({ children }) => {
  const [cardItems, setCardItems] = useState([]);


  const addToCard = (prod) => {
    setCardItems((previtems) => {
      const existing = previtems.find((previtems) => previtems.id === prod.id);
      if (existing) {
        return previtems.map((previous) => {
          previous.id === prod.id
            ? { ...previtems, quantity: previtems.quantity + 1 }
            : previtems;
        });
      } else {
        return [...previtems, { ...prod, quantity: 1 }];
      }
    });
  };
  const increaseQuantity = (id) => {
    setCardItems((previousItems) =>
      previousItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCardItems((previousItems) =>
      previousItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item
      ).filter(item=>item.quantity>0)
    );
  };

  return (
    <CardContext.Provider
      value={{addToCard, cardItems, increaseQuantity,decreaseQuantity}}
    >
      {children}
    </CardContext.Provider>
  );
};

// Custom hook to use the CardContext
const useCart = () => useContext(CardContext);

// Export everything
export { CardProvider, useCart };
