
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'
import {GoogleAuthProvider, getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA_KGMZiEa0HhxqlZOWn_-cieNZxSh20Hg",
  authDomain: "shopper-app-ec0c9.firebaseapp.com",
  projectId: "shopper-app-ec0c9",
  storageBucket: "shopper-app-ec0c9.appspot.com",
  messagingSenderId: "939858871810",
  appId: "1:939858871810:web:301be503338c55d34a091b"
};

//  connect the react to firebase
export const app = firebase.initializeApp(firebaseConfig); 

// connect the react to firestore
export const myDB=  firebase.firestore()

// connect the auth to react 
export const auth= getAuth(app) 

// connect the react to google auth 
export const googleProvider= new GoogleAuthProvider()