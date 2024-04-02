import './App.css';
import Description from './components/Description/Description';
import Feedback from './components/Feedback/Feedback';
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

  return (
    <>
      <Description />
      <Options buttons={buttons} updateFeedback={updateFeedback} />
      <Feedback state={state} />
    </>
  );
}

export default App;
