// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.VITE_API_KEY,
	authDomain: import.meta.env.VITE_API_DOMAIN,
	projectId: import.meta.env.VITE_API_PROJECTID,
	storageBucket: import.meta.env.VITE_API_STORAGE,
	messagingSenderId: import.meta.env.VITE_API_MESSAGING,
	appId: import.meta.env.VITE_API_APPID,
};

// Initialize Firebase APP
const app = initializeApp(firebaseConfig);
// Initialize Auth helpers
const auth = getAuth(app);
// This is the database connection
const firestore = getFirestore(app);

export { app, auth, firestore };
