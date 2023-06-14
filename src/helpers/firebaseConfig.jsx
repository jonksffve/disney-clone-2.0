// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDpg3ssxqr5zk3UK_fjJX8no3dZao-dUnk',
	authDomain: 'disney-clone-58485.firebaseapp.com',
	projectId: 'disney-clone-58485',
	storageBucket: 'disney-clone-58485.appspot.com',
	messagingSenderId: '787466964223',
	appId: '1:787466964223:web:ae3948004969030b99d0ca',
};

// Initialize Firebase APP
const app = initializeApp(firebaseConfig);
// Initialize Auth helpers
const auth = getAuth(app);
// This is the database connection
const firestore = getFirestore(app);

export { app, auth, firestore };
