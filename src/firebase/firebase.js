import firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDL2VGtzCR9uBdZHTI1OSOUSoXvyjHDRC4",
    authDomain: "time4good-64169.firebaseapp.com",
    databaseURL: "https://time4good-64169.firebaseio.com",
    projectId: "time4good-64169",
    storageBucket: "time4good-64169.appspot.com",
    messagingSenderId: "818981614330"
};

firebase.initializeApp(config);

var db = firebase.database();
var auth = firebase.auth();

export { db, auth };