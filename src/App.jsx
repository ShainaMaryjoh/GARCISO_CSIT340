import "./App.css";

function App() {
  const foods = [
    { name: "Lasagna", price: 199 },
    { name: "Double Cheese Burger", price: 220 },
    { name: "Fries", price: 99 },
    { name: "Blue Lemonade", price: 60 }
  ];

  return (
    <div>
      <nav>
        <h2>MaryJoh's Diner</h2>
        <a href="#menu">Menu</a>
      </nav>

      <header>
        <h1>MaryJoh's Food Menu</h1>
        <p>Delicious food at affordable prices!</p>
      </header>

      <section id="menu">
        <h2>Our Menu</h2>

        <div className="food-container">
          {foods.map((food) => (
            <div className="food-card">
              <h3>{food.name}</h3>
              <p>₱{food.price}</p>
              <button>Order Now</button>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>© 2026 My Food Menu</p>
      </footer>
    </div>
  );
}

export default App;