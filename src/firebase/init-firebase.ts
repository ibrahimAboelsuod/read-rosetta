import { FirebaseApp, getApps, initializeApp } from 'firebase/app';
import { Firestore, getFirestore } from 'firebase/firestore';

const FirebaseCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

export var firebaseApp: FirebaseApp;
export var firestoreDB: Firestore;

export function initFirebase() {
  // if a Firebase instance doesn't exist, create one
  if (!getApps()?.length) {
    firebaseApp = initializeApp(FirebaseCredentials);
    firestoreDB = getFirestore(firebaseApp);
  }
}
