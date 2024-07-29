import React from 'react'
import './TitleItem.css'

const TitleItem = (props) => {
  return (
    <div className='title-item'>
        <h2>{props.subtitle}</h2>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        

      
    </div>
  )
}

export default TitleItem
