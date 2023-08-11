import React, { useState } from 'react';
import axios from 'axios';

function ContagemPalavra() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [wordCount, setWordCount] = useState(0);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      try {
        const response = await axios.post('/upload', formData); // Replace with your backend endpoint
        const { wordCount } = response.data;
        setWordCount(wordCount);
      } catch (error) {
        console.error('Error uploading file:', error);
      }
    }
  };

  return (
    <div>
      <h1>Word Count App</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Count Words</button>
      {wordCount > 0 && <p>Total words: {wordCount}</p>}
    </div>
  );
}
