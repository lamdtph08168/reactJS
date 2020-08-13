import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyCyojtgawv17SHV8O1YZD0aj16NuS1sOLA",
    authDomain: "fir-react-upload-3e638.firebaseapp.com",
    databaseURL: "https://fir-react-upload-3e638.firebaseio.com",
    projectId: "fir-react-upload-3e638",
    storageBucket: "fir-react-upload-3e638.appspot.com",
    messagingSenderId: "940976151078",
    appId: "1:940976151078:web:2e22d73d430226182e64e7",
    measurementId: "G-M5VLMEWXJH"
};
// Initialize Firebase
firebase.initializeApp(config);

export default firebase