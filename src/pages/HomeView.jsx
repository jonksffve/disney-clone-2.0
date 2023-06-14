import classes from '../components/modules/home.module.css';
import ImageCarousel from '../components/ImageCarousel';
import Viewers from '../components/Viewers';
import { useEffect } from 'react';
import { getMovies } from '../api/firestoreAPI';

const HomeView = () => {
	useEffect(() => {
		const fetchMovies = async () => {
			const movies = await getMovies();
			console.log(movies);
		};

		fetchMovies();
	}, []);

	return (
		<div>
			<ImageCarousel />
			<Viewers />
			{/* <ImageSlider />
			<Viewers />
			<Recommends data={movies.recommend} title={}  />
			<NewDisney movies={movies.newDisney} />
			<Originals movies={movies.original} />
			<Trending movies={movies.trending} /> */}
		</div>
	);
};

export default HomeView;
