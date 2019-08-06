import React from 'react';
import './App.css';
import List from './components/List';

function makeCardArr(cardIdArr, allCards) {
    return cardIdArr.map(id => allCards[id]);
}

function App(props) {
  console.log(props.store)
  const allCards = props.store.allCards;
  const listComponentArr = props.store.lists.map(list => {
    return <List key={list.id} header={list.header} cards={makeCardArr(list.cardIds, allCards)}></List>
  });
  return (
    <div className="App-List" >
      {listComponentArr}
    </div>
  );
}

export default App;
