import { useState } from "react";

export function Item() {
  const [produtos] = useState([
    { nome: "Pão", preco: 10 },
    { nome: "Leite", preco: 8 },
    { nome: "Bolacha", preco: 7 },
  ]);

  return (
    <div>
      {produtos.map((produto, index) => {
        return (
          <p key={`${index}-${produto.nome}`}>
            {produto.nome} - {produto.preco}
          </p>
        );
      })}
    </div>
  );
}
