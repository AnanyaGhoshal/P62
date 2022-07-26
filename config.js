 import  firebase from 'firebase';

 const firebaseConfig = {
  apiKey: "AIzaSyBbi0QmErCmNdmjqz3O2qws5vnn1PIYF1o",
  authDomain: "attendence-app-f0340.firebaseapp.com",
  databaseURL: "https://attendence-app-f0340-default-rtdb.firebaseio.com",
  projectId: "attendence-app-f0340",
  storageBucket: "attendence-app-f0340.appspot.com",
  messagingSenderId: "633207850028",
  appId: "1:633207850028:web:a03ee605c67cd69aa77d89"
};


 firebase.initializeApp(firebaseConfig);
  export default firebase.database();
 

  