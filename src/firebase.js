import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCfzpuXXvsKCYltiPfj8lmGmNz0M7hTi4c",
  authDomain: "tiktok-clone-4ebd9.firebaseapp.com",
  databaseURL: "https://tiktok-clone-4ebd9.firebaseio.com",
  projectId: "tiktok-clone-4ebd9",
  storageBucket: "tiktok-clone-4ebd9.appspot.com",
  messagingSenderId: "885352542212",
  appId: "1:885352542212:web:a2b7f10ec75d04f13d8551",
  measurementId: "G-YJRYEKLCXB",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
