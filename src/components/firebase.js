// Import the functions you need from the SDKs you need

import { date } from "date-arithmetic";
import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyA9Ro_Mc_Nuewn15U65vS9oFEHi5Xy3u9c",

  authDomain: "kepet-8513d.firebaseapp.com",

  databaseURL: "https://kepet-8513d-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "kepet-8513d",

  storageBucket: "kepet-8513d.appspot.com",

  messagingSenderId: "917038946383",

  appId: "1:917038946383:web:2966da74ad9852c1b6b23a"

};


// Initialize Firebase

firebase.initializeApp(firebaseConfig);
const databaseRef = firebase.database().ref()

export const eventsRef = databaseRef.child("kepet")
export default firebase