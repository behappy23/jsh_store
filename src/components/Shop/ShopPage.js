import React from 'react'

import ShopData from './ShopData.js'

import Clothes from './Clothes.js'

class ShopPage extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      collections: ShopData
    }
  }

  render () {
    const { collections } = this.state
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...otherClothesProps }) => (
          <Clothes key={id} {...otherClothesProps} />
        ))}
      </div>
    )
  }
}

export default ShopPage
