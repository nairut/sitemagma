import React, { useState } from 'react';
import axios from 'axios';

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
                model: 'gpt-3.5-turbo-16k-0613',
                messages: [{ role: 'user', content: text }]
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
        <div>
            <textarea
                rows={4}
                cols={50}
                value={inputText}
                onChange={handleInputChange}
                placeholder="Enter your text here..."
            />
            <button onClick={handleSummarizeClick} disabled={isLoading}>
                {isLoading ? 'Summarizing...' : 'Summarize'}
            </button>
            <div>
                <h2>Here is the result:</h2>
                <p>{summary}</p>
            </div>
        </div>
    );
}
