import React from 'react';
import './Card.css';



class Card extends React.Component {
  handleDeleteClick = (e) => {
    this.props.onDeleteCard(this.props.id, this.props.listId)
  }
  render() {
    console.log(this.props)
    return (
      <div id={this.props.id} className='Card'>
        <h3>{this.props.title}</h3>
        <p>
          {this.props.content}
          <button onClick={this.handleDeleteClick}>delete</button>
        </p>

      </div>
    );
  }
}

export default Card;
