import firebase from "firebase/app";

import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCRBhp8zqHrotL6op4X8uqWYrr41jDgnBM",
  authDomain: "letmeask-47b7b.firebaseapp.com",
  databaseURL: "https://letmeask-47b7b-default-rtdb.firebaseio.com",
  projectId: "letmeask-47b7b",
  storageBucket: "letmeask-47b7b.appspot.com",
  messagingSenderId: "324210055883",
  appId: "1:324210055883:web:7084c15a2d379846ccd94e",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const database = firebase.database();
