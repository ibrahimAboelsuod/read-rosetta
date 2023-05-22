import Firebase from 'firebase/app';

const FirebaseCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
};

export default function initFirebase() {
  // if a Firebase instance doesn't exist, create one
  if (!Firebase.getApps().length) {
    Firebase.initializeApp(FirebaseCredentials);
  }
}
