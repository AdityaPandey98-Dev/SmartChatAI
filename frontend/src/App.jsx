import { useState } from "react";
import axios from "axios";

import "./App.css";

import AskQuestion from "./components/AskQuestion";
import Answer from "./components/Answer";

function App() {

    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [loading, setLoading] = useState(false);

    const askAI = async () => {

    if (question.trim() === "") {
        return;
    }

    setLoading(true);

    try {

        const response = await axios.post(
            "http://localhost:9999/api/ask",
            {
                question: question
            }
        );

        setAnswer(response.data);

    } catch (error) {

        console.error(error);

        setAnswer("Something went wrong.");

    } finally {

        setLoading(false);

    }

};

    return (

        <div className="app">

            <AskQuestion
                question={question}
                setQuestion={setQuestion}
                onAsk={askAI}
            />

            <Answer
                answer={answer}
                loading={loading}
            />


        </div>

    );

}

export default App;