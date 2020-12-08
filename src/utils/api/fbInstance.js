import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCv9pe2OvDOecD9PlvxtVBWg1YFJLq4yvE',
  authDomain: 'dangguen-market.firebaseapp.com',
  databaseURL: 'https://dangguen-market.firebaseio.com',
  projectId: 'dangguen-market',
  storageBucket: 'dangguen-market.appspot.com',
  messagingSenderId: '960591568960',
  appId: '1:960591568960:web:5e46e0b86d1c3e6a987fa5',
  measurementId: 'G-JC54NGCVTD',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
