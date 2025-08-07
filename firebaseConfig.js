// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "TUMHARA_API_KEY",
  authDomain: "TUMHARA_AUTH_DOMAIN",
  projectId: "TUMHARA_PROJECT_ID",
  storageBucket: "TUMHARA_BUCKET",
  messagingSenderId: "TUMHARA_SENDER_ID",
  appId: "TUMHARA_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
