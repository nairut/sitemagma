import React, { useState } from 'react';

export const Testes = () => {
  const [texto, setTexto] = useState(''); // Use um estado para armazenar o texto de entrada
  const [contagem, setContagem] = useState([]); // Inicialize com uma matriz vazia

  const contarPalavras = () => {
    const palavras = texto.split(/\s+/); // Divide o texto em palavras usando espaço como separador
    const contagemPalavras = {};

    // Conta a frequência de cada palavra
    for (const palavra of palavras) {
      if (palavra !== '') {
        contagemPalavras[palavra] = (contagemPalavras[palavra] || 0) + 1;
      }
    }

    // Crie uma matriz de objetos com palavras e frequências
    const palavrasFrequencia = Object.entries(contagemPalavras).map(
      ([palavra, frequencia]) => ({
        palavra,
        frequencia,
      })
    );

    // Ordene a matriz por frequência decrescente
    palavrasFrequencia.sort((a, b) => b.frequencia - a.frequencia);

    setContagem(palavrasFrequencia); // Atualize o estado com a matriz ordenada
  };

  return (
    <div>
      <textarea
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Digite seu texto aqui..."
      />
      <button onClick={contarPalavras}>Contar Palavras</button>
      <div>
        <h2>Contagem de Palavras:</h2>
        <table>
          <thead>
            <tr>
              <th>Palavra</th>
              <th>Frequência</th>
            </tr>
          </thead>
          <tbody>
            {contagem.map((item, index) => (
              <tr key={index}>
                <td>{item.palavra}</td>
                <td>{item.frequencia}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
