import React from 'react'

const ButtonCard = ({changeAll, changeColor}) => {

  const styleButton ={
    color: changeColor
  }

  return (
    <div>
      <button onClick={changeAll} >
        <i className="fa-solid fa-arrow-right" style={styleButton}></i>
      </button>
    </div>
  );
}

export default ButtonCard