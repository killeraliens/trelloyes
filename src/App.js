import React from 'react';
import List from './components/List';
import TheDate from './state/TheDate';
import Counter from './state/Counter';
import './App.css';




function App(props) {
  console.log(props.store)
  const allCards = props.store.allCards;
  const listComponentArr = props.store.lists.map(list => {
    console.log(list);
    const cardArr = list.cardIds.map(id => allCards[id]);
    return <List key={list.id} id={list.id} header={list.header} cards={cardArr} />
  });
  return (
    <div className="App" >
      <header className="App-header">
        <h1>trelloyes</h1>
        <TheDate />
        <Counter count={666} step={6}/>
      </header>
      <main className="App-list">
        {listComponentArr}
      </main>
    </div>
  );
}

// export cardArr;
export default App;
