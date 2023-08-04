import React from 'react'

interface Props{
    value: string,
    onSquareClick: () => void
}

function Square({ value,onSquareClick }: Props) {

  function getImage(){
    if(value === 'Denji'){
      return <img className='Denji' src="src/images/X.jpg" alt="" />
    }
    else if(value === 'Power'){
      return <img className='Power' src="src/images/O.jpg" alt="" />
    }
  }
    return (
      <button className="square" onClick={onSquareClick}>
        {getImage()}
      </button>
    );
  }

export default Square