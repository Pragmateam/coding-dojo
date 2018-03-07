import React from 'react';
import ReactDOM from 'react-dom';
import BerlinClock from './berlin-clock';

ReactDOM.render(<BerlinClock date={new Date('2018-03-07T12:00:00.000Z')} />, document.getElementById('root'));
