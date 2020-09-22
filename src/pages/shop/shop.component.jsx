import React from 'react'
import {Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {firestore, convertCollectionSnapshotToMap} from '../../firebase/firebase.utils'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'
import { updateCollections } from '../../redux/shop/shop.actions'
import WithSpinner from '../../HOC/with-spinner/with-spinner.component'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component{

    state ={
        loading: true
    }
     
    unsuscribedFromSnapshot = null;

    componentDidMount(){
        const {updateCollections} = this.props
        const collectionRef = firestore.collection('collections')

        //Biilt in with fetch
        // fetch("https://firestore.googleapis.com/v1/projects/crwn-clothing-db-3ecec/databases/(default)/documents/collections")
        //     .then( response => response.json()).then(collection => console.log(collection))

        // Built in like promise
        collectionRef.get().then(snapshot =>{
               const collectionsMap = convertCollectionSnapshotToMap(snapshot)
               updateCollections(collectionsMap)
               this.setState({loading:false})
        })

        // Built in from FIREBASE

        // this.unsuscribedFromSnapshot = collectionRef.onSnapshot(async snapshot =>{
        //    const collectionsMap = convertCollectionSnapshotToMap(snapshot)
        //    updateCollections(collectionsMap)
        //    this.setState({loading:false})
        // })
    }

    render(){
        const {match} = this.props
        const {loading} = this.state
        return(
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props)=> <CollectionsOverviewWithSpinner isLoading={loading} {...props}/>}/>
                <Route  path = {`${match.path}/:collectionId`}  render={(props)=> <CollectionPageWithSpinner isLoading={loading} {...props}/>}/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(ShopPage)