// Firebase App is always required and must be first
import * as firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCHvskleHLxIjrjU2XAQh2yiqaadQX2KVU",
  authDomain: "victor-2019.firebaseapp.com",
  databaseURL: "https://victor-2019.firebaseio.com",
  projectId: "victor-2019",
  storageBucket: "victor-2019.appspot.com",
  messagingSenderId: "949864728415"
}

let init = firebase.initializeApp(config)

export const fb = init.firebase_
export const db = fb.firestore(init);
export const fs = fb.storage(init);

