import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyBGPmo__Thn2wWnwTow5vN3ThbTWrid36g",
  authDomain: "react-slack-clone-fb5d5.firebaseapp.com",
  databaseURL: "https://react-slack-clone-fb5d5.firebaseio.com",
  projectId: "react-slack-clone-fb5d5",
  storageBucket: "react-slack-clone-fb5d5.appspot.com",
  messagingSenderId: "892364116537",
  appId: "1:892364116537:web:16b2f9155eee29d181b3e8",
  measurementId: "G-C1QTQHPV1Z",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
