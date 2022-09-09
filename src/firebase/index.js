import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyC2GwKb4UW5MeNe1oaSmGOCSluv952utBQ",
  authDomain: "motorsport-events-5b7de.firebaseapp.com",
  projectId: "motorsport-events-5b7de",
  storageBucket: "motorsport-events-5b7de.appspot.com",
  messagingSenderId: "615348678928",
  appId: "1:615348678928:web:e3a95a4be45d3caca87595"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
