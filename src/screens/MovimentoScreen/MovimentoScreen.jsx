import React, { useState } from 'react';
import axios from 'axios';

export const MovimentoScreen = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [musicXml, setMusicXml] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmit = async () => {
        if (!selectedFile) {
            alert('Por favor, selecione um arquivo PDF.');
            return;
        }

        const formData = new FormData();
        formData.append('pdf', selectedFile);

        try {
            const response = await axios.post('/convert-pdf', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setMusicXml(response.data);
        } catch (error) {
            console.error('Erro na conversão do arquivo:', error);
        }
    };

    return (
        <div>
            <input type="file" accept=".pdf" onChange={handleFileChange} />
            <button onClick={handleSubmit}>Converter PDF</button>
            {musicXml && <textarea value={musicXml} readOnly rows={10} />}
        </div>
    );
};
