import "./App.css";

function App() {
  const foods = [
    { name: "Burger", price: 99, emoji: "🍔" },
    { name: "Pizza", price: 150, emoji: "🍕" },
    { name: "Fries", price: 60, emoji: "🍟" },
    { name: "Soda", price: 40, emoji: "🥤" }
  ];

  return (
    <div className="game-page">

      <nav>
        <h2>⛏ MARYJOH'S MC DINER</h2>
        <a href="#menu">MENU</a>
      </nav>

      <header>
        <div className="grass-block">
          <h1>WELCOME, PLAYER!</h1>
          <p>Choose your food and restore your hunger bar.</p>
        </div>
      </header>

      <section id="menu">
        <h2>🍖 FOOD MENU</h2>

        <div className="food-container">
          {foods.map((food) => (
            <div className="food-card" key={food.name}>
              <div className="food-image">
                {food.emoji}
              </div>

              <h3>{food.name}</h3>

              <p>₱{food.price}</p>

              <button>ORDER NOW</button>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>⚔️ MARYJOH'S DINER • 2026 ⚔️</p>
      </footer>

    </div>
  );
}

export default App;