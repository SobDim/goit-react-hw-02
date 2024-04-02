import './App.css';
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
import Options from './components/Options/Options';

import { useState, useEffect } from 'react';

function App() {
  const buttons = ['good', 'neutral', 'bad'];
  const [state, setState] = useState(() => {
    const savedState = window.localStorage.getItem('feedbackState');
    if (savedState !== null) {
      return JSON.parse(savedState);
    }
    return { good: 0, neutral: 0, bad: 0 };
  });
  // const [state, setState] = useState({
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // });
  const totalFeedback = state.good + state.neutral + state.bad;
  const positiveFeedback = Math.round((state.good / totalFeedback) * 100);

  const updateFeedback = feedbackType => {
    setState(prev => ({ ...prev, [feedbackType]: prev[feedbackType] + 1 }));
  };

  // useEffect(() => {
  //   const savedState = localStorage.getItem('feedbackState');
  //   if (savedState) {
  //     setState(JSON.parse(savedState));
  //   }
  // }, []);

  useEffect(() => {
    window.localStorage.setItem('feedbackState', JSON.stringify(state));
  }, [state]);

  const resetFeedback = () => {
    setState({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <>
      <Description />
      <Options
        buttons={buttons}
        update={updateFeedback}
        reset={resetFeedback}
      />
      {/* {totalFeedback ? <Feedback state={state} /> : <Notification />} */}
      <Feedback
        state={state}
        totalFeedback={totalFeedback}
        positive={positiveFeedback}
      />
    </>
  );
}

export default App;
