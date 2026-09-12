import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { Item } from "./Item.jsx";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Item nome="Leite" preco="R$ 5,00" />
      <Item nome="Pão" preco="R$ 3,00" />

      <button onClick={() => setCount(count + 1)}>
        Clique para adicionar {count}
      </button>
    </div>
  );
}

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
