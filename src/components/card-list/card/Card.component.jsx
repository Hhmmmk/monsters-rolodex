// import React, { Component } from 'react';

import './Card.styles.css'


const Card = ({monster }) => {
  const { name, email, id } = monster;
  return (
    <div className='card-container'>
      <img src={`https://robohash.org/${id}?set=set4&size=350x350`} alt='monster' />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  )
}


// class Card extends Component {
//   render() {
//     const { name, email, id } = this.props.monster;
//     return (
//       <div className='card-container'>
//         <img src={`https://robohash.org/${id}?set=set4&size=350x350`} alt='monster' />
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     )
//   }
// }

export default Card;