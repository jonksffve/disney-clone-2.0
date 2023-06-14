// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.API_KEY,
	authDomain: import.meta.env.API_DOMAIN,
	projectId: import.meta.env.API_PROJECTID,
	storageBucket: import.meta.env.API_STORAGE,
	messagingSenderId: import.meta.env.API_MESSAGING,
	appId: import.meta.env.API_APPID,
};

// Initialize Firebase APP
const app = initializeApp(firebaseConfig);
// Initialize Auth helpers
const auth = getAuth(app);
// This is the database connection
const firestore = getFirestore(app);

export { app, auth, firestore };
