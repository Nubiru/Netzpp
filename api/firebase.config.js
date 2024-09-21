// Import the functions you need from the SDKs you need
// const { initializeApp } = require("firebase/app");
import {} from 'dotenv/config'
import { initializeApp } from 'firebase/app'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {}

// Initialize Firebase
const store = initializeApp(firebaseConfig)
// Initialize Cloud Firestore and get a reference to the service

export default store
