import React, { useState } from 'react';

export const Turian = () => {
  const [link, setLink] = useState('');
  const [visits, setVisits] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  const fetchWithExponentialBackoff = async (url, retries = 3, delay = 1000) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        if (response.status === 429 && retries > 0) {
          console.log(`Esperando ${delay}ms antes da próxima tentativa...`);
          await new Promise(resolve => setTimeout(resolve, delay));
          return fetchWithExponentialBackoff(url, retries - 1, delay * 2);
        }
        throw new Error(`Falha na API: ${response.status} - ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Erro ao buscar visitas:", error);
      throw error;
    }
  };

  const fetchVisits = async () => {
    setLoading(true);
    const match = link.match(/ML[A-Z]+[0-9]+/);
    const itemId = match ? match[0] : null;

    if (!itemId) {
      setVisits('ID de item inválido.');
      setLoading(false);
      return;
    }

    const url = `https://api.mercadolibre.com/visits/items?ids=${itemId}`;

    try {
      const data = await fetchWithExponentialBackoff(url);
      if (data && data[itemId] != null) {
        setVisits(`Total de visitas: ${data[itemId]}`);
      } else {
        setVisits('Não foram encontradas visitas para este ID de item.');
      }
    } catch (error) {
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
