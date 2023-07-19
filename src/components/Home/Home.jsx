import React from 'react';
import { useState } from 'react'
import './Home.css'
import LandingPage from '../LandingPage/LandingPage'
import QuizPage from '../QuizPage/QuizPage'

const Home = () => {
    const [isQuizStarted, setIsQuizStarted] = useState(false)
    
    function handleStartingQuiz() {
        setIsQuizStarted(true)
    }

    let view
    if(!isQuizStarted) {
        view = <LandingPage startQuiz={handleStartingQuiz}/>
    } else {
        console.log("Rendering Quizpage")
        view = <QuizPage />
    }

    return (
        <div>
            {view}
        </div>
    )
    
}

export default Home