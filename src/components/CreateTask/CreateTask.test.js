import React from 'react';
import ReactDOM from 'react-dom';
import CreateTask from './CreateTask';

it('should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CreateTask />, div);
  ReactDOM.unmountComponentAtNode(div);
});