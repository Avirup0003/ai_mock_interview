// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCvLpcCIYWp554LXxexGV-qXjYpa2cf6ZY",
    authDomain: "acementor-b0711.firebaseapp.com",
    projectId: "acementor-b0711",
    storageBucket: "acementor-b0711.firebasestorage.app",
    messagingSenderId: "469384353458",
    appId: "1:469384353458:web:e70cacc52e5e7815d41bab",
    measurementId: "G-2NHFR5K9VW"
};

// Initialize Firebase
const app =!getApps.length ? initializeApp(firebaseConfig) : getApps();

export const auth = getAuth(app);
export const db = getFirestore(app);