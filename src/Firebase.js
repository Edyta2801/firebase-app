import firebase from 'firebase';
const config = {
    apiKey: "AIzaSyDCg590r1u_J8fIl0D_YbH-fdXdvCQ94bI",
    authDomain: "monday-482dc.firebaseapp.com",
    databaseURL: "https://monday-482dc.firebaseio.com",
    projectId: "monday-482dc",
    storageBucket: "monday-482dc.appspot.com",
    messagingSenderId: "583867079334"
  };

const firebaseApp = firebase.initializeApp(config);
export const database = firebaseApp.database();