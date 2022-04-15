import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCkzuLefV8v1ydT6mQ3NIojJD9K13oQh-s",
    authDomain: "pizza-mod.firebaseapp.com",
    projectId: "pizza-mod",
    storageBucket: "pizza-mod.appspot.com",
    messagingSenderId: "326290831337",
    appId: "1:326290831337:web:b4e7fb587c825abc387d78"
};

initializeApp(firebaseConfig)

const db = getFirestore()

export { db }