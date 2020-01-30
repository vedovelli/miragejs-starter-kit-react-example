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

  return (
    <div className="App">
      <h2>Users</h2>
      {users.length ? users.map(user => <p>{user.name}</p>) : null}
      <hr />
      <h2>Products</h2>
      {products.length ? products.map(product => <p>{product.name}</p>) : null}
    </div>
  );
}

export default App;
