import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD_Lwo-4CryRK6CZim08euhF95ZHAGMbm4",
  authDomain: "crwn-db-92fb6.firebaseapp.com",
  databaseURL: "https://crwn-db-92fb6.firebaseio.com",
  projectId: "crwn-db-92fb6",
  storageBucket: "",
  messagingSenderId: "520892449766",
  appId: "1:520892449766:web:202e51605663ea96"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
