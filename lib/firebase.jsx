import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAMMUwJzNwLK0og-ny7A2rAiR2YXQzeUS0",
  authDomain: "quillquest-43510.firebaseapp.com",
  projectId: "quillquest-43510",
  storageBucket: "quillquest-43510.appspot.com",
  messagingSenderId: "841158968310",
  appId: "1:841158968310:web:a6951bc41058964760fdd7",
  measurementId: "G-7Z2EW98QN1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      getAnalytics(app);
    }
  });
}

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
