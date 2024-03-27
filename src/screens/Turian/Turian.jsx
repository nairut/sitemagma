import React, { useState } from 'react';
import axios from 'axios';

export const Turian = () => {
    const [productLink, setProductLink] = useState('');
    const [visits, setVisits] = useState(null);

    const accessToken = 'APP_USR-8053638816322863-032714-f7e7408b2026bfdfe2c402f06f4e51ca-116363616';

    const fetchProductVisits = async () => {
        try {
            // Supondo que a URL do produto contenha o ID do mesmo no final.
            // Exemplo: "https://produto.mercadolivre.com.br/MLB-123456789-nome-do-produto"
            const productId = productLink.split('-').pop(); // Extrai o ID do produto a partir do link

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
                // A requisição foi feita e o servidor respondeu com um status fora do intervalo 2xx
                console.error('Data:', error.response.data);
                console.error('Status:', error.response.status);
                console.error('Headers:', error.response.headers);
                errorMessage += ` Detalhes: ${error.response.data.message || error.response.status}`;
            } else if (error.request) {
                // A requisição foi feita mas não houve resposta
                console.error('No response:', error.request);
            } else {
                // Algo aconteceu na configuração da requisição que causou um erro
                console.error('Error message:', error.message);
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
