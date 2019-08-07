import React from 'react';
import './List.css';
import Card from './Card';


class List extends React.Component {
  render() {
    // console.log('Using a List class component!');
    // console.log(this.props);
    const cardsArr = this.props.cards.map(card => <Card key={card.id} id={card.id} title={card.title} content={card.content} />)
    return (
      <section id={this.props.id} className='List'>
        <header className='List-header'><h2>{this.props.header}</h2></header>
        <div className='List-cards'>{cardsArr}</div>
      </section>
    );
  }
}


export default List;
