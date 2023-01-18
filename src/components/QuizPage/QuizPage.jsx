import { useEffect, useState } from "react"

const QuizPage = () => {

    const [questions, setQuestions] = useState([])

    useEffect(() => {
        console.log('About to make API call to trivia')
        async function getTriviaQuestionsAndAnswers() {
            const res = await fetch("https://the-trivia-api.com/api/questions")
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
        <div>
            {
                JSON.stringify(parseQuestions(), null, 2)
            }
        </div>
    )
}

export default QuizPage