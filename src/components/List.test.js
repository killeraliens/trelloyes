import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';
import STORE from '../store.js';

describe('List component', () => {

  it('renders List component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  // it('renders List component UI as expected', () => {
  //   const tree = renderer.create(<List key='a' id='a' header='a header' cards={returnCardArr(list.cardIds, allCards)} />).toJSON();
  // })
})
