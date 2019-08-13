import React from 'react';
import './List.css';
import Card from './Card';


class List extends React.Component {
  handleClickAddCard = (e) => {
    this.props.onAddCard(this.props.id);
  }

  render() {
    if(this.props.cards) {
      const cardsArr = this.props.cards.map(card => <Card
        key={card.id}
        id={card.id}
        listId={this.props.id}
        title={card.title}
        content={card.content}
        onDeleteCard={this.props.onDeleteCard}
      />)
      return (
        <section id={this.props.id} className='List'>
          <header className='List-header'><h2>{this.props.header}</h2></header>
          <div className='List-cards'>{cardsArr}</div>
          <button type='button' onClick={this.handleClickAddCard}>Add random card</button>
        </section>
      );
    } else {
      return null;
    }
  }
}


export default List;
