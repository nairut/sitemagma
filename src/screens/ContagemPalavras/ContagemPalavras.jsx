import React, { useState } from 'react';
import axios from 'axios';
import mammoth from 'mammoth';

export const ContagemPalavras = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [wordCount, setWordCount] = useState(0);
  const [errorMessage, setErrorMessage] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setWordCount(0);
    setErrorMessage('');
  };

  const handleFileUpload = async () => {
    if (selectedFile && selectedFile.name.endsWith('.docx')) {
      try {
        const response = await axios.get(URL.createObjectURL(selectedFile), { responseType: 'arraybuffer' });
        const result = await mammoth.extractRawText({ arrayBuffer: response.data });
        const text = result.value;
        const words = text.split(/\s+/).filter((word) => word !== '');
        setWordCount(words.length);
      } catch (error) {
        console.error('Error uploading or converting file:', error);
        setErrorMessage('Error uploading or converting file. Please try again.');
      }
    } else {
      setErrorMessage('Please select a .docx file.');
    }
  };

  return (
    <div>
      <h1>Testes Component</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Count Words</button>
      {wordCount > 0 && <p>Total words: {wordCount}</p>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};
