import * as firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqs8esJ_xGcwmaVhdGrQndBxtTMPFYujc",
  authDomain: "where-s-waldo-2dd2f.firebaseapp.com",
  projectId: "where-s-waldo-2dd2f",
  storageBucket: "where-s-waldo-2dd2f.appspot.com",
  messagingSenderId: "70988581152",
  appId: "1:70988581152:web:1368f798750ead73116f45"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
export const db = firebase.firestore();