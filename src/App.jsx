import { useState } from "react";
import "./App.css";

function App() {
  const foods = [
    { name: "Burger", price: 99, emoji: "🍔", hunger: 4 },
    { name: "Pizza", price: 150, emoji: "🍕", hunger: 5 },
    { name: "Fries", price: 60, emoji: "🍟", hunger: 3 },
    { name: "Soda", price: 40, emoji: "🥤", hunger: 2 }
  ];

  const [message, setMessage] = useState("");
  const [hunger, setHunger] = useState(5);

  function orderFood(food) {
    setMessage(`${food.emoji} ${food.name} added to your order!`);

    setHunger((currentHunger) => {
      const newHunger = currentHunger + food.hunger;

      if (newHunger > 10) {
        return 10;
      }

      return newHunger;
    });
  }

  return (
    <div className="game-page">

      <nav>
        <h2>⛏ MARYJOH'S SERVER</h2>
        <a href="#menu">MENU</a>
      </nav>

      <header>
        <div className="grass-block">
          <h1>This is your hunger bar!!</h1>
          <p>Take a break from your adventure and grab something to eat.</p>

          <div className="hunger-bar">
            <span>HUNGER</span>

            <div className="hearts">
              {Array.from({ length: 10 }).map((_, index) => (
                <span key={index}>
                  {index < hunger ? "🍖" : "⬛"}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section id="menu">
        <h2>🍖 MARYJOH'S MENU</h2>

        <div className="food-container">
          {foods.map((food) => (
            <div className="food-card" key={food.name}>

              <div className="food-image">
                {food.emoji}
              </div>

              <h3>{food.name}</h3>

              <p>₱{food.price}</p>

              <button onClick={() => orderFood(food)}>
                ORDER NOW
              </button>

            </div>
          ))}
        </div>

        {message && (
          <div className="order-message">
            <p>✓ {message}</p>
          </div>
        )}

      </section>

      <footer>
        <p>⚔️ MARYJOH'S SERVER • 2026 ⚔️</p>
      </footer>

    </div>
  );
}

export default App;