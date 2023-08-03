import React from 'react'

interface Props{
    value: string,
    onSquareClick: () => void
}

function Square({ value,onSquareClick }: Props) {
    return (
      <button className="square" onClick={onSquareClick}>
        {value}
      </button>
    );
  }

export default Square