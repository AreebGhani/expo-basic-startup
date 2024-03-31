import { storage } from "./firebase";
import { v4 as uuid } from "uuid";
import {
    getDownloadURL,
    ref as storageRef,
    uploadBytes,
    deleteObject
} from "firebase/storage";

export const uploadFile = async (file) => {
    if (!file) {
        return null;
    }
    const imageRef = storageRef(storage, `files/${uuid()}`);
    try {
        const snapshot = await uploadBytes(imageRef, file);
        const downloadUrl = await getDownloadURL(snapshot.ref);
        return downloadUrl;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const deleteFile = async (url) => {
    try {
        const ref = storageRef(storage, url);
        const deleted = await deleteObject(ref);
        return deleted;
    } catch (error) {
        throw new Error(error.message);
    }
};
