import React, {useEffect} from 'react'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'
import {selectIsCollectionFetching, selectIsCollectionLoaded} from '../../redux/shop/shop.selector'
import WithSpinner from '../../HOC/with-spinner/with-spinner.component'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({match, isFetching, isLoaded, fetchCollectionsStartAsync}) =>{
 
    useEffect(()=>{
        fetchCollectionsStartAsync()
    },[fetchCollectionsStartAsync])


        return(
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props)=> <CollectionsOverviewWithSpinner isLoading={isFetching} {...props}/>}/>
                <Route  path = {`${match.path}/:collectionId`}  render={(props)=> <CollectionPageWithSpinner isLoading={!isLoaded} {...props}/>}/>
            </div>
        )
}

const mapStateToProps = createStructuredSelector({
    isFetching: selectIsCollectionFetching,
    isLoaded: selectIsCollectionLoaded
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: ()=> dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage)