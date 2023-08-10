import React from 'react';
import ReactDOM from 'react-dom';
import AddTask from './AddTask';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddTask />, div);
  ReactDOM.unmountComponentAtNode(div);
});