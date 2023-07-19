import React from 'react';

const LandingPage = (props) => {
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

export default LandingPage