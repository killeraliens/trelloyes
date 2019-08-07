import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';
import STORE from '../store.js';
import returnCardArr from '../App';

describe('List component', () => {

  it('renders List component', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('does not render List component if cards prop null', () => {
    const tree = renderer.create(<List key='1' id='1' header='a header' cards={null} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders List component UI as expected with cards', () => {
    const tree = renderer.create(<List key='1' id='1' header='a header' cards={[STORE.allCards['a']]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders List component UI as expected with empty cards array', () => {
    const tree = renderer.create(<List key='1' id='1' header='a header' cards={[]} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

})
