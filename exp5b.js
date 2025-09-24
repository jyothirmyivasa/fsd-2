import React from 'react';
function App() {
  const user = {
    name: 'PRASANTH',
    age: 25,
    isAdmin: true,
    hobbies: ['reading', 'playing', 'coding']
  };
  const products = [
    { id: 1, name: 'Laptop', price: 999.99, inStock: true },
    { id: 2, name: 'Phone', price: 699.99, inStock: false },
    { id: 3, name: 'watch', price: 499.99, inStock: true }
  ];
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };
  return (
    <div className="App">
      <header>
        <h1>JSX Examples</h1>
      </header>

      <main>
        {/* Basic Expressions */}
        <section>
          <h2>Basic JSX Expressions</h2>
          <p>Hello, {user.name}!</p>
          <p>You are {user.age} years old.</p>
          <p>2 + 2 = {2 + 2}</p>
          <p>Current time: {new Date().toLocaleTimeString()}</p>
        </section>

        {/* Conditional Rendering */}
        <section>
          <h2>Conditional Rendering</h2>
          
          {/* Using ternary operator */}
          <p>
            Status: {user.isAdmin ? 'Administrator' : 'Regular User'}
          </p>

          {/* Using logical && */}
          {user.isAdmin && (
            <p className="admin-message">
              Welcome, Admin! You have full access.
            </p>
          )}

          {/* Using if-else with immediate function */}
          <p>
            {(() => {
              if (user.age < 18) return 'Minor';
              if (user.age < 65) return 'Adult';
              return 'Senior';
            })()}
          </p>
        </section>

        {/* List Rendering */}
        <section>
          <h2>List Rendering</h2>
          
          {/* Simple array mapping */}
          <h3>Hobbies:</h3>
          <ul>
            {user.hobbies.map((hobby, index) => (
              <li key={index}>{hobby}</li>
            ))}
          </ul>

          {/* Complex object mapping */}
          <h3>Products:</h3>
          <div className="product-grid">
            {products.map(product => (
              <div key={product.id} className="product-card">
                <h4>{product.name}</h4>
                <p>Price: {formatPrice(product.price)}</p>
                <p className={product.inStock ? 'in-stock' : 'out-of-stock'}>
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* JSX Attributes */}
        <section>
          <h2>JSX Attributes</h2>
          
          {/* Class and Style attributes */}
          <div 
            className="custom-div"
            style={{
              backgroundColor: '#f0f0f0',
              padding: '1rem',
              borderRadius: '5px'
            }}
          >
            <p>Custom styled div</p>
          </div>

          {/* Dynamic attributes */}
          <button
            disabled={!user.isAdmin}
            onClick={() => alert('Button clicked!')}
            className={user.isAdmin ? 'admin-button' : 'user-button'}
          >
            {user.isAdmin ? 'Admin Action' : 'Regular Action'}
          </button>
        </section>

        {/* JSX Fragments */}
        <section>
          <h2>JSX Fragments</h2>
          <>
            <p>This is inside a fragment</p>
            <p>No extra div needed!</p>
          </>
        </section>

        {/* JSX Comments and Spacing */}
        <section>
          <h2>Comments and Spacing</h2>
          {/* This is a JSX comment */}
          <div>
            This is{' '}
            <strong>spaced</strong>{' '}
            text
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
