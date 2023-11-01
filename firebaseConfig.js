import { initializeApp } from 'firebase/app';
import {
    getFirestore,
    collection,
    addDoc,
    updateDoc,
    doc,
    getDocs,
    deleteDoc
} from "firebase/firestore";
import firebase from 'firebase/compat/app'

const firebaseConfig = {
    apiKey: "AIzaSyDlXlR1i0en6F-LmoakpZLSAcScfj2Udd8",
    authDomain: "reactn-firebase-76b45.firebaseapp.com",
    projectId: "reactn-firebase-76b45",
    storageBucket: "reactn-firebase-76b45.appspot.com",
    messagingSenderId: "56027170615",
    appId: "1:56027170615:web:90644eac5815f15f4f3cb2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db,
    collection,
    addDoc,
    updateDoc,
    doc,
    getDocs,
    deleteDoc
}