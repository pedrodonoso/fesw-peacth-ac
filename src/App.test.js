import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import calculoService from './services/calculo.service';
import formulaService from './services/formula.service';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});