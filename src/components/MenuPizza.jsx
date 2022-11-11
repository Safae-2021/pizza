import React from 'react'
import axios from 'axios'
import Item from './Item'

const MenuPizza = ({data}) => {
  return (
    <div className='row'>
      <div className='d-flex flex-wrap align-items-strech justify-content-around'>
      {
        data.map((item, index) => <Item key={index} objData={item}/> )
      }
      </div>
      
    </div>
  )
}

export default MenuPizza