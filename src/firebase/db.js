import { db } from "./firebase";
import { getDocs, collection, doc, deleteDoc, updateDoc, addDoc } from "firebase/firestore";

export const getData = async (collectionName) => {
    return await getDocs(collection(db, collectionName))
        .then((querySnapshot) => querySnapshot.docs
            .map((doc) => ({ ...doc.data(), id: doc.id }))
        )
}

export const addItem = async (collectionName, data) => {
    return await addDoc(collection(db, collectionName), data);
};

export const updateItem = async (collectionName, uid, data) => {
    const itemRef = doc(db, collectionName, uid);
    return await updateDoc(itemRef, data);
};

export const deleteItem = async (collectionName, uid) => {
    const itemRef = doc(db, collectionName, uid);
    return await deleteDoc(itemRef);
};
