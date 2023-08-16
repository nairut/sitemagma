import React, { useState } from 'react';
import axios from 'axios';
import mammoth from 'mammoth';

const API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';
const API_KEY = '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'; // Make sure to handle this securely.

export function ContagemPalavras() {
    const [file, setFile] = useState(null);
    const [summary, setSummary] = useState("");

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSummarizeClick = async () => {
        if (!file) return;

        const reader = new FileReader();
        reader.onload = async (event) => {
            const arrayBuffer = event.target.result;

            const { value } = await mammoth.extractRawText({ arrayBuffer });
            const response = await summarizeText(value);

            setSummary(response.data.choices[0].message.content);
        };

        reader.readAsArrayBuffer(file);
    };

    const summarizeText = async (text) => {
        return await axios.post(API_ENDPOINT, {
            model: "gpt-3.5-turbo",
            messages: [
                { role: "user", content: `Translate this to portuguese: ${text}` }
            ]
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${API_KEY}`
            }
        });
    };

    return (
        <div>
            <input type="file" accept=".docx" onChange={handleFileChange} />
            <button onClick={handleSummarizeClick}>Summarize</button>
            <div>
                <h2>Summary:</h2>
                <p>{summary}</p>
            </div>
        </div>
    );
}
