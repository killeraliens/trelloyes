import React from 'react';
// import './Card.css';



class Card extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div className='Card'>
        <h3>{this.props.title}</h3>
        <p>{this.props.content}</p>
      </div>
    );
  }
}

export default Card;
