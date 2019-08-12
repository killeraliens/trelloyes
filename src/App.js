import React from 'react';
import List from './components/List';
import './App.css';
import STORE from './store.js';



class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      store: STORE
    }
  }

  handleDeleteCard = (cardId, listId) => {
    console.log(cardId, listId);
    const newLists = this.state.store.lists.map(list => {
      if (list.id === listId) {
        list.cardIds = list.cardIds.filter(id => id !== cardId)
      }
      return list
    });
    this.setState({
      store: {
        allCards: STORE.allCards,
        lists: newLists
      }
    });
  }

  render() {
    console.log(this.state.store);
    const allCards = this.state.store.allCards;
    const listComponentArr = this.state.store.lists.map(list => {
      console.log(list);
      const cardArr = list.cardIds.map(id => allCards[id]);
      return <List
        key={list.id}
        id={list.id}
        header={list.header}
        cards={cardArr}
        onDeleteCard={this.handleDeleteCard}
      />
    });

    return (
      <div className="App" >
        <header className="App-header">
          <h1>trelloyes</h1>
        </header>
        <main className="App-list">
          {listComponentArr}
        </main>
      </div>
    );

  }
}

// export cardArr;
export default App;
