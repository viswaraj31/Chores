import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAykv1RYiMd6iMLmwGthnnbcxUHJUSdQ3o",
  authDomain: "i-hate-chores.firebaseapp.com",
  databaseURL: "https://i-hate-chores-default-rtdb.firebaseio.com",
  projectId: "i-hate-chores",
  storageBucket: "i-hate-chores.appspot.com",
  messagingSenderId: "984583471037",
  appId: "1:984583471037:web:9e1b09c684ad0f2b961cd4"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
  export default firebaseConfig 