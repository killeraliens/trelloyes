import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';

describe('Card component', () => {

  it('renders Card component', ()=>{
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders to the UI as expected', ()=> {
    const tree = renderer.create(<Card key='a' id='a' title='card title' content='some content' />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});

