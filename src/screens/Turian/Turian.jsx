import React, { useState } from 'react';
import axios from 'axios';

export const Turian = () => {
    const [productLink, setProductLink] = useState('');
    const [visits, setVisits] = useState(null);

    const accessToken = 'APP_USR-8053638816322863-032714-f7e7408b2026bfdfe2c402f06f4e51ca-116363616';

    const fetchProductVisits = async () => {
      try {
          // Usa uma expressão regular para encontrar o ID do produto no link
          const match = productLink.match(/\/p\/(MLB\d+)/);
          if (!match) {
              alert('O link do produto não parece ser válido. Por favor, verifique e tente novamente.');
              return;
          }
  
          const productId = match[1]; // O ID do produto está no primeiro grupo capturado pela regex
  
          const response = await axios.get(`https://api.mercadolibre.com/items/${productId}/visits`, {
              headers: {
                  Authorization: `Bearer ${accessToken}`,
              },
          });
  
          setVisits(response.data.total_visits);
      } catch (error) {
          console.error('Erro ao buscar visitas do produto:', error);
          let errorMessage = 'Houve um erro ao buscar as visitas do produto. Por favor, verifique o link e tente novamente.';
          if (error.response) {
              errorMessage += ` Detalhes: ${error.response.data.message || error.response.status}`;
          }
          alert(errorMessage);
      }
  };
  

    return (
        <div>
            <input
                type="text"
                value={productLink}
                onChange={(e) => setProductLink(e.target.value)}
                placeholder="Insira o link do produto aqui"
            />
            <button onClick={fetchProductVisits}>TOTAL VISITS</button>
            {visits !== null && (
                <p>Total de visitas: {visits}</p>
            )}
        </div>
    );
};
