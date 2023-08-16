import React, { useState } from 'react';
import axios from 'axios';

const API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';
const API_KEY = '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'; // Replace with your actual API key

//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    API para Netlify



//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  API para RUN DEV

export function ChatGpt() {
    const [inputText, setInputText] = useState("");
    const [summary, setSummary] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSummarizeClick = async () => {
        if (!inputText || isLoading) return;

        setIsLoading(true);

        try {
            const response = await summarizeText(inputText);
            setSummary(response.data.choices[0].message.content);
        } catch (error) {
            console.error('Error summarizing text:', error.response?.data || error.message);
            // Handle error state here
        } finally {
            setIsLoading(false);
        }
    };

    const summarizeText = async (text) => {
        const requestData = {
            model: 'gpt-3.5-turbo-16k-0613',
            messages: [{ role: 'user', content: text }]
        };

        const requestHeaders = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${API_KEY}`
        };

        try {
            const response = await axios.post(API_ENDPOINT, requestData, { headers: requestHeaders });
            return response;
        } catch (error) {
            throw error;
        }
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
