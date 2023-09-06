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