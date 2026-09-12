import { useState } from "react";

export function Item() {
  const [produtos, setProdutos] = useState([
    { nome: "Pão", preco: 10 },
    { nome: "Leite", preco: 8 },
    { nome: "Bolacha", preco: 7 },
  ]);

  function removerProduto(nomeProduto) {
    const novaLista = produtos.filter(
      (produto) => produto.nome !== nomeProduto,
    );
    setProdutos(novaLista);
  }

  return (
    <div>
      {produtos.map((produto, index) => {
        return (
          <div>
            <p key={`${index}-${produto.nome}`}>
              {produto.nome} - {produto.preco}
            </p>

            <button onClick={() => removerProduto(produto.nome)}>
              Remover Item
            </button>
          </div>
        );
      })}
    </div>
  );
}
