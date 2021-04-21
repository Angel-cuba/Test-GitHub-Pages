//import React from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'

  var firebaseConfig = {
    apiKey: "AIzaSyBESPs8SBCVaWDb2YevCH3UEw4oZO0Aa9Y",
    authDomain: "astral-depth-297307.firebaseapp.com",
    projectId: "astral-depth-297307",
    storageBucket: "astral-depth-297307.appspot.com",
    messagingSenderId: "235103642996",
    appId: "1:235103642996:web:cc117345f919dbea463821"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export {firebase};