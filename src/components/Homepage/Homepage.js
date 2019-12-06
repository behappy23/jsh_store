
import React from 'react'

import MenuItem from './MenuItem.js'

import './homepage.styles.scss'

class Directory extends React.Component {
  constructor () {
    super()

    this.state = {
      sections: [
        {
          title: 'jeans',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1,
          linkUrl: 'jeans'
        },
        {
          title: 'shirts',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2,
          linkUrl: 'shirts'
        },
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3,
          linkUrl: 'hats'
        }

      ]
    }
  }

  render () {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    )
  }
}

export default Directory
