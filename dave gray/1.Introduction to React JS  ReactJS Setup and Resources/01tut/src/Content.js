import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";

const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: false,
      item: "One half pound bag of cocoa covered  almonds unsalted",
      price: 300,
    },
    {
      id: 2,
      checked: false,
      item: "Item 2",
      price: 200,
    },
    {
      id: 3,
      checked: false,
      item: "Item 3",
      price: 150,
    },
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) => {
      return item.id === id ? { ...item, checked: !item.checked } : item;
    });
    setItems(listItems);
    localStorage.setItem("ShoppingList", JSON.stringify(listItems));
  };

  const handleDelete = (id) => {
    const listItems = items.filter((item) => {
      return item.id !== id;
    });
    setItems(listItems);
    localStorage.setItem("ShoppingList", JSON.stringify(listItems));
  };

  var price = 0;

  return (
    <main>
      {items.length ? (
        <ul>
          {items.map((item) => {
            price = price + item.price;
            return (
              <li key={item.id} className="item">
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => handleCheck(item.id)}
                ></input>
                <label
                  style={
                    item.checked ? { textDecoration: "line-through" } : null
                  }
                  onDoubleClick={() => handleCheck(item.id)}
                >
                  {item.item}
                </label>
                <label className="price">{"Rs." + item.price}</label>
                <FaTrashAlt
                  tabIndex="0"
                  role="button"
                  onClick={() => handleDelete(item.id)}
                />
                </li>
            );
          })}
          <li className="item totalPrice">Total Price to spend : Rs.{price}</li>
        </ul>
      ) : (
        <p>Your List is empty !</p>
      )}
    </main>
  );
};

export default Content;
