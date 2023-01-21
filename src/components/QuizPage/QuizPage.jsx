import { useEffect, useState } from "react"

const QuizPage = () => {

    const [questions, setQuestions] = useState([])

    useEffect(() => {
        console.log('About to make API call to trivia')
        async function getTriviaQuestionsAndAnswers() {
            const res = await fetch("https://the-trivia-api.com/api/questions?limit=5")
            const data = await res.json()
            setQuestions(data)
        }
        getTriviaQuestionsAndAnswers()
    }, [])

    function parseQuestions() {
        console.log(`Parsing questions from ${questions}`)
        return questions.map(question => question.question)
    }

    return (
        <div className="intro-page">
            {
                questions.map(question =>
                    <div className="question-txt-1">
                        <header className="question-txt-2" >
                            <p className="question-text" key={question.id}>
                                {question.question}
                            </p>
                            <div>
                                <div className="rectangle">
                                    {question.correctAnswer}
                                </div>
                                <div className="rectangle">
                                    {question.incorrectAnswers[0]}
                                </div>
                                <div className="rectangle">
                                    {question.incorrectAnswers[1]}
                                </div>
                                <div className="rectangle">
                                    {question.incorrectAnswers[2]}
                                </div>
                            </div>
                        </header>
                    </div>
                )
            }
        </div>
    )
}

export default QuizPage