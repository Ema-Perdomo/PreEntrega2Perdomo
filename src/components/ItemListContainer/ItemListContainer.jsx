import React from 'react'

const ItemListContainer = ({greeting}) => {
  return (
    <div>
      <h3 className='d-flex justify-content-center mt-2'>{greeting}</h3>
    </div>
  )
}

export default ItemListContainer
