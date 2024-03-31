import { auth } from "./firebase";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  updatePassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password);
}

export const doSignInWithEmailAndPassword = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};

export const doSignOut = async () => {
  auth.signOut();
};

export const doPasswordReset = async (email) => {
  sendPasswordResetEmail(auth, email, { url: `${window.location.origin}/login` });
};

export const doPasswordChange = async (password) => {
  await updatePassword(auth.currentUser, password);
};

export const doSendEmailVerification = async () => {
  await sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`,
  });
};
