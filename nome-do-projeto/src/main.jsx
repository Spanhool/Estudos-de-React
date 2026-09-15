import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { Item } from "./Item.jsx";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Item />
      <button onClick={() => setCount(count + 1)}>
        Clique para adicionar mais um item {count}
      </button>
    </div>
  );
}

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
