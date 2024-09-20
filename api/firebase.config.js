// Import the functions you need from the SDKs you need
// const { initializeApp } = require("firebase/app");
import {} from 'dotenv/config'
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAhqow3XU6o3E0sEf0prXi1G5YMklqDTFE',
  authDomain: 'accountancy-581b4.firebaseapp.com',
  projectId: 'accountancy-581b4',
  storageBucket: 'accountancy-581b4.appspot.com',
  messagingSenderId: '171291212684',
  appId: '1:171291212684:web:0a92f4941236347858b4a9',
  port: '3500'
}

// Initialize Firebase
const store = initializeApp(firebaseConfig)

export default store
