import { useState } from 'react';
import './Home.css'

const Home = () => {
    const [isQuizStarted, setIsQuizStarted] = useState(false);
    
    function handleStartingQuiz() {
        setIsQuizStarted(true)
    }

    let view
    if(!isQuizStarted) {
        view = <LandingPage startQuiz={handleStartingQuiz}/>;
    } else {
        view = <div>Quiz is started <b>{isQuizStarted.toString()}</b></div>
    }

    return (
        <div>
            {view}
        </div>
    )
    
}

function LandingPage(props) {
    return (
        <div className="intro-page">
            <div className="blob-top">
                <div className="blob-top-5"></div>
            </div>
            <header className="quizzical-title">
                <span className="quizzical-txt">Quizzical</span>
                <span className="quizzical-desc">Some description if needed</span>
                <button className="btn-start-quiz" onClick={props.startQuiz}>
                    Start quiz
                </button>
            </header>
            <div className="blob-bottom">
                <div className="blob-bottom-5"></div>
            </div>
        </div>
    )
}

export default Home