import React from 'react';
import './Card.css';



class Card extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div id={this.props.id} className='Card'>
        <h3>{this.props.title}</h3>
        <p>
          {this.props.content}
          <button>delete</button>
        </p>

      </div>
    );
  }
}

export default Card;
