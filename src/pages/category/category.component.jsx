import React from 'react'

import Collectionitem from '../../components/collection-item/collection-item.component'
import './category.styles.scss'

const CategoryPage = ({match}) => (
    <div className="category">
        <h2>{match.params.categoryId}</h2>
    </div>
)

export default CategoryPage