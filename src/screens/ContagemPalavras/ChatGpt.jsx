import React, { useState } from 'react';
import axios from 'axios';

const API_ENDPOINT = 'https://api.openai.com/v1/chat/completions';
const API_KEY = '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'; // Make sure to handle this securely.

export function ChatGpt() {
    const [inputText, setInputText] = useState("");
    const [summary, setSummary] = useState("");

    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    const handleSummarizeClick = async () => {
        if (!inputText) return;

        const response = await summarizeText(inputText);
        setSummary(response.data.choices[0].message.content);
    };

    const summarizeText = async (text) => {
        return await axios.post(API_ENDPOINT, {
            model: "gpt-3.5-turbo-16k-0613",
            messages: [
                { role: "user", content: ` ${text}` }
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
            <textarea
                rows={4}
                cols={50}
                value={inputText}
                onChange={handleInputChange}
                placeholder="Enter your text here..."
            />
            <button onClick={handleSummarizeClick}>Summarize</button>
            <div>
                <h2>Here is the result:</h2>
                <p>{summary}</p>
            </div>
        </div>
    );
}
