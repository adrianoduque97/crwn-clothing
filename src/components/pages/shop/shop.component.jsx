import React, { Component } from 'react'
import SHOP_DATA from './shop.data'
import CollectionPreview from '../../preview-collection/collection-preview.component'

class ShopPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        return (
            <div>
                {
                    this.state.collections.map(({id,...otherSectionProps }) => (
                        <CollectionPreview key={id} {...otherSectionProps}></CollectionPreview>

                    ))
                }
            </div>

        )

    }
}

export default ShopPage