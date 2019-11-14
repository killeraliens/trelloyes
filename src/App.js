import React from 'react';
import List from './components/List';
import './App.css';
import STORE from './store.js';

const newRandomCard = () => {
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
}

// function removeCardFromAllCardsObj(cardId, allCardsObj) {
//   const newObj = {};
//   Object.keys(allCardsObj).forEach(key => {
//     if (key !== cardId) {
//       newObj[key] = allCardsObj[key];
//     }
//   })
//   return newObj;
// }

function removeCardFromAllCardsObj(cardId, allCardsObj) {
    console.log(Object.entries(allCardsObj));
    // const newAllCardsObj = Object.entries(allCardsObj).reduce((newObj, [key, val]) => {
    //   console.log();
    //   newObj[key] = val ;
    //   return newObj;
    // }); //creates weird array
    const newAllCardsObj = {};
    Object.entries(allCardsObj).forEach(([key, val]) => {
      if (key !== cardId) {
        newAllCardsObj[key] = val
      }
    })
    console.log('new all cards object...', {newAllCardsObj});
    return newAllCardsObj;
}

// function omit(obj, keyToOmit) {
//   return Object.entries(obj).reduce(
//     (newObj, [key, value]) => {
//      if (key === keyToOmit) {
//       console.log('new object', {newObj});
//       return newObj
//      } else {
//       console.log('new object', {newObj});
//       // return {...newObj, [key]: value}, {}
//      }

//     //     key === keyToOmit ? newObj : {...newObj, [key]: value},
//     // {}
//   });
// }

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      store: STORE
    }
  }



  handleDeleteCard = (cardId, listId) => {
    const newLists = this.state.store.lists.map(list => {
        list.cardIds = list.cardIds.filter(id => id !== cardId)
        return list
    });

    const newAllCards = removeCardFromAllCardsObj(cardId, this.state.store.allCards);

    this.setState({
      store: {
        allCards: newAllCards,
        lists: newLists
      }
    });
  }


  handleAddCard = (listId) => {
    const newCard = newRandomCard();
    const newLists = this.state.store.lists.map(list => {
      if (list.id === listId) {
        list.cardIds.push(newCard.id);
      }
      return list
    });
    const newAllCards = this.state.store.allCards;
    newAllCards[newCard.id] = newCard;
    this.setState({
      store: {
        allCards: newAllCards,
        lists: newLists
      }
    })
  }

  render() {
    console.log(this.state.store);
    const allCards = this.state.store.allCards;
    const listComponentArr = this.state.store.lists.map(list => {
      // console.log(list);
      const cardArr = list.cardIds.map(id => allCards[id]);
      return <List
        key={list.id}
        id={list.id}
        header={list.header}
        cards={cardArr}
        onDeleteCard={this.handleDeleteCard}
        onAddCard={this.handleAddCard}
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
