import React from 'react'

const ButtonCard = ({letterStyle, quotesStyle,clickStyle}) => {

  const styleButton ={
    color: letterStyle
  }

  return (
    <div>
      <button onClick={clickStyle}>
        <i className="fa-solid fa-arrow-right" style={styleButton}></i>
      </button>
    </div>
  )
}

export default ButtonCard