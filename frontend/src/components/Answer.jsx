import "./Answer.css"
function Answer({ answer, loading }) {

    return (
        <div className="answer-container">

            <h2>Answer</h2>

            <div className="answer-box">

                {loading
                    ? "Thinking..."
                    : answer || "AI response will appear here..."}

            </div>

        </div>
    );

}

export default Answer;