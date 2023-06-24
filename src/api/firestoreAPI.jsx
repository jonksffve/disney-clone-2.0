import { firestore } from '../helpers/firebaseConfig';
import { collection, getDocs, getDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { toastOptions } from '../helpers/toastConfig';

const dbRef = collection(firestore, 'movies');

// export const fillData = async () => {
// 	try {
// 		for (const movie of movieData) {
// 			const {
// 				backgroundImg,
// 				cardImg,
// 				description,
// 				subTitle,
// 				title,
// 				titleImg,
// 				type,
// 			} = movie;

// 			await addDoc(dbRef, {
// 				backgroundImg,
// 				cardImg,
// 				description,
// 				subTitle,
// 				title,
// 				titleImg,
// 				type,
// 			});
// 		}
// 	} catch (error) {
// 		console.log(error);
// 	}
// };

/**
 * Retrieves all movies from firebase
 *
 * @returns {arrayData} list of movies
 */
export const getMovies = async () => {
	try {
		const response = await getDocs(dbRef);
		const arrayData = response.docs.map((doc) => {
			return {
				...doc.data(),
				id: doc.id,
			};
		});
		return arrayData;
	} catch (error) {
		toast.error(
			'Something happened, trying to fetch movies.',
			toastOptions
		);
	}
};

/**
 * Retrieves a single movie based of an id
 *
 *
 * @param {string} id, unique identifier for the movie
 * @returns {response.data()} object containing movie detail data
 */
export const getMovie = async (id) => {
	try {
		const docRef = doc(dbRef, id);
		const response = await getDoc(docRef);
		if (response.exists()) {
			return response.data();
		}
		return new Error('Document does not exist!');
	} catch (error) {
		toast.error(
			'Something happened, trying to fetch that movie.',
			toastOptions
		);
	}
};
