import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../helpers/firebaseConfig';
import { toast } from 'react-toastify';
import { toastOptions } from '../helpers/toastConfig';

/**
 * Lets you authenticate an user using google account
 *
 * @returns {response} user authentication information
 */
export const signInGoogle = async () => {
	try {
		const provider = new GoogleAuthProvider();
		const response = await signInWithPopup(auth, provider);
		toast.success('Welcome to disney+ clone.', toastOptions);
		return response;
	} catch (error) {
		toast.error('We could not log you in, sorry.', toastOptions);
	}
};

/**
 * Lets you log an user out
 *
 */
export const logoutUser = async () => {
	try {
		await signOut(auth);
		toast.success('Goodbye, hope to see you soon.', toastOptions);
	} catch (error) {
		toast.error('We could not log you out, sorry.', toastOptions);
	}
};
