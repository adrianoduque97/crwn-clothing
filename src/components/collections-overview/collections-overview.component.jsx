import React from 'react'
import  {connect}  from "react-redux"
import {selectShopCollections} from '../../redux/shop/shop.selector'
import CollectionPreview from '../../components/preview-collection/collection-preview.component'
import './collections-overview.styles.scss'

const CollectionsOverview = ({collections}) => (
    <div className='collections-overview'>
         {
                    collections.map(({id,...otherSectionProps }) => (
                        <CollectionPreview key={id} {...otherSectionProps}></CollectionPreview>

                    ))
        }
    </div>
)

const mapStateToProps = (state) => (
    {
        collections: selectShopCollections(state)
    }
)

export default connect(mapStateToProps)(CollectionsOverview)