import React, { useState } from 'react';
import axios from 'axios';
import "./style.css";

const API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';
const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;

export function ChatGpt() {
    const [inputText, setInputText] = useState('');
    const [summary, setSummary] = useState('');
    const [isLoading, setIsLoading] = useState(false);

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
            // Handle error state here
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
                { role: "user", content: `Depois da resposta, escreva sempre "entendeu, Caysa e Tiago?": ${text}` }
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

    return (
        <div className='ChatGpt'>
            <textarea
                rows={4}
                cols={50}
                value={inputText}
                onChange={handleInputChange}
                placeholder="Enter your text here..."
            />
            <button  className='button-portugues-instance' onClick={handleSummarizeClick} disabled={isLoading}>
                {isLoading ? 'Summarizing...' : 'Summarize'}
            </button>
            <div>
                <h2>Here is the result:</h2>
                <p>{summary}</p>
            </div>
        </div>
    );
}
