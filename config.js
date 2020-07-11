import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyCmNDeFAFf51nBd297Kbw0Q3DBxZNm8uds",
  authDomain: "book-santa-c2dc9.firebaseapp.com",
  databaseURL: "https://book-santa-c2dc9.firebaseio.com",
  projectId: "book-santa-c2dc9",
  storageBucket: "book-santa-c2dc9.appspot.com",
  messagingSenderId: "167209569647",
  appId: "1:167209569647:web:630b7459e139b53466ac9a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
