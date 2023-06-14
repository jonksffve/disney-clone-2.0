import classes from '../components/modules/home.module.css';
import ImageCarousel from '../components/ImageCarousel';

const HomeView = () => {
	return (
		<div>
			<ImageCarousel />
			{/* <ImageSlider />
			<Viewers />
			<Recommends movies={movies.recommend} />
			<NewDisney movies={movies.newDisney} />
			<Originals movies={movies.original} />
			<Trending movies={movies.trending} /> */}
		</div>
	);
};

export default HomeView;
