import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-VrNA90R3pCy7mpq6StE4HR9xJkgq2RE",
  authDomain: "muneeb-event-management.firebaseapp.com",
  projectId: "muneeb-event-management",
  storageBucket: "muneeb-event-management.firebasestorage.app",
  messagingSenderId: "502133453459",
  appId: "1:502133453459:web:a50b6da697fa0f7c555366",
  measurementId: "G-Y7QPNMBHKK"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };