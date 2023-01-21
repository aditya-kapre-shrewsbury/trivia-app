import { useEffect, useState } from "react"

const QuizPage = () => {

    const [questions, setQuestions] = useState([])

    useEffect(() => {
        console.log('About to make API call to trivia')
        async function getTriviaQuestionsAndAnswers() {
            const res = await fetch("https://the-trivia-api.com/api/questions?limit=5")
            let data = await res.json()
            data = data.map(datum => (
                {
                    ...datum,
                    answers: [datum.incorrectAnswers, datum.correctAnswer].flat().sort()
                })
            )
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
                        < div className = "question-txt-1" >
                            <header className="question-txt-2" >
                                <p className="question-text" key={question.id}>
                                    {question.question}
                                </p>
                                <div>
                                    <div className="rectangle">
                                        {question.answers[0]}
                                    </div>
                                    <div className="rectangle">
                                        {question.answers[1]}
                                    </div>
                                    <div className="rectangle">
                                        {question.answers[2]}
                                    </div>
                                    <div className="rectangle">
                                        {question.answers[3]}
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