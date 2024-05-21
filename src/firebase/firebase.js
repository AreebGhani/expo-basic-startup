import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCoVh4x9iZPa6dpbb2rWe5VA-VI8blAZck",
  authDomain: "fir-login-7850e.firebaseapp.com",
  projectId: "fir-login-7850e",
  storageBucket: "fir-login-7850e.appspot.com",
  messagingSenderId: "821043753777",
  appId: "1:821043753777:web:047a534885a1ca7ff77610",
  measurementId: "G-R23LVD8XXW",
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
