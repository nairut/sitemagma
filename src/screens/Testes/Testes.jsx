import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfWordCounter = () => {
  const [numWords, setNumWords] = useState(0);

  const onDocumentLoadSuccess = async ({ numPages }) => {
    let totalWords = 0;

    for (let pageNum = 1; pageNum <= numPages; pageNum++) {
      const pageText = await extractPageText(pageNum);
      totalWords += countWords(pageText);
    }

    setNumWords(totalWords);
  };

  const extractPageText = async (pageNum) => {
    try {
      const pdfUrl = 'path-to-your-pdf-file.pdf'; // Replace with the actual path to your PDF file.
      const pdf = await pdfjs.getDocument(pdfUrl).promise;
      const page = await pdf.getPage(pageNum);
      const textContent = await page.getTextContent();
      return textContent.items.map(item => item.str).join(' ');
    } catch (error) {
      console.error('Error extracting text from PDF:', error);
      return '';
    }
  };

  const countWords = (text) => {
    return text.split(/\s+/).length;
  };

  return (
    <div>
      <h1>PDF Word Counter</h1>
      <Document
        file="path-to-your-pdf-file.pdf" // Replace with the actual path to your PDF file.
        onLoadSuccess={onDocumentLoadSuccess}
      >
        {Array.from({ length: numPages }, (_, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document>
      <p>Total number of words in PDF: {numWords}</p>
    </div>
  );
};

export default PdfWordCounter;
