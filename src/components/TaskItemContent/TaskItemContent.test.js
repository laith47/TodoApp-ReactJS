import React from 'react';
import ReactDOM from 'react-dom';
import TaskItemContent from './TaskItemContent';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<TaskItemContent />, div);
  ReactDOM.unmountComponentAtNode(div);
});