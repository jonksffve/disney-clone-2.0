import classes from './modules/home.module.css';
import { Link } from 'react-router-dom';

const MovieContainer = ({ title, movies }) => {
	return (
		<section className={classes['movie-container']}>
			<h4>{title}</h4>
			<div className={classes['movie-content']}>
				{movies.map((movie) => {
					return (
						<div
							className={classes.linkwrap}
							key={movie.id}
						>
							<Link to={movie.id}>
								<img
									src={movie.cardImg}
									alt=''
								/>
							</Link>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default MovieContainer;
