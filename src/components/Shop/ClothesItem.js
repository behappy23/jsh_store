import React from 'react'

// import './collection-item.styles.scss';

const ClothesItem = ({ id, name, price, imageUrl }) => (
  <div className='clothes-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='clothes-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
  </div>
)

export default ClothesItem
