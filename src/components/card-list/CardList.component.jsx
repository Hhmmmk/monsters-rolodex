// import React, {Component} from 'react';

import Card from './card/Card.component';

import './CardList.styles.css';


const CardList = ({monsters}) => {
  return (
    <div className='card-list'>
      {monsters.map((monster) => {
        return <Card monster={monster} key={monster.id}/>
      })}
    </div>
  )
}

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;
    
//     return(
      
//       <div className='card-list'>
//         {monsters.map((monster) => {
//           return <Card monster={monster} key={monster.id}/>
//         })}
//       </div>
//     );
//   }
// }


export default CardList;