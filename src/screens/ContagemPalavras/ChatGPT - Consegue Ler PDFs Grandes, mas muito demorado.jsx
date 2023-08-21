import React, { useState } from 'react';
import axios from 'axios';
import { jsPDF } from 'jspdf';
import { GlobalWorkerOptions } from 'pdfjs-dist/build/pdf';

GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.6.347/pdf.worker.min.js';

const API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';
const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

export function ChatGpt() {
    const [inputText, setInputText] = useState('');
    const [summary, setSummary] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const CHUNK_SIZE = 2000;

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSummarizeClick = async () => {
        if (!inputText) return;

        setIsLoading(true);

        try {
            const response = await summarizeText(inputText);
            setSummary(response.data.choices[0].message.content);
        } catch (error) {
            console.error('Error summarizing text:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const summarizeText = async (text) => {
        return await axios.post(
            API_ENDPOINT,
            {
                model: 'gpt-4',
                messages: [
                    { role: "user", content: `Resposta sempre começando com: Tiago e Caysa, se me permitirem, deixa eu responder: ${text}` }
                ]
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${API_KEY}`
                }
            }
        );
    };

    const generatePDF = () => {
        if (!summary) return;

        const pdf = new jsPDF();

        pdf.setFont("helvetica");
        pdf.setTextColor(0, 0, 0);

        const textLines = pdf.splitTextToSize(summary, 190);
        pdf.setFontSize(12);
        pdf.text(10, 10, textLines);

        pdf.save('chat_summary.pdf');
    };

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        try {
            setIsLoading(true);
            const text = await readPDFFile(file);

            const textChunks = chunkText(text, CHUNK_SIZE);
            const summarizedChunks = [];

            for (const chunk of textChunks) {
                const response = await summarizeText(chunk);
                const chunkSummary = response.data.choices[0].message.content;
                summarizedChunks.push(chunkSummary);
            }

            // GPT instruction: Handle the summarizedChunks
            // Example: processSummarizedChunks(summarizedChunks);

        } catch (error) {
            console.error('Error processing PDF:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const readPDFFile = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = (event) => {
                const pdfData = new Uint8Array(event.target.result);
                const pdf = pdfjsLib.getDocument(pdfData);

                pdf.promise.then((pdfDocument) => {
                    const textPromises = [];

                    for (let pageNum = 1; pageNum <= pdfDocument.numPages; pageNum++) {
                        textPromises.push(pdfDocument.getPage(pageNum).then(page => page.getTextContent()));
                    }

                    Promise.all(textPromises)
                        .then(textContents => {
                            const text = textContents.map(content => content.items.map(item => item.str).join(' ')).join('\n');
                            resolve(text);
                        })
                        .catch(reject);
                });
            };

            reader.onerror = reject;
            reader.readAsArrayBuffer(file);
        });
    };

    const chunkText = (text, chunkSize) => {
        const chunks = [];
        for (let i = 0; i < text.length; i += chunkSize) {
            chunks.push(text.slice(i, i + chunkSize));
        }
        return chunks;
    };

    return (
        <div className="chatmagma">
            <div className="div">
                <img className="magma-translation" alt="Magma translation" src="/img/magma-translation-png.png" />

                <div className="chat-magma">
                    Chat Magma Translation
                </div>

                <textarea
                    className="input-message"
                    rows={4}
                    cols={50}
                    value={inputText}
                    onChange={handleInputChange}
                    placeholder="Enter your text here..."
                />

                <button className="ask-button" onClick={handleSummarizeClick} disabled={isLoading}>
                    {isLoading ? 'Summarizing...' : 'Summarize'}
                </button>
                <button className="pdf-button" onClick={generatePDF} disabled={!summary}>
                    Generate PDF
                </button>
                <div className="answer-space">
                    <div className="texto-resposta">
                        <p className="espaco">{summary}</p>
                    </div>
                </div>
            </div>

            <input type="file" accept=".pdf" onChange={handleFileUpload} />
        </div>
    );
}