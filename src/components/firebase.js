import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC9N4FwK1Ia6ki2xKzuLAy9mTYnF_WF4uw",
  authDomain: "classroom-clone-91faf.firebaseapp.com",
  projectId: "classroom-clone-91faf",
  storageBucket: "classroom-clone-91faf.appspot.com",
  messagingSenderId: "801878795132",
  appId: "1:801878795132:web:51eaa1f33357030c84baf9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
export default firebase;