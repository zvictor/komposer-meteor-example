import React from 'react';
import {composeWithTracker} from 'react-komposer';
import Time from '../components/time.jsx';

const composerFunction = (props, onData) => {
  const handle = setInterval(() => {
    const time = (props.timestamp)? Date.now() : (new Date()).toString();
    onData(null, {time});
  }, 1000);

  const cleanup = () => clearInterval(handle);
  return cleanup;
};

// Note the use of composeWithTracker
const Clock = composeWithTracker(composerFunction)(Time);
export default Clock;
