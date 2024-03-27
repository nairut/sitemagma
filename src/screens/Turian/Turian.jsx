import React, { useState } from 'react';

export const Turian = () => {
  const [link, setLink] = useState('');
  const [visits, setVisits] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  const fetchVisits = async () => {
    setLoading(true);
    // Usando uma expressão regular para extrair o ID do item
    const match = link.match(/ML[A-Z]+[0-9]+/);
    const itemId = match ? match[0] : null;
  
    if (!itemId) {
      setVisits('ID de item inválido.');
      setLoading(false);
      return;
    }
  
    const url = `https://api.mercadolibre.com/visits/items?ids=${itemId}`;
  
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Falha na API: ${response.status} - ${response.statusText}`);
  
      const data = await response.json();
      if (data && data[itemId] != null) {
        setVisits(`Total de visitas: ${data[itemId]}`);
      } else {
        setVisits('Não foram encontradas visitas para este ID de item.');
      }
    } catch (error) {
      console.error("Erro ao buscar visitas:", error);
      setVisits(error.toString());
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div>
      <h1>Verificador de Visitas do Mercado Livre</h1>
      <input
        type="text"
        value={link}
        onChange={handleLinkChange}
        placeholder="Insira o link do anúncio aqui"
      />
      <button onClick={fetchVisits} disabled={loading}>
        {loading ? 'Carregando...' : 'Obter Quantidade de Visitas'}
      </button>
      {visits && <p>{visits}</p>}
    </div>
  );
};

export default Turian;
