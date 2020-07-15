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

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const firestore = firebase.firestore()


const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account '})

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase