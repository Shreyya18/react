import './App.css'
import { useState } from 'react';
const products=[
  {title:'Cabbage',id:1},
  {title:'Carrot',id:2},
  {title:'Potato',id:3},
];

function MyButton() {
  const[count,setCount]=useState(0);
  const listItems=products.map(product=>
    <li 
      key={product.id}
      style={
        {color:'pink'}
      }
    >{product.title}</li>

  );
    function handleClick(){
      alert("You Clicked Me!!");
      setCount(count+1);
    }
  return (
    <>
    <ul>{listItems}</ul>
    <button onClick={handleClick}>Clicked {count} times</button>
    </>
  )
}

export default MyButton
