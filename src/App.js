import React, { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    /*
     * In development Mirage JS will intercept all HTTP requests and respond with data.
     * Check your browser console for more info.
     */
    fetch("api/users")
      .then(res => res.json())
      .then(({ users }) => {
        setUsers(users);
      });

    fetch("api/products")
      .then(res => res.json())
      .then(({ products }) => {
        setProducts(products);
      });
  }, []);

  const getMessages = userId => {
    fetch(`api/messages?userId=${userId}`)
      .then(res => res.json())
      .then(({ messages }) => {
        console.log(messages);
      });
  };

  return (
    <div className="App">
      <h2>Users</h2>
      {users.length
        ? users.map(user => (
            <p
              style={{ cursor: "pointer" }}
              key={user.id}
              onClick={() => getMessages(user.id)}
            >
              {user.name}
            </p>
          ))
        : null}
      <hr />
      <h2>Products</h2>
      {products.length
        ? products.map(product => <p key={product.id}>{product.name}</p>)
        : null}
    </div>
  );
}

export default App;
