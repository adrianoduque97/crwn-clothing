import React from 'react'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {firestore, convertCollectionSnapshotToMap} from '../../firebase/firebase.utils'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'
import { updateCollections } from '../../redux/shop/shop.actions'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selector'

class ShopPage extends React.Component{

    unsuscribedFromSnapshot = null;

    componentDidMount(){
        const {updateCollections} = this.props
        const collectionRef = firestore.collection('collections')

        this.unsuscribedFromSnapshot = collectionRef.onSnapshot(async snapshot =>{
            console.log("HEEERE")
            console.log(snapshot)
           const collectionsMap = convertCollectionSnapshotToMap(snapshot)
           updateCollections(collectionsMap)
        })
    }

    render(){
        const {match} = this.props
        return(
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionsOverview}/>
                <Route  path = {`${match.path}/:collectionId`}  component={CollectionPage}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage)