import "./AskQuestion.css";

function AskQuestion({ question, setQuestion, onAsk }) {

    const handleSubmit = (e) => {
        e.preventDefault();

        if (question.trim() === "") {
            return;
        }

        onAsk();
    };

    return (
        <div className="ask-container">

            <h2>AI Chat Assistant</h2>

            <form onSubmit={handleSubmit}>

                <textarea
                    placeholder="Ask anything..."
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                />

                <button type="submit">
                    Ask AI
                </button>

            </form>

        </div>
    );
}

export default AskQuestion;