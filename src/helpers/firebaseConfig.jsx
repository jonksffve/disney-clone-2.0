// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

/**
 * APP and services provided by Firebase in order to use backend functionality
 *
 * @returns {app} firebase link to the current application
 * @returns {auth} Authentication services
 * @returns {firestore} Database services
 * @see https://firebase.google.com/docs/web/setup#available-libraries
 */
const firebaseConfig = {
	apiKey: 'AIzaSyDpg3ssxqr5zk3UK_fjJX8no3dZao-dUnk',
	authDomain: 'disney-clone-58485.firebaseapp.com',
	projectId: 'disney-clone-58485',
	storageBucket: 'disney-clone-58485.appspot.com',
	messagingSenderId: '787466964223',
	appId: '1:787466964223:web:ae3948004969030b99d0ca',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

export { app, auth, firestore };
