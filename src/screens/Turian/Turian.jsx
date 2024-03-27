import React, { useState } from 'react';

export const Turian = () => {
  const [link, setLink] = useState('');
  const [visits, setVisits] = useState(null);

  const handleLinkChange = (event) => {
    setLink(event.target.value);
  };

  const fetchVisits = async () => {
    const itemId = link.split('/').pop();
    const accessToken = 'APP_USR-8053638816322863-032711-673dacc9b5d0b2f0142ac75193bc6552-116363616'; // Lembre-se de substituir pelo seu token de acesso real
    const url = `https://api.mercadolibre.com/visits/items?ids=${itemId}&access_token=${accessToken}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      setVisits(data[itemId]);
    } catch (error) {
      console.error("Erro ao buscar visitas:", error);
      setVisits("Erro ao buscar informações");
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
      <button onClick={fetchVisits}>Obter Quantidade de Visitas</button>
      {visits !== null && <p>Quantidade de Visitas: {visits}</p>}
    </div>
  );
};

export default Turian;
