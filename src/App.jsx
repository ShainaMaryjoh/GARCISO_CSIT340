import { useState } from "react";

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
    <div className="min-h-screen bg-[#8aaa5a] text-white">

      <nav className="flex items-center justify-between bg-[#4b2e1f] px-12 py-5 border-b-8 border-[#2f1b12] shadow-[0_5px_0_#1e120c]">
        <h2 className="text-2xl font-bold text-white drop-shadow-[3px_3px_0_#222]">
          ⛏ MARYJOH'S SERVER
        </h2>

        <a
          href="#menu"
          className="bg-[#5c8f3d] px-6 py-3 font-bold border-4 border-[#315421] shadow-[4px_4px_0_#1f3515] hover:bg-[#75a94d]"
        >
          MENU
        </a>
      </nav>

      <header className="px-5 py-20 text-center">
        <div className="mx-auto max-w-3xl border-8 border-[#392416] bg-[#5a3b26] p-10 shadow-[8px_8px_0_#263d1b]">
          <h1 className="mb-4 text-4xl font-bold drop-shadow-[4px_4px_0_#222]">
            WELCOME TO MARYJOH'S SERVER!
          </h1>

          <p className="text-lg text-[#e4eacb]">
            Take a break from your adventure and grab something to eat.
          </p>

          <div className="mx-auto mt-8 max-w-xl border-4 border-[#21150e] bg-[#392416] p-4">
            <span className="font-bold">HUNGER</span>

            <div className="mt-2 flex justify-center gap-1 text-2xl">
              {Array.from({ length: 10 }).map((_, index) => (
                <span key={index}>
                  {index < hunger ? "🍖" : "⬛"}
                </span>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section id="menu" className="px-5 py-16 text-center">
        <h2 className="mb-10 text-3xl font-bold drop-shadow-[4px_4px_0_#333]">
          🍖 MARYJOH'S MENU
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {foods.map((food) => (
            <div
              key={food.name}
              className="w-56 border-8 border-[#392416] bg-[#5a3b26] p-5 shadow-[7px_7px_0_#263d1b] transition hover:-translate-y-2"
            >
              <div className="mb-5 flex h-36 items-center justify-center border-6 border-[#444] bg-[#7d7d7d] text-7xl shadow-[inset_5px_5px_0_#999,inset_-5px_-5px_0_#333]">
                {food.emoji}
              </div>

              <h3 className="mb-3 text-2xl font-bold drop-shadow-[3px_3px_0_#222]">
                {food.name}
              </h3>

              <p className="mb-5 text-xl font-bold text-[#b8d889]">
                ₱{food.price}
              </p>

              <button
                onClick={() => orderFood(food)}
                className="w-full border-4 border-[#315421] bg-[#5c8f3d] px-4 py-3 font-bold text-white shadow-[5px_5px_0_#1f3515] hover:bg-[#78ad4e] active:translate-x-1 active:translate-y-1 active:shadow-[1px_1px_0_#1f3515]"
              >
                ORDER NOW
              </button>
            </div>
          ))}
        </div>

        {message && (
          <div className="mx-auto mt-10 max-w-lg border-6 border-[#392416] bg-[#5a3b26] p-5 shadow-[6px_6px_0_#263d1b]">
            <p className="text-xl font-bold text-[#b8d889] drop-shadow-[2px_2px_0_#222]">
              ✓ {message}
            </p>
          </div>
        )}
      </section>

      <footer className="border-t-8 border-[#2f1b12] bg-[#4b2e1f] p-6 text-center font-bold">
        <p>⚔️ MARYJOH'S SERVER • 2026 ⚔️</p>
      </footer>

    </div>
  );
}

export default App;