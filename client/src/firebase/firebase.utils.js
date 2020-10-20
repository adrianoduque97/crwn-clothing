import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyBnQ62bKTnFqyR_SWvXCTwvqVCi3Xu7xHU",
    authDomain: "crwn-clothing-db-3ecec.firebaseapp.com",
    databaseURL: "https://crwn-clothing-db-3ecec.firebaseio.com",
    projectId: "crwn-clothing-db-3ecec",
    storageBucket: "crwn-clothing-db-3ecec.appspot.com",
    messagingSenderId: "9941383676",
    appId: "1:9941383676:web:7f21813389c80437329a79",
    measurementId: "G-P628ZLCXHZ"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) =>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await  userRef.get()

    if(!snapShot.exists){
      const {displayName, email} = userAuth
      const createdAt = new Date()

      try{
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })

      }catch(e){
        console.log(e.message)

      }

    }
    return userRef
  }


export const addCollectionAndDocuments= async (collectionKey, objectsToAdd) =>{
  const collectionRef = firestore.collection(collectionKey)

  const batch = firestore.batch()
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef,obj)
  })

  await batch.commit()
}

export const convertCollectionSnapshotToMap=(collection)=>{
  const transformedCollection = collection.docs.map(doc =>{
    const {title, items} = doc.data();
    return{
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  })

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()]= collection;
    return accumulator
  },{})
}

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()


const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account '})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
