import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyBa_t2NMlcnXfmDN1pq1UeZABXm0NSxwcY",
  authDomain: "expo-basic-startup.firebaseapp.com",
  projectId: "expo-basic-startup",
  storageBucket: "expo-basic-startup.appspot.com",
  messagingSenderId: "1045084862665",
  appId: "1:1045084862665:web:da340305ccb5d6a9ca3518"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
