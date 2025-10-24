import React, { useState } from "react";
function Product(props) {
  return (
    <div style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
      <h3>{props.name}</h3>
      <p>Price: ${props.price}</p>
      <button onClick={() => props.onAdd(props)}>Add to cart</button>
    </div>
  );
}
function App() {
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, name: "Laptop", price: 80000 },
    { id: 2, name: "Hardphone", price: 50 },
    { id: 3, name: "SmartPhone", price: 6000 },
  ];
  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Cart Example</h1>
      <h2>Products</h2>
      {products.map((p) => (
        <Product
          key={p.id}
          name={p.name}
          price={p.price}
          onAdd={addToCart}
        />
      ))}
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
