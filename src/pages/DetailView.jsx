import { useParams } from 'react-router';
import classes from '../components/modules/detail.module.css';
import { useEffect, useState } from 'react';
import { getMovie } from '../api/firestoreAPI';
import { BsPlay, BsPlayFill } from 'react-icons/bs';

const DetailView = () => {
	const [movie, setMovie] = useState({});
	const { id } = useParams();

	useEffect(() => {
		const fetchData = async () => {
			const response = await getMovie(id);
			console.log(response);
			setMovie(response);
		};

		fetchData();
	}, [id]);

	return (
		<div className={classes.container}>
			<div className={classes.background}>
				<img
					src={movie.backgroundImg}
					alt=''
				/>
			</div>
			<div className={classes['image-title']}>
				<img
					src={movie.titleImg}
					alt=''
				/>
			</div>
			<div className={classes.content}>
				<div className={classes.controls}>
					<button className={classes.btn}>
						<BsPlayFill />
						<span>Play</span>
					</button>

					<button className={classes['btn-trailer']}>
						<BsPlay />
						<span>Trailer</span>
					</button>
				</div>

				<div className={classes.subtitle}>{movie.subTitle}</div>
				<div className={classes.description}>{movie.description}</div>
			</div>
		</div>
	);
};

export default DetailView;
