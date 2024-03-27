import React, { useState } from 'react';
import axios from 'axios';

export const Turian = () => {
  const [link, setLink] = useState('');
  const [totalVisits, setTotalVisits] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const itemId = extractItemIdFromLink(link);
      const response = await axios.get(`https://api.mercadolibre.com/visits/items?ids=${itemId}`);
      const visits = response.data[itemId];
      setTotalVisits(visits);
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error('Error fetching visit data:', error);
      setError('Erro ao buscar visitas. Por favor, verifique o link e tente novamente.');
      setTotalVisits(null);
    } finally {
      setLoading(false);
    }
  };

  const extractItemIdFromLink = (url) => {
    const regex = /\/([A-Z0-9]+)$/i;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  return (
    <div>
      <h1>Quantidade de Visitas nos Últimos 2 Anos</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Insira o link do anúncio do Mercado Livre:
          <input
            type="text"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            required
          />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? 'Carregando...' : 'Buscar Visitas'}
        </button>
      </form>
      {error && <p>{error}</p>}
      {totalVisits !== null && !loading && !error && (
        <p>Total de visitas nos últimos 2 anos: {totalVisits}</p>
      )}
    </div>
  );
};
