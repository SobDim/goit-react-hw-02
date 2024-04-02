import './App.css';
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
import Notification from './components/Notification/Notification';
import Options from './components/Options/Options';

import { useState } from 'react';

function App() {
  const buttons = ['good', 'neutral', 'bad'];
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const updateFeedback = feedbackType => {
    setState(prev => ({ ...prev, [feedbackType]: prev[feedbackType] + 1 }));
  };

  const totalFeedback = state.good + state.neutral + state.bad;

  return (
    <>
      <Description />
      <Options buttons={buttons} updateFeedback={updateFeedback} />
      {totalFeedback ? <Feedback state={state} /> : <Notification />}
    </>
  );
}

export default App;
