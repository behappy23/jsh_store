import React from 'react'

import ClothesItem from './ClothesItem.js'

import './ClothesStyles.scss'

const Clothes = ({ title, items }) => (
  <div className='clothes'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <ClothesItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
)

export default Clothes
