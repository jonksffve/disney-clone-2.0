import ImageCarousel from '../components/ImageCarousel';
import Viewers from '../components/Viewers';
import { useEffect } from 'react';
import { getMovies } from '../api/firestoreAPI';
import Recommends from '../components/MovieContainer';
import NewDisney from '../components/MovieContainer';
import Originals from '../components/MovieContainer';
import Trending from '../components/MovieContainer';
import { useDispatch, useSelector } from 'react-redux';
import { moviesActions } from '../store/movies-slice';

const HomeView = () => {
	const dispatch = useDispatch();
	const movies = useSelector((state) => state.movies);

	useEffect(() => {
		const fetchMovies = async () => {
			const response = await getMovies();
			const recommends = response.filter(
				(movie) => movie.type === 'recommend'
			);
			const newDisney = response.filter((movie) => movie.type === 'new');
			const originals = response.filter(
				(movie) => movie.type === 'original'
			);
			const trending = response.filter(
				(movie) => movie.type === 'trending'
			);
			dispatch(
				moviesActions.setupMovies({
					recommends,
					newDisney,
					originals,
					trending,
				})
			);
		};

		fetchMovies();
	}, [dispatch]);

	return (
		<div>
			<ImageCarousel />
			<Viewers />
			<Recommends
				title='Recommended for you'
				movies={movies.recommends}
			/>
			<NewDisney
				title='New to disney+'
				movies={movies.newDisney}
			/>
			<Originals
				title='Disney+ originals'
				movies={movies.originals}
			/>
			<Trending
				title='This is trending right now'
				movies={movies.trending}
			/>
		</div>
	);
};

export default HomeView;
