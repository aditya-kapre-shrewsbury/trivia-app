import { useState } from 'react';
import './Home.css'
import LandingPage from '../LandingPage/LandingPage';

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

export default Home